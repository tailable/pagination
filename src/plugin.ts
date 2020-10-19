import Pagination from './components/Pagination.vue';

export default {
    install(Vue) {
        Vue.component('tailable-pagination', Pagination);
    },
};
