<script lang="ts">
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(isSameOrBefore);

export default {
  name: "Datagrid",
  data(): dataGridInterface {
    return {
      today: this.$store.getters.today,
      pastDate: this.$store.getters.pastDate,
      stuts: this.$store.getters.stuts,
      isLoaded: this.$store.getters.isLoaded,
      items: [],
    };
  },
  computed: {
    // CHECK: 複数監視するには？ https://qiita.com/sonimaru/items/0cf87934d90365ec10c3
    foo(): any[] {
      return [this.$store.getters.isLoaded, this.$store.getters.stuts];
    },
  },
  watch: {
    foo: {
      immediate: true,
      handler: function (val: any[]): void {
        if (!this.$store.getters.isLoaded) {
          return;
        }

        this.stuts = this.$store.getters.stuts;
        // NOTE: 親にデータを私のはthis.$parent.～
        this.$parent.items = this.$store.getters.info.filter(
          (item: { date: string }) =>
        // TODO: 範囲を絞る ex)dayjs('2010-10-20').isSameOrBefore('2010-10-19', 'year')
            dayjs(item.date).isSameOrBefore(this.pastDate[this.stuts], "day")
        );
      },
    },
  },
};

interface dataGridInterface {
  today: string;
  pastDate: string[];
  stuts: number;
  isLoaded: boolean;
  items: any[];
}
</script>
