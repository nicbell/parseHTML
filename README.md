# parseHTML [![NPM](https://nodei.co/npm/parsehtml.png?mini=true)](https://nodei.co/npm/parsehtml/)
Function to parse an HTML string. Returns a queryable element or fragment.

Installation
---
```
npm install parsehtml
```

Usage
---
```js
var parseHTML = require('parsehtml');

var htmlSnippet = '<div><a>first</a></div> <div class="x"><a>second</a></div> <div><a>third</a></div>',
	html = parseHTML(htmlSnippet);

console.log(html.querySelector('.x'));
//=> <div class="x"><a>second</a></div>
```