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
            borderWidth: 5,
            data: [],
          },
          {
            borderWidth: 5,
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

        this.data.dateTo[0] = this.$store.getters.today;
        this.data.dateTo[1] = formatDate({
          day: dayjs(this.data.dateTo[0]).subtract(1, "Month"),
        });
        this.data.dateTo[2] = formatDate({
          day: dayjs(this.data.dateTo[0]).subtract(1, "Year"),
        });

        for (const [index, _] of this.data.dateTo.entries()) {
          this.data.dateFrom[index] = calculate1stDay(this.data.dateTo[index]);
        }

        const items = [];
        for (const [index, _] of this.data.dateTo.entries()) {
          items[index] = this.$store.getters.info.filter(
            (item: { date: string }) =>
              dayjs(item.date).isBetween(
                this.data.dateFrom[index],
                this.data.dateTo[index],
                null,
                "(]" //  以下指定だと結果が？
              )
          );
        }
        this.data.datasets[0].data = items[0].map(
          (item: { systolic: number }) => item.systolic
        );
        this.data.datasets[2].data = items[1].map(
          (item: { systolic: number }) => item.systolic
        );
        this.data.datasets[4].data = items[2].map(
          (item: { systolic: number }) => item.systolic
        );
        this.data.datasets[1].data = items[0].map(
          (item: { diastolic: number }) => item.diastolic
        );
        this.data.datasets[3].data = items[1].map(
          (item: { diastolic: number }) => item.diastolic
        );
        this.data.datasets[5].data = items[2].map(
          (item: { diastolic: number }) => item.diastolic
        );

        const borderColors = [
          "#D50000",
          "#2962FF",
          "#FF5252",
          "#448AFF",
          "#FF8A80",
          "#82B1FF",
        ];
        for (const [index, _] of this.data.datasets.entries()) {
          this.data.datasets[index].label =
            index % 2 === 0 ? "Systolic" : "Diastolic";
          this.data.datasets[index].borderColor = borderColors[index];
          this.data.datasets[
            index
          ].backgroundColor = `${borderColors[index]}88`;
          this.data.datasets[index].fill = false;
          this.data.datasets[index].lineTension = 0;
        }

        // TODO:ここで巻き上げた配列を消す
        var needDeleteCnt = 0;
        for (const [index, _] of this.data.datasets.entries()) {
          if (this.data.datasets[index].borderColor === undefined) {
            needDeleteCnt++;
          }
        }
        this.data.datasets.length -= needDeleteCnt;

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
            data: [...Array(14)].map((x) => 79),
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
            data: [...Array(14)].map((x) => 84),
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
            data: [...Array(14)].map((x) => 129),
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
            data: [...Array(14)].map((x) => 134),
          }
        );
        // TODO:これをページ遷移の都度
        // this.$data._chart.destroy();
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
