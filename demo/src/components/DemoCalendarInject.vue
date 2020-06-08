<template>
  <section class="section" :id="id">
    <h2>Custom DOM Injection <small>(Vue Slots)</small></h2>
    <div class="section-body">
      <div class="section-showcase">
        <Calendar
          :date="date"
          @select-day="onSelectDay"
        >
          <div slot="prepend">
            <div class="prepend-wrap">
              <button
                type="button"
                class="prepend-btn"
                @click="onClickDate(0)"
              >
                Today
              </button>
              <button
                type="button"
                class="prepend-btn"
                @click="onClickDate(1)"
              >
                Tomorrow
              </button>
              <button
                type="button"
                class="prepend-btn"
                @click="onClickDate(7)"
              >
                Next Week
              </button>
            </div>
          </div>
          <div slot="append">
            <div class="append-wrap">
              <span>Selected date: </span>
              <b>{{ displayDate }}</b>
            </div>
          </div>
        </Calendar>
      </div>
      <div class="section-desc">
        <!-- eslint-disable -->
        <p>The component provided 2 Vue slots for custom DOM injection.</p>
        <p>Slot: <code>prepend</code>, <code>append</code>.</p>
        <CodeHighlighter lang="html" :text="html" />
        <!-- eslint-enable -->
      </div>
    </div>
  </section>
</template>

<script>
import Calendar from '@/../../src/Calendar.vue';
import CodeHighlighter from './CodeHighlighter.vue';

export default {
  name: 'DemoCalendarInject',
  components: {
    Calendar,
    CodeHighlighter,
  },
  props: {
    id: { type: String, default: '' },
  },
  data() {
    return {
      date: new Date(),
    };
  },
  computed: {
    html() {
      return `
<Calendar>
  <slot slot="prepend">
    ...
  </slot>
  <slot slot="append">
    ...
  </slot>
</Calendar>
      `.trim();
    },
    displayDate() {
      return this.date.toLocaleString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    },
  },
  methods: {
    onSelectDay({ day }) {
      this.date = day;
    },
    onClickDate(inc) {
      const newDate = new Date();
      newDate.setDate(newDate.getDate() + inc);
      this.date = newDate;
    },
  },
};
</script>

<style lang="less" scoped>
.prepend-wrap{
  display: flex;
  justify-content: space-between;
  margin-bottom: .5rem;
}
.prepend-btn{
  display: inline-block;
  background: transparent;
  border: 1px solid #42b983;
  color: #42b983;
  font-size: .875rem;
  padding: .25rem .5rem;
  cursor: pointer;
  &:hover{
    background-color: fade(#42b983, 10%);
  }
}
.append-wrap{
  font-size: 0.9rem;
  padding: .5rem 1rem;
  color: #42b983;
}
</style>
