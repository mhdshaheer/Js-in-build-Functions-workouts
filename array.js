// push() – Adds elements to the end of an array.
// pop() – Removes the last element from an array.
// shift() – Removes the first element from an array.
// unshift() – Adds elements to the beginning of an array.
// map() – Creates a new array by applying a function to each element.
// filter() – Returns a new array with elements that pass a condition.
// reduce() – Reduces an array to a single value.
// forEach() – Iterates over an array without returning a value.
// find() – Returns the first element that meets a condition.
// findIndex() – Returns the index of the first element that meets a condition.
// some() – Checks if at least one element meets a condition.
// every() – Checks if all elements meet a condition.
// includes() – Checks if an array contains a specific value.
// slice() – Returns a portion of an array.
// splice() – Modifies an array by removing or replacing elements.
// sort() – Sorts an array in place.
// reverse() – Reverses the elements of an array
// fill() 

//============================= findIndex() ======================================
// findIndex() – Returns the index of the first element that meets a condition.
// if no element found return '-1'.

// #1
// const arr = [1,3,7,2,8];
// let index = arr.findIndex(item=>item%2==0)
// console.log(index) // It will return the index of that condition satisfied first element.

// #2
// const obj = [
//     {name:'shahan',age:22},
//     {name:'shaheer',age:22},
//     {name:'arjun',age:21}
// ];
// const index = obj.findIndex(item=>item.name==='shaheer');
// console.log(index)

// #3
// const nums = [5,8,4,3,2];
// const index = nums.findIndex(item=>item>10);
// console.log(index); // Here no element satisfies the condition so they return '-1'.

//================================================================================

// #1
// let arr = [1, 2, 3, 4, 5];
// let rev = arr.reverse();
// console.log(rev)

// #2
// const str = 'shaheer';
// const revStr = str.split('').reverse().join('');
// console.log(revStr)

//================================================================================

// array.slice(start, end);
// It not consider the end index.


// #1
// const nums = [1,2,3,4,5,6,8,9];
// console.log(nums.slice(2,5))
// console.log(nums.slice(2));
// console.log(nums.slice(-3,-1));

//================================================================================


// array.splice()
// array.splice(start, deleteCount, item1, item2, ...);

// #1
// const arr = [1,2,3,4,5,6,7,8];
// console.log(arr.splice(2,1));
// console.log(arr)


//================================================================================

// every() – Checks if all elements meet a condition
// array.every((element, index, array), thisArg);

// #1
// const numbers = [2, 4, 6, 8, 10];
// const allPositive = numbers.every(num => num > 0);
// console.log(allPositive);


//================================================================================

// find() – Returns the first element that meets a condition.
// array.find((element, index, array), thisArg)

// #1
// const numbers = [10, 20, 30, 40, 50];
// const result = numbers.find(num => num > 25);
// console.log(result);
