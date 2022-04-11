<template>
  <v-container>
    <v-data-table
      class="font-weight-bold elevation-1"
      :dense="true"
      :headers="headers"
      :items="items"
      :items-per-page="14"
      :fixed-header="true"
      :sort-by="['date']"
      :sort-desc="['true']"
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
        <v-chip :color="setSystolicColor(item.systolic)" dark small>{{
          item.systolic
        }}</v-chip>
      </template>
      <template v-slot:item.diastolic="{ item }">
        <v-chip :color="setDiastolicColor(item.diastolic)" dark small>{{
          item.diastolic
        }}</v-chip>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import dayjs from "dayjs";
import CONST from '../const/CONST';

export default {
  data(): { items: any[]; headers: { text: string; align: string; value: string; sortable: boolean; }[]; page: number; modal: boolean; } {
    return {
      items: [],
      headers: [
        { text: "date", align: "center", value: "date", sortable: false },
        {
          text: "systolic",
          align: "center",
          value: "systolic",
          sortable: false,
        },
        {
          text: "diastolic",
          align: "center",
          value: "diastolic",
          sortable: false,
        },
      ],
      page: 1,
      modal: false,
    };
  },
  methods: {
    formatDate(date: string): string {
      return dayjs(date).format("MM-DD-YYYY");
    },
    //
    setSystolicColor(bp: number): string {
      return this.setColor(
        CONST.SYSTOLIC_THRESHOLD.findIndex((systolic) => bp > systolic)
      );
    },
    //
    setDiastolicColor(bp: number): string {
      return this.setColor(
        CONST.DIASTOLIC_THRESHOLD.findIndex((diastolic) => bp > diastolic)
      );
    },
    //
    setColor(ix: number): string {
      return CONST.COLORS[ix];
    },
  },
  computed: {
    foo(): boolean {
      return this.$store.getters.isLoaded;
    },
  },
  watch: {
    foo: {
      immediate: true,
      handler: function (): void {
        console.info("watch");
        this.items = this.$store.getters.info;
      },
    },
  },
};
</script>

<style>
.v-data-table-header tr {
  background-color: #7986cb;
}

.v-data-table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
/* CSSが当たってないっぽい */
.v-data-table-header th {
  background-color: #6667ab;
}
</style>
