# Laravel Vue Pagination
A Vue.js datatable component for Laravel that works with Bootstrap.

## Requirements

* [Vue.js](https://vuejs.org/) 2.x
* [Laravel](http://laravel.com/docs/) 5.x +

## Demo & Docs

See [https://laravel-vue-tailwind.github.io/pagination/](https://laravel-vue-tailwind.github.io/pagination/)

## Component Installation

```bash
npm install laravel-vue-tailwind-pagination

or

yarn add laravel-vue-tailwind-pagination
```

### Register the Plugin

```javascript
import LaravelVuePagination from 'laravel-vue-tailwind-pagination';

Vue.use(LaravelVuePagination);
```

### Basic Example
> Pagination.vue


```html
<laravel-vue-tailwind-pagination
    :data="users"
    :showNumbers="true">
</laravel-vue-tailwind-pagination>
```

```javascript
export default {
    data() {
        return {
            users: {},
        }
    },
    created() {
        axios.get("http://laravel.test/api/users")
        .then(response => {
            this.users = response.data;
        })
    }
}
```

### API

#### Datatable Props

| Name | Type | Default | Description  
| --- | --- | --- | --- |
| `data ` | Object | {} | The data from paginated AJAX request |
| `limit` | Number | 1 | The table pagination limit perside of the middle. |
| `size` | String | "default" | (optional) Must be default or small or large |
| `showDisabled` | Boolean | true | (optional) Pagination buttons next and previous, do you want them displayed if there is nothing to click? |
| `showNumbers ` | Boolean | true | (optional) Pagination show numbered buttons? |


## Further Examples


## Development

To work on the package locally or to add to the documentation, run the following command:

```bash
npm run serve
```

To deploy documentation to GitHub under a PR. Please run the following after uncommenting the outputDir line in the vue.config.js file:

```bash
npm run build-docs
```

To run the tests:

```bash
npm run test
```