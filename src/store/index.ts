import Vue from "vue";
import Vuex from "vuex";
import dayjs from "dayjs";
import axios from "axios";

// Vue.use(Vuex);

const API_URL =
  "https://script.google.com/macros/s/AKfycbxIjB1PffnSn96gRvsCQWW2tYAwYZsceQ2_bU-Et0MQWwKxYdqnhV0pCQp0HzFIrI9F8g/exec";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    today: dayjs(new Date()).format("YYYY-MM-DD"),
    toDate: dayjs(new Date()).format("YYYY-MM-DD"),
    info: null,
    loading: false,
  },
  mutations: {},
  actions: {
    async getJSON(): Promise<void> {
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
      }
    },
    setInfo(state, info): void {
      state.info = info;
      console.log(`setInfo:${state.info.length}`);
    },
    setLoading(state, loading): void {
      state.loading = loading;
      console.log(`setLoading:${state.loading}`);
    },
    setToDate(state, toDate): void {
      state.toDate = toDate;
      console.log(`setToDate:${state.toDate}`);
    },
  },
  modules: {},
});
