import { defineStore } from "pinia";
import dayjs from "dayjs";
const API_URL =
  "https://script.google.com/macros/s/AKfycbxIjB1PffnSn96gRvsCQWW2tYAwYZsceQ2_bU-Et0MQWwKxYdqnhV0pCQp0HzFIrI9F8g/exec";
type State = {};
export const useInfoStore = defineStore({
  state: (): State => ({
    info: {},
  }),
  getters: {
    today(state) {
      return useInfoStore(dayjs(new Date()).format("YYYY-MM-DD"));
    },
  },
  actions: {    async getJSON(): Promise<void> {
    if (!this.state.loading) {
      await axios
        .get(API_URL)
        .then((response) => (this.state.info = response.data))
        .finally(() => {
          return (
            (this.state.loading = true),
            this.commit("setInfo", this.state.info),
            this.commit("setLoading", this.state.loading)
          );
        });
},
});
