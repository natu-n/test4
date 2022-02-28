<template>
  <v-app>
    <v-container>
      <template v-if="$store.state.loading">
        <p v-if="this.toDate == null" v-show="true">
          {{ (this.toDate = this.$store.state.toDate) }}
        </p>
      </template>

      <v-data-table
        class="font-weight-bold elevation-1"
        :dense="true"
        :headers="headers"
        :items="this.$store.state.info"
        :items-per-page="14"
        :fixed-header="true"
        :sort-by="['date']"
        :sort-desc="['true']"
        :custom-filter="customFilter"
        :footer-props="{
          showFirstLastPage: true,
          firstIcon: 'mdi-arrow-collapse-left',
          lastIcon: 'mdi-arrow-collapse-right',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus',
          itemsPerPageOptions: [7, 14, 30, 90],
        }"
        height="500px"
      >
        <template v-slot:item.date="{ item }">
          <td>{{ formatDate(item.date) }}</td>
        </template>
        <template v-slot:item.systolic="{ item }">
          <v-chip :color="getSystolicColor(item.systolic)" dark small>{{
            item.systolic
          }}</v-chip>
        </template>
        <template v-slot:item.diastolic="{ item }">
          <v-chip :color="getDiastolicColor(item.diastolic)" dark small>{{
            item.diastolic
          }}</v-chip>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import dayjs from "dayjs";

export default {
  data: () => ({
    headers: [
      { text: "date", align: "center", value: "date", sortable: false },
      { text: "systolic", align: "center", value: "systolic", sortable: false },
      {
        text: "diastolic",
        align: "center",
        value: "diastolic",
        sortable: false,
      },
    ],
    page: 1,
    toDate: dayjs().format("MM-DD-YYYY"),
    modal: false,
  }),

  created: function (): void {
    if (!this.$store.state.loading) {
      this.$store.dispatch("getJSON");
      //
      console.log("axios:");
    }
  },

  methods: {
    setDate(value: any): void {
      this.$refs.dialog.save(value);
      this.$store.commit("setToDate", value);
    },

    customFilter(value: number): boolean {
      return this.fromDate <= value && value <= this.toDate;
    },
    formatDate(date): string {
      return dayjs(date).format("MM-DD-YYYY");
    },
    getSystolicColor(bp: number): string {
      if (bp > 134) return "red";
      else if (bp > 129) return "orange";
      else return "green";
    },
    getDiastolicColor(bp: number): string {
      if (bp > 84) return "red";
      else if (bp > 79) return "orange";
      else return "green";
    },
  },
  computed: {
    _fromDate: function (): string {
      return dayjs(this.toDate).subtract(6, "month").format("YYYY-MM-DD");
    },
    get fromDate() {
      return this._fromDate;
    },
    set fromDate(value) {
      this._fromDate = value;
    },
  },
};
</script>

<style>
.v-data-table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
/* CSSが当たってないっぽい */
.v-data-table-header th {
  background-color: #6667ab;
}
</style>
