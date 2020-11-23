// "use strict";
// let userApp = 10;

// if (typeof userApp == "undefined") {
//   alert("Это underfined!");
// }
// try {
//   console.log(userApp);
//   setTimeout(function () {
//     throw new Error(); // вылетит в консоль
//   }, 1000);
// } catch (e) {
//   alert("не сработает");
// }

// let weatherButton = document.querySelector(".button1");
// let userInput = document.querySelector(".input1");
// const userImage = document.querySelector(".image1");
// const userText = document.querySelector(".text1");

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

// weatherButton.addEventListener("click", () => {
ajaxRequest("London");
// });

// function weatherOnscreen(input) {
//   const iconcode = input.icon;
//   const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
//   userImage.src = iconurl;
//   userText.innerHTML = input.description;
//   //   "response", this.response.weather[0];
// }

function ajaxRequest(city) {
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5bf2ec6f9967b27337314ba7941a6425`
  );
  xhr.responseType = "json";
  xhr.onload = function (e) {
    if (this.status == 200) {
      console.log(JSON.parse(this.responseText).weather[0].description); // JSON response
    } else console.log("Город не найден!");
  };
  xhr.send();
}
