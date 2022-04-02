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
import color from "../const/color";

export default {
  data: () => ({
    date1: dayjs().subtract(1, "MONTH").endOf("month").format("YYYY-MM-DD"),
    date2: dayjs().format("YYYY-MM-DD"),
    // max/minを同月に設定することで移動不可
    startOfTheMonth: dayjs().startOf("month").format("YYYY-MM-DD"),
    endOfTheMonth: dayjs().endOf("month").format("YYYY-MM-DD"),
    //
    endOfLastMonth: dayjs()
      .subtract(1, "MONTH")
      .endOf("month")
      .format("YYYY-MM-DD"),
  }),

  // created: function (): void {
  //   this.$store.dispatch("getJSON");
  // },

  // computed:{},

  methods: {
    functionEvents(date: string): false | string[] {

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
        return [
          color.COLORS[getSystolicColor()],
          color.COLORS[getDiastolicColor()],
        ];
      } else return false;
      //
      function getSystolicColor(this: any): number {
        return color.SYSTOLIC_THRESHOLD.findIndex(
          (systolic: number): boolean => systolic < target.systolic
        );
      }
      //
      function getDiastolicColor(this: any): number {
        return color.DIASTOLIC_THRESHOLD.findIndex(
          (diastolic: number): boolean => diastolic < target.diastolic
        );
      }
    },
    dblClick(date): void {
      console.info("dblClick:" + date);
    },
  },
};
</script>
