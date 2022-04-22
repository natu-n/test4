<template>
  <!-- <div class="myFirstSelector" v-if="ready"> -->
  <div class="myFirstSelector">
    <calendar-heatmap
      :values="[
                { date: '2019-1-1', count: 1 },
                { date: '2019-3-4', count: 2 },
                { date: '2019-9-22', count: 5 },
                { date: '2019-10-11', count: 4 },
                { date: '2019-12-31', count: 4}
                ]"
      :end-date="endDate1"
      :range-color="[                                                                                                                     '#ebedf0',
  'rgba(255,202,43,0.4)',
  'rgba(255,202,43,0.4)',
  'rgba(255,202,43,0.6)',
  'rgba(255,202,43,0.6)',
  'rgba(255,202,43,0.8)',
  'rgba(255,202,43,0.8)',
  'rgba(255,202,43,1.0)',
  'rgba(255,202,43,1.0)',
]"
      :max="8"
    ></calendar-heatmap>
    <calendar-heatmap
      :values="[
      {date: '2020-1-1', count: 3 },
      {date: '2020-2-1', count: 3},
      {date: '2020-3-1', count: 3},
      {date: '2020-4-1', count: 3},
      {date: '2020-5-1', count: 3},
      {date: '2020-6-1', count: 3},
      {date: '2020-7-1', count: 3},
      {date: '2020-8-1', count: 3},
      {date: '2020-9-1', count: 3},
      {date: '2020-10-1', count: 3},
      {date: '2020-11-1', count: 3},
      {date: '2020-12-31', count: 3},
      ]"
      :end-date="endDate2"
    ></calendar-heatmap>
    <calendar-heatmap
      :values="[
      {date: '2021-1-1', count: 1},
      {date: '2021-2-1', count: 2},
      {date: '2021-3-1', count: 3},
      {date: '2021-4-1', count: 1},
      {date: '2021-5-1', count: 2},
      {date: '2021-6-1', count: 3},
      {date: '2021-7-1', count: 1},
      {date: '2021-8-1', count: 2},
      {date: '2021-9-1', count: 3},
      {date: '2021-10-1', count: 1},
      {date: '2021-11-1', count: 2},
      {date: '2021-12-31', count: 3},
      ]"
      :end-date="endDate3"
      :range-color="[                                                                                                                     '#ebedf0',
  '#4CAF50',
  '#FF9800',
  '#F44336'
]"
      :max="4"
    ></calendar-heatmap>
    <calendar-heatmap
      :values="val4"
      :end-date="endDate4"
      :range-color="[                                                                                                                     '#ebedf0',
  '#4CAF50',
  '#FF9800',
  '#F44336'
]"
      :max="4"
      noDataText="No Data"
    ></calendar-heatmap>
  </div>
</template>
<script lang="ts">
import { CalendarHeatmap } from "vue-calendar-heatmap";
import dayjs from "dayjs";

export default {
  components: {
    CalendarHeatmap,
  },
  data() {
    return {
      endDate1: dayjs("2019-12-31"),
      endDate2: dayjs("2020-12-31"),
      endDate3: dayjs("2021-12-31"),
      endDate4: dayjs("2022-12-31"),
      val4: [
        { date: "2022-1-1", count: 1 },
        { date: "2022-2-1", count: 2 },
        { date: "2022-3-1", count: 3 },
        { date: "2022-4-1", count: 1 },
      ],
    };
  },
  created(): void {},
};
</script>