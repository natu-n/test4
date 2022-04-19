<script lang="ts">
import { Line, mixins } from "vue-chartjs";
import chartjsPluginAnnotation from "chartjs-plugin-annotation";
const { reactiveProp } = mixins;
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import CONST from "../const/CONST";

dayjs.extend(isBetween);

export default {
  extends: Line,
  mixins: [reactiveProp]
  name: "chart",
  data(): ChartInterface {
    return {
      pastDate: this.$store.getters.pastDate,
      stuts: 1,
      dateFrom: [],
      dateTo: [],
      data: {
        labels: [
          "-13d",
          "-12d",
          "-11d",
          "-10d",
          "-9d",
          "-8d",
          "-7d",
          "-6d",
          "-5d",
          "-4d",
          "-3d",
          "-2d",
          "-1d",
          "today",
        ],
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
        animation: false,
        maintainAspectRatio: false,
        width: 5,
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 70,
                suggestedMax: 200,
              },
            },
          ],
        },
      },
    };
  },
  //
  mounted(): void {
    const ano = {
      annotation: {
        annotations: [
          {
            type: "line", // 線を描画
            id: "hLine",
            mode: "horizontal", // 線を水平に引く
            scaleID: "y-axis-0",
            value: 70, // 基準となる数値
            borderWidth: 10, // 基準線の太さ
            borderColor: "red", // 基準線の色
          },
        ],
      },
    };

    this.addPlugin(chartjsPluginAnnotation);
    this.options.push(ano);
    this.renderChart(this.data, this.options);
  },
  //
  computed: {
    foo(): any[] {
      return [this.$store.getters.isLoaded, this.$store.getters.stuts];
    },
  },
  watch: {
    foo: {
      immediate: true, //  NOTE:ページ遷移用に設定
      handler: function (): void {
        if (!this.$store.getters.isLoaded) {
          return;
        }
        //
        let frame = {
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
        // TODO: 全体的にリファクタリング必要
        //  一つ目当日、二つ目はクリック
        this.dateTo[0] = this.$store.getters.today;
        // IDEA: ここで選択した日付を指定
        this.stuts =
          this.$store.getters.stuts > 0
            ? this.$store.getters.stuts
            : this.stuts;
        this.dateTo[1] = this.pastDate[this.stuts];

        for (const [ix, _] of this.dateTo.entries()) {
          this.dateFrom[ix] = calculate1stDay(this.dateTo[ix]);
        }

        const items = [];
        for (const [ix1, _] of this.dateTo.entries()) {
          items[ix1] = this.$store.getters.info.filter(
            (item: { date: string }) =>
              dayjs(item.date).isBetween(
                this.dateFrom[ix1],
                this.dateTo[ix1],
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
        [...Array(4)].map(() => this.data.datasets.push({ ...frame }).concat);
        // 血圧価設定
        this.data.datasets[0].data = items[0].map((item: bP) => item.systolic);
        this.data.datasets[1].data = items[0].map((item: bP) => item.diastolic);
        //
        this.data.datasets[2].data = items[1].map((item: bP) => item.systolic);
        this.data.datasets[3].data = items[1].map((item: bP) => item.diastolic);
        // IDEA:  dateをTooltipへ

        for (const [ix2, _] of this.data.datasets.entries()) {
          // this.data.datasets[ix].label =
          //   ix % 2 === 0 ? "Systolic" : "Diastolic";
          this.data.datasets[ix2].label = this.dateFrom[Math.trunc(ix2 / 2)];
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

// TODO:外だし
interface ChartInterface {
  pastDate: string[];
  stuts: number;
  dateFrom: string[];
  dateTo: string[];
  data: {
    labels: string[];
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
      yAxes: {
        ticks: {
          suggestedMin: number;
          suggestedMax: number;
        };
      }[];
    };
    animation: boolean;
  };
}

interface bP {
  //  bP as blood pressure
  systolic: number;
  diastolic: number;
}
</script>
