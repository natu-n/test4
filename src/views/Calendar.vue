<template>
  <v-row justify="space-around">
    <div>
      <div class="subheading">Past</div>
      <v-date-picker
        v-model="pastDate"
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
        v-model="currentDate"
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
import CONST from "../const/CONST";

export default {
  data(): {
    pastDate: string;
    startOfTheMonth: string;
    endOfTheMonth: string;
    currentDate: string;
    endOfLastMonth: string;
  } {
    return {
      pastDate: "",
      startOfTheMonth: "",
      endOfTheMonth: "",
      currentDate: "",
      endOfLastMonth: "",
    };
  },

  created(): void {
    const TODAY = this.$store.getters.today;
    // NOTE: 先月までのカレンダープロパティ
    this.pastDate = formatDate(
      dayjs(TODAY).subtract(1, "MONTH")
    );
    this.endOfLastMonth = formatDate(
      dayjs(TODAY).subtract(1, "MONTH").endOf("month")
    );
    //
    // NOTE: 今月のカレンダー(移動不可)プロパティ
    this.currentDate = TODAY;
    this.startOfTheMonth = formatDate(dayjs(TODAY).startOf("month"));
    this.endOfTheMonth = TODAY; // NOTE: 当日以降クリック不可
  },

  methods: {
    functionEvents(date: string): false | string[] {
      if (!this.$store.getters.isLoaded) {
        return false;
      }
      // TODO: 共通化→tooltipなどで再利用
      var target: { systolic: number; diastolic: number } | null = null;
      target = this.$store.getters.info.find(function (d: {
        date: string;
      }): boolean {
        return d.date === date;
      });
      //
      if (target) {
        return [
          CONST.COLORS[getSystolicColor()],
          CONST.COLORS[getDiastolicColor()],
        ];
      } else return false;
      //
      function getSystolicColor(this: any): number {
        return CONST.SYSTOLIC_THRESHOLD.findIndex(
          (systolic: number): boolean => systolic < target.systolic
        );
      }
      //
      function getDiastolicColor(this: any): number {
        return CONST.DIASTOLIC_THRESHOLD.findIndex(
          (diastolic: number): boolean => diastolic < target.diastolic
        );
      }
    },
    dblClick(date: string): void {
      console.info("dblClick:" + date);
    },
  },
};
function formatDate(
  day: string | number | Date | dayjs.Dayjs | null | undefined
): string {
  return dayjs(day).format("YYYY-MM-DD");
}
</script>
