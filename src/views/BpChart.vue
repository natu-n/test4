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
          yaxis: [
            {
              y: 80,
              y2: 84,
              borderColor: "#000",
              fillColor: "#FF9800",
              // Trial:
              label: {
                text: "Y-axis range",
                offsetX: 30,
              },
            },
            {
              y: 130,
              y2: 134,
              borderColor: "#000",
              fillColor: "#FF9800",
            },
          ],
        },
        colors: ["#F44336", "#2196F3", "#BDBDBD", "#BDBDBD"],
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
          // row: {
          //   colors: ["#BDBDBD", "transparent"], // takes an array which will be repeated on columns
          //   opacity: 0.5,
          // },
        },
        markers: {
          size: 2,
          colors: ["#F44336", "#2196F3", "#BDBDBD", "#BDBDBD"],
          shape: "circle", // "circle" | "square" | "rect"
          fillOpacity: 0.5,
          strokeOpacity: 0.5,
          strokeDashArray: [5, 5, 5, 5],
          showNullDataPoints: false,
          // strokeColor: "#000000",
          discrete: [
            {
              seriesIndex: 0,
              dataPointIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            },
            {
              seriesIndex: 1,
              dataPointIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            },
            {
              seriesIndex: 2,
              dataPointIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            },
            {
              seriesIndex: 3,
              dataPointIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            },
          ],
        },
        //
        legend: {
          show: false,
          floating: true,
          position: "top",
          horizontalAlign: "right",
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
            "Today",
          ],
          tickAmount: 14,
          tickPlacement: "on",
          floating: true,
        },
        yaxis: {
          // categories: ["systolic", "diastolic", "", ""],
          min: 70,
          max: 170,
          floating: true,
        },
      },
      series: [
        {
          name: "today",
          data: [
            167, 163, 128, 169, 159, 148, 141, 146, 152, 149, 139, 135, 152,
            140,
          ],
        },
        {
          name: "today",
          data: [112, 120, 80, 106, 96, 97, 89, 84, 97, 89, 85, 84, 96, 90],
        },
        {
          name: "onr month ago",
          // data: [
          //   120, 127, 122, 126, 121, 126, 124, 122, 122, 128, 128, 132, 124,
          //   125,
          // ],
          data: [],
        },
        {
          name: "onr month ago",
          // data: [84, 78, 76, 76, 77, 84, 79, 82, 79, 86, 77, 80, 80, 85],
          data: [],
        },
      ],
    };
  },
};
</script>
