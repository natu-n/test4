<script lang="ts">
// import { Chart } from "vue-chartjs";
import { Line } from "vue-chartjs";
import chartjsPluginAnnotation from "chartjs-plugin-annotation";

// Chart.register(chartjsPluginAnnotation);
export default {
  name: "LineChart",
  extends: Line,
  type: "line",
  data() {
    return {
      chartData: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        // plugins: {
        //   autocolors: false,
        //   annotation: {
        //     annotations: {
        //       annotations: {
        //         line1: {
        //           type: "line",
        //           yMin: 68,
        //           yMax: 68,
        //           borderColor: "rgb(255, 99, 132)",
        //           borderWidth: 2,
        //         },
        //       },
        //     },
        //   },
        // },
      },
    };
  },
  mounted: function () {
    this.addPlugin(chartjsPluginAnnotation);
    this.options = {
      drawTime: "afterDraw",
      scales: {
        yAxes: [
          {
            id: "y-axis-1",
            type: "linear",
          },
        ],
      },
      annotation: {
        annotations: [
          {
            type: "line",
            scaleID: "y-axis-1",
            mode: "horizontal",
            // drawTime: "afterDraw",
            // yMin: 79,
            // yMax: 79,
            value: 79,
            borderColor: "green",
            borderWidth: 2,
          },
          {
            type: "line",
            scaleID: "y-axis-1",
            mode: "horizontal",
            // drawTime: "afterDraw",
            // yMin: 84,
            // yMax: 84,
            value: 84,
            borderColor: "orange",
            borderWidth: 2,
          },
        ],
      },
    };

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
