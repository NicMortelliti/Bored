// TODO Define constant variable arrays here that will be used for the selection drop downs
// typeOptions = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
// participantOptions = [0, 1, 2, 3, "4+"] 
// priceOptions = ["Free!", "I'm willing to pay"] <-- "willing to pay" will also include free options

document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('select');
  const instance = M.FormSelect.init(elems);

});