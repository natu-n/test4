<script lang="ts">
import { Line } from "vue-chartjs";

export default {
  name: "LineChart",
  extends: Line,
  data() {
    return {
      chartData: {
        labels: [
          "2021-02-22",
          "2921-02-21",
          "2021-02-20",
          "2021-02-19",
          "2021-02-18",
          "2021^02-17",
          "2021-02-16",
        ],
        datasets: [
          {
            label: "Diastolic",
            type: "line",
            borderColor: "blue",
            data: [112, 103, 111, 99, 93, 98, 110],
            lineTension: 0,
            fill: false,
          },
          {
            label: "Systolic",
            type: "line",
            borderColor: "red",
            data: [161, 154, 193, 147, 133, 157, 176],
            lineTension: 0,
            fill: false,
          },
          {
            label: "32",
            type: "line",
            borderColor: "orange",
            backgroundColor: "#FF980033",
            data: [84, 84, 84, 84, 84, 84, 84],
            lineTension: 0,
            pointRadius: 0,
            fill: "start",
          },
          {
            label: "3",
            type: "line",
            borderColor: "green",
            backgroundColor: "#4CAF5033",
            data: [79, 79, 79, 79, 79, 79, 79],
            lineTension: 0,
            pointRadius: 0,
            fill: "start",
          },
          {
            label: "33",
            type: "line",
            borderColor: "white",
            backgroundColor: "#FFFFFF",
            data: [120, 120, 120, 120, 120, 120, 120],
            lineTension: 0,
            pointRadius: 0,
            fill: "start",
          },
          {
            label: "34",
            type: "line",
            borderColor: "green",
            backgroundColor: "#4CAF5033",
            data: [129, 129, 129, 129, 129, 129, 129],
            lineTension: 0,
            pointRadius: 0,
            fill: "start",
          },
          {
            label: "35",
            type: "line",
            borderColor: "orange",
            backgroundColor: "#FF980033",
            data: [134, 134, 134, 134, 134, 134, 134],
            lineTension: 0,
            pointRadius: 0,
            fill: "start",
          },
        ],
      },
      options: {
        title: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
        width: 10,
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 70,
                suggestedMax: 220,
              },
            },
          ],
        },
      },
    };
  },
  mounted: function () {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
<style>
.chart-container {
  position: relative;
  width: 70vw;
  height: 45vw;
  min-width: 300px;
  min-height: 300px;
}

.chart-size {
  position: center;
  padding: 20px;
}
</style>
