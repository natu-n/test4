<script lang="ts">
import store from "@/store";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);
//
export default {
  data: function () {
    return {};
  },
  //
  methods: {
    // メソッド名は替える
    getSeries: function (today: string): any {
      const noData = {
        date: "",
        systolic: null,
        diastolic: null,
      };
      const from = dayjs(today).subtract(14, "day").format("YYYY-MM-DD");
      // FromからToまでの配列を作る
      const DateArray = [...Array(14)].map((_, i) =>
        dayjs(from)
          .add(i + 1, "day")
          .format("YYYY-MM-DD")
      );
      //
      const _items = store.getters.info.filter((item: { date: string }) => {
        return dayjs(item.date).isBetween(from, today, null, "(]");
      });
      // TODO bとcを一回で
      // NxN回処理
      const _tmp = DateArray.map((date, _) => {
        // 欠損データは詰まっているのでundefとする ex) 1, 2, 4 => 1, 2, undef, 4
        return _items.find((item: any) => item.date == date);
      });
      // undefの場合に差し込み(14回)
      const items = _tmp.map((x) => {
        return x ? x : noData;
      });
      //
      const systolic = items.map((item: bP) => item.systolic);
      const diastolic = items.map((item: bP) => item.diastolic);
      //
      return [systolic, diastolic];
    },
  },
};

interface bP {
  //  bP as blood pressure
  systolic: number | null;
  diastolic: number | null;
}
</script>
