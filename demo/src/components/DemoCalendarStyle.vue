<template>
  <section class="section" :id="id">
    <h2>Custom Styles</h2>
    <div class="section-body">
      <div class="section-showcase">
        <Calendar
          class-prefix="calendar"
          :date="date"
          @select-day="onSelectDay"
        />
      </div>
      <div class="section-desc">
        <p>Example of custom styling.</p>
        <p>Refer to repository's <a href="https://github.com/kennyooi/vlite-calendar/tree/master/demo/src/components/DatePicker">/demo/src/components/DemoCalendarStyle.vue</a> for sample code.</p>
      </div>
    </div>
  </section>
</template>

<script>
import Calendar from '@/../../src/Calendar.vue';

export default {
  name: 'DemoCalendarStyle',
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
  },
};
</script>

<style lang="less" scoped>
/deep/ .calendar{
  display: inline-block;
  font-size: 1rem;
  color: #fff;
  background-color: #15161d;
  text-align: center;
  user-select: none;
  padding: .75em;
  &-row{
    display: flex;
    > *{
      flex: 1;
    }
  }
  // header
  &-caption,
  &-prev,
  &-next{
    display: block;
    font-weight: 700;
    cursor: pointer;
    color: inherit;
    border-radius: .25em;
    transition: background .15s;
    &:hover{
      background-color: #33333d;
    }
  }
  &-caption{
    text-align: left;
    padding: 0 .25em;
    flex-grow: 1;
  }
  &-prev,
  &-next{
    flex: 0 0 2em;
    height: 2em;
    text-indent: -9999px;
  }
  &-prev{
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='576' height='2048' viewBox='64 0 576 2048'><path fill='%23fff' d='M640 576v896c0 17.33-6.33 32.33-19 45s-27.67 19-45 19-32.33-6.33-45-19L83 1069c-12.67-12.67-19-27.67-19-45s6.33-32.33 19-45l448-448c12.67-12.67 27.67-19 45-19s32.33 6.33 45 19 19 27.67 19 45z'/></svg>") no-repeat center;
    background-size: contain;
  }
  &-next{
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='576' height='2048' viewBox='0 0 576 2048'><path fill='%23fff' d='M576 1024c0 17.33-6.33 32.33-19 45l-448 448c-12.67 12.67-27.67 19-45 19s-32.33-6.33-45-19-19-27.67-19-45V576c0-17.33 6.33-32.33 19-45s27.67-19 45-19 32.33 6.33 45 19l448 448c12.67 12.67 19 27.67 19 45z'/></svg>") no-repeat center;
    background-size: contain;
  }
  // body
  &-week{
    color: #97a4ba;
    font-size: .5em;
    text-transform: uppercase;
    padding: .5em 0;
  }
  &-day,
  &-month,
  &-year{
    cursor: pointer;
    span{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1em;
      width: 2em;
      height: 2em;
      margin: .15em;
      border-radius: .25em;
      background-color: #33333d;
      transition: background .15s;
    }
    &:hover{
      span{
        background-color: #42b983;
      }
    }
  }
  &-month,
  &-year{
    span{
      width: 2em * 7 / 4;
      height: 2em * 7 / 4;
    }
  }
  // states
  &--out{
    pointer-events: none;
    opacity: 0;
  }
  &--today{
    font-weight: 700;
  }
  &--current{
    span{
      background-color: #42b983;
      color: #33333d;
      font-weight: 700;
      &:hover{
        background-color: #42b983;
      }
    }
  }
  &--invalid{
    opacity: .35;
    pointer-events: none;
  }
}
</style>
