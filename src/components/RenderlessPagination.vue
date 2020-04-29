<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        data: {
            type: Object,
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
            default: false,
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

    get isApiResource(): boolean {
        return !!this.$props.data.meta;
    }
    get currentPage(): number {
        return this.isApiResource ? this.$props.data.meta.current_page : this.$props.data.current_page;
    }
    get firstPageUrl(): string {
        return this.isApiResource ? this.$props.data.links.first : null;
    }
    get from(): number {
        return this.isApiResource ? this.$props.data.meta.from : this.$props.data.from;
    }
    get lastPage(): number {
        return this.isApiResource ? this.$props.data.meta.last_page : this.$props.data.last_page;
    }
    get lastPageUrl(): string {
        return this.isApiResource ? this.$props.data.links.last : null;
    }
    get nextPageUrl(): string {
        return this.isApiResource ? this.$props.data.links.next : this.$props.data.next_page_url;
    }
    get perPage(): number {
        return this.isApiResource ? this.$props.data.meta.per_page : this.$props.data.per_page;
    }
    get prevPageUrl(): string {
        return this.isApiResource ? this.$props.data.links.prev : this.$props.data.prev_page_url;
    }
    get to(): number {
        return this.isApiResource ? this.$props.data.meta.to : this.$props.data.to;
    }
    get total(): number {
        return this.isApiResource ? this.$props.data.meta.total : this.$props.data.total;
    }
    get pageRange(): any[] {
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
    public render(h: any) {
        if (this.$scopedSlots.default) {
            return h(
                'div',
                this.$scopedSlots.default({
                    data: this.$props.data,
                    limit: this.$props.limit,
                    showDisabled: this.$props.showDisabled,
                    size: this.$props.size,
                    computed: {
                        isApiResource: this.isApiResource,
                        currentPage: this.currentPage,
                        firstPageUrl: this.firstPageUrl,
                        from: this.from,
                        lastPage: this.lastPage,
                        lastPageUrl: this.lastPageUrl,
                        nextPageUrl: this.nextPageUrl,
                        perPage: this.perPage,
                        prevPageUrl: this.prevPageUrl,
                        to: this.to,
                        total: this.total,
                        pageRange: this.pageRange,
                    },
                    prevButtonEvents: {
                        click: (e: any) => {
                            this.previousPage();
                        },
                    },
                    nextButtonEvents: {
                        click: (e: any) => {
                            this.nextPage();
                        },
                    },
                    pageButtonEvents: (page: any) => ({
                        click: (e: any) => {
                            this.selectPage(page);
                        },
                    }),
                }),
            );
        }
    }
    public previousPage() {
        this.selectPage((this.currentPage - 1));
    }
    public nextPage() {
        this.selectPage((this.currentPage + 1));
    }
    public selectPage(page: any) {
        if (page === '...') {
            return;
        }
        this.$emit('pagination-change-page', page);
    }
}
</script>