<script lang="ts">
import { Line } from "vue-chartjs";

export default {
  name: "LineChart",
  extends: Line,
  data(): {
    chartData: {
      labels: string[];
      datasets: (
        | {
            label: string;
            type: string;
            borderColor: string;
            backgroundColor: string;
            borderWidth: number;
            lineTension: number;
            fill: boolean;
            data: number[];
            pointRadius?: undefined;
            tooltips?: undefined;
          }
        | {
            label: string;
            type: string;
            borderColor: string;
            backgroundColor: string;
            lineTension: number;
            fill: boolean;
            data: number[];
            borderWidth?: undefined;
            pointRadius?: undefined;
            tooltips?: undefined;
          }
        | {
            label: string;
            type: string;
            borderColor: string;
            lineTension: number;
            pointRadius: number;
            fill: boolean;
            tooltips: { enabled: boolean };
            data: number[];
            backgroundColor?: undefined;
            borderWidth?: undefined;
          }
      )[];
    };
    options: {
      title: { display: boolean };
      legend: {
        position: string;
        labels: {
          fontSize: number;
          filter: (items: { text: string }) => boolean;
        };
      };
      responsive: boolean;
      maintainAspectRatio: boolean;
      width: number;
      scales: {
        yAxes: { ticks: { suggestedMin: number; suggestedMax: number } }[];
      };
    };
  } {
    return {
      chartData: {
        labels: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."],
        datasets: [
          {
            label: "Diastolic",
            type: "line",
            borderColor: "#2962FF",
            backgroundColor: "#2962FF99",
            borderWidth: 5,
            lineTension: 0,
            fill: false,
            data: [112, 103, 111, 99, 93, 98, 110],
          },
          {
            label: "Diastolic",
            type: "line",
            borderColor: "#448AFF",
            backgroundColor: "#448AFF88",
            lineTension: 0,
            fill: false,
            data: [107, 103, 106, 89, 93, 93, 96],
          },
          {
            label: "Diastolic",
            type: "line",
            borderColor: "#82B1FF",
            backgroundColor: "#82B1FF88",
            lineTension: 0,
            fill: false,
            data: [102, 98, 100, 84, 88, 83, 100],
          },
          {
            label: "Systolic",
            type: "line",
            borderColor: "#D50000",
            backgroundColor: "#D5000088",
            borderWidth: 5,
            lineTension: 0,
            fill: false,
            data: [161, 154, 193, 147, 133, 157, 176],
          },
          {
            label: "Systolic",
            type: "line",
            borderColor: "#FF5252",
            backgroundColor: "#FF525288",
            lineTension: 0,
            fill: false,
            data: [151, 144, 183, 137, 123, 147, 161],
          },
          {
            label: "Systolic",
            type: "line",
            borderColor: "#FF8A80",
            backgroundColor: "#FF8A8088",
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
            tooltips: {
              enabled: false,
            },
            data: [79, 79, 79, 79, 79, 79, 79],
          },
          {
            label: "Reference",
            type: "line",
            borderColor: "orange",
            lineTension: 0,
            pointRadius: 0,
            fill: false,
            tooltips: {
              enabled: false,
            },
            data: [84, 84, 84, 84, 84, 84, 84],
          },
          {
            label: "Reference",
            type: "line",
            borderColor: "green",
            lineTension: 0,
            pointRadius: 0,
            fill: false,
            tooltips: {
              enabled: false,
            },
            data: [129, 129, 129, 129, 129, 129, 129],
          },
          {
            label: "Reference",
            type: "line",
            borderColor: "orange",
            lineTension: 0,
            pointRadius: 0,
            fill: false,
            tooltips: {
              enabled: false,
            },
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
          labels: {
            fontSize: 16,
            filter: (items: { text: string }): boolean =>
              items.text != "Reference",
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
  mounted: function (): void {
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
