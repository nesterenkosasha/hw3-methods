/*@function concat
* @param {Array} arr
* @return {Array} arr
*/
	function concat(arr){
	const count = arguments.length
	const result = []
	for ( let i=0; i<count; ++i){
		for(let item of arguments[i]){
			result.push(item)
		}
	}return result
}
const farr = ["a","b","c"]
const farr2 = ["1","2","3"]
console.log( "concat-->", concat(farr, farr2))

		
/*@function fiter
* @param {Array} arr
* @param {Function} callback
* @return {Array} arr
*/const Filter = function(arr,callback){
	const t = []
	for (let index in arr) {
if(callback(arr[index], index, arr))
t.push(arr[index])
} return t}
console.log("filter-->", Filter(["1","2","3","4","5","6","7","8"], function(el, index, arr){	
return el>=3}))

 
/*@function join
* @param {Array} arr
* @param {string} separator
* @return {string}
*/
const forJoin = function(arr, separator){
	var result = "";
	for (let index in arr) {
		if(index == 0){
			result = result + arr[index];
		}else{
			result = result + separator + arr[index];
		}
	}
	return result;
}
console.log("join-->", forJoin(["1", "2","3","4","5"], " - "));

/*@function map
* @param {Array} arr
* @param {Function} callback
* @return {Array} arr
*/
const forMap = function(arr, callback) {
	var result = [];
	for (let index in arr) {
		result.push(callback(arr[index], index, arr))
	}
	return result;
}
console.log("map-->", forMap([1,2,3], function(el, index, arr) {
return el + 1;
}))

/*@function reduce
* @param {Array} arr
* @param {Function} callback
* @return {Array} arr
*/
const forReduce = function(arr, callback, initialValue){
	var result = initialValue || [];
	for (let index in arr) {
		result = callback(result, arr[index]);
	}
	return result;
}
var friends = [ 
{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 }, 
{ name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
{ name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
]
var allbooks = forReduce(friends, function(prev, curr) {
  return [...prev, ...curr.books];
}, ["Alphabet"]);
console.log("reduce-->",allbooks)

/*@function sort
* @param {Array} arr
* @param {Function} compareFunction
* @return {Array} arr
*/
const forSort = function(arr, compareFunction){
	compareFunction = compareFunction || function(v1, v2){
		if(v1.toString() > v2.toString()){
			return 1;
		}
		if(v1.toString() < v2.toString()){
			return -1;
		}
		return 0;
	}
	for (let index1 in arr) {
		for (var i2 = 1; i2<arr.length; ++i2) {
			if(compareFunction(arr[i2-1], arr[i2])>0){
				var buffer = arr[i2-1]
				arr[i2-1] = arr[i2]
				arr[i2] = buffer
			}
		}
	}
return arr;
}
var fruit = ["арбузы", "бананы", "Вишня"];
console.log("sort -->", forSort(fruit))


/*@function splice
* @param {Array} arr
* @param {number} a, b
* @return {Array} arr
*/
let arr1 = ['ангел', 'клоун', 'телескоп', 'хирург']
const forSplice = function(arr, a, b){
const itemsToAdd = []
for(let i=3; i<arguments.length;++i){
itemsToAdd.push(arguments[i]);
}
const last = []
const itemsToRemove = []
for (z2=a; z2<arr.length; ++z2){
	if(z2 < a+b){
		itemsToRemove.push(arr[z2])
	}
	else{
		last.push(arr[z2])
	}
}
arr.length = a;
for(let i of itemsToAdd){
	arr.push(i);
}
for(let i of last){
	arr.push(i);
}
return itemsToRemove;	
}

console.log("splice-->",forSplice(arr1, 0, 2, 'попугай', 'анемон', 'голубая'))
console.log("array was changed-->", arr1)

/*@function slice
* @param {Array} arr
* @param {number} beg, and
* @return {Array} arr
*/
const arr = ['Банан', 'Апельсин', 'Лимон', 'Яблоко', 'Манго']
const Sl = function(beg, and){
const t = []
for (let index in arr){
	if(index >= and)continue
	if(index >= beg){
		t.push(arr[index])}
}return t
}
console.log("slice-->",Sl(2,4))

/*@function find
* @param {Array} arr
* @param {Function} callback
* @return {Array} arr
*/
const Find = function(arr,callback){
	for (let index in arr) {
if(callback(arr[index], index, arr))
return arr[index]}}
console.log("find-->",Find(["1","2","3"], function(el, index, arr){	
return el*2>=3}))
 
/*@function revere
* @param {Array} arr
* @return {Array} arr
*/
const Rev = function(arr){
	var n
	for (i=0; i<arr.length/2; ++i) {
			n=+arr[i]
			arr[i]=arr.length-i
			
			arr[arr.length-1-i]=n}}
var y = ["1","2","3","4","5","6","7","8"]
Rev(y)
console.log(y)



