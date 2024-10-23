window.onload = document.querySelector(".cookie-container").style.display = "flex";

const cross = document.querySelector(".cross");
cross.addEventListener("click", () => {
  document.querySelector(".cookie-container").style.display = "none";
});

const btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
    document.querySelector(".cookie-container").style.display = "none";
})