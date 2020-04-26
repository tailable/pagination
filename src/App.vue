<template>
  <div id="app">
    <h2 class="my-2 text-center">Size sm</h2>
    <pagination
        :data="data"
        size="small"
        :showNumbers="true"
        @pageChanged="pageChanged">
    </pagination>

    <h2 class="my-2 text-center">Size md(default)</h2>
    <pagination
        :data="data"
        :showNumbers="true"
        @pageChanged="pageChanged">
    </pagination>

    <h2 class="my-2 text-center">Simple Size md(default)</h2>
    <pagination
        :data="data"
        @pageChanged="pageChanged">
    </pagination>

    <pagination
        :data="data"
        @pageChanged="pageChanged">
        <div slot="next-button">
            <svg fill="none" class="w-4 h-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
        </div>

        <div slot="previous-button">
            <svg fill="none" class="w-4 h-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
        </div>
    </pagination>

    <pagination
        :data="data"
        @pageChanged="pageChanged">
        <div slot="next-button">
            Next
        </div>

        <div slot="previous-button">
            Previous
        </div>
    </pagination>

    <h2 class="my-2 text-center">Simple Size sm</h2>
    <pagination
        :data="data"
        size="small"
        @pageChanged="pageChanged">
    </pagination>

     <pagination
        :data="data"
        size="small"
        @pageChanged="pageChanged">
        <div slot="next-button">
            <svg fill="none" class="w-4 h-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
        </div>

        <div slot="previous-button">
            <svg fill="none" class="w-4 h-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
        </div>
    </pagination>

    <pagination
        :data="data"
        size="small"
        @pageChanged="pageChanged">
        <div slot="next-button">
            Next
        </div>

        <div slot="previous-button">
            Previous
        </div>
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

    private url = process.env.VUE_APP_ELOQUENT_URL;
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
