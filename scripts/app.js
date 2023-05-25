const shareBtn = document.querySelector("#btn-share");
const closeBtn = document.querySelector("#btn-close");
const popup = document.querySelector("#popup");

shareBtn.addEventListener("click", () => {
  let attr = popup.hasAttribute("open");

  if (!attr) {
    popup.show();
  } else {
    popup.close();
  }
});

closeBtn.addEventListener("click", () => {
  popup.close();
});