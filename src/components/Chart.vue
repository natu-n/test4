<script lang="ts">
import { Line } from "vue-chartjs";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

export default {
  extends: Line,
  name: "chart",
  data() {
    return {
      data: {
        dateFrom: [],
        dateTo: [],
        labels: [-13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0],
        type: "line",
        datasets: [
          {
            data: [],
          },
          {
            data: [],
          },
          {
            data: [],
          },
          {
            data: [],
          },
          {
            data: [],
          },
          {
            data: [],
          },
        ],
      },
      options: {
        legend: {
          position: "top",
          labels: {
            fontSize: 16,
            filter: (items: { text: string }): boolean =>
              items.text != "Reference",
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
  mounted() {
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

        //ToDo: こっから
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
          // ToDo: 共通プロパティを個別にセット(無駄)
          this.data.datasets[ix].fill = false;
          this.data.datasets[ix].lineTension = 0;
        }
        // ここまで外出し化を考える

        // ToDo: ここで巻き上げた配列を消す
        this.data.datasets.length -= this.data.datasets.filter(
          (val: { [index: string]: string }) => {
            return val.borderColor === undefined;
          }
        ).length;

        this.data.datasets.push(
          {
            label: "Reference",
            borderColor: "green",
            lineTension: 0,
            pointRadius: 0,
            fill: false,
            tooltips: {
              enabled: false,
            },
            data: [...Array(14)].map((_x) => 79),
          },
          {
            label: "Reference",
            borderColor: "orange",
            lineTension: 0,
            pointRadius: 0,
            fill: false,
            tooltips: {
              enabled: false,
            },
            data: [...Array(14)].map((_x) => 84),
          },
          {
            label: "Reference",
            borderColor: "green",
            lineTension: 0,
            pointRadius: 0,
            fill: false,
            tooltips: {
              enabled: false,
            },
            data: [...Array(14)].map((_x) => 129),
          },
          {
            label: "Reference",
            borderColor: "orange",
            lineTension: 0,
            pointRadius: 0,
            fill: false,
            tooltips: {
              enabled: false,
            },
            data: [...Array(14)].map((_x) => 134),
          }
        );
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
