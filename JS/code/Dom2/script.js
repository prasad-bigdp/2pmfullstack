// function change ()
// {
//     var myEle = document.getElementById("head")
// 		myEle.textContent = "Hello Everyone!DOM Manipulation"
// }
var val = 0
var c = document.getElementById("count")
var eo = document.getElementById("evenOdd")
function incr() {
	// alert(c.textContent);
	// alert(c.innerText)
	val++
	checkRange()
	isEvenOdd()
}
function decr() {
	val--
	checkRange()
}
function checkRange() {
	if (val < 0) {
		alert("Number should not be less than zero")
	} else if (val <= 20) {
		c.textContent = val
	} else {
		alert("value shoud not be more than 20")
	}
}
function isEvenOdd() {
	if (val % 2 == 0) {
		eo.innerHTML =
			"<img src='https://cdn.textstudio.com/output/sample/normal/5/3/2/5/even-logo-73-5235.png' alt='image' height='100'>"
	} else {
		eo.innerHTML = "<b>ODD</b>"
	}
}
function changeRandom ()
{
    var c1 = "#" + Math.round(Math.random() * 10000000).toString(16);
    var c2 = "#" + Math.round(Math.random() * 10000000).toString(16);

    document.body.style.background = `linear-gradient(${c1},${c2})`
		
    document.body.style.color =
			"#" + Math.round(Math.random() * 10000000).toString(16)
}
function changeMode ()
{
    document.body.classList.toggle('dark')
}
function printName ()
{
    var inp = document.getElementById('inp')
    alert(inp.value)
}