// function change ()
// {
//     var myEle = document.getElementById("head")
// 		myEle.textContent = "Hello Everyone!DOM Manipulation"
// }
var val = 0;
function change ()
{
    var c = document.getElementById('count');
    val++;
    c.textContent=val
}