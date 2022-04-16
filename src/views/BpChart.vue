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
  MarkLineComponent,
  MarkPointComponent,
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
  MarkLineComponent,
  MarkPointComponent,
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
        // title: {
        //   text: "Line",
        //   left: "center",
        // },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          top: "Auto",
          data: ["Osystolic", "Odiastolic", "systolic", "diastolic"],
        },
        grid: {
          show: true,
          // left: "5%",
          // right: "5%",
          // bottom: "5%",
          containLabel: true, //  囲み線
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {},
        //   },
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
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
          // axisLabel: {
          //   formatter: "mmHg",
          // }
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
              color: "#EF9A9A",
            },
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              borderWidth: 0,
              borderColor: "#EF9A9A",
              color: "#EF9A9A",
            },
          },
          {
            name: "Odiastolic",
            type: "line",
            data: [92, 99, 93, 91, 92, 100, 97, 93, 88, 79, 90, 84, 94, 104],
            lineStyle: {
              color: "#90CAF9",
            },
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              borderWidth: 0,
              borderColor: "#90CAF9",
              color: "#90CAF9",
            },
          },
          {
            name: "systolic",
            type: "line",
            data: [
              167, 163, 128, 169, 159, 148, 141, 146, 152, 149, 139, 135, 152,
              140,
            ],
            lineStyle: {
              color: "#F44336",
              width: 4,
            },
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              borderWidth: 0,
              borderColor: "#F44336",
              color: "#F44336",
            },
          },
          {
            name: "diastolic",
            type: "line",
            data: [112, 120, 80, 106, 96, 97, 89, 84, 97, 89, 85, 84, 96, 90],
            lineStyle: {
              color: "#2196F3",
              width: 4,
            },
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              borderWidth: 0,
              borderColor: "#2196F3",
              color: "#2196F3",
            },
            // 末尾にnameを表示できないか？
            markLine: {
              label: {
                show: true,
              },
              data: [],
              lineStyle: {
                type: "solid",
                color: "green",
                width: 2,
              },
            },
            // markLine: {
            //   data: [{ type: "min", name: "Avg" }],
            // },
          },
          {
            type: "line",
            data: [],
            markLine: {
              label: {
                show: false,
              },
              data: [{ yAxis: 79 }],
              lineStyle: {
                type: "solid",
                color: "green",
                width: 2,
              },
            },
          },
          {
            type: "line",
            data: [],
            markLine: {
              label: {
                show: false,
              },
              data: [{ yAxis: 84 }],
              lineStyle: {
                type: "solid",
                color: "orange",
                width: 2,
              },
            },
          },
          {
            type: "line",
            data: [],
            markLine: {
              label: {
                show: false,
              },
              data: [{ yAxis: 129 }],
              lineStyle: {
                type: "solid",
                color: "green",
                width: 2,
              },
            },
          },
          {
            type: "line",
            data: [],
            markLine: {
              label: {
                show: false,
              },
              data: [{ yAxis: 134 }],
              lineStyle: {
                type: "solid",
                color: "orange",
                width: 2,
              },
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
  width: 95%;
}
</style>
