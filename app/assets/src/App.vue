<template>
  <div id="app">
    <CfSearch @search="onSearch"/>
    <CfWeatherInfo
      :weather="weather"
    ></CfWeatherInfo>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import CfSearch from './components/CfSearch.vue';
  import CfWeatherInfo from './components/CfWeatherInfo.vue';
  import { ApiServiceInterface } from './services/api.interface';
  import { ApiService } from './services/api.service';

  @Component({
    components: {
      CfSearch,
      CfWeatherInfo,
    },
  })
  export default class App extends Vue {
    public apiService: ApiServiceInterface = new ApiService();
    public weather: any = null;
    public errorMessage = null;

    public onSearch(query: string) {
      this.errorMessage = null;
      this.apiService.getWeather(query).then((response: any) => {
        this.weather = response.data;
      }).catch((error: any) => {
        this.errorMessage = error.response.data.error.message;
      });
    }
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
