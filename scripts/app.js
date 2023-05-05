const shareBtn = document.querySelector(".btn-share");
const closeBtn = document.querySelector(".btn-close");
const popup = document.querySelector("#popup");

console.log(popup);

window.addEventListener("DOMContentLoaded", popupClose);

function popupClose() {
  popup.close();

}
// shareBtn.addEventListener("click", () => {
//   popup.show();
// });

// closeBtn.addEventListener("click", () => {
//   popup.close();
// });
