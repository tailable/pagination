import TailablePagination from './components/Pagination.vue';

export default {
    install(Vue) {
        Vue.component('tailable-pagination', TailablePagination);
    },
};

export { TailablePagination };
