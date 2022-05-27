(function(){"use strict";var t={33:function(t,e,a){var r=a(144),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col max-w-3xl mx-auto my-2 bg-white",attrs:{id:"app"}},[a("button",{staticClass:"bg-blue-500 text-white rounded my-2 p-2",on:{click:t.toggleFramework}},[t._v(" Toggle Framework - Currently viewing: "+t._s(""+t.framework.charAt(0).toUpperCase()+t.framework.substr(1))+" ")]),t._m(0),a("pagination",{attrs:{data:t.data,size:"small",showNumbers:!0,framework:t.framework},on:{"page-changed":t.pageChanged}}),t._m(1),a("pagination",{attrs:{data:t.data,showNumbers:!0,framework:t.framework},on:{"page-changed":t.pageChanged}}),t._m(2),a("pagination",{attrs:{data:t.data,framework:t.framework},on:{"page-changed":t.pageChanged}}),a("div",{staticClass:"border-b mb-1"}),a("pagination",{attrs:{data:t.data,framework:t.framework},on:{"page-changed":t.pageChanged}},[a("div",{attrs:{slot:"next-button"},slot:"next-button"},[a("svg",{staticClass:"w-4 h-4",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M14 5l7 7m0 0l-7 7m7-7H3"}})])]),a("div",{attrs:{slot:"previous-button"},slot:"previous-button"},[a("svg",{staticClass:"w-4 h-4",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M10 19l-7-7m0 0l7-7m-7 7h18"}})])])]),a("div",{staticClass:"border-b mb-1"}),a("pagination",{attrs:{data:t.data,framework:t.framework},on:{"page-changed":t.pageChanged}},[a("div",{attrs:{slot:"next-button"},slot:"next-button"},[t._v(" Next ")]),a("div",{attrs:{slot:"previous-button"},slot:"previous-button"},[t._v(" Previous ")])]),t._m(3),a("pagination",{attrs:{data:t.data,size:"small",framework:t.framework},on:{"page-changed":t.pageChanged}}),a("div",{staticClass:"border-b mb-1"}),a("pagination",{attrs:{data:t.data,size:"small",framework:t.framework},on:{"page-changed":t.pageChanged}},[a("div",{attrs:{slot:"next-button"},slot:"next-button"},[a("svg",{staticClass:"w-4 h-4",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M14 5l7 7m0 0l-7 7m7-7H3"}})])]),a("div",{attrs:{slot:"previous-button"},slot:"previous-button"},[a("svg",{staticClass:"w-4 h-4",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M10 19l-7-7m0 0l7-7m-7 7h18"}})])])]),a("div",{staticClass:"border-b mb-1"}),a("pagination",{attrs:{data:t.data,size:"small",framework:t.framework},on:{"page-changed":t.pageChanged}},[a("div",{attrs:{slot:"next-button"},slot:"next-button"},[t._v(" Next ")]),a("div",{attrs:{slot:"previous-button"},slot:"previous-button"},[t._v(" Previous ")])]),a("h2",{staticClass:"text-lg text-center"},[t._v("Custom Body using Slot")]),a("pagination",{attrs:{data:t.data,size:"small",framework:t.framework},on:{"page-changed":t.pageChanged},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.data,s=e.pageRange,i=e.currentPage,o=e.previousButtonHandler,n=e.nextButtonHandler,l=e.pageButtonHandler;return a("div",{staticClass:"flex"},[a("ul",{staticClass:"relative inline-flex list-none mx-auto mt-4"},[a("li",[a("button",{staticClass:"inline-flex items-center px-2 py-2 h-full text-sm font-medium leading-5 text-grey-700 transition duration-150 ease-in-out bg-white border-l border-t border-b border-grey-400 hover:bg-grey-200 active:bg-grey-200 focus:outline-none focus:border-blue-300 focus:shadow-outline active:text-grey-700 disabled:opacity-50 disabled:cursor-not-allowed",attrs:{disabled:!r.links.prev},on:{click:o}},[a("svg",{staticClass:"w-5 h-5",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M15 19l-7-7 7-7"}})])])]),t._l(s,(function(e,r){return a("li",{key:r},[a("button",{staticClass:"inline-flex items-center px-4 py-2 h-full text-base font-medium leading-5 transition duration-150 ease-in-out active:bg-grey-200 focus:outline-none focus:border-blue-300 focus:shadow-outline active:text-grey-700",class:{"bg-purple-500 text-white":e==i,"text-grey-700 border-l border-t border-b border-grey-400 hover:bg-grey-200":e!=i},on:{click:function(t){return l(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("li",[a("button",{staticClass:"inline-flex items-center px-2 py-2 h-full text-sm font-medium leading-5 text-grey-700 transition duration-150 ease-in-out bg-white border border-grey-400 hover:bg-grey-200 active:bg-grey-200 focus:outline-none focus:border-blue-300 focus:shadow-outline active:text-grey-700 disabled:opacity-50 disabled:cursor-not-allowed",attrs:{disabled:!r.links.next},on:{click:n}},[a("svg",{staticClass:"w-5 h-5",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M9 5l7 7-7 7"}})])])])],2)])}}])})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"border-b mb-1"},[a("h2",{staticClass:"mt-2 text-base text-center"},[t._v("Size sm")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"border-b mb-1"},[a("h2",{staticClass:"text-lg text-center"},[t._v("Size md(default)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"border-b mb-1"},[a("h2",{staticClass:"text-lg text-center"},[t._v("Simple Size md(default)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"border-b mb-1"},[a("h2",{staticClass:"text-lg text-center"},[t._v("Simple Size sm")])])}],o=a(796),n=a(655),l=a(669),u=a.n(l),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("renderless-pagination",{attrs:{data:t.data,size:t.size,limit:t.limit,"show-disabled":t.showDisabled},on:{"pagination-change-page":t.onPaginationChangePage},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.data,s=e.from,i=e.to,o=e.total,n=(e.perPage,e.prevPageUrl),l=e.nextPageUrl,u=(e.limit,e.showDisabled),d=e.size,p=e.pageRange,c=e.currentPage,g=e.previousButtonHandler,h=e.nextButtonHandler,f=e.pageButtonHandler;return a("div",{},[t._t("default",(function(){return[a("div",{staticClass:"d-flex justify-content-between",class:t.containerClasses},[a("div",{staticClass:"flex mb-3 sm:mb-0"},[a("p",{staticClass:"leading-5 text-gray-700",class:{"text-base":"default"==d,"text-sm":"small"==d}},[t._v(" Showing "),a("span",{staticClass:"font-medium"},[t._v(t._s(s))]),t._v(" to "),a("span",{staticClass:"font-medium"},[t._v(t._s(i))]),t._v(" of "),a("span",{staticClass:"font-medium"},[t._v(t._s(o))]),t._v(" results ")])]),a("div",{staticClass:"flex"},[a("ul",{class:t.ulClasses},[n||u?a("li",{class:{"page-item pagination-prev-nav":"bootstrap"===t.framework,disabled:!n&&"bootstrap"===t.framework}},[a("button",{class:t.previousButtonClasses,attrs:{type:"button",tabindex:!n&&-1,disabled:!n},on:{click:g}},[t._t("previous-button",(function(){return["tailwind"===t.framework?a("svg",{class:t.previousButtonIconClasses,attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M15 19l-7-7 7-7"}})]):a("span",[t._v(" "+t._s(t.translate.previousButton)+" ")])]}))],2)]):t._e(),t.showNumbers?t._l(p,(function(e,r){return a("li",{key:r,class:{"page-item pagination-page-nav":"bootstrap"===t.framework,active:"bootstrap"===t.framework&&e==c}},[a("button",{class:t.numberButtonClasses(e,c),attrs:{type:"button"},on:{click:function(t){return f(e)}}},[t._v(" "+t._s(e)+" "),e==c?a("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])])})):t._e(),l||u?a("li",{class:{"page-item pagination-next-nav":"bootstrap"===t.framework,disabled:!l&&"bootstrap"===t.framework}},[a("button",{class:t.nextButtonClasses,attrs:{type:"button",tabindex:!l&&-1,disabled:!l},on:{click:h}},[t._t("next-button",(function(){return["tailwind"===t.framework?a("svg",{class:t.nextButtonIconClasses,attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M9 5l7 7-7 7"}})]):a("span",[t._v(" "+t._s(t.translate.nextButton)+" ")])]}))],2)]):t._e()],2)])])]}),{data:r,pageRange:p,currentPage:c,nextButtonHandler:h,pageButtonHandler:f,previousButtonHandler:g})],2)}}],null,!0)})},p=[],c=a(28),g=a(904);let h=class extends r.Z{get isApiResource(){return!!this.$props.data.meta}get currentPage(){return this.isApiResource?this.$props.data.meta.current_page:this.$props.data.current_page}get firstPageUrl(){return this.isApiResource?this.$props.data.links.first:null}get from(){return this.isApiResource?this.$props.data.meta.from:this.$props.data.from}get lastPage(){return this.isApiResource?this.$props.data.meta.last_page:this.$props.data.last_page}get lastPageUrl(){return this.isApiResource?this.$props.data.links.last:null}get nextPageUrl(){return this.isApiResource?this.$props.data.links.next:this.$props.data.next_page_url}get perPage(){return this.isApiResource?this.$props.data.meta.per_page:this.$props.data.per_page}get prevPageUrl(){return this.isApiResource?this.$props.data.links.prev:this.$props.data.prev_page_url}get to(){return this.isApiResource?this.$props.data.meta.to:this.$props.data.to}get total(){return this.isApiResource?this.$props.data.meta.total:this.$props.data.total}get pageRange(){if(-1===this.$props.limit)return[];if(0===this.$props.limit)return[1,this.lastPage];const t=this.currentPage,e=this.lastPage,a=this.$props.limit,r=t-a,s=t+a+1,i=[],o=[];let n;for(let l=1;l<=e;l++)(1===l||l===e||l>=r&&l<s)&&i.push(l);return i.forEach((t=>{n&&(t-n===2?o.push(n+1):t-n!==1&&o.push("...")),o.push(t),n=t})),o}render(t){if(this.$scopedSlots.default)return t("div",this.$scopedSlots.default({to:this.to,from:this.from,total:this.total,perPage:this.perPage,data:this.$props.data,limit:this.$props.limit,nextPageUrl:this.nextPageUrl,prevPageUrl:this.prevPageUrl,showDisabled:this.$props.showDisabled,size:this.$props.size,pageRange:this.pageRange,currentPage:this.currentPage,previousButtonHandler:this.previousPage,nextButtonHandler:this.nextPage,pageButtonHandler:this.selectPage}))}previousPage(){this.selectPage(this.currentPage-1)}nextPage(){this.selectPage(this.currentPage+1)}selectPage(t){"..."!==t&&this.$emit("pagination-change-page",t)}};h=(0,n.gn)([(0,g.ZP)({props:{data:{type:Object,required:!0,default:()=>({data:[],meta:{},links:{}})},limit:{type:Number,default:0},showDisabled:{type:Boolean,default:!0},size:{type:String,default:"default",validator:t=>-1!==["small","default","large"].indexOf(t)}}})],h);var f,m,b=h,v=b,w=a(1),x=(0,w.Z)(v,f,m,!1,null,null,null),k=x.exports;let y=class extends c.w3{constructor(...t){super(...t),(0,o.Z)(this,"size",void 0),(0,o.Z)(this,"framework",void 0)}onPaginationChangePage(t){this.$emit("page-changed",t)}numberButtonClasses(t,e){return{"inline-flex items-center h-full mx-1 text-base font-medium leading-5 transition duration-150 ease-in-out rounded-md active:bg-gray-200 focus:outline-none focus:border-blue-300 focus:shadow-outline active:text-gray-700":"tailwind"===this.framework,"px-2 py-1":"small"===this.size&&"tailwind"===this.framework,"px-4 py-2":"default"===this.size&&"tailwind"===this.framework,"bg-blue-500 text-white":t===e&&"tailwind"===this.framework,"text-gray-700 border border-gray-400 hover:bg-gray-200":t!==e&&"tailwind"===this.framework,"page-link":"bootstrap"===this.framework}}get containerClasses(){return{"flex flex-col items-center justify-between px-4 py-2 sm:flex-row":"tailwind"===this.framework}}get ulClasses(){return{"relative inline-flex list-none":"tailwind"===this.framework,pagination:"bootstrap"===this.framework,"pagination-sm":"small"===this.size&&"bootstrap"===this.framework,"pagination-lg":"large"===this.size&&"bootstrap"===this.framework}}get previousButtonClasses(){return{"inline-flex items-center h-full mx-1 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-400 rounded-md hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:border-blue-300 focus:shadow-outline active:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed":"tailwind"===this.framework,"px-2 py-2":"default"===this.size&&"tailwind"===this.framework,"px-1 py-1":"small"===this.size&&"tailwind"===this.framework,"page-link":"bootstrap"===this.framework}}get previousButtonIconClasses(){return{"w-5 h-5":"default"===this.size&&"tailwind"===this.framework,"w-4 h-4":"small"===this.size&&"tailwind"===this.framework}}get nextButtonClasses(){return{"inline-flex items-center h-full mx-1 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-400 rounded-md hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:border-blue-300 focus:shadow-outline active:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed":"tailwind"===this.framework,"px-2 py-2":"default"===this.size&&"tailwind"===this.framework,"px-1 py-1":"small"===this.size&&"tailwind"===this.framework,"page-link":"bootstrap"===this.framework}}get nextButtonIconClasses(){return{"w-5 h-5":"default"===this.size&&"tailwind"===this.framework,"w-4 h-4":"small"===this.size&&"tailwind"===this.framework}}};(0,n.gn)([(0,c.fI)({type:String,default:"default"})],y.prototype,"size",void 0),(0,n.gn)([(0,c.fI)({type:String,default:"tailwind",validator:t=>-1!==["bootstrap","tailwind"].indexOf(t)})],y.prototype,"framework",void 0),y=(0,n.gn)([(0,c.wA)({components:{RenderlessPagination:k},props:{data:{type:Object,required:!0,default:()=>({meta:{},data:[],links:{}})},limit:{type:Number,default:1},showDisabled:{type:Boolean,default:!0},showNumbers:{type:Boolean,default:!1},hideWhenEmpty:{type:Boolean,default:!0},translate:{type:Object,default:()=>({nextButton:"Next",previousButton:"Previous"})}}})],y);var C=y,_=C,P=(0,w.Z)(_,d,p,!1,null,null,null),B=P.exports;let $=class extends c.w3{constructor(...t){super(...t),(0,o.Z)(this,"url","https://datatable.jamesdordoy.co.uk/api/eloquent"),(0,o.Z)(this,"data",{data:[],payload:[],links:{},meta:{}}),(0,o.Z)(this,"framework","tailwind")}created(){this.getData()}getData(t=this.url,e={}){u().get(t,{params:e}).then((t=>{this.data=t.data})).catch((t=>{alert(t)}))}toggleFramework(){this.framework="bootstrap"===this.framework?"tailwind":"bootstrap"}pageChanged(t){this.getData(this.url,{page:t})}};$=(0,n.gn)([(0,c.wA)({components:{Pagination:B}})],$);var z=$,j=z,R=(0,w.Z)(j,s,i,!1,null,null,null),O=R.exports;r.Z.config.productionTip=!1,new r.Z({render:t=>t(O)}).$mount("#app")}},e={};function a(r){var s=e[r];if(void 0!==s)return s.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,r,s,i){if(!r){var o=1/0;for(d=0;d<t.length;d++){r=t[d][0],s=t[d][1],i=t[d][2];for(var n=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(n=!1,i<o&&(o=i));if(n){t.splice(d--,1);var u=s();void 0!==u&&(e=u)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[r,s,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,i,o=r[0],n=r[1],l=r[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(s in n)a.o(n,s)&&(a.m[s]=n[s]);if(l)var d=l(a)}for(e&&e(r);u<o.length;u++)i=o[u],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},r=self["webpackChunktailable_pagination"]=self["webpackChunktailable_pagination"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(33)}));r=a.O(r)})();
//# sourceMappingURL=app.b3cd85bf.js.map