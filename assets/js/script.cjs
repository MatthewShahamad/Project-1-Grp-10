let APIKEY = "ZkdYEfV8BG05vP9v7PEIKKd9EaPzatqu";
// https://developers.giphy.com/docs/api/endpoint
document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("enter-btn").addEventListener("click", (ev) => {
    //event function =>
    ev.preventDefault(); //stops the page reload
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
    let str = document.getElementById("user-text").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then((response) => response.json()) //get the response from the api
      .then((content) => {
        //  handles the data
        console.log(content.data); //json content from the api, logs to console, Check status!
        console.log("META", content.meta);
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        img.src = content.data[0].images.downsized.url; //gets only the first gif, index at 0 and .downsized from object
        img.alt = content.data[0].title + " " + content.data[0].source; //gets data from object
        fc.textContent = content.data[0].title + " " + content.data[0].source; //gets data from object
        figure.appendChild(img); //adds image to figure
        figure.appendChild(fc);
        let gif = document.querySelector(".gif"); //references gif tag in html
        gif.insertAdjacentElement("afterbegin", figure); //adds elements to html tag
        document.querySelector("#user-text").value = ""; //references text inputted by user from html tag
      })
      .catch((err) => {
        console.error(err); //logs errors to the console
      });
  });
}
