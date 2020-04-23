<template>
    <renderless-pagination
        :data="data"
        :size="size"
        :limit="limit"
        :align="align"
        :show-disabled="showDisabled"
        @pagination-change-page="onPaginationChangePage">

        <ul class="p-2 bg-gray-400 my-0 mx-auto inline-block"
            :class="{
                'pagination-sm': size == 'small',
                'pagination-lg': size == 'large',
                'justify-content-center': align == 'center',
                'justify-content-end': align == 'right'
            }"
            v-if="computed.total > computed.perPage"
            slot-scope="{ data, limit, showDisabled, size, align, computed, prevButtonEvents, nextButtonEvents, pageButtonEvents }">

            <li class="inline-block bg-gray-600 rounded-l" :class="{'disabled': !computed.prevPageUrl}" v-if="computed.prevPageUrl || showDisabled">
                <a class="page-link" href="#" aria-label="Previous" :tabindex="!computed.prevPageUrl && -1" v-on="prevButtonEvents">
                    <slot name="prev-nav">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </slot>
                </a>
            </li>

            <li class="inline-block bg-gray-600" v-for="(page, key) in computed.pageRange" :key="key" :class="{ 'active': page == computed.currentPage }">
                <a class="page-link" href="#" v-on="pageButtonEvents(page)">
                    {{ page }}
                    <span class="sr-only" v-if="page == computed.currentPage">(current)</span>
                </a>
            </li>

            <li class="inline-block bg-gray-600 rounded-r" :class="{'disabled': !computed.nextPageUrl}" v-if="computed.nextPageUrl || showDisabled">
                <a class="page-link" href="#" aria-label="Next" :tabindex="!computed.nextPageUrl && -1" v-on="nextButtonEvents">
                    <slot name="next-nav">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                    </slot>
                </a>
            </li>
        </ul>

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
            default: () => ({}),
        },
        limit: {
            type: Number,
            default: 5,
        },
        size: {
            type: String,
            default: 'small',
        },
        align: {
            type: String,
            default: 'right',
        },
        showDisabled: {
            type: Boolean,
            default: true,
        },
    },
})

export default class Pagination extends Vue {
    public onPaginationChangePage(page: any) {
        alert(page);
    }
}
</script>


