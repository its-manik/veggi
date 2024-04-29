const stampBtns = document.querySelectorAll(".stamp > button");

stampBtns.forEach(element => {
  element.addEventListener("click", (e) => {
    element.classList.toggle("active")
  })
});