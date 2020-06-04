# vLite Calendar

A simple and lightweight, yet flexible calendar component for **Vue 2.x**, with:
- no styles dependency or inline styles
- using browser locale
- date-fns/esm (only calculation methods)

The intention of this component is to allow you to style your own calendar theme to suit your website design. See [Styles Guide](#styles-guide) for detail.

## Demo
See [Demo Page](https://kennyooi.github.io/vlite-calendar/) for more example.

## Get Started
### Installation
As usual, install the calendar component NPM package.
```bash
npm install vlite-calendar --save
```

Next, include the calendar component in your own component.
```js
import Calendar from 'vlite-calendar';

export default {
 // ...
 components: {
 Calendar,
 },
 // ...
}
```

Then, you can use `<calendar>` tag in your Vue template. 
```html
<calendar></calendar>
```

Check out [Props Guide](#props-guide) for component available props. 

### CDN Usage
Coming soon

## Props Guide
| Prop | Type | Default | Description |
|--|--|--|--|
| class-name | String | vl-calendar | Calendar CSS class prefix. |
| date | Date | new Date() | Calendar selected date. |
| process-date | Function | | Post-processing the final content of rendered date. <br>See [`vdate` Object Guide](#vdate-object-guide) for more detail. |
| views | Array | ['days', 'months', 'years'] | Enable different view mode on the calendar. <br>*First item will used as default view. |
| week-start | Number | 0 | The first day of the week (0-Sunday) |
| prepend | Vue Slot | | Ability to inject additional content into the start of the calendar |
| append | Vue Slot | | Ability to inject additional content into the end of the calendar |

Example code.
```html
<calendar
  :date="pickedDate"
  :views="['days']"
></calendar>
```
Example usage of Vue Slot.
```html
<calendar :date="pickedDate">
  <div slot="prepend">
    This will appear before the calendar
  </div>
  <div slot="append">
    This will appear after the calendar
  </div>
</calendar>
```

## Events Guide
| Event | Params | Description |
|--|--|--|
| change-view | (newView) | View mode changed. |
| select-day | ({ day, vdate }) | A day has been selected. |
| select-month | ({ day, vdate }) | A month has been selected. The `day` indicate the first day of the selected month. |
| select-year | ({ day, vdate }) | A year has been selected. The `day` indicate the first day of the selected year. |

Example usage.
```html
<calendar
  @select-day="onSelect"
></calendar>
```
```js
export default {
  ...
  methods: {
    onSelect({ day, vdate }) {
      console.log(day);
    }
  }
}
```

## `vdate` Object Guide
`vdate` object is used by component internally for handling what to render on each calendar days, months, and years. However, you can overwrite it through `process-date` prop. 

| Prop | Type | Description |
|--|--|--|
| day | Date | Current date in JS Date object |
| key | Timestamp | Current date in timestamp |
| type | String | Current content type - day, month, or year |
| display | String | Display content for current date |
| classes | String | Injected CSS classes |
| isToday | Boolean | Is current date today? |
| isCurrent | Boolean | Is current date same as calendar selected date? |
| isInvalid | Boolean | Is current date disabled? |
| isOut | Boolean | Is current date out of calendar month? |

Example usage.
```html
<calendar
  :process-date="onProcessDate"
></calendar>
```
```js
export default {
  ...
  methods: {
    onProcessDate(vdate) {
      // perform some checking
      // console.log(vdate.day)
      // vdate.isInvalid = true;
      // ...

      // remember to return back the vdate object
      return vdate;
    }
  }
}
```

## Styles Guide
This component is intentionally for custom calendar theme styling. Hence all CSS classes used within the component are auto-prefixed with `vl-calendar` (can be overwrite through component `class-name` prop).

| CSS class | Description |
|--|--|
| `.{prefix}` | Calendar root |
| `.{prefix}-row` | Row wrap of calendar |
| `.{prefix}-caption` | Calendar view label |
| `.{prefix}-prev` | Calendar '<' button |
| `.{prefix}-next` | Calendar '>' button |
| `.{prefix}-week` | Week content |
| `.{prefix}-day` | Day content |
| `.{prefix}-month` | Month content |
| `.{prefix}-year` | Year content |
| `.{prefix}--out` | State indicator, content is outside of viewing month |
| `.{prefix}--today` | State indicator, content is today |
| `.{prefix}--current` | State indicator, content is same as selected date |
| `.{prefix}--invalid` | State indicator, content is disabled |

You can scope targeted these CSS classes on your component.
```html
<style scoped>
/deep/ .vl-calendar{
  ...
}
/deep/ .vl-calendar-day{
  ...
}
</style>
```

However, you are free to use the built-in styling if you want.
```js
import 'vlite-calendar/dist/vlite-calendar-style.min.css';
```

## Change Log

Change logs can be found at [CHANGELOG.md](https://github.com/kennyooi/vlite-calendar/blob/master/CHANGELOG.md)

## License

[MIT](https://github.com/kennyooi/vlite-calendar/blob/master/LICENSE)
