<template>
  <div :class="classPrefix">
    <slot name="prepend" />
    <header :class="`${classPrefix}-header`">
      <nav :class="`${classPrefix}-row`">
        <div
          :class="`${classPrefix}-caption`"
          @click.prevent="onViewClick"
        >
          {{ currentView.caption }}
        </div>
        <a
          :class="`${classPrefix}-prev`"
          @click.prevent="onDateChange(-1)"
        >
          &lt;
        </a>
        <a
          :class="`${classPrefix}-next`"
          @click.prevent="onDateChange(1)"
        >
          &gt;
        </a>
      </nav>
    </header>
    <div :class="`${classPrefix}-body`">
      <div
        v-for="(row, index) in currentView.items"
        :key="index"
        :class="`${classPrefix}-row`"
      >
        <div
          v-for="item in row"
          :key="item.key"
          :class="[item.classes, {
            [`${classPrefix}--out`]: item.isOut,
            [`${classPrefix}--today`]: item.isToday,
            [`${classPrefix}--current`]: item.isCurrent,
            [`${classPrefix}--invalid`]: item.isInvalid,
          }]"
          @click="!item.isStatic ? onSelect(item) : null"
          @mouseover="!item.isStatic && enableMouseListener ? $emit('mouseover-item', item, $event) : null"
          @mouseleave="!item.isStatic && enableMouseListener ? $emit('mouseleave-item', item, $event) : null"
        >
          <span>{{ item.display }}</span>
        </div>
      </div>
    </div>
    <slot name="append" />
  </div>
</template>

<script>
import {
  getTime,
  startOfDecade, endOfDecade,
  startOfYear, endOfYear,
  startOfMonth, endOfMonth,
  startOfWeek, endOfWeek,
  isToday, isSameDay, isSameMonth, isSameYear, isBefore, isAfter,
  addDays, addMonths, addYears,
  eachDayOfInterval, eachWeekOfInterval, eachMonthOfInterval, eachYearOfInterval,
} from 'date-fns/esm';

export default {
  name: 'Calendar',
  props: {
    date: { type: Date, default: () => new Date() },
    calendarDate: { type: Date },
    classPrefix: { type: String, default: 'vl-calendar' },
    weekStart: { type: Number, default: 0 },
    views: { type: Array, default: () => ['days', 'months', 'years'] },
    enableMouseListener: { type: Boolean, default: false },
    processDate: { type: Function, default: (date) => date },
  },
  data() {
    return {
      viewDate: this.calendarDate ? new Date(this.calendarDate.getTime()) : new Date(this.date.getTime()),
      viewType: this.views[0],
    };
  },
  computed: {
    currentView() {
      if (this.viewType === 'years') {
        return {
          items: this.years,
          caption: [
            this.dformat(startOfDecade(this.viewDate), 'yyyy'),
            this.dformat(endOfDecade(this.viewDate), 'yyyy'),
          ].join('-'),
          monthsInc: 12 * 10,
        };
      }
      if (this.viewType === 'months') {
        return {
          items: this.months,
          caption: this.dformat(this.viewDate, 'yyyy'),
          monthsInc: 12,
        };
      }
      return {
        items: [this.weeks].concat(this.days),
        caption: this.dformat(this.viewDate, 'MMMM yyyy'),
        monthsInc: 1,
      };
    },
    weeks() {
      return eachDayOfInterval({
        start: startOfWeek(this.viewDate, { weekStartsOn: this.weekStart }),
        end: endOfWeek(this.viewDate, { weekStartsOn: this.weekStart }),
      }).map((day) => ({
        key: getTime(day),
        display: this.dformat(day, 'iiiiii'),
        classes: `${this.classPrefix}-week`,
        isStatic: true,
      }));
    },
    days() {
      const monthWeeks = eachWeekOfInterval({
        start: startOfMonth(this.viewDate),
        end: endOfMonth(this.viewDate),
      }, { weekStartsOn: this.weekStart });
      // always show 6 weeks per month
      for (let i = monthWeeks.length; i < 6; i += 1) {
        monthWeeks.push(addDays(monthWeeks[i - 1], 7));
      }

      return monthWeeks.map((weekDay) => eachDayOfInterval({
        start: startOfWeek(weekDay, { weekStartsOn: this.weekStart }),
        end: endOfWeek(weekDay, { weekStartsOn: this.weekStart }),
      }).map((day) => this.processDate({
        day,
        key: getTime(day),
        type: 'day',
        viewDay: this.viewDate,
        display: this.dformat(day, 'd'),
        classes: `${this.classPrefix}-day`,
        isToday: isToday(day),
        isCurrent: isSameDay(day, this.date),
        isOut: !isSameMonth(day, this.viewDate),
      })));
    },
    months() {
      const dataset = eachMonthOfInterval({
        start: startOfYear(this.viewDate),
        end: endOfYear(this.viewDate),
      });
      return dataset.reduce((acc, day, index) => {
        const group = Math.floor(index / 4);
        if (!acc[group]) {
          acc[group] = [];
        }
        acc[group].push(this.processDate({
          day,
          key: getTime(day),
          type: 'month',
          viewDay: this.viewDate,
          display: this.dformat(day, 'MMM'),
          classes: `${this.classPrefix}-month`,
          isCurrent: isSameMonth(day, this.date),
        }));
        return acc;
      }, []);
    },
    years() {
      const decadeStart = startOfDecade(this.viewDate);
      const decadeEnd = endOfDecade(this.viewDate);
      // sum up to 12 items
      const dataset = eachYearOfInterval({
        start: addYears(decadeStart, -1),
        end: addYears(decadeEnd, 1),
      });
      return dataset.reduce((acc, day, index) => {
        const group = Math.floor(index / 4);
        if (!acc[group]) {
          acc[group] = [];
        }
        acc[group].push(this.processDate({
          day,
          key: getTime(day),
          type: 'year',
          viewDay: this.viewDate,
          display: this.dformat(day, 'yyyy'),
          classes: `${this.classPrefix}-year`,
          isCurrent: isSameYear(day, this.date),
          isOut: isBefore(day, decadeStart) || isAfter(day, decadeEnd),
        }));
        return acc;
      }, []);
    },
  },
  watch: {
    calendarDate(newVal) {
      if (newVal && !isSameDay(newVal, this.viewDate)) {
        this.viewDate = new Date(newVal.getTime());
      }
    },
  },
  methods: {
    // using own date formatter for smaller pack size
    dformat(date, format) {
      let opt = {};
      if (format === 'yyyy') {
        opt = { year: 'numeric' };
      } else if (format === 'MMMM yyyy') {
        opt = { year: 'numeric', month: 'long' };
      } else if (format === 'MMM') {
        opt = { month: 'short' };
      } else if (format === 'iiiiii') {
        opt = { weekday: 'short' };
      } else if (format === 'd') {
        opt = { day: 'numeric' };
      }
      return date.toLocaleString(undefined, opt);
    },
    changeView(isUpward = false) {
      const order = [...this.views];
      order.sort();
      const curr = order.indexOf(this.viewType);
      const next = order[curr + (1 * isUpward ? 1 : -1)];
      if (next) {
        this.viewType = next;
        this.$emit('change-view', this.viewType);
      }
    },
    onViewClick() {
      this.changeView(true);
    },
    onDateChange(inc) {
      this.viewDate = addMonths(this.viewDate, inc * this.currentView.monthsInc);
    },
    onSelect(date) {
      this.$emit(`select-${this.viewType.slice(0, -1)}`, { vdate: date, day: date.day });
      this.viewDate = date.day;
      this.changeView();
    },
  },
};
</script>
