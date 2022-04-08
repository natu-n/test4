<template>
  <v-app id="app">
    <v-app-bar app color="white" flat height="50">
      <v-container class="py-0 fill-height">
        <v-tabs>
          <v-tab v-for="link in links" :key="link" :to="link" text>
            {{ link }}
          </v-tab>
        </v-tabs>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list>
                <!-- <v-list-item-group v-model="model"> -->
                <!--  IDEA: クリックした位置を保存(VUEX) -->
                <v-list-item-group color="primary">
                  <v-list-item v-for="(period, i) in periods" :key="i">
                    <v-list-item-content>
                      <v-list-item-title v-text="period"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title> Refresh </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg" eager>
              <router-view class="chart-container" />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    links: ["Calendar", "DataGrid", "Chart", "Updates"],
    periods: [
      "one month ago",
      "3 months ago",
      "6 months ago",
      "last year",
      "3 years ago",
    ],
  }),
  mounted: function (): void {
    console.info("dispatch");
    this.$store.dispatch("getJSON");
  },
});
</script>
