<template>
    <div id="app" class="flex flex-col max-w-3xl mx-auto my-2 bg-white">

        <button @click="toggleFramework" class="">
            Toggle
        </button>

        <h2 class="my-2 text-center">Size sm</h2>
        <pagination
            :data="data"
            size="small"
            :showNumbers="true"
            :framework="framework"
            @page-changed="pageChanged">
        </pagination>

        <h2 class="my-2 text-center">Size md(default)</h2>
        <pagination
            :data="data"
            :showNumbers="true"
            :framework="framework"
            @page-changed="pageChanged">
        </pagination>

        <h2 class="my-2 text-center">Simple Size md(default)</h2>
        <pagination
            :data="data"
            :framework="framework"
            @page-changed="pageChanged">
        </pagination>

        <pagination
            :data="data"
            :framework="framework"
            @page-changed="pageChanged">
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
            :framework="framework"
            @page-changed="pageChanged">
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
            :framework="framework"
            @page-changed="pageChanged">
        </pagination>

        <pagination
            :data="data"
            size="small"
            :framework="framework"
            @page-changed="pageChanged">
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
            :framework="framework"
            @page-changed="pageChanged">
            <div slot="next-button">
                Next
            </div>

            <div slot="previous-button">
                Previous
            </div>
        </pagination>

        <h2 class="my-2 text-center">Custom Body using Slot</h2>
        <pagination
            :data="data"
            size="small"
            :framework="framework"
            @page-changed="pageChanged">

            <div
                class="flex"
                slot-scope="{ data, pageRange, currentPage, previousButtonHandler, nextButtonHandler, pageButtonHandler }">
                <ul class="relative inline-flex list-none mx-auto mt-4">
                    <li>
                        <button
                            @click="previousButtonHandler"
                            :disabled="!data.links.prev"
                            class="inline-flex items-center px-2 py-2 h-full text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border-l border-t border-b border-gray-400 hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:border-blue-300 focus:shadow-outline active:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
                            
                            <svg
                                fill="none"
                                class="w-5 h-5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                    </li>

                    <li v-for="(page, key) in pageRange" :key="key">
                        <button
                            @click="pageButtonHandler(page)"
                            :class="{
                                'bg-purple-500 text-white': page == currentPage,
                                'text-gray-700 border-l border-t border-b border-gray-400 hover:bg-gray-200': page != currentPage,
                            }"
                            class="inline-flex items-center px-4 py-2 h-full text-base font-medium leading-5 transition duration-150 ease-in-out bg-white active:bg-gray-200 focus:outline-none focus:border-blue-300 focus:shadow-outline active:text-gray-700">
                            {{ page }}
                        </button>
                    </li>
                    <li>
                        <button
                            @click="nextButtonHandler"
                            :disabled="!data.links.next"
                            class="inline-flex items-center px-2 py-2 h-full text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-400 hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:border-blue-300 focus:shadow-outline active:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
                            
                            <svg
                                fill="none"
                                class="w-5 h-5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </li>
                </ul>
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

    private framework = 'tailwind';

    private created() {
        this.getData();
    }

    private getData(url = this.url, options = {}) {
        
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

    private toggleFramework() {
        this.framework = this.framework === "bootstrap" ? "tailwind" : "bootstrap";
    }

    private pageChanged(page: number) {
        this.getData(this.url, {
            page,
        });
    }
}
</script>
