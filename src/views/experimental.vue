<template>
  <div>
    <v-card class="mx-auto" max-width="400" tile>
      <v-card-title> Laboratory </v-card-title>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>today</v-list-item-title>
          <v-list-item-subtitle>today :{{ pastDate[0] }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>one month ago</v-list-item-title>
          <v-list-item-subtitle
            >pastDate[0] :{{ pastDate[1] }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>3 months ago</v-list-item-title>
          <v-list-item-subtitle
            >pastDate[1] :{{ pastDate[2] }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>6 months ago</v-list-item-title>
          <v-list-item-subtitle
            >pastDate[2] :{{ pastDate[3] }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>last year</v-list-item-title>
          <v-list-item-subtitle
            >pastDate[3] :{{ pastDate[4] }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Index</v-list-item-title>
          <v-list-item-subtitle>:{{ stuts }}:</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script lang="ts">
export default {
  data(): {
    today: string;
    pastDate: string[];
    stuts: number;
  } {
    return {
      today: this.$store.getters.today,
      pastDate: this.$store.getters.pastDate,
      stuts: this.$store.getters.stuts,
    };
  },
  created: {},
  computed: {
    foo(): number {
      this.stuts = this.$store.getters.stuts;
      return this.$store.getters.stuts;
    },
  },
  method: {},
  // NOTE:この流れをセットする
  watch: {
    foo: {
      immediate: true,
      handler: function (): void {
        console.info(`stutsの値が変更されました:${this.stuts}:`);
      },
    },
  },
};
</script>

<style>
</style>