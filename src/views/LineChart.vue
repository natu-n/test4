<script lang="ts">
import { Line } from "vue-chartjs";

export default {
  name: "LineChart",
  extends: Line,
  data() {
    return {
      chartData: {
        labels: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."],
        datasets: [
          {
            label: "Diastolic",
            type: "line",
            borderColor: "#2962FF",
            borderWidth: 5,
            lineTension: 0,
            fill: false,
            data: [112, 103, 111, 99, 93, 98, 110],
          },
          {
            label: "Diastolic",
            type: "line",
            borderColor: "#448AFF",
            lineTension: 0,
            fill: false,
            data: [107, 103, 106, 89, 93, 93, 96],
          },
          {
            label: "Diastolic",
            type: "line",
            borderColor: "#82B1FF",
            lineTension: 0,
            fill: false,
            data: [102, 98, 100, 84, 88, 83, 100],
          },
          {
            label: "Systolic",
            type: "line",
            borderColor: "#D50000",
            borderWidth: 5,
            lineTension: 0,
            fill: false,
            data: [161, 154, 193, 147, 133, 157, 176],
          },
          {
            label: "Systolic",
            type: "line",
            borderColor: "#FF5252",
            lineTension: 0,
            fill: false,
            data: [151, 144, 183, 137, 123, 147, 161],
          },
          {
            label: "Systolic",
            type: "line",
            borderColor: "#FF8A80",
            lineTension: 0,
            fill: false,
            data: [146, 139, 178, 132, 118, 142, 166],
          },
          //
          {
            label: "Reference",
            type: "line",
            borderColor: "green",
            lineTension: 0,
            pointRadius: 0,
            fill: false,
            data: [79, 79, 79, 79, 79, 79, 79],
          },
          {
            label: "Reference",
            type: "line",
            borderColor: "orange",
            lineTension: 0,
            pointRadius: 0,
            fill: false,
            data: [84, 84, 84, 84, 84, 84, 84],
          },
          {
            label: "Reference",
            type: "line",
            borderColor: "green",
            lineTension: 0,
            pointRadius: 0,
            fill: false,
            data: [129, 129, 129, 129, 129, 129, 129],
          },
          {
            label: "Reference",
            type: "line",
            borderColor: "orange",
            lineTension: 0,
            pointRadius: 0,
            fill: false,
            data: [134, 134, 134, 134, 134, 134, 134],
          },
        ],
      },
      options: {
        title: {
          display: true,
        },
        legend: {
          position: "top",
          fontSize: 18,
          labels: {
            filter: function (items) {
              return items.text != "Reference";
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        width: 5,
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
