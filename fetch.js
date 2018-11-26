var body = document.getElementById("body")

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  fetch("https://galvanize-cors.herokuapp.com/https://xkcd.com/601/info.0.json")
  .then(function(response){
    var responseJson = response.json()
    console.log(responseJson)
    return responseJson
  })
  .then(function(responseJson){
    var header = document.querySelector("h1")
    header.innerHTML = responseJson.title
    var pElement = document.querySelector("p")
    pElement.innerHTML = responseJson.alt
    var image = document.querySelector("img")
    image.src = responseJson.img
  })
  var button = document.getElementById("button")
  button.addEventListener("click", function(event){
    alert("hey are you listening?")
  })

  body.addEventListener("click", function(event){
    body.classList.toggle("body")
  })
  
});