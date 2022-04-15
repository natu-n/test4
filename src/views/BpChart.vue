<template>
  <div>
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  // ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  AxisPointerComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  // イメージをDLするボタン等
  // ToolboxComponent,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  AxisPointerComponent,
]);

export default {
  name: "HelloWorld",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "light",
  },
  data() {
    return {
      option: {
        title: {
          text: "Line",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Osystolic", "Odiastolic", "systolic", "diastolic"],
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {},
        //   },
        // },
        xAxis: {
          //  xAxis.axisLabel. rotate
          type: "category",
          boundaryGap: false,
          // axisLabel:{rotate:180},
          data: [
            "10-19",
            "10-20",
            "10-21",
            "10-22",
            "10-23",
            "10-24",
            "10-25",
            "10-26",
            "10-27",
            "10-28",
            "10-29",
            "10-30",
            "10-31",
            "11-01",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Osystolic",
            type: "line",
            data: [
              140, 148, 143, 138, 140, 142, 142, 141, 135, 135, 140, 127, 135,
              148,
            ],
            lineStyle: {
              color: "Red",
            },
            symbol: "circle",
            symbolSize: 6,
            colorBy: "series",
          },
          {
            name: "Odiastolic",
            type: "line",
            data: [92, 99, 93, 91, 92, 100, 97, 93, 88, 79, 90, 84, 94, 104],
            lineStyle: {
              color: "Blue",
            },
            symbol: "circle",
            symbolSize: 6,
            colorBy: "series",
          },
          {
            name: "systolic",
            type: "line",
            data: [
              167, 163, 128, 169, 159, 148, 141, 146, 152, 149, 139, 135, 152,
              140,
            ],
            lineStyle: {
              color: "Red",
              width: 4,
            },
            symbol: "circle",
            symbolSize: 8,
            colorBy: "series",
            // label: {
            //   position: "insideTop",
            //   show: true,
            // },
          },
          {
            name: "diastolic",
            type: "line",
            data: [112, 120, 80, 106, 96, 97, 89, 84, 97, 89, 85, 84, 96, 90],
            lineStyle: {
              color: "Blue",
              width: 4,
            },
            symbol: "circle",
            symbolSize: 8,
            colorBy: "series",
            markPoint: {
              data: [
                {
                  type: "max",
                },
              ],
              symbol: "pin",
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.chart {
  height: 400px;
  width: 80%;
}
</style>