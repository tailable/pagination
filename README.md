![Vue Test Utils - Jest](https://github.com/laravel-vue-tailwind/pagination/workflows/Vue%20Test%20Utils%20-%20Jest/badge.svg)

# Laravel Vue Pagination
A Vue.js pagination component for Laravel thats built for Tailwind.

## Requirements

* [Vue.js](https://vuejs.org/) 2.x
* [Laravel](http://laravel.com/docs/) 5.x +
* [Tailwindcss](https://tailwindcss.com/) 1.x +

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

#### Pagination Props

| Name | Type | Default | Description  
| --- | --- | --- | --- |
| `data ` | Object | {} | The data from paginated AJAX request |
| `limit` | Number | 1 | The pagination limit each side of the middle button. |
| `size` | String | "default" | (optional) Must be default or small or large |
| `showDisabled` | Boolean | true | (optional) Pagination buttons next and previous, do you want them displayed if there is nothing to click? |
| `showNumbers ` | Boolean | false | (optional) Pagination show numbered buttons? |


## Development

To work on the package locally or to add to the documentation, run the following command:

```bash
npm run serve
```

To run the tests:

```bash
npm run test:unit
```