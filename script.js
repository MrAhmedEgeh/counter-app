var number = document.querySelector(".number"); //the number
var minus =  document.querySelector("#minus"); //minus sign button
var rest =  document.querySelector("#rest"); //rest button
var plus =  document.querySelector("#plus"); //plus sign button

plus.addEventListener("click",function(){
  number.innerHTML++;
})
minus.addEventListener("click",function(){
  number.innerHTML--;
})
rest.addEventListener("click",function(){
  number.innerHTML = 0;
})