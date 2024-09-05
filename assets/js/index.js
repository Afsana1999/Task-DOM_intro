// const buttons = document.querySelector(".btn");

// buttons.onclick = function () {
//   alert("1")
// };

// buttons.addEventListener("click", function(){
//     alert("2")
// })

// buttons.addEventListener("click", function(){
//     alert("3")
// })

// const buttons = document.querySelectorAll(".btn");

// buttons.forEach((item) => {
//   item.addEventListener("click", function() {
//     item.innerText=document.querySelector("h1").innerText
//   });
// });

// const buttons = document.querySelectorAll(".btn");

// for (let item of buttons) {
//   item.addEventListener("click", function () {
//     item.innerText = document.querySelector("h1").innerText;
//   });
// }

// 1 ədəd input olacaq və istifadəçi inputa Innoway-dəki
// Qrup adını yazacaq.Əgər səhər qrupudursa HTML-ə əlavə olunacaq qrup adının rəngi
// sarı olsun, günorta qrupu qırmızı olsun, axşam qrupu isə qara rəngdə olsun
let input = document.querySelector(".inp");
function groupName() {
  let text = document.querySelector(".inp").value;
  if (text == "seher grupu") {
    //input.classList.add("red");
    input.style.color = "red";
  } else if (text == "gunorta grupu") {
    //input.classList.add("yellow");
    input.style.color = "yellow";
  } else {
    //input.classList.add("black");
    input.style.color = "black";
  }
  document.querySelector(".paragraph").innerText = text;
}

let paragraph = document.querySelector(".paragraph");
paragraph.style.color = "blue";
