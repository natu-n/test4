<template>
  <v-row justify="space-around">
    <div>
      <div class="subheading">Past</div>
      <v-date-picker
        v-model="pastMonth"
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
import store from "@/store";
import dayjs from "dayjs";
import CONST from "../const/CONST";

interface calendarInterface {
  pastMonth: string;
  startOfTheMonth: string;
  endOfTheMonth: string;
  currentDate: string;
  endOfLastMonth: string;
  pastDate: string[];
  stuts: number;
}

export default {
  data(): calendarInterface {
    return {
      pastMonth: "",
      startOfTheMonth: "",
      endOfTheMonth: "",
      currentDate: "",
      endOfLastMonth: "",
      pastDate: store.getters.pastDate,
      stuts: store.getters.stuts,
    };
  },

  created(): void {
    const TODAY = store.getters.today;
    // NOTE: 先月までのカレンダープロパティ
    this.pastMonth = dayjs(TODAY).subtract(1, "MONTH").format("YYYY-MM-DD");
    this.endOfLastMonth = dayjs(TODAY)
      .subtract(1, "MONTH")
      .endOf("month")
      .format("YYYY-MM-DD");
    //
    // NOTE: 今月のカレンダー(移動不可)プロパティ
    this.currentDate = TODAY;
    this.startOfTheMonth = dayjs(TODAY).startOf("month").format("YYYY-MM-DD");
    this.endOfTheMonth = TODAY;
  },

  computed: {
    foo(): number {
      this.stuts = store.getters.stuts;
      return store.getters.stuts;
    },
  },

  methods: {
    functionEvents(date: string): false | string[] {
      if (!store.getters.isLoaded) {
        return false;
      }
      // TODO: 共通化→tooltipなどで再利用
      var target: { systolic: number; diastolic: number } | null = null;
      target = store.getters.info.find(function (d: {
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

    // NOTE: 実験用
    dblClick(date: string): void {
      console.info("dblClick:" + date);
    },
  },
  watch: {
    foo: {
      immediate: true,
      handler: function (): void {
        console.info(`stutsの値が変更されました:${this.stuts}:`);
        this.pastMonth =
          this.stuts > 0 ? this.pastDate[this.stuts] : this.pastDate[1];
      },
    },
  },
};
</script>
