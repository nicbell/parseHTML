# parseHTML
parseHTML function

```js
var parseHTML = require('parseHTML');

var html = parseHTML('<div><a>first</a></div> <div class="x"><a>second</a></div> <div><a>third</a></div> <div><a>fourth</a></div>');
console.log(html.querySelector('.x'));

```