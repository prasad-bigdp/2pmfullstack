const input = document.getElementById("inp")
function searchMovies ()
{
    const inputValue = input.value;
    fetch(`https://www.omdbapi.com/?s=${inputValue}&apikey=e980a8b4`)
        .then(function (res)
        {
            console.log(res)
          return res.json()
        })
        .then(function (data)
        {
            displayData(data.Search)
        })
        .catch(function (err)
        {
            console.log(err)
        })
}
const mainDiv = document.getElementById("output")
function displayData (arr)
{
  
    arr.forEach(function (val)
    {
          console.log(val)
        const title = document.createElement('h2');
        title.textContent= val.Title
        const image = document.createElement('img');
        image.src = val.Poster;
        image.alt = val.Title;
        mainDiv.append(title,image)
    })
}


document.getElementById('btn').addEventListener('click', searchMovies)

function myData ()
{
    fetch("https://official-joke-api.appspot.com/random_joke")
        // .then(function (res)
        // {
        //     return res.json()
        // })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}
async function myData2 ()
{
    try
    {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke")
        const data = await res.json()
        console.log(data)
    }
    catch (e)
    {
        console.log(e)
    }
}