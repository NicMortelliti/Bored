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
  let priceBinary = 1;
  if (price.checked === true) {
    priceBinary = 0;
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
  const completeUrl = `${url}${type}&${participants}&${price}`;

  console.log(completeUrl);

  fetch(completeUrl)
    .then(resp => resp.json())
    .then(json => respHandler(json));
  // ! Figure out why error pops up even when the response is valid
  // .catch(error => {
  //   alert(`Sorry, that didn't work.\n\n${error}`);
}

function respHandler(apiResponseJson) {
  const activityDivider = document.getElementById("activityDivider");
  const activityLabel = document.getElementById("activityLabel");
  const activityString = document.getElementById("activityString");

  console.log(Object.keys(apiResponseJson));

  // Display divider regardless of valid or invalid response from API.
  // Because we'll show either the valid activity, or a message saying
  // an activity wasn't found with that search criteria.
  activityDivider.setAttribute("class", "divider");

  // Not doing a string comparison here because we are comparing a string to an object key
  if ("error" == Object.keys(apiResponseJson)) {
    console.log("that's an error");

    // Empty the activity label string when no activities were found.
    activityLabel.textContent = "";
    activityString.textContent =
      "I'm sorry, I didn't find anything. Try adjusting your search criteria.";
  } else {
    activityLabel.textContent = "Here's an idea: ";
    activityString.textContent = `${apiResponseJson.activity}.`;
  }
}
