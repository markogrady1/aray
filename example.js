var arr = require("./lib/arrayer.js");

var result = arr.addEach([1, 3, 5], 4);

console.log(result); // [ 5, 7, 9 ]

var result2 = arr.spread([1, 3, 5], [1,2,3]);

console.log(result2); // [ 2, 5, 8 ]

var result3 = arr.wordArray("hi my name is mark")

console.log(result3); // [ 'hi', 'my', 'name', 'is', 'mark' ]

var result4 = arr.sum([1,2,3,4]);

console.log(result4); // 10

var result5 = arr.first([1,2,3,4], 100);

console.log(result5); // [ 100, 1, 2, 3, 4 ]

var result6 = arr.matrix(5,5,"yo");

console.log(result6); // [ 100, 1, 2, 3, 4 ]

var result7 = arr.divide([1,2,3,4,5,6,7,8,9,10], 2);

console.log(result7); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]