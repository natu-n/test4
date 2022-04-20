<template>
  <div id="chart">
    <apexchart type="line" width="95%" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script lang="ts">
import VueApexCharts from "vue-apexcharts";
import Vue from "vue";
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);
export default {
  data: function () {
    return {
      // Constで良さげ
      chartOptions: {
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false,
          },
          animations: { enabled: false },
          tooltip: { enabled: false },
        },
        annotations: {
          position: "back",
          yaxis: [
            {
              y: 80,
              y2: 84,
              borderColor: "#000",
              fillColor: "#FF9800",
              // Trial:
              // label: {
              //   text: "Y-axis range",
              //   textAnchor: "end",
              //   offsetX: 30,
              // },
            },
            {
              y: 130,
              y2: 134,
              borderColor: "#000",
              fillColor: "#FF9800",
            },
          ],
          points: [
            {
              x: "today", // "today"だとダメ
              y: 140,
              label: {
                borderColor: "#FFF",
                offsetY: 0,
                style: {
                  color: "#F44336",
                 fontSize: 24,
                },

                text: "systolic",
                textAnchor: "end",
              },
            },
            {
              x: "today", // "today"だとダメ
              y: 90,
              label: {
                borderColor: "#FFF",
                offsetY: 0,
                style: {
                  color: "#2196F3",
                  fontSize: 24,
                },

                text: "diastolic",
                textAnchor: "end",
                position: "bottom",
              },
            },
          ],
        },
        type: "line",
        // ★☆正解☆★
        stroke: {
          width: [6, 6, 3, 3],
        },
        // Line Color
        colors: ["#F44336", "#2196F3", "#BDBDBD", "#BDBDBD"], // grey lighten-1
        grid: {
          borderColor: "#E0E0E0",
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        markers: {
          size: [7, 7, 4, 4],
          colors: ["#F44336", "#2196F3", "#BDBDBD", "#BDBDBD"], // grey lighten-1
          strokeColor: "#FFFFFF",
          strokeWidth: [6, 6, 3, 3],
          shape: "circle", // "circle" | "square" | "rect"
          fillOpacity: 0,
          strokeOpacity: 0,
          strokeDashArray: [6, 6, 3, 3],
          showNullDataPoints: false,
          discrete: [],
        },
        //
        legend: {
          show: false,
        },
        xaxis: {
          type: "category",
          categories: [
            "-13d",
            "-12d",
            "-11d",
            "-10d",
            "-9d",
            "-8d",
            "-7d",
            "-6d",
            "-5d",
            "-4d",
            "-3d",
            "-2d",
            "-1d",
            "today",
          ],
          tickAmount: 14,
          tickPlacement: "on",
          floating: false,
        },
        yaxis: {
          min: 70,
          max: 170,
          floating: false, //  データラベルが見えなくなる
        },
        //
      },
      // series単体で渡されるので他のオプションを記載してもダメ
      series: [
        {
          name: "today",
          data: [
            167, 163, 128, 169, 159, 148, 141, 146, 152, 149, 139, 135, 152,
            140,
          ],
          // data: [],
        },
        {
          name: "today",
          data: [112, 120, 80, 106, 96, 97, 89, 84, 97, 89, 85, 84, 96, 90],
          // data: [],
        },
        {
          name: "onr month ago",
          data: [
            120, 127, 122, 126, 121, 126, 124, 122, 122, 128, 128, 132, 124,
            125,
          ],
          // data: [],
        },
        {
          name: "onr month ago",
          data: [84, 78, 76, 76, 77, 84, 79, 82, 79, 86, 77, 80, 80, 85],
          // data: [],
        },
      ],
    };
  },
  created: {},
  // mounted: () => console.info("series:" + this.chartOptions.series.data.length),
};
</script>
