segmentation.js
================
function of splitting the array into arrays of equal sizes and the residual array

функция нарезки массива на равные массивы и масив остаток.


use in nodejs
================

download segmentation.js to your folder ./lib

and use

```js
require('./lib/segmentation.js');

var a, b;

a = [1,2,3,4,5,6,7,8,9,0];

b = a.segmentation(4);

console.log(b);

// return [ [ 1, 2, 3, 4 ],  [ 5, 6, 7, 8 ], [ 9, 0 ] ]

```

use in browser
================

add to <head>

```html
<script src="https://raw.github.com/pavelpower/segmentation.js/master/segmentation.js"></script>
<scritp> 
  
  var a, b, body;
  
  a = [1,2,3,4,5,6,7,8,9,0];
  
  b = a.segmentation(4);
  
  console.log(b);
  
  // return [ [ 1, 2, 3, 4 ],  [ 5, 6, 7, 8 ], [ 9, 0 ] ]
  
</scritp>
```
