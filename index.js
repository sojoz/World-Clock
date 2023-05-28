function updateTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  parisDateElement.innerHTML = moment().format("dddd Do [of] MMMM");
  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("h:m:ss [<small>] A [</small>]");

  let newyorkElement = document.querySelector("#newyork");
  let newyorkDateElement = newyorkElement.querySelector(".date");
  let newyorkTimeElement = newyorkElement.querySelector(".time");

  newyorkDateElement.innerHTML = moment().format("dddd Do [of] MMMM");
  newyorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("h:m:ss [<small>] A [</small>]");

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");

  sydneyDateElement.innerHTML = moment().format("dddd Do [of] MMMM");
  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("h:m:ss [<small>] A [</small>]");
}

//Drop down choices

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment.tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
        <div class="city">
          <div class="date-city">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd Do [of] MMMM")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:m:ss [<small>] A [</small>]"
          )}</div>
        </div>`;
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss "
        )}<small>${cityTime.format("A")}</small></div>
            </div>`;
  setTimeout(() => {
    updateCity(event);
  }, 1000);
}
updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#cityChoice");
citySelectElement.addEventListener("change", updateCity);
setInterval(updateCity, 1000);
