<template>
  <v-row justify="space-around">
    <div>
      <div class="subheading">Past</div>
      <v-date-picker
        v-model="date1"
        :first-day-of-week="1"
        :events="functionEvents"
        event-color="green lighten-1"
        :max="endOfLastMonth"
        elevation="2"
        @dblclick:date="dblClick"
      ></v-date-picker>
    </div>
    <div>
      <div class="subheading">Current</div>
      <v-date-picker
        v-model="date2"
        :first-day-of-week="1"
        :events="functionEvents"
        :disabled="false"
        :min="startOfTheMonth"
        :max="endOfTheMonth"
        elevation="2"
        @dblclick:date="dblClick"
      ></v-date-picker>
    </div>
  </v-row>
</template>

<script lang="ts">
import dayjs from "dayjs";
// import SYSTOLIC_THRESHOLD from "../const/color";
// import DIASTOLIC_THRESHOLD from "../const/color";
// import COLORS from "../const/color";

export default {
  // mixins: [SYSTOLIC_THRESHOLD, DIASTOLIC_THRESHOLD, COLORS],
  data: () => ({
    date1: dayjs().subtract(1, 'MONTH').endOf('month').format('YYYY-MM-DD'),
    date2: dayjs().format("YYYY-MM-DD"),
    // max/minを同月に設定することで移動不可
    startOfTheMonth: dayjs().startOf("month").format("YYYY-MM-DD"),
    endOfTheMonth: dayjs().endOf("month").format("YYYY-MM-DD"),
    //
    endOfLastMonth: dayjs().subtract(1, 'MONTH').endOf('month').format('YYYY-MM-DD'),
  }),

  // created: function (): void {
  //   this.$store.dispatch("getJSON");
  // },

  created: {},

  methods: {
    functionEvents(date: string): false | string[] {
      // TODO:定数を外部に置いて共通化したい。
      //  // @ts-ignore
      // 収縮期血圧閾値
      const SYSTOLIC_THRESHOLD = [134, 129, 0];
      // 拡張期血圧閾値
      const DIASTOLIC_THRESHOLD = [84, 79, 0];
      // 閾値マーカ
      const COLORS = ["red", "orange", "green"];

      if (!this.$store.getters.isLoaded) {
        return false;
      }
      // TODO:共通化→tooltipなどで再利用
      var target: { systolic: number; diastolic: number } | null = null;
      target = this.$store.getters.info.find(function (d: {
        date: string;
      }): boolean {
        return d.date === date;
      });
      //
      if (target) {
        return [COLORS[getSystolicColor()], COLORS[getDiastolicColor()]];
      } else return false;
      //
      function getSystolicColor(): number {
        return SYSTOLIC_THRESHOLD.findIndex(
          (systolic: number): boolean => systolic < target.systolic
        );
      }
      //
      function getDiastolicColor(): number {
        return DIASTOLIC_THRESHOLD.findIndex(
          (diastolic: number): boolean => diastolic < target.diastolic
        );
      }
    },
    dblClick(date): void {
      // this.$set(this.done, 0, true);
      // alert(`You have just double clicked the following date: ${date}`);
      console.info("dblClick:" + date);
    },
  },
};
</script>
