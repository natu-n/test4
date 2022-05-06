<template>
  <div id="chart">
    <apexchart
      type="line"
      width="95%"
      :series="series"
      :options="chartOptions"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";
import CONST from "../const/CONST";
import utils from "../components/utils.vue";
import store from "@/store";

Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

export default {
  mixins: [utils],
  data: function (): BpInterface {
    return {
      today: store.getters.today,
      pastDate: store.getters.pastDate,
      stuts: store.getters.stuts,
      chartOptions: CONST.CHARTOPTIONS,
      // series単体で渡されるので他のオプションを記載してもダメ
      series: [],
    };
  },
  //
  computed: {
    foo(): [boolean, number] {
      return [store.getters.isLoaded, store.getters.stuts];
    },
  },
  //
  watch: {
    foo: {
      immediate: true,
      handler: function (): void {
        if (!store.getters.isLoaded) {
          return;
        }
        const [systolic, diastolic] = utils.methods.getSeries(this.today);
        // ref https://apexcharts.com/vue-chart-demos/line-charts/realtime/
        const _data1 = {
          name: "today",
          data: systolic,
        };
        const _data2 = {
          name: "today",
          data: diastolic,
        };
        //
        this.series.length = 0;
        //
        this.series.push(_data1);
        this.series.push(_data2);
        //
        const ix = store.getters.stuts == 0 ? 1 : store.getters.stuts;
        const [systolic2, diastolic2] = utils.methods.getSeries(
          this.pastDate[ix]
        );
        const _data3 = {
          name: this.pastDate[ix],
          data: systolic2,
        };
        const _data4 = {
          name: this.pastDate[ix],
          data: diastolic2,
        };
        // pushで表示されるがオプションが微妙に反映されない
        this.series.push(_data3);
        this.series.push(_data4);
        //
        // オプションを再セットしないと反映されない
        let wkChartOptions = CONST.CHARTOPTIONS;
        // wkChartOptions.annotations.position[0].y = 139;
        this.chartOptions = { ...this.chartOptions, ...wkChartOptions };
      },
    },
  },
};
interface BpInterface {
  today: string;
  pastDate: string;
  stuts: number;
  chartOptions: {
    chart: {
      id: string;
      toolbar: { show: boolean };
      animations: { enabled: boolean };
      tooltip: { enabled: boolean };
    };
    annotations: {
      position: string;
      yaxis: {
        y: number;
        y2: number;
        borderColor: string;
        fillColor: string;
      }[];
      points: (
        | {
            x: string;
            y: number;
            label: {
              borderColor: string;
              offsetY: number;
              style: { color: string; fontSize: number };
              text: string;
              textAnchor: string;
              position?: undefined;
            };
          }
        | {
            x: string;
            y: number;
            label: {
              borderColor: string;
              offsetY: number;
              style: { color: string; fontSize: number };
              text: string;
              textAnchor: string;
              position: string;
            };
          }
      )[];
    };
    type: string;
    stroke: { width: number[] };
    colors: string[];
    grid: {
      borderColor: string;
      xaxis: { lines: { show: boolean } };
      yaxis: { lines: { show: boolean } };
    };
    markers: {
      size: number[];
      colors: string[];
      strokeColor: string;
      strokeWidth: number[];
      shape: string;
      fillOpacity: number;
      strokeOpacity: number;
      strokeDashArray: number[];
      showNullDataPoints: boolean;
      discrete: any[];
    };
    legend: { show: boolean };
    xaxis: {
      type: string;
      categories: string[];
      tickAmount: number;
      tickPlacement: string;
      floating: boolean;
    };
    yaxis: { min: number; max: number; floating: boolean };
  };
  series: { name: string; data: number[] }[];
}
</script>
