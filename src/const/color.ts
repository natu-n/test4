// 収縮期血圧閾値
const _SYSTOLIC_THRESHOLD: { [index: number]: number } = [134, 129, 0];
// 拡張期血圧閾値
const _DIASTOLIC_THRESHOLD: { [index: number]: number } = [84, 79, 0];
// 閾値マーカ
const _COLORS: { [index: number]: string } = ["red", "orange", "green"];

export default {
  data(): {
    SYSTOLIC_THRESHOLD: { [index: number]: number };
    DIASTOLIC_THRESHOLD: { [index: number]: number };
    COLORS: { [index: number]: string };
  } {
    return {
      SYSTOLIC_THRESHOLD: _SYSTOLIC_THRESHOLD,
      DIASTOLIC_THRESHOLD: _DIASTOLIC_THRESHOLD,
      COLORS: _COLORS,
    };
  },
};
