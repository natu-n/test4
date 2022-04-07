<script lang="ts">
import { Line } from "vue-chartjs";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import CONST from "../const/CONST";

dayjs.extend(isBetween);

export default {
  extends: Line,
  name: "chart",
  data(): {
    data: {
      dateFrom: string[];
      dateTo: string[];
      labels: number[];
      type: string;
      datasets: any[];
    };
    options: {
      legend: {
        position: string;
        labels: {
          fontSize: number;
          filter: (items: { text: string }) => boolean;
        };
      };
      responsive: boolean;
      maintainAspectRatio: boolean;
      width: number;
      scales: {
        yAxes: { ticks: { suggestedMin: number; suggestedMax: number } }[];
      };
      animation: boolean;
    };
  } {
    return {
      data: {
        dateFrom: [],
        dateTo: [],
        labels: [-13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0],
        type: "line",
        datasets: [],
      },
      options: {
        legend: {
          position: "top",
          labels: {
            fontSize: 16,
            filter: (items: { text: string }): boolean =>
              items.text != "hidden",
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        width: 5,
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 70,
                suggestedMax: 220,
              },
            },
          ],
        },
        animation: false,
      },
    };
  },
  //
  mounted(): void {
    this.renderChart(this.data, this.options);
  },
  //
  computed: {
    foo(): boolean {
      return this.$store.getters.isLoaded;
    },
  },
  watch: {
    foo: {
      immediate: true, //  NOTE:ページ遷移用に設定
      handler: function (): void {
        console.info("Cart:watch"); // CHECK: debug line
        //
        var frame = {
          label: "",
          borderColor: "",
          backgroundColor: "",
          lineTension: 0,
          pointRadius: 1,
          borderWidth: 3, //  or 5
          pointStyle: "circle",
          fill: false,
          tooltips: {
            enabled: false,
          },
          data: [],
        };
        //
        //  日付の計算
        //
        this.data.dateTo[0] = this.$store.getters.today;
        this.data.dateTo[1] = formatDate({
          day: dayjs(this.data.dateTo[0]).subtract(1, "Month"),
        });
        this.data.dateTo[2] = formatDate({
          day: dayjs(this.data.dateTo[0]).subtract(1, "Year"),
        });

        for (const [ix, _] of this.data.dateTo.entries()) {
          this.data.dateFrom[ix] = calculate1stDay(this.data.dateTo[ix]);
        }

        const items = [];
        for (const [ix1, _] of this.data.dateTo.entries()) {
          items[ix1] = this.$store.getters.info.filter(
            (item: { date: string }) =>
              dayjs(item.date).isBetween(
                this.data.dateFrom[ix1],
                this.data.dateTo[ix1],
                null,
                "(]" //  NOTE:以下指定だと結果が正しくない
              )
          );
        }
        //
        // 参照渡しになって同じ値に
        //
        // NOTE:データテーブル初期化する
        this.data.datasets.length = 0;
        [...Array(6)].map(() => this.data.datasets.push({ ...frame }).concat);
        // 血圧価設定
        interface bP {
          //  bP as blood pressure
          systolic: number;
          diastolic: number;
        }
        this.data.datasets[0].data = items[0].map((item: bP) => item.systolic);
        this.data.datasets[1].data = items[0].map((item: bP) => item.diastolic);
        //
        this.data.datasets[2].data = items[1].map((item: bP) => item.systolic);
        this.data.datasets[3].data = items[1].map((item: bP) => item.diastolic);
        //
        this.data.datasets[4].data = items[2].map((item: bP) => item.systolic);
        this.data.datasets[5].data = items[2].map((item: bP) => item.diastolic);
        // IDEA:  dateをTooltipへ

        for (const [ix2, _] of this.data.datasets.entries()) {
          // this.data.datasets[ix].label =
          //   ix % 2 === 0 ? "Systolic" : "Diastolic";
          this.data.datasets[ix2].label =
            this.data.dateFrom[Math.trunc(ix2 / 2)];
          this.data.datasets[ix2].borderColor = CONST.BORDERCOLORS[ix2];
          this.data.datasets[
            ix2
          ].backgroundColor = `${CONST.BORDERCOLORS[ix2]}88`;
        }

        Array.prototype.push.apply(this.data.datasets, CONST.BORDER);
        // 直近を目立たせる
        this.data.datasets[0].borderWidth = 5;
        this.data.datasets[1].borderWidth = 5;
        //
        this.renderChart(this.data, this.options);
      },
    },
  },
};

function calculate1stDay(day: dayjs.Dayjs): string {
  return formatDate({ day: dayjs(day).subtract(14, "day") });
}
function formatDate({ day }: { day: dayjs.Dayjs }): string {
  return dayjs(day).format("YYYY-MM-DD");
}
</script>
