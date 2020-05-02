import { mount } from '@vue/test-utils';
import RenderlessPagination from '@/components/RenderlessPagination.vue';

describe('RenderlessPagination.vue', () => {
  it('can be mounted', () => {
    const data = {
      data: [],
      meta: {},
      links: {},
    };
    const wrapper = mount(RenderlessPagination, {
      propsData: { data },
    });

    expect(wrapper.isVueInstance()).toBe(true);
  });
});
