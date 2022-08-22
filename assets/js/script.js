let APIKEY = "ZkdYEfV8BG05vP9v7PEIKKd9EaPzatqu";
// https://developers.giphy.com/dashboard/
document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("enter-btn").addEventListener("click", (ev) => {
    ev.preventDefault(); //to stop the page reload
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
    let str = document.getElementById("user-text").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        //  data, pagination, meta
        console.log(content.data);
        console.log("META", content.meta);
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        fc.textContent = content.data[0].title;
        fig.appendChild(img);
        fig.appendChild(fc);
        let gif = document.querySelector(".gif");
        gif.insertAdjacentElement("afterbegin", fig);
        document.querySelector("#user-text").value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  });
}
