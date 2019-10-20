<template>
  <button
    class="cf-btn"
    @click="handleClick">
    {{ buttonContent }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CfButton extends Vue {
  @Prop() public buttonContent!: string;

  public handleClick() {
    this.$emit('click');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .cf-btn {
    height: 30px;
    padding: 7px 10px;
    background-color: #fff;
    border: 1px solid #aeaeae;
    color: #aeaeae;
    cursor: pointer;
    transition: .2s;

    &:hover {
      border: 1px solid #000;
      color: #000;
    }
  }
</style>
