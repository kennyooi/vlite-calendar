<template>
  <div class="datepicker">
    <input
      type="text"
      class="datepicker-input"
      :value="displayDate"
      @focus="isShow = true"
    />
    <div
      v-if="isShow"
      class="datepicker-popup"
    >
      <div
        class="datepicker-popup-overlay"
        @click="isShow = false"
      />
      <Calendar
        class="datepicker-popup-calendar"
        :date="value"
        @select-day="onSelectDay"
      />
    </div>
  </div>
</template>

<script>
import Calendar from '@/../../src/Calendar.vue';

export default {
  name: 'DatePickerInput',
  components: {
    Calendar,
  },
  props: {
    value: { type: Date, default: () => new Date() },
  },
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    displayDate() {
      return this.value.toLocaleString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    },
  },
  methods: {
    onSelectDay({ day }) {
      this.isShow = false;
      this.$emit('input', day);
    },
  },
};
</script>

<style lang="less" scoped>
.datepicker-input{
  display: inline-block;
  border: 1px solid #ddd;
  background-color: #fff;
  padding: .5rem 1rem;
  font-size: 1rem;
  font-family: inherit;
  line-height: inherit;
  width: 100%;
  color: inherit;
  &:focus{
    outline: none;
    border-color: #42b983;
  }
}
</style>
