<template>
  <section class="section" :id="id">
    <h2>DatePicker <small>(build your own)</small></h2>
    <div class="section-body">
      <div class="section-showcase">
        <div class="form-group">
          <DatePickerInput v-model="date" />
        </div>
        <div class="form-group">
          <DatePickerToggle v-model="date" />
        </div>
      </div>
      <div class="section-desc">
        <!-- eslint-disable -->
        <p>Again, to keep the component lightweight, flexible and customizable, it <b>DOES NOT</b> include any <code>&lt;input&gt;</code> tag or events for datepicker input.</p>
        <p>However, you can easily build your own datepicker component with desired styling and behavior.</p>
        <p>Refer to repository's folder <a href="#">/demo/src/components/DatePicker/</a> for sample code.</p>
        <!-- eslint-enable -->
      </div>
    </div>
  </section>
</template>

<script>
import DatePickerInput from './DatePicker/DatePickerInput.vue';
import DatePickerToggle from './DatePicker/DatePickerToggle.vue';

export default {
  name: 'DemoDatePicker',
  components: {
    DatePickerInput,
    DatePickerToggle,
  },
  props: {
    id: { type: String, default: '' },
  },
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<style lang="less" scoped>
.form-group{
  margin: 1.5rem 0;
}

// shared
/deep/ .datepicker{
  position: relative;
  &-popup{
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 99;
    &-overlay{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    &-calendar{
      position: relative;
      z-index: 1;
    }
  }
}
</style>
