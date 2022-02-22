<script lang="ts">
import { Line } from "vue-chartjs";

export default {
  name: "LineChart",
  extends: Line,
  data() {
    return {
      chartData: {
        labels: ["2021-02-22", 2, 3, 4, 5, 6, "2021-02-15"],
        datasets: [
          {
            label: "sample",
            borderColor: "blue",
            data: [112, 103, 111, 99, 93, 98, 110],
            fill: false,
          },
          {
            label: "sample",
            borderColor: "red",
            data: [161, 154, 193, 147, 133, 157, 176],
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Line chart",
        },
        legend: {
          display: false,
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