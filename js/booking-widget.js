document.addEventListener("DOMContentLoaded", function () {
  const recordBtns = document.querySelectorAll(".recordBtn");
  const hiddenLink = document.getElementById("hiddenLink");

  if (hiddenLink) {
    recordBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        hiddenLink.click();
        const observer = new MutationObserver(function (
          mutationsList,
          observer
        ) {
          mutationsList.forEach(function (mutation) {
            const modalWindow = document.querySelector('[class*="modal"]');
            if (modalWindow) {
              modalWindow.style.display = "flex";
              modalWindow.style.justifyContent = "center";
              modalWindow.style.alignItems = "center";
              observer.disconnect();
            }
          });
        });
        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      });
    });
  } else {
    console.error("Скрытая ссылка не найдена");
  }
});
