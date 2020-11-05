![Vue Test Utils - Jest](https://github.com/laravel-vue-tailwind/pagination/workflows/Vue%20Test%20Utils%20-%20Jest/badge.svg)

# Tailable Pagination
A Vue.js pagination component for Laravel thats built for Tailwind.

## Requirements

* [Vue.js](https://vuejs.org/) 2.x
* [Laravel](http://laravel.com/docs/) 5.x +
* [Tailwindcss](https://tailwindcss.com/) 1.x +

## Demo & Docs

See [https://tailable.github.io/pagination/](https://tailable.github.io/pagination/)

## Component Installation

```bash
npm install tailable-pagination

or

yarn add tailable-pagination
```

### Register the Plugin

```javascript
import TailablePagination from 'tailable-pagination';

Vue.use(TailablePagination);
```

### Add the following variants to your tailwind.config.js

```javascript
variants: {
    opacity: ['disabled'],
    cursor: ['disabled'],
},
```

### Basic Example
> Pagination.vue


```html
<tailable-pagination
    :data="users"
    :showNumbers="true">
</tailable-pagination>
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
| `show-disabled` | Boolean | true | (optional) Pagination buttons next and previous, do you want them displayed if there is nothing to click? |
| `show-numbers ` | Boolean | false | (optional) Pagination show numbered buttons? |
| `hide-when-empty ` | Boolean | false | (optional) Hides the pagination buttons when there is no need to show them |
| `translate ` | Object | {
                nextButton: 'Next',
                previousButton: 'Previous',
            } | (optional) Translate button text |

#### Pagination Events

| Name | Description  
| --- | --- |
| `page-changed`  | A button has been clicked |

## Development

To work on the package locally or to add to the documentation, run the following command:

```bash
npm run serve
```

To run the tests:

```bash
npm run test:unit
```