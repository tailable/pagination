<template>
    <renderless-pagination
        :data="data"
        :size="size"
        :limit="limit"
        :show-disabled="showDisabled"
        @pagination-change-page="onPaginationChangePage">

        <div
            slot-scope="{ data, from, to, total, perPage, prevPageUrl, nextPageUrl, limit, showDisabled, size, pageRange, currentPage, previousButtonHandler, nextButtonHandler, pageButtonHandler }">
            <slot
                :data="data"
                :pageRange="pageRange"
                :currentPage="currentPage"
                :nextButtonHandler="nextButtonHandler"
                :pageButtonHandler="pageButtonHandler"
                :previousButtonHandler="previousButtonHandler">

                <div :class="containerClasses" class="d-flex justify-content-between">
                    <div class="flex mb-3 sm:mb-0">
                        <p
                            :class="{
                                'text-base': size == 'default',
                                'text-sm': size == 'small',
                            }"
                            class="leading-5 text-gray-700">
                            Showing
                            <span class="font-medium">{{ from }}</span>
                            to
                            <span class="font-medium">{{ to }}</span>
                            of
                            <span class="font-medium">{{ total }}</span>
                            results
                        </p>
                    </div>
                    <div class="flex">
                        <ul
                            :class="ulClasses"
                            v-if="total > perPage">
                            <li
                                v-if="prevPageUrl || showDisabled"
                                :class="{'page-item pagination-prev-nav': framework === 'bootstrap', 'disabled': !prevPageUrl && framework === 'bootstrap'}">
                                <button
                                    type="button"
                                    @click="previousButtonHandler"
                                    :tabindex="!prevPageUrl && -1"
                                    :class="previousButtonClasses"
                                    :disabled="!prevPageUrl">
                                    
                                    <slot name="previous-button">
                                        <svg
                                            fill="none"
                                            v-if="framework === 'tailwind'"
                                            :class="previousButtonIconClasses"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M15 19l-7-7 7-7"></path>
                                        </svg>
                                        <span v-else>
                                            {{ translate.previousButton }}
                                        </span>
                                    </slot>
                                </button>
                            </li>

                            <template v-if="showNumbers">
                                <li :class="{'page-item pagination-page-nav': framework === 'bootstrap', 'active': framework === 'bootstrap' && page == currentPage }" v-for="(page, key) in pageRange" :key="key">
                                    <button
                                        type="button"
                                        @click="pageButtonHandler(page)"
                                        :class="numberButtonClasses(page, currentPage)">
                                        {{ page }}
                                        <span class="sr-only" v-if="page == currentPage">(current)</span>
                                    </button>
                                </li>
                            </template>

                            <li
                                :class="{'page-item pagination-next-nav': framework === 'bootstrap', 'disabled': !nextPageUrl && framework === 'bootstrap'}"
                                v-if="nextPageUrl || showDisabled">
                                <button
                                    type="button"
                                    @click="nextButtonHandler"
                                    :tabindex="!nextPageUrl && -1"
                                    :disabled="!nextPageUrl"
                                    :class="nextButtonClasses">
                                    
                                    <slot name="next-button">
                                        <svg
                                            fill="none"
                                            v-if="framework === 'tailwind'"
                                            :class="nextButtonIconClasses"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 5l7 7-7 7"></path>
                                        </svg>
                                        <span v-else>
                                            {{ translate.nextButton }}
                                        </span>
                                    </slot>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </slot>
        </div>
    </renderless-pagination>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RenderlessPagination from './RenderlessPagination.vue';

@Component({
    components: {
        RenderlessPagination,
    },
    props: {
        data: {
            type: Object,
            required: true,
            default: () => ({
                meta: {},
                data: [],
                links: {},
            }),
        },
        limit: {
            type: Number,
            default: 1,
        },
        size: {
            type: String,
            default: 'default',
        },
        showDisabled: {
            type: Boolean,
            default: true,
        },
        showNumbers: {
            type: Boolean,
            default: false,
        },
        framework: {
            type: String,
            default: "tailwind",
            validator: function (value) {
                return [
                    'bootstrap',
                    'tailwind',
                ].indexOf(value) !== -1;
            }
        },
        translate: {
            type: Object,
            default: () => ({
                nextButton: 'Next',
                previousButton: 'Previous',
            })
        }
    },
    methods: {
        numberButtonClasses(page, currentPage) : Object {
            return {
                "inline-flex items-center h-full mx-1 text-base font-medium leading-5 transition duration-150 ease-in-out rounded-md active:bg-gray-200 focus:outline-none focus:border-blue-300 focus:shadow-outline active:text-gray-700": this.framework === "tailwind",
                'px-2 py-1': this.size == 'small' && this.framework === "tailwind",
                'px-4 py-2': this.size == 'default' && this.framework === "tailwind",
                'bg-blue-500 text-white': page == currentPage && this.framework === 'tailwind',
                'text-gray-700 border border-gray-400 hover:bg-gray-200': page != currentPage && this.framework === 'tailwind',
                'page-link': this.framework === "bootstrap",
            }
        },
    },
    computed: {
        containerClasses() : Object {
            return {
                "flex flex-col items-center justify-between px-4 py-2 sm:flex-row": this.framework === "tailwind",
            }
        },
        ulClasses() : Object {
            return {
                "relative inline-flex list-none": this.framework === "tailwind",
                "pagination": this.framework === "bootstrap",
                'pagination-sm': this.size == 'small' && this.framework === "bootstrap",
                'pagination-lg': this.size == 'large' && this.framework === "bootstrap",
            }
        },
        previousButtonClasses() : Object {
            return {
                "inline-flex items-center h-full mx-1 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-400 rounded-md hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:border-blue-300 focus:shadow-outline active:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed": this.framework === "tailwind",
                'px-2 py-2': this.size == 'default' && this.framework === "tailwind",
                'px-1 py-1': this.size == 'small' && this.framework === "tailwind",
                "page-link": this.framework === "bootstrap",
            }
        },
        previousButtonIconClasses() : Object {

            return {
                'w-5 h-5': this.size == 'default' && this.framework === "tailwind",
                'w-4 h-4': this.size == 'small' && this.framework === "tailwind",
            }
        },
        nextButtonClasses() : Object {
            return {
                "inline-flex items-center h-full mx-1 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-400 rounded-md hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:border-blue-300 focus:shadow-outline active:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed": this.framework === "tailwind",
                'px-2 py-2': this.size == 'default' && this.framework === "tailwind",
                'px-1 py-1': this.size == 'small' && this.framework === "tailwind",
                "page-link": this.framework === "bootstrap",
            }
        },
        nextButtonIconClasses() : Object {
            return {
                'w-5 h-5': this.size == 'default' && this.framework === "tailwind",
                'w-4 h-4': this.size == 'small' && this.framework === "tailwind",
            }
        },        
    }
})

export default class Pagination extends Vue {
    private onPaginationChangePage(page: number) {
        this.$emit('page-changed', page);
    }
}
</script>


