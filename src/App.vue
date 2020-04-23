<template>
  <div id="app">
    <Pagination :data="data" />
  </div>
</template>

<script lang="ts">

import axios from "axios";
import Pagination from './components/Pagination.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        Pagination
    },
})

export default class App extends Vue {
    data: {
        data: Array<Object>,
        payload: Array<Object>,
        links: Object,
        meta: Object,
    } = {
        data: [],
        payload: [],
        links: {},
        meta: {},
    }
    created() {
        axios.get("http://laravel-vue-datatable-example.test/api/eloquent")
            .then(response => {
                this.data = response.data;
            })
            .catch(errors => {
                alert(errors);
            });
    }
}
</script>
