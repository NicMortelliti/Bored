// API URL
let url = "https://www.boredapi.com/api/activity?";

// Wait for DOM to fully load before executing JS
document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", gatherSelections);
});

// Collect user selections into an object.
// Then pass into fetchGet function.
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

// Send request to API
function fetchGet(objOfSelections) {
  const type = `type=${objOfSelections.type}`;
  const participants = `participants=${objOfSelections.participants}`;
  const price = `price=${objOfSelections.price}`;
  const completeUrl = `${url}${type}&${participants}&${price}`;

  fetch(completeUrl)
    .then(resp => resp.json())
    .then(json => respHandler(json))
    .catch(error => {
      alert(`Sorry, that didn't work.\n\n${error}`);
    });
}

// Handle Response from API
function respHandler(apiResponseJson) {
  const activityDivider = document.getElementById("activityDivider");
  const activityLabel = document.getElementById("activityLabel");
  const activityString = document.getElementById("activityString");
  const prevActivityString1 = document.getElementById("prevActivityString1");
  const prevActivityString2 = document.getElementById("prevActivityString2");
  const prevActivityString3 = document.getElementById("prevActivityString3");
  const prevActivityString4 = document.getElementById("prevActivityString4");
  const prevActivityString5 = document.getElementById("prevActivityString5");

  // Not doing a string comparison here because we are comparing a string to an object key
  if ("error" == Object.keys(apiResponseJson)) {
    // Show alert message if API was unable to find an activity with
    // current search criteria.
    alert(
      "Sorry, I couldn't find anything. Try adjusting your search criteria."
    );
  } else {
    // Display divider regardless of valid or invalid response from API.
    // Because we'll show either the valid activity, or a message saying
    // an activity wasn't found with that search criteria.
    activityDivider.setAttribute("class", "divider");
    prevActivityDivider.setAttribute("class", "divider");

    // Display label for activity string
    activityLabel.textContent = "Here's an idea: ";

    // Update previous activity list
    prevActivityString5.innerHTML = prevActivityString4.innerHTML;
    prevActivityString4.innerHTML = prevActivityString3.innerHTML;
    prevActivityString3.innerHTML = prevActivityString2.innerHTML;
    prevActivityString2.innerHTML = prevActivityString1.innerHTML;
    prevActivityString1.innerHTML = activityString.innerHTML;

    // Only display Clear button if the history list is populated
    // with at least one string.
    if (
      prevActivityString1.innerHTML !== "" &&
      prevActivityString2.innerHTML === ""
    ) {
      addClearBtn();
    }
  }

  // If a link is returned with the API results make the
  // activity string a URL.
  if (apiResponseJson.link != "") {
    activityString.innerHTML = `<a href=${apiResponseJson.link}>${apiResponseJson.activity}.</a>`;
  } else {
    activityString.textContent = `${apiResponseJson.activity}.`;
  }
}

// TODO Add a "Clear" button to bottom of history list that will clear the list
// Add clear button to history list through DOM manipulation
function addClearBtn() {
  newBtn = document.createElement("a");
  newBtn.setAttribute(
    "class",
    "waves-effect waves-light btn-small"
  );
  newBtn.textContent = "Clear";
  document.getElementById("activityList").appendChild(newBtn);

  // Add event listener to button
  newBtn.addEventListener("click", () => {
    return clearClick([
      prevActivityString1,
      prevActivityString2,
      prevActivityString3,
      prevActivityString4,
      prevActivityString5,
      newBtn,
    ]);
  });
}

// Clear history list
function clearClick(historyStringArray) {
  historyStringArray.forEach(string => (string.innerHTML = ""));
  newBtn.remove();
}
