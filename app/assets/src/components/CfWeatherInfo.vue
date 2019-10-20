<template>
  <div class="cf-weather-info">
    <h2>
      <template v-if="weather && weather.city && weather.city.main">{{ Math.round(weather.city.main.temp) }}</template>
      <template v-else>--</template>
      &#186C
    </h2>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class CfWeatherInfo extends Vue {
    @Prop({ required: true }) public weather!: string;
  }
</script>

<style lang="scss">
  .cf-weather-info {
    margin-top: 100px;
    h2 {
      font-size: 42px;
      margin: 0;
    }
  }
</style>
