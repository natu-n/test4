<script lang="ts">
import { Line } from "vue-chartjs";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

export default {
  extends: Line,
  name: "chart",
  data(): {
    data: {
      dateFrom: any[];
      dateTo: any[];
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
      immediate: true,
      handler: function (): void {
        console.info("Cart:watch");
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
        // 参照渡しになって同じ値に
        console.info("bf:" + this.data.datasets.length);
        if (this.data.datasets.length !== 10) {
          [...Array(6)].map(() => this.data.datasets.push({ ...frame }));
        }
        console.info("af:" + this.data.datasets.length);

        //  Memo: 日付の計算
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
        for (const [ix, _] of this.data.dateTo.entries()) {
          items[ix] = this.$store.getters.info.filter(
            (item: { date: string }) =>
              dayjs(item.date).isBetween(
                this.data.dateFrom[ix],
                this.data.dateTo[ix],
                null,
                "(]" //  以下指定だと結果が？
              )
          );
        }
        console.info("??:" + this.data.datasets.length);
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

        console.info("??:" + this.data.datasets.length);
        //FIXME: こっから
        //  [ ]
        const borderColors = [
          "#D50000",
          "#2962FF",
          "#FF5252",
          "#448AFF",
          "#FF8A80",
          "#82B1FF",
        ];
        for (const [ix, _] of this.data.datasets.entries()) {
          // this.data.datasets[ix].label =
          //   ix % 2 === 0 ? "Systolic" : "Diastolic";
          this.data.datasets[ix].label = this.data.dateFrom[Math.trunc(ix / 2)];
          this.data.datasets[ix].borderColor = borderColors[ix];
          this.data.datasets[ix].backgroundColor = `${borderColors[ix]}88`;
          // TODO: 共通プロパティを個別にセット(無駄)
          this.data.datasets[ix].fill = false;
          this.data.datasets[ix].lineTension = 0;
        }
        console.info("??:" + this.data.datasets.length);
        // FIXME: ここまで外出し化を考える

        // TODO: ここで巻き上げた配列を消す
        this.data.datasets.length -= this.data.datasets.filter(
          (val: { [index: string]: string }) => {
            return val.borderColor === undefined;
          }
        ).length;
        console.info("??:" + this.data.datasets.length);

        // TODO: この辺をスッキリと書きたい
        this.data.datasets.push(
          {
            label: "hidden",
            borderColor: "green",
            lineTension: 0,
            pointRadius: 0,
            fill: false,
            tooltips: {
              enabled: false,
            },
            data: [...Array(14)].fill(79),
          },
          {
            label: "hidden",
            borderColor: "orange",
            lineTension: 0,
            pointRadius: 0,
            fill: false,
            tooltips: {
              enabled: false,
            },
            data: [...Array(14)].fill(84),
          },
          {
            label: "hidden",
            borderColor: "green",
            lineTension: 0,
            pointRadius: 0,
            fill: false,
            tooltips: {
              enabled: false,
            },
            data: [...Array(14)].fill(129),
          },
          {
            label: "hidden",
            borderColor: "orange",
            lineTension: 0,
            pointRadius: 0,
            fill: false,
            tooltips: {
              enabled: false,
            },
            data: [...Array(14)].fill(134),
          }
        );
        // 直近を目立たせる
        this.data.datasets[0].borderWidth = 5;
        this.data.datasets[1].borderWidth = 5;
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
