document.addEventListener("DOMContentLoaded", function () {
  const recordBtns = document.querySelectorAll(".recordBtn");
  const hiddenLink = document.getElementById("hiddenLink");
  if (hiddenLink) {
    recordBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        hiddenLink.click();
      });
    });
  } else {
    console.error("Скрытая ссылка не найдена");
  }
});
