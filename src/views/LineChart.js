import {
  Line,
  mixins
} from "vue-chartjs";
const {
  reactiveProp
} = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ["options"],
  // mounted () {
  //   // this.chartData is created in the mixin.
  //   // If you want to pass options please create a local options object
  //   this.renderChart(this.chartData, this.options);
  // },
  computed: {
    foo(): boolean {
      return this.$store.getters.isLoaded;
    },
  },
  watch: {
    foo: {
      // immediate: true,
      handler: function (o: any, n: any): void {
        console.info("watch");
        this.items = this.$store.getters.info;
        this.renderChart(this.chartData, this.options);
      },
    },
  },
};