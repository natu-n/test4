<template>
  <!-- <div class="myFirstSelector" v-if="ready"> -->
  <div class="myFirstSelector">
    <calendar-heatmap
      :values="mapItems0"
      :end-date="yearEnd[0]"
      :range-color="colors"
      :max="4"
    ></calendar-heatmap>
    <calendar-heatmap
      :values="mapItems1"
      :end-date="yearEnd[1]"
      :range-color="colors"
      :max="4"
    ></calendar-heatmap>
    <calendar-heatmap
      :values="mapItems2"
      :end-date="yearEnd[2]"
      :range-color="colors"
      :max="4"
    ></calendar-heatmap>
    <calendar-heatmap
      :values="mapItems3"
      :end-date="yearEnd[3]"
      :range-color="colors"
      :max="4"
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
      yearEnd: [
        dayjs("2019-12-31"),
        dayjs("2020-12-31"),
        dayjs("2021-12-31"),
        dayjs("2022-12-31"),
      ],
      mapItems: [],
      mapItems0: [],
      mapItems1: [],
      mapItems2: [],
      mapItems3: [],
      stuts: this.$store.getters.stuts,
      isLoaded: this.$store.getters.isLoaded,
      items: [],
      colors: ["#ebedf0", "#4CAF50", "#FF9800", "#F44336"],
    };
  },
  created(): void {},
  computed: {
    foo(): any[] {
      return [this.$store.getters.isLoaded, this.$store.getters.stuts];
    },
  },
  watch: {
    foo: {
      immediate: true,
      handler: function (val: any[]): void {
        if (!this.$store.getters.isLoaded) {
          return;
        }

        this.stuts = this.$store.getters.stuts;
        // NOTE: 親にデータを私のはthis.$parent.～
        this.mapItems0 = this.$store.getters.info.filter(
          (item: { date: string }) =>
            dayjs(item.date).isSame(this.yearEnd[0], "year")
        );
        this.mapItems1 = this.$store.getters.info.filter(
          (item: { date: string }) =>
            dayjs(item.date).isSame(this.yearEnd[1], "year")
        );
        this.mapItems2 = this.$store.getters.info.filter(
          (item: { date: string }) =>
            dayjs(item.date).isSame(this.yearEnd[2], "year")
        );
        this.mapItems3 = this.$store.getters.info.filter(
          (item: { date: string }) =>
            dayjs(item.date).isSame(this.yearEnd[3], "year")
        );

        this.mapItems0.map(function (item, _) {
          item.count = item.diastolic > 83 ? 3 : item.diastolic > 79 ? 2 : 1;
          return [item.date, item.count];
        });
        this.mapItems1.map(function (item, _) {
          item.count = item.diastolic > 83 ? 3 : item.diastolic > 79 ? 2 : 1;
          return [item.date, item.count];
        });
        this.mapItems2.map(function (item, _) {
          item.count = item.diastolic > 83 ? 3 : item.diastolic > 79 ? 2 : 1;
          return [item.date, item.count];
        });
        this.mapItems3.map(function (item, _) {
          item.count = item.diastolic > 83 ? 3 : item.diastolic > 79 ? 2 : 1;
          return [item.date, item.count];
        });
      },
    },
  },
};
</script>