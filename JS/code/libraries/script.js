// library is a pre written code used for specific purposes
// popular JS libraries
// 1. JQuery
// Jquery is a js library used for DOM manipulations and AJAX
import { display } from "./script2.js";
document.getElementById('btn').addEventListener('click', display)
let f = 0;
function fun ()
{
    if (f == 0)
    {
        $("#myDiv").delay(1000).slideUp(1000);
        f = 1;
    }
    else
    {
        $('#myDiv').slideDown(5000);
        $('#myDiv').text("Hiiiiii")
        $('#myDiv').css('color',"white")
    }
}
var typed = new Typed("#div", {
	strings: ["Prasad", "Developer", "Bat Man"],
	typeSpeed: 500,
	loop: true,
	cursorChar: "😂",
})
// modules 