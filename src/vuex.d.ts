// vuex.d.ts
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // ストアのステートを宣言する
  interface State {
    state: {
      today: string;
      toDate: string;
      info: {};
      loading: boolean;
    };
  }

  // `this.$store` の型付けを提供する
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
