<template>
  <section class="section" :id="id">
    <h2>Built-In Styles</h2>
    <div class="section-body">
      <div class="section-showcase">
        <Calendar
          :date="date"
          @select-day="onSelectDay"
        />
      </div>
      <div class="section-desc">
        <!-- eslint-disable -->
        <p>By default, the component <b>DOES NOT</b> come with any styles dependency or inline styling, it's intentionally so that you can easily to style it your own to suit your website design.</p>
        <p>However, you can use the built-in styles directly if you want to.</p>
        <!-- eslint-enable -->
        <div v-highlight>
          <pre><code class="js">{{ js }}</code></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Calendar from '@/Calendar.vue';

export default {
  name: 'DemoCalendar',
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
  computed: {
    js() {
      return `
import 'vlite-calendar/dist/vlite-calendar-style.min.css';
      `.trim();
    },
  },
  methods: {
    onSelectDay({ day }) {
      this.date = day;
    },
  },
};
</script>
