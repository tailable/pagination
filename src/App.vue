<template>
  <div id="app">
    <Pagination :data="data" />
  </div>
</template>

<script lang="ts">

import axios from 'axios';
import Pagination from './components/Pagination.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        Pagination,
    },
})

export default class App extends Vue {
    private data: {
        data: object[],
        payload: object[],
        links: object,
        meta: object,
    } = {
        data: [],
        payload: [],
        links: {},
        meta: {},
    };
    public created() {
        axios.get('http://laravel-vue-datatable-example.test/api/eloquent')
            .then((response) => {
                this.data = response.data;
            })
            .catch((errors) => {
                alert(errors);
            });
    }
}
</script>
