# aray
A personal array manipulation library.

####Installation
````bash
$ npm install aray --save
```

####Usage 
```javascript
var aray = require("aray");

 var result = aray.addEach([1, 3, 5], 4);		
 console.log(result); 
 // [ 5, 7, 9 ]		
 	
 var result2 = aray.spread([1, 3, 5], [1,2,3]);		
 console.log(result2); 
 // [ 2, 5, 8 ]		
 		
 var result3 = aray.wordArray("hi my name is mark")		
 console.log(result3); 
 // [ 'hi', 'my', 'name', 'is', 'mark' ]		
 		
 var result4 = aray.sum([1, 2, 3, 4]);		
 console.log(result4); 
 // 10		
 		
 var result5 = aray.first([1, 2, 3, 4], 100);		
 console.log(result5); 
 // [ 100, 1, 2, 3, 4 ]		
 		
 var result6 = aray.matrix(2, 2, 10);		
 console.log(result6); 
 // [[10], [10]]		
 		
 var result7 = aray.divide([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);		
 console.log(result7); 
 // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ] 
 
 var result8 = aray.unique([5, 2, 3, 5, 5, 5, 2, 5, 5, 3]);		
 console.log(result8); 
 // [5, 2, 3] 

 var result9 = aray.nums("1 2 3 4 5 6")     
 console.log(result9); 
 // [ 1, 2, 3, 4, 5, 6 ] 

 var result10 = aray.mix("18 years")     
 console.log(result10); 
 // [ 18, 'years' ]               
```
