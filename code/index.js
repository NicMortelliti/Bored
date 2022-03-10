// API URL
let url = "https://www.boredapi.com/api/activity?";

document.addEventListener("DOMContentLoaded", function () {
  // TODO disable submit button until selections are made
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", gatherSelections);
});

// Takes no arguments
function gatherSelections() {
  const type = document.getElementById("activityTypeSelect");
  const participants = document.getElementById("numberOfPeopleSelect");
  const price = document.getElementById("priceCheck");

  // Convert price checkbox value from true/false to 1/0
  let priceBinary = 0;
  if (price.checked === true) {
    priceBinary = 1;
  }

  // Call fetchGet function passing in object of user selections
  fetchGet({
    type: type.value,
    participants: participants.value,
    price: priceBinary,
  });
}

function fetchGet(objOfSelections) {
  const type = `type=${objOfSelections.type}`;
  const participants = `participants=${objOfSelections.participants}`;
  const price = `price=${objOfSelections.price}`;

  console.log(`Sent: ${url}${type}&${participants}&${price}`);

  fetch(`${url}${type}&${participants}&${price}`)
    .then(resp => resp.json())
    .then(json => respHandler(json))
    .catch(respHandler("error"));
}

function respHandler(apiResponseJson) {
  const activityDivider = document.getElementById("activityDivider");
  const activityLabel = document.getElementById("activityLabel");
  const activityString = document.getElementById("activityString");

  console.log(apiResponseJson);

  if (apiResponseJson === "error") {
    activityLabel.textContent = "";
    activityString.textContent =
      "I'm sorry, I didn't find anything. Try adjusting your search criteria.";
  }

  activityDivider.setAttribute("class", "divider");
  activityLabel.textContent = "Here's an idea: ";
  activityString.textContent = `${apiResponseJson.activity}.`;
}
