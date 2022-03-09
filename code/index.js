// TODO Define constant variable arrays here that will be used for the selection drop downs
// typeOptions = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
// participantOptions = [0, 1, 2, 3, "4+"]
// priceOptions = ["Free!", "I'm willing to pay"] <-- "willing to pay" will also include free options
// allOptionArrays = [typeOptions, participantOptions, priceOptions]

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll("select");
  const instance = M.FormSelect.init(elems);

  // TODO forEach loop for allOptionArrays
  //  - Call populateOptions, passing in each array and the target dropdown menu id

  // TODO Add event listener for Submit button
  // const selectionsObject = gatherOptions function

  // TODO Send 'selections' to fetchGet function
  // - Call fetchGet, passing in selectionsObject
});

// TODO Function populateOptions(array, optionMenuId)
// Takes 2 arguments (array, target dropdown menu id)
// forEach loop through array, adding each option to specified dropdown
// Return nothing

// TODO Function gatherOptions()
// Takes no arguments
// getelementbyID for each of the dropdown option menus
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
