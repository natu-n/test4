<template>
  <v-row justify="space-around">
    <div>
      <div class="subheading">Past</div>
      <v-date-picker
        v-model="date1"
        :first-day-of-week="1"
        :events="functionEvents"
        event-color="green lighten-1"
        max="2022-01-31"
        elevation="2"
      ></v-date-picker>
    </div>
    <div>
      <div class="subheading">Current</div>
      <v-date-picker
        v-model="date2"
        :first-day-of-week="1"
        :events="functionEvents"
        :disabled="true"
        elevation="2"
      ></v-date-picker>
    </div>
  </v-row>
</template>

<script lang="ts">
import dayjs from "dayjs";

export default {
  data: () => ({
    date1: dayjs().subtract(1, "MONTH").format("YYYY-MM-DD"),
    date2: dayjs().format("YYYY-MM-DD"),
  }),

  // created: function (): void {
  //   if (!this.$store.state.loading) {
  //     this.$store.dispatch("getJSON");
  //   }
  // },

  methods: {
    functionEvents(date: string): false | string[] {
      //
      let retArry = [];
      let target: { diastolic: number; systolic: number };
      if (this.$store.state.loading) {
        target = this.$store.state.info.find((d) => {
          return d.date === date;
        });
      }
      if (target) {
        console.log(`${date} = ${target.diastolic}:${target.systolic}`);
        if (target.systolic > 134) {
          retArry.push("red");
        } else if (target.systolic > 129) [retArry.push("orange")];
        else {
          retArry.push("green");
        }

        if (target.diastolic > 84) {
          retArry.push("red");
        } else if (target.diastolic > 79) retArry.push("orange");
        else retArry.push("green");
        return retArry;
      } else return false;
    },
  },
};
</script>
