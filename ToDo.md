# 今回の目的

aaa

## 今回の目的

bbb

### 責務の明確化(第一弾)

+ BpDatagidとDatagridにわけた
  + BpDatagidはView
  + DatagridはViewModel

### 次回行うこと

+ 現行
  + BpCart(TS以外)
  + Chart(TS)

+ 変更後
  + BpChart(Viewガワの初期表示)
  + Reactive用のデータ選択、Viewへの送信

```javascript
  props: {
    endDate: {
      required: true
    },
    max: {
      type: Number
    },
    rangeColor: {
      type: Array,
      default: () => DEFAULT_RANGE_COLOR
    },
    values: {
      required: true,
      type: Array
    },
    locale: {
      type: Object
    },
    tooltip: {
      type: Boolean,
      default: true
    },
    tooltipUnit: {
      type: String,
      default: DEFAULT_TOOLTIP_UNIT
    },
    vertical: {
      type: Boolean,
      default: false
    },
    noDataText: {
      type: String,
      default: null
    }
```

```javascript
export const DEFAULT_RANGE_COLOR = ['#ebedf0', '#dae2ef', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']
export const DEFAULT_LOCALE = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  on: 'on',
  less: 'Less',
  more: 'More'
}
export const DEFAULT_TOOLTIP_UNIT = 'contributions'
export const DAYS_IN_ONE_YEAR = 365
export const DAYS_IN_WEEK = 7
export const SQUARE_SIZE = 10
```

### 共通コンポーネント

+ パラメータでJSONを絞って返す

```javascript
{ "date": "2018-12-27", "systolic": 133, "diastolic": 94 },

  this.stuts = this.$store.getters.stuts;
  // NOTE: 親にデータを私のはthis.$parent.～
  this.$parent.items = this.$store.getters.info.filter(
    (item: { date: string }) =>
  // TODO: 範囲を絞る ex)dayjs('2010-10-20').isSameOrBefore('2010-10-19', 'year')
      dayjs().isSame(item.date, 'year')
  );
```

+ 上記データの形式変換

```javascript
{ "date": "2018-12-27", "systolic": 133, "diastolic": 94 },
{ date: "2022-1-1", count: 1 },


```
