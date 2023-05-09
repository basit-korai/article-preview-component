const shareBtn = document.querySelector(".btn-share");
const closeBtn = document.querySelector("#btn-close");
const popup = document.querySelector("#popup");


shareBtn.addEventListener("click", () => {
  popup.show();
});

closeBtn.addEventListener("click", () => {
   popup.close();

});

