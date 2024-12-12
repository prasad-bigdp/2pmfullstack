// var a = confirm("are you sure?")
// alert(a)
// var x = [1, 2, 4, 5, 7, 8]
// console.log(x[0])
// console.log(x[25])
// console.log(x[-20])
//write a for loop using for ..of  to print array elements
// console.table(x)
// for (var z of x) {
// 	console.log(z)
// }
// arrays contain lot of inbuilt methods
// length -length returns no.of elements in the given array
var arr = [2, 6, 5, 7, 4]
console.log(arr.length);
// arr.length = 0;
// console.log(arr);
// arr[12] = 53;
// console.log(arr);
// push,pop --- push is used to insert an element at the end of the array and pop is used to remove an element at the end of the array
arr.push(47,58,46,71,23)
console.log(arr)
arr.pop()
console.log(arr)
//unshift,shift --  unshift is used to insert an element at the starting of the array. shift is used to remove the first element of the array
arr.unshift(1, 3, 4, 5);
console.log(arr)
arr.shift()
console.log(arr)
//splice - splice is used to delete or add any elements in the array
//array.splice(starting-index,deleteCount,insert values);
var arr = [5, 1, 3, 4, 6, 7, 9];
arr.splice(2)
console.log(arr)
arr = [5, 1, 3, 4, 6, 7, 9];
arr.splice(2,3)
console.log(arr);
arr = [5, 1, 3, 4, 6, 7, 9];
arr.splice(2,0,858,654,"prasad")
console.log(arr)
var friends= ["penny","chandler","monica","pheobe","ross","stuart"];
//  1. remove stuart and add rachel
friends.pop();
friends.push("rachel");
//  2. remove penny and add joey
friends.shift();
friends.unshift("joey")
// 3. between ross and rachel, add justin
friends.splice(5,0,"justin")
console.log(friends)

//includes
console.log(friends.includes("prasad"))

console.log(friends.concat(["prasad", "raj"]));
var arr=[1,5,4,1,3,2]
console.log(arr.lastIndexOf(1))
arr.reverse();
console.log(arr)
var str = "javascript"
var newVal= str.split('').reverse().join('')
console.log(newVal)

// input: js is very easy
// output: sj si yrev ysae
var str = "js is very easy"
var newArr = str.split(' ');
var arr2=[]
for (var i of newArr)
{
   arr2.push(i.split('').reverse().join(''))
}
console.log(arr2.join(' '))































