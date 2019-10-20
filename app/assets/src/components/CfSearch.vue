<template>
  <div class="search-wrapper">
    <CfInput placeholder="type city name..." v-model="searchQuery" />
    <CfButton buttonContent="Search" @click="searchWeather" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CfInput from './CfInput.vue';
import CfButton from './CfButton.vue';

@Component({
  components: {
    CfInput,
    CfButton,
  },
})
export default class CfSearch extends Vue {
  public searchQuery: string = '';

  public searchWeather() {
    this.$emit('search', this.searchQuery);
  }
}
</script>

<style lang="scss">
.search-wrapper {
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  .cf-input-wrapper {
    width: 100%;
    margin-right: 10px;
  }
}
</style>
