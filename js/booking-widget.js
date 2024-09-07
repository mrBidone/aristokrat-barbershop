// document.addEventListener("DOMContentLoaded", function () {
//   const recordBtns = document.querySelectorAll(".recordBtn");
//   const hiddenLink = document.getElementById("hiddenLink");
//   if (hiddenLink) {
//     recordBtns.forEach(function (btn) {
//       btn.addEventListener("click", function () {
//         hiddenLink.click();
//       });
//     });
//   } else {
//     console.error("Скрытая ссылка не найдена");
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const originalOpenModal = window.dikidi.openModal;

  // Перехватываем оригинальный метод
  window.dikidi.openModal = function (a, r) {
    if (!r) {
      r = {};
    }

    // Принудительно устанавливаем поведение открытия модального окна
    r.start = "1"; // "1" означает открытие модального окна

    // Вызываем оригинальный метод с модифицированными параметрами
    originalOpenModal(a, r);
  };

  // Ваша логика для кнопок записи
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
