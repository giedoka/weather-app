import { shallowMount } from '@vue/test-utils';
import CfSearch from '@/components/CfSearch.vue';

describe('CfSearch.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(CfSearch, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
