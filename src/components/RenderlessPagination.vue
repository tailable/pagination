<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        data: {
            type: Object,
            required: true,
            default: () => ({
                data: [],
                meta: {},
                links: {},
            }),
        },
        limit: {
            type: Number,
            default: 0,
        },
        showDisabled: {
            type: Boolean,
            default: true,
        },
        size: {
            type: String,
            default: 'default',
            validator: (value) => {
                return ['small', 'default', 'large'].indexOf(value) !== -1;
            },
        },
    },
})

export default class RenderlessPagination extends Vue {

    private get isApiResource(): boolean {
        return !!this.$props.data.meta;
    }
    private get currentPage(): number {
        return this.isApiResource ? this.$props.data.meta.current_page : this.$props.data.current_page;
    }
    private get firstPageUrl(): string {
        return this.isApiResource ? this.$props.data.links.first : null;
    }
    private get from(): number {
        return this.isApiResource ? this.$props.data.meta.from : this.$props.data.from;
    }
    private get lastPage(): number {
        return this.isApiResource ? this.$props.data.meta.last_page : this.$props.data.last_page;
    }
    private get lastPageUrl(): string {
        return this.isApiResource ? this.$props.data.links.last : null;
    }
    private get nextPageUrl(): string {
        return this.isApiResource ? this.$props.data.links.next : this.$props.data.next_page_url;
    }
    private get perPage(): number {
        return this.isApiResource ? this.$props.data.meta.per_page : this.$props.data.per_page;
    }
    private get prevPageUrl(): string {
        return this.isApiResource ? this.$props.data.links.prev : this.$props.data.prev_page_url;
    }
    private get to(): number {
        return this.isApiResource ? this.$props.data.meta.to : this.$props.data.to;
    }
    private get total(): number {
        return this.isApiResource ? this.$props.data.meta.total : this.$props.data.total;
    }
    private get pageRange(): any[] {
        if (this.$props.limit === -1) {
            return [];
        }
        if (this.$props.limit === 0) {
            return [1, this.lastPage];
        }
        const current = this.currentPage;
        const last = this.lastPage;
        const delta = this.$props.limit;
        const left = current - delta;
        const right = current + delta + 1;
        const range: number[] = [];
        const pages: any[] = [];
        let l: number;

        for (let i = 1; i <= last; i++) {
            if (i === 1 || i === last || (i >= left && i < right)) {
                range.push(i);
            }
        }

        range.forEach((i) => {
            if (l) {
                if (i - l === 2) {
                    pages.push(l + 1);
                } else if (i - l !== 1) {
                    pages.push('...');
                }
            }
            pages.push(i);
            l = i;
        });
        return pages;
    }
    private render(h: any) {
        if (this.$scopedSlots.default) {
            return h(
                'div',
                this.$scopedSlots.default({
                    to: this.to,
                    from: this.from,
                    total: this.total,
                    perPage: this.perPage,
                    data: this.$props.data,
                    limit: this.$props.limit,
                    nextPageUrl: this.nextPageUrl,
                    prevPageUrl: this.prevPageUrl,
                    showDisabled: this.$props.showDisabled,
                    size: this.$props.size,
                    pageRange: this.pageRange,
                    currentPage: this.currentPage,
                    previousButtonHandler: this.previousPage,
                    nextButtonHandler: this.nextPage,
                    pageButtonHandler: this.selectPage,
                }),
            );
        }
    }
    private previousPage() {
        this.selectPage((this.currentPage - 1));
    }
    private nextPage() {
        this.selectPage((this.currentPage + 1));
    }
    private selectPage(page: any) {
        if (page === '...') {
            return;
        }
        this.$emit('pagination-change-page', page);
    }
}
</script>