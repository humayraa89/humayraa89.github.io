var factList = [
  "One in four adults in America live with a disability.",/*0*/
  "Released by WHO in 2020, about 15% of the world's population lives with a disability.",/*1*/
  "The most common disability is mobility.",/*2*/
  "Almost everyone is likely to have a disability in their lifetime.",/*3*/
  ]

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}/* .js files add interaction to your website */

