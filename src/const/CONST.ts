// 収縮期血圧閾値
const _SYSTOLIC_THRESHOLD: number[] = [134, 129, 0];
// 拡張期血圧閾値
const _DIASTOLIC_THRESHOLD: number[] = [84, 79, 0];
// 閾値マーカ
const _COLORS: string[] = ["red", "orange", "green"];

const _BORDERCOLORS = [
  "#D50000",
  "#2962FF",
  "#FF5252",
  "#448AFF",
  "#FF8A80",
  "#82B1FF",
];

const _BORDER = [
  {
    label: "hidden",
    borderColor: "green",
    lineTension: 0,
    pointRadius: 0,
    fill: false,
    tooltips: {
      enabled: false,
    },
    data: [...Array(14)].fill(79),
  },
  {
    label: "hidden",
    borderColor: "orange",
    lineTension: 0,
    pointRadius: 0,
    fill: false,
    tooltips: {
      enabled: false,
    },
    data: [...Array(14)].fill(84),
  },
  {
    label: "hidden",
    borderColor: "green",
    lineTension: 0,
    pointRadius: 0,
    fill: false,
    tooltips: {
      enabled: false,
    },
    data: [...Array(14)].fill(129),
  },
  {
    label: "hidden",
    borderColor: "orange",
    lineTension: 0,
    pointRadius: 0,
    fill: false,
    tooltips: {
      enabled: false,
    },
    data: [...Array(14)].fill(134),
  },
];
const _CHARTOPTIONS = {
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
        x: "today",
        y: 140, // 実際の値に連動したいが
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
        x: "today",
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
};
export default {
  SYSTOLIC_THRESHOLD: _SYSTOLIC_THRESHOLD,
  DIASTOLIC_THRESHOLD: _DIASTOLIC_THRESHOLD,
  COLORS: _COLORS,
  BORDERCOLORS: _BORDERCOLORS,
  BORDER: _BORDER,
  CHARTOPTIONS: _CHARTOPTIONS,
};
