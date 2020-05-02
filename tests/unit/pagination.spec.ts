import { mount } from '@vue/test-utils';
import Pagination from '@/components/Pagination.vue';

describe('Pagination.vue', () => {
  it('can be mounted', () => {
    const data = {
      data: [],
      meta: {},
      links: {},
    };
    const wrapper = mount(Pagination, {
      propsData: { data },
    });
  });
});
