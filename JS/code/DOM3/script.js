var mainDiv= document.getElementById('main')
// function addData ()
// {
//     var newPara = document.createElement('p')//<p></p>
//     newPara.textContent = "Prasad1";//<p>prasad</p>
//     mainDiv.appendChild(newPara)
// }

var mname = document.getElementById('mname');
var murl = document.getElementById('url');
var getMovie = function ()
{
    var mdiv = document.createElement('div');
    var mimg = document.createElement('img');
    mimg.src = murl.value;
    mimg.alt = mname.value;
    var mtitle = document.createElement('h2')
    mtitle.textContent = mname.value;
    mdiv.append(mimg, mtitle)
    mainDiv.appendChild(mdiv)
}