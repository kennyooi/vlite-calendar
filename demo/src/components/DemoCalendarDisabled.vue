<template>
  <section class="section" :id="id">
    <h2>Disable Dates <small>(Min / Max / Group)</small></h2>
    <div class="section-body">
      <div class="section-showcase">
        <Calendar
          :date="date"
          :process-date="onProcessDate"
          @select-day="onSelectDay"
        />
      </div>
      <div class="section-desc">
        <!-- eslint-disable -->
        <p>In term of flexibility, the component doesn't come with built-in disabled dates checking, such as min, max or group of disabled dates.</p>
        <p>Yet, it will let you to handle them through <code>processDate</code> prop so that you will have better control of it.</p>
        <CodeHighlighter lang="html" :text="html" />
        <CodeHighlighter lang="js" :text="js" />
        <p>Read the <a href="https://github.com/kennyooi/vlite-calendar#vdate-object-guide">Documentation</a> for more information of <code>vdate</code> object.</p>
        <!-- eslint-enable -->
      </div>
    </div>
  </section>
</template>

<script>
import { isBefore, isAfter } from 'date-fns';
import Calendar from '@/../../src/Calendar.vue';
import CodeHighlighter from './CodeHighlighter.vue';

export default {
  name: 'DemoCalendarDisabled',
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
    js() {
      return `
onProcessDate(vdate) {
  // example of min & max implementation
  const today = new Date();
  const min = new Date(today);
  const max = new Date(today);
  max.setDate(max.getDate() + 7);

  // isBefore is date-fns method
  if (isBefore(vdate.day, min)) {
    vdate.isInvalid = true;
  }
  // isAfter is date-fns method
  else if (isAfter(vdate.day, max)) {
    vdate.isInvalid = true;
  }
  // or other disabled dates checking
  // ...

  // remember to return the final vdate object
  return vdate;
},
      `.trim();
    },
    html() {
      return `
<Calendar
  ...
  :process-date="onProcessDate"
/>
      `.trim();
    },
  },
  methods: {
    onSelectDay({ day }) {
      this.date = day;
    },
    onProcessDate(vdate) {
      const today = new Date();
      const min = new Date(today);
      const max = new Date(today);
      max.setDate(max.getDate() + 7);

      const newDate = { ...vdate };
      if (isBefore(newDate.day, min)) {
        newDate.isInvalid = true;
      } else if (isAfter(newDate.day, max)) {
        newDate.isInvalid = true;
      }
      return newDate;
    },
  },
};
</script>
