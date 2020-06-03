<template>
  <div id="app">
    <header class="header">
      <div class="header-wrap">
        <h1>VLite Calendar Demo</h1>
        <h2>Flexible and lightweight Vue calendar component.</h2>
      </div>
      <div class="ver">v {{ appVer }}</div>
    </header>
    <div class="body">
      <div class="body-wrap">
        <nav class="sidebar">
          <ul class="sidebar-wrap" id="ScrollSpy">
            <li>
              <label>DEMO</label>
            </li>
            <li
              v-for="nav in navs"
              :key="nav.id"
            >
              <a
                :href="nav.link"
                :class="{ __active: nav.id === currSpy }"
              >
                {{ nav.name }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="content">
          <div class="content-wrap">
            <DemoCalendar id="demo" />
            <DemoCalendarBare id="bare" />
            <DemoCalendarDisabled id="disable" />
            <DemoDatePicker id="datepicker" />
            <DemoCalendarInject id="slots" />
            <DemoCalendarAdvance id="advance" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { version } from '@/../package.json';
import DemoCalendar from './components/DemoCalendar.vue';
import DemoCalendarBare from './components/DemoCalendarBare.vue';
import DemoCalendarDisabled from './components/DemoCalendarDisabled.vue';
import DemoDatePicker from './components/DemoDatePicker.vue';
import DemoCalendarInject from './components/DemoCalendarInject.vue';
import DemoCalendarAdvance from './components/DemoCalendarAdvance.vue';

export default {
  name: 'App',
  components: {
    DemoCalendar,
    DemoCalendarBare,
    DemoCalendarDisabled,
    DemoDatePicker,
    DemoCalendarInject,
    DemoCalendarAdvance,
  },
  data() {
    return {
      currSpy: 'demo',
    };
  },
  computed: {
    appVer() {
      return version;
    },
    navs() {
      return [
        {
          id: 'demo',
          name: 'Built-In Styles',
          link: '#demo',
        },
        {
          id: 'bare',
          name: 'Bare Styles',
          link: '#bare',
        },
        {
          id: 'disable',
          name: 'Disable Dates',
          link: '#disable',
        },
        {
          id: 'datepicker',
          name: 'DatePicker',
          link: '#datepicker',
        },
        {
          id: 'slots',
          name: 'Slots',
          link: '#slots',
        },
        {
          id: 'advance',
          name: 'More...',
          link: '#advance',
        },
        {
          id: 'download',
          name: 'Download',
          link: '#',
        },
      ];
    },
  },
  mounted() {
    // enable scrollspy
    const $sections = document.querySelectorAll('.section');
    this.secs = Array.from($sections).map((node) => ({
      id: node.id,
      offsetY: node.offsetTop,
    }));
    this.secs.reverse();
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const curr = this.secs.find((sec) => window.scrollY >= sec.offsetY - (16 * 5));
      if (curr) {
        this.currSpy = curr.id;
      } else {
        this.currSpy = this.navs[0].id;
      }
    },
  },
};
</script>

<style lang="less">
*{
  box-sizing: border-box;
}
html{
  font-size: 16px;
}
body{
  margin: 0;
  font-size: 1rem;
  font-family: 'Noto Sans', STXihei, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  line-height: 1.7;
}
a{
  color: #42b983;
}
small{
  font-size: .7em;
}
p, pre{
  margin: 0 0 1rem;
}
code{
  font-size: 0.875rem;
  color: #e83e8c;
  word-wrap: break-word;
}
code.hljs{
  position: relative;
  color: #525252;
  background-color: #f8f8f8;
  white-space: pre;
  padding: 1.2em 1.4em;
  font-size: 0.85rem;
  line-height: 1.6rem;
  &:before{
    position: absolute;
    top: .5em;
    right: .5em;
    font-size: .9em;
    font-weight: 700;
    line-height: 1;
    color: #ccc;
  }
  &.js:before{
    content: 'JS';
  }
  &.css:before{
    content: 'CSS';
  }
  &.html:before{
    content: 'HTML';
  }
}
.header{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #42b983;
  background-image: -moz-linear-gradient(-45deg, #11998e 0%, #42b983 100%);
  background-image: -webkit-linear-gradient(-45deg, #11998e 0%,#42b983 100%);
  background-image: linear-gradient(135deg, #11998e 0%,#42b983 100%);
  color: #fff;
  padding: 3.5rem 2rem;
  h1{
    margin: 0;
  }
  h2{
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
  }
  .ver{
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    font-size: 0.75rem;
    opacity: 0.7;
  }
}
.body{
  &-wrap{
    display: flex;
    align-items: flex-start;
    min-height: ~'calc(100vh - 160px)';
  }
}
.sidebar{
  position: sticky;
  z-index: 1;
  top: 0;
  flex: 0 0 260px;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 100vh;
  &-wrap{
    padding: 2rem;
    margin: 0;
    list-style: none;
  }
  li{
    margin-bottom: .5rem;
  }
  label{
    font-size: .75rem;
    font-weight: 700;
  }
  a{
    color: #2c3e50;
    text-decoration: none;
    &:hover{
      color: #42b983;
    }
    &.__active{
      font-weight: 700;
      color: #42b983;
    }
  }
}
.content{
  flex-grow: 1;
  &-wrap{
    width: 100%;
    padding: 2rem;
    margin-left: auto;
    margin-right: auto;
  }
}
.section{
  margin-bottom: 3rem;
  h2{
    margin: 0 0 1.2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0,0,0,.2);
  }
  &-body{
    display: flex;
    align-items: flex-start;
  }
  &-showcase{
    flex: 0 0 40%;
    text-align: center;
  }
  &-desc{
    flex: 0 0 60%;
    padding: 1rem 0 0 3rem;
  }
}
</style>
