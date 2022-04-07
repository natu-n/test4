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

export default {
  SYSTOLIC_THRESHOLD: _SYSTOLIC_THRESHOLD,
  DIASTOLIC_THRESHOLD: _DIASTOLIC_THRESHOLD,
  COLORS: _COLORS,
  BORDERCOLORS: _BORDERCOLORS,
  BORDER: _BORDER,
};
