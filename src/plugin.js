import Pagination from "./components/Pagination.vue";

export default {
    install(Vue) {
        Vue.component("laravel-vue-tailwind-pagination", Pagination);
    },
};