const QuineMcCluskey = require("./quinemccluskey.js");

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let numOfvar = document.getElementById("numberOfVar");
  let box = document.getElementById("checkForDont");
  let minterms = document.getElementById("Minterms");
  let dontcare = document.getElementById("Dont-care");
  let str = "";
  const mintermarray = [];
  const dontarray = [];
  for (let index = 0; index < numOfvar.value; index++) {
    str = str + String.fromCharCode(65 + index);
  }
  let minterstring = minterms.value;
  for (let index = 0; index < minterstring.length; index++) {
    if (minterstring[index] != ",") mintermarray.push(minterstring[index]);
  }
  let dontstr = dontcare.value;
  for (let index = 0; index < dontstr.length; index++) {
    if (dontstr[index] != ",") dontarray.push(dontstr[index]);
  }

  const f = new QuineMcCluskey(str, mintermarray, dontarray);
  alert("The minimized expression using QM method = " + f.getFunction());

});
