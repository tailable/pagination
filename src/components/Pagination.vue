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

                <div class="flex flex-col items-center justify-between px-4 py-3 border-t border-gray-400 sm:flex-row">
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
                            class="relative inline-flex list-none"
                            v-if="total > perPage">
                            <li
                                v-if="prevPageUrl || showDisabled">
                                <button
                                    type="button"
                                    @click="previousButtonHandler"
                                    :tabindex="!prevPageUrl && -1"
                                    :class="{
                                        'px-2 py-2': size == 'default',
                                        'px-1 py-1': size == 'small',
                                    }"
                                    :disabled="!prevPageUrl"
                                    class="inline-flex items-center h-full mx-1 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-400 rounded-md hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:border-blue-300 focus:shadow-outline active:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
                                    
                                    <slot name="previous-button">
                                        <svg fill="none"
                                            :class="{
                                                'w-5 h-5': size == 'default',
                                                'w-4 h-4': size == 'small',
                                            }"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M15 19l-7-7 7-7"></path>
                                        </svg>
                                    </slot>
                                </button>
                            </li>

                            <template v-if="showNumbers">
                                <li  v-for="(page, key) in pageRange" :key="key">
                                    <button
                                        type="button"
                                        @click="pageButtonHandler(page)"
                                        :class="{
                                            'px-2 py-1': size == 'small',
                                            'px-4 py-2': size == 'default',
                                            'bg-blue-500 text-white': page == currentPage,
                                            'text-gray-700 border border-gray-400 hover:bg-gray-200': page != currentPage,
                                        }"
                                        class="inline-flex items-center h-full mx-1 text-base font-medium leading-5 transition duration-150 ease-in-out rounded-md active:bg-gray-200 focus:outline-none focus:border-blue-300 focus:shadow-outline active:text-gray-700">
                                        {{ page }}
                                        <span class="sr-only" v-if="page == currentPage">(current)</span>
                                    </button>
                                </li>
                            </template>

                            <li
                                v-if="nextPageUrl || showDisabled">
                                <button
                                    type="button"
                                    @click="nextButtonHandler"
                                    :tabindex="!nextPageUrl && -1"
                                    :class="{
                                        'px-2 py-2': size == 'default',
                                        'px-1 py-1': size == 'small',
                                    }"
                                    :disabled="!nextPageUrl"
                                    class="inline-flex items-center h-full mx-1 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-400 rounded-md hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:border-blue-300 focus:shadow-outline active:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
                                    
                                    <slot name="next-button">
                                        <svg
                                            fill="none"
                                            :class="{
                                                'w-5 h-5': size == 'default',
                                                'w-4 h-4': size == 'small',
                                            }"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 5l7 7-7 7"></path>
                                        </svg>
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
    },
})

export default class Pagination extends Vue {
    private onPaginationChangePage(page: number) {
        this.$emit('page-changed', page);
    }
}
</script>


