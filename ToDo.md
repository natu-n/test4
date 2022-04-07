# 今回の目的

## データを変換する

```json
// このJSONデータを
{
    {
        "date": "2017-10-19",
        "systolic": 140,
        "diastolic": 92
    },
    {
        "date": "2017-10-20",
        "systolic": 148,
        "diastolic": 99
    },
    {
        "date": "2017-10-21",
        "systolic": 143,
        "diastolic": 93
    },
}
```

```javascript
// こんな感じに加工する。
    labelDate = ["2017-10-19", "2017-10-20", "2017-10-21",],
    systolicData = [140, 148, 143,],
    diastolicData = [92, 99, 93,],

//  一旦日付で絞り込む
    this.items = this.$store.getters.info.filter(
        (item) => item.date > "2022-02-28"
    );

//  各keyで渋りこむ
    this.labelDate = this.items.map((item) => item["date"]);
    this.systolicData = this.items.map((item) => item["systolic"]);
    this.diastolicData = this.items.map((item) => item["diastolic"]);
```

+ v-date-pickerで同月内のみ表示するには
  + maxとminを同月に設定、disabledはfalseに

```javascript
const chartDataSet = {
          {
            label: "",
            borderColor: "",
            backgroundColor:  "",
            lineTension: 0,
            pointRadius: 0,
            borderWidth:  0,  //  or 5
            fill: false,
            tooltips: {
              enabled: false,
            },
            data: [],
          },
};
```
