<template>
  <div id="app">
    <pagination
        :limit="1"
        :data="data"
        size="small"
        @pageChanged="pageChanged">
    </pagination>
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

    private url = 'http://laravel-vue-datatable-example.test/api/eloquent';
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
        this.getData();
    }

    public getData(url = this.url, options = {}) {
        axios.get(url, {
            params: options,
        })
        .then((response) => {
            this.data = response.data;
        })
        .catch((errors) => {
            alert(errors);
        });
    }

    public pageChanged(page: number) {
        this.getData(this.url, {
            page,
        });
    }
}
</script>
