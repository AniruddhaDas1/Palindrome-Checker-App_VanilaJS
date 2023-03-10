let inputVal = document.getElementById("inputs");
let resultVal = document.getElementById("results");
let btns = document.getElementById("btn");

let inpuText = "";
function palindrome() {
  //e.preventDefault();
  let arr = inputVal.value;
  let arr1 = arr.split("").reverse().join("");

  if (arr === arr1) {
    inpuText = "";
    inpuText = "This is a Palindrome Word - " + arr;
  } else {
    inpuText = "";
    inpuText = "This is Not a Palindrome Word - " + arr;
  }
  resultVal.innerText = inpuText;
}

/*
let arr1 = "ada";
let arr2 = arr1.split("").reverse().join("");

console.log(arr2);
*/
