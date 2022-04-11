import Vue from "vue";
import Vuex from "vuex";
import dayjs from "dayjs";
import axios from "axios";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxIjB1PffnSn96gRvsCQWW2tYAwYZsceQ2_bU-Et0MQWwKxYdqnhV0pCQp0HzFIrI9F8g/exec";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    today: dayjs(new Date()).format("YYYY-MM-DD"),
    info: [],
    isLoaded: false,
    pastDate: [
      // dayjs(new Date()).format("YYYY-MM-DD"),
      dayjs(new Date()).subtract(1, "MONTH").format("YYYY-MM-DD"),
      dayjs(new Date()).subtract(3, "MONTH").format("YYYY-MM-DD"),
      dayjs(new Date()).subtract(6, "MONTH").format("YYYY-MM-DD"),
      dayjs(new Date()).subtract(1, "YEAR").format("YYYY-MM-DD"),
      dayjs(new Date()).subtract(3, "YEAR").format("YYYY-MM-DD"),
    ],
    stuts: 0,
  },
  getters: {
    today: (state) => state.today,
    info: (state) => state.info,
    isLoaded: (state) => state.isLoaded,
    pastDate: (state) => state.pastDate,
    stuts: (state) => state.stuts,
  },
  mutations: {
    setInfo(state, info): void {
      Vue.set(state, "info", info);
      console.info(`setInfo:`);
    },
    setIsLoaded(state, isLoaded): void {
      Vue.set(state, "isLoaded", isLoaded);
      console.info(`setisLoaded:${state.isLoaded}`);
    },
    setToday(state, today): void {
      state.today = today;
      console.info(`setToday:${state.today}`);
    },
    setStuts(state, stuts): void {
      state.stuts = stuts;
      console.info(`setStuts:${state.stuts}`);
    },
  },
  actions: {
    async getJSON(): Promise<void> {
      console.info("getJSON:" + this.state.isLoaded);
      if (!this.state.isLoaded) {
        await axios
          .get(API_URL)
          .then((response) => (this.state.info = response.data))
          .finally(() => {
            return (
              (this.state.isLoaded = true),
              this.commit("setInfo", this.state.info),
              this.commit("setIsLoaded", this.state.isLoaded)
            );
          });
      }
    },
  },
});
