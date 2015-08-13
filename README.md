# parseHTML
Function to parseHTML. Returns a queryable element or fragment.

Example
---
```js
var parseHTML = require('parseHTML');

var html = parseHTML('<div><a>first</a></div> <div class="x"><a>second</a></div> <div><a>third</a></div>');
console.log(html.querySelector('.x'));

```

Installation
---
```npm install parsehtml```
