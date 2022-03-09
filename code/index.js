// TODO Define constant variable arrays here that will be used for the selection drop downs
const typeOptions = {
  id: "activityTypeSelect",
  options: [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ],
};

const participantOptions = {
  id: "numberOfPeopleSelect",
  options: [0, 1, 2, 3, "4+"],
};

// "willing to pay" will also include free options
const priceOptions = {
  id: "priceSelect",
  options: ["Free!", "I'm willing to pay"],
};

const allOptionArrays = [typeOptions, participantOptions, priceOptions];

document.addEventListener("DOMContentLoaded", function () {
  // const elems = document.querySelectorAll("select");
  // var instances = M.FormSelect.init(elems);

  // TODO forEach loop for allOptionArrays
  //  - Call populateOptions, passing in each array and the target dropdown menu id
  allOptionArrays.forEach(selectionArray => {
    populateOptions(selectionArray.id, selectionArray.options);
  });

  // TODO Add event listener for Submit button
  // const selectionsObject = gatherOptions function

  // TODO Send 'selections' to fetchGet function
  // - Call fetchGet, passing in selectionsObject
});

// TODO Function populateOptions(optionMenuId, array)
// forEach loop through array, adding each option to specified dropdown
// Return nothing
function populateOptions(id, selectionArray) {
  // For each element in array, create an object and append to appropriate drop down (based on id)
  console.log(selectionArray);
  var options = { dropdownOptions: { selectionArray } };
  const dropdown = document.getElementById(id);

  var instances = M.FormSelect.init(dropdown, options);

  // var instances = M.dropdown.init(dropdown, selectionArray);;
}

// TODO Function gatherOptions()
// Takes no arguments
// getElementbyID for each of the dropdown option menus
// - Gather the current selection of each dropdown
// Return selected options in an object as follows:
// {  type: ${typeSelection},
//    participants: ${participantsSelection}
//    price: ${priceSelection}
// }

// TODO Function fetchGet(objectOfSelections)

// TODO Function to create a config object for API communication
function constructRequest(httpVerb) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    // TODO Update body
    body: "placeholder" /* Your data goes here */,
  };
}
