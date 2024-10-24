// convet src img main to new src
const imgMain = document.querySelector("#main");
// console.log(main);
const allImgs = document.querySelector(".foot");
// console.log(allImgs);
allImgs.addEventListener("click", (e) => {
  imgMain.src = e.target.src;
  if (e.target.id == 0) {
    document.body.style.backgroundColor = "red";
  } else if (e.target.id == 1) {
    document.body.style.backgroundColor = "yellow";
  } else if (e.target.id == 2) {
    document.body.style.backgroundColor = "blue";
  } else if (e.target.id == 3) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "#555";
  }
});
