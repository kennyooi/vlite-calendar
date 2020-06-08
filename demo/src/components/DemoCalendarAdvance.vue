<template>
  <section class="section" :id="id">
    <h2>More Customization...</h2>
    <div class="section-body">
      <div class="section-showcase">
        <Calendar
          :date="date"
          :views="['days']"
          :week-start="1"
          :process-date="onProcessDate"
          @select-day="onSelectDay"
        />
      </div>
      <div class="section-desc">
        <!-- eslint-disable -->
        <p>Other than setting the disabled dates, you can modify the <code>date</code> object property through <code>processDate</code> method, like injecting custom CSS class on certain date, changing the display name, and etc.</p>
        <p>Read the <a href="https://github.com/kennyooi/vlite-calendar#vdate-object-guide">Documentation</a> for more information of <code>vdate</code> object.</p>
        <!-- eslint-enable -->
      </div>
    </div>
  </section>
</template>

<script>
import { isWeekend, isFirstDayOfMonth, isLastDayOfMonth } from 'date-fns';
import Calendar from '@/../../src/Calendar.vue';

export default {
  name: 'DemoCalendarAdvace',
  components: {
    Calendar,
  },
  props: {
    id: { type: String, default: '' },
  },
  data() {
    return {
      date: new Date(),
    };
  },
  methods: {
    onSelectDay({ day }) {
      this.date = day;
    },
    onProcessDate(vdate) {
      const newDate = { ...vdate };
      if (newDate.type === 'day') {
        if (isWeekend(newDate.day)) {
          newDate.classes += ' c-weekend';
        }
        if (isFirstDayOfMonth(newDate.day)) {
          newDate.display = 'Fi';
        } else if (isLastDayOfMonth(newDate.day)) {
          newDate.display = 'La';
        }
      }
      return newDate;
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .c-weekend{
  color: #e83e8c;
  font-weight: 700;
}
</style>
