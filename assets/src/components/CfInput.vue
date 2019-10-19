<template>
  <div class="cf-input-wrapper">
    <input
      :placeholder="placeholder"
      :value="newValue"
      :name="name"
      ref="input"
      :type="type"
      :disabled="disabled"
      @input="onInput"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
      @keypress="onKeypress"
      @keyup="onKeyup">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class CfInput extends Vue {
  @Prop({ default: 'text' }) public type!: string;
  @Prop() public name!: string;
  @Prop() public placeholder!: string;
  @Prop() public value!: number | string;
  @Prop() public disabled!: boolean;
  @Prop({ default: (): string[] => ['input', 'change', 'focus', 'blur', 'keypress', 'keyup'] })

  public inputEvents!: string[];

  public newValue: number | string = this.value;
  public oldValue: number | string = this.value;
  public get: any = '';

  @Watch('value')
  private valueChange(newVal: number | string, oldVal: number | string) {
    this.newValue = newVal;
    this.oldValue = oldVal;
  }

  private onInput(event: Event) {
    const value: any = (event.target as HTMLInputElement).value;
    this.newValue = value;
    if (this.inputEvents.indexOf('input') !== -1) {
      this.$emit('input', this.newValue);
    }
  }

  private onChange(event: Event) {
    const value: any = (event.target as HTMLInputElement).value;
    this.newValue = value;
    if (this.inputEvents.indexOf('change') !== -1) {
      this.$emit('change', this.newValue);
    }
  }

  private onFocus() {
    if (this.inputEvents.indexOf('focus') !== -1) {
      this.$emit('focus');
    }
  }

  private onBlur() {
    if (this.inputEvents.indexOf('blur') !== -1) {
      this.$emit('blur', this.newValue);
    }
  }

  private onKeypress($event: Event) {
    if (this.inputEvents.indexOf('keypress') !== -1) {
      this.$emit('keypress', $event);
    }
  }

  private onKeyup($event: Event) {
    if (this.inputEvents.indexOf('keyup') !== -1) {
      this.$emit('keyup', $event);
    }
  }
}
</script>

<style lang="scss">
  .cf-input-wrapper {
    border-bottom: 1px solid #aeaeae;

    input {
      height: 30px;
      font-size: 24px;
      line-height: 1.4;
      outline: none;
      width: 100%;
      border: none;
    }
  }
</style>
