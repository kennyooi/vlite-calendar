<template>
  <section class="section" :id="id">
    <h2>Bare Component <small>(with minimal styling)</small></h2>
    <div class="section-body">
      <div class="section-showcase">
        <Calendar
          class-name="vl-bare"
          :date="date"
          @select-day="onSelectDay"
        />
      </div>
      <div class="section-desc">
        <!-- eslint-disable -->
        <p>In most case, you might want to have your own theme of styling, below are the basic styling setup for you to start with.</p>
        <div v-highlight>
          <pre><code class="css">{{ css }}</code></pre>
        </div>
        <p>Read the <a href="#">Styles Guide</a> for more information.</p>
        <!-- eslint-enable -->
      </div>
    </div>
  </section>
</template>

<script>
import Calendar from '@/Calendar.vue';

export default {
  name: 'DemoCalendarBare',
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
    css() {
      return `
.vl-calendar {
  width: 100%;
  text-align: center;
}
.vl-calendar-row {
  display: flex;
}
.vl-calendar-row > * {
  flex: 1;
}
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

<style lang="less" scoped>
/deep/ .vl-bare{
  width: 100%;
  text-align: center;
  &-row{
    display: flex;
    > *{
      flex: 1;
    }
  }
}
</style>
