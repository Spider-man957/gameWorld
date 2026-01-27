let closeModal1 = document.getElementById("modal1_close-btn");
let inputName = document.querySelector(".modal__input");
let saveNameModal = document.getElementById("modal_btn-save");
let firstModal = document.getElementById("first_modal");
let yourName = "";
let headerName = document.getElementById("header_name-wlk");

if (saveNameModal) {
  saveNameModal.addEventListener("click", (event) => {
    if (!inputName.value.trim()) {
      yourName = "User";
    } else {
      yourName = inputName.value;
    }
    if (headerName) {
      headerName.innerHTML = `Вітаємо, ${yourName}`;
    }
  });
}

if (closeModal1) {
  closeModal1.addEventListener("mousedown", (event) => {
    if (firstModal) firstModal.style.display = "none";
  });
}

// check your year
let yearCheckInput = document.getElementById("yearCheckInput");
let yearCheckBtn = document.getElementById("yearCheckBtn");
let mainResultYear = document.getElementById("mainResultYear");
if (yearCheckBtn) {
  yearCheckBtn.addEventListener("mousedown", (event) => {
    let year = Number(yearCheckInput.value);
    if (isNaN(year) || !yearCheckInput.value.trim()) {
      alert("Вы не ввели число!");
    } else {
      year = yearCheckInput.value;
      if (year % 4 === 0) {
        mainResultYear.innerHTML = `Ви народилися у високосний рік!`;
        mainResultYear.style.color = "#039900";
      } else {
        mainResultYear.innerHTML = `Ви народилися не у високосний рік!`;
        mainResultYear.style.color = "#990000";
      }
    }
  });
}


let guessNumberInput = document.getElementById("guessNumberInput");
let guessNumberBtn = document.getElementById("guessNumberBtn");
let guessNumberResult = document.getElementById("guessNumberResult");