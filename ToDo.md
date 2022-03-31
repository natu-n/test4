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

## 描画のタイミング

isLoadedがtrueになったら描画(watch?)なら？

https://qiita.com/mikene_koko/items/d15080a1b86251d078c7


```javascript
      <v-date-picker
        v-model="date"
        @contextmenu:year="contextMenu"
        @dblclick:date="dblClick"
        @mouseenter:month="mouseEnter"
        @mouseleave:month="mouseLeave"
      ></v-date-picker>
    </v-col>

    methods: {
      contextMenu (year, event) {
        this.$set(this.done, 2, true)

        event.preventDefault()

        alert(`You have activated context menu for year ${year}`)
      },
      dblClick (date) {
        this.$set(this.done, 0, true)

        alert(`You have just double clicked the following date: ${date}`)
      },
    ```

maxとminを同月に設定、disabledはfalseに
