<template>
  <div class="small">
    <chart></chart>
  </div>
</template>

<script lang="ts">
import Chart from "../components/Chart.vue";

export default {
  components: {
    Chart,
  },
};
</script>

<style>
.chart-container {
  position: relative;
  width: 70vw;
  height: 45vw;
  min-width: 300px;
  min-height: 300px;
}

.chart-size {
  position: center;
  padding: 20px;
}
</style>
