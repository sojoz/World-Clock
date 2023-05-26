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
updateTime();
setInterval(updateTime, 1000);
