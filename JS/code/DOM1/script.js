console.log(document)
var myData = document.getElementsByTagName('h1')
console.log(myData)
var myData2 = document.getElementsByClassName('firstHead');
console.log(myData2[0]);
var myData3 = document.getElementById('paragraph');
console.log(myData3);
var myData4 = document.querySelector('.firstHead')
console.log(myData4.textContent);
myData4.textContent = "Hello Prasad"
var myData4 = document.querySelectorAll(".firstHead")
console.log(myData4)