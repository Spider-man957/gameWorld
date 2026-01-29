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
      alert("You didn't write a number");
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
guessNumberBtn.addEventListener("mousedown", (event) => {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let yourNumber = Number(guessNumberInput.value);

  if (isNaN(yourNumber) || !guessNumberInput.value.trim()) {
    alert("You didn't write a number");
  } else {
    if (randomNumber === yourNumber) {
      guessNumberResult.innerHTML = `Вітаю, ви вгадали число! ${yourNumber}`;
      guessNumberResult.style.color = "#039900";
    } else {
      guessNumberResult.innerHTML = `Ви програли, комп’ютер загадав ${randomNumber}`;
      guessNumberResult.style.color = "#990000";
    }
  }
});

let stoneBtn = document.getElementById("rpsStoneBtn");
let sucssionsBtn = document.getElementById("rpsSucssionsBtn");
let paperBtn = document.getElementById("rpsPaperBtn");
let yourChoose;
let rpsControlNumber = document.getElementById("rpsControlNumber");
let yourWin = 0;
let yourLose = 0;
let rpsYourLoseText = document.getElementById("rpsYourLose");
let rpsYourWinText = document.getElementById("rpsYourWin");
rpsYourLoseText.innerHTML = `Комп’ютер - ${yourLose}`;
rpsYourWinText.innerHTML = `Ви - ${yourWin}`;
let rpsYourResult = document.getElementById("rpsYourResult");
stoneBtn.addEventListener("mousedown", () => {
  yourChoose = 1;
});
sucssionsBtn.addEventListener("mousedown", () => {
  yourChoose = 2;
});
paperBtn.addEventListener("mousedown", () => {
  yourChoose = 3;
});
rpsControlNumber.addEventListener("click", () => {
  let randomRps = Math.floor(Math.random() * 3) + 1;

  if (yourChoose === 1 || yourChoose === 2 || yourChoose === 3) {
    if (
      (yourChoose === 1 && randomRps === 2) ||
      (yourChoose === 2 && randomRps === 3) ||
      (yourChoose === 3 && randomRps === 1)
    ) {
      yourWin += 1;
      rpsYourWinText.innerHTML = `Ви - ${yourWin}`;
      rpsYourResult.innerHTML = "Ви виграли раунд!";
      rpsYourResult.style.color = "#039900";
    }
    if (
      (yourChoose === 1 && randomRps === 3) ||
      (yourChoose === 2 && randomRps === 1) ||
      (yourChoose === 3 && randomRps === 2)
    ) {
      yourLose += 1;
      rpsYourLoseText.innerHTML = `Комп’ютер - ${yourLose}`;
      rpsYourResult.innerHTML = "Комп’ютер виграв раунд!";
      rpsYourResult.style.color = "#990000";
    }
  } else {
    alert("You haven't choosen anythink");
  }
});

// number
let calcFirstNumber = document.getElementById("calcFirstNumber");
let calcSeckondNumber = document.getElementById("calcSeckondNumber");
let calcResult = document.getElementById("calcResult");
// btn
let calcBtnPlus = document.getElementById("calcBtnPlus");
let calcBtnNasobeni = document.getElementById("calcBtnNasobeni");
let calcBtnMinus = document.getElementById("calcBtnMinus");
let calcBtnDeleni = document.getElementById("calcBtnDeleni");
let calcBtnResult = document.getElementById("calcBtnResult");
let calcOperation;
calcBtnPlus.addEventListener("click", () => {
  if (
    isNaN(calcFirstNumber.value) ||
    !calcFirstNumber.value.trim() ||
    isNaN(calcSeckondNumber.value) ||
    !calcSeckondNumber.value.trim()
  ) {
    alert("You haven't wroten a number!!!");
  } else {
    calcOperation =
      Number(calcFirstNumber.value) + Number(calcSeckondNumber.value);
  }
});
calcBtnMinus.addEventListener("click", () => {
  if (
    isNaN(calcFirstNumber.value) ||
    !calcFirstNumber.value.trim() ||
    isNaN(calcSeckondNumber.value) ||
    !calcSeckondNumber.value.trim()
  ) {
    alert("You haven't wroten a number!!!");
  } else {
    calcOperation =
      Number(calcFirstNumber.value) - Number(calcSeckondNumber.value);
  }
});
calcBtnNasobeni.addEventListener("click", () => {
  if (
    isNaN(calcFirstNumber.value) ||
    !calcFirstNumber.value.trim() ||
    isNaN(calcSeckondNumber.value) ||
    !calcSeckondNumber.value.trim()
  ) {
    alert("You haven't wroten a number!!!");
  } else {
    calcOperation =
      Number(calcFirstNumber.value) * Number(calcSeckondNumber.value);
  }
});
calcBtnDeleni.addEventListener("click", () => {
  if (
    isNaN(calcFirstNumber.value) ||
    !calcFirstNumber.value.trim() ||
    isNaN(calcSeckondNumber.value) ||
    !calcSeckondNumber.value.trim()
  ) {
    alert("You haven't wroten a number!!!");
  } else {
    calcOperation =
      Number(calcFirstNumber.value) / Number(calcSeckondNumber.value);
  }
});
calcBtnResult.addEventListener("click", () => {
  calcResult.innerHTML = calcOperation;
});

// calc time
let calcTimeInput = document.getElementById("calcTimeInput");
let caclTimeBtn = document.getElementById("caclTimeBtn");
let calcTimeResult = document.getElementById("calcTimeResult");
caclTimeBtn.addEventListener("click", () => {
  if (isNaN(calcTimeInput.value) || !calcTimeInput.value.trim()) {
    alert("You haven't wroten a number!!!");
  } else {
    let yourTime = Number(calcTimeInput.value);
    if (yourTime < 60) {
      hour = 0;
      min = yourTime;
      calcTimeResult.innerHTML = hour + ":" + min;
    } else {
      let hour = Math.floor(yourTime / 60);
      let min = yourTime - hour * 60;
      calcTimeResult.innerHTML = hour + ":" + min;
    }
  }
});

// dino
let dinoContainer = document.getElementById("dinoContainer");
let dino = document.getElementById("dino");
let bigCactus = document.getElementById("bigCactus");
let smallCactus = document.getElementById("smallCactus");
dinoContainer.addEventListener("mousedown", () => {
  dino.classList.add("jump");
  setTimeout(() => dino.classList.remove("jump"), 1000);
});
let cactusSpawnNum = 0;
function spawnCactus() {
  if (cactusSpawnNum >= 10) return;
  let cactusRandom = Math.floor(Math.random() * 2);
  if (cactusRandom === 0) {
    if (bigCactus.style.left === "0px") {
      bigCactus.classList.remove("cactusGo");
      bigCactus.classList.add("teleported");
    }
    bigCactus.style.display = "block";
    bigCactus.classList.add("cactusGo");
    setTimeout(() => {
      bigCactus.classList.remove("cactusGo");
      bigCactus.style.display = "none";
    }, 6000);
  }
  if (cactusRandom === 1) {
    if (smallCactus.style.left === "0px") {
      smallCactus.classList.remove("cactusGo");
      smallCactus.classList.add("teleported");
    }
    smallCactus.style.display = "block";
    smallCactus.classList.add("cactusGo");
    setTimeout(() => {
      smallCactus.classList.remove("cactusGo");
      smallCactus.style.display = "none";
    }, 6000);
  }
  cactusSpawnNum++;
  setTimeout(spawnCactus, 6000);
}
spawnCactus();

// football
let ball = document.getElementById("ball");
let footballGround = document.getElementById("footballGround");
let ballWidth = ball.getBoundingClientRect();
footballGround.addEventListener("click", (e) => {
  const rect = footballGround.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  const radius = ballWidth.width / 2;
  if (x < radius) x = radius;
  if (x > rect.width - radius) x = rect.width - radius;
  if (y < radius) y = radius;
  if (y > rect.height - radius) y = rect.height - radius;
  ball.style.left = x - 25 + "px";
  ball.style.top = y - 25 + "px";
});

// tree numbers

let firstNumberInput = document.getElementById("firstNumberInput");
let seckondNumberInput = document.getElementById("seckondNumberInput");
let thirdthNumberInput = document.getElementById("thirdthNumberInput");
let numbersResult = document.getElementById("numbersResult");
function getMaxNumber() {
  if (
    !firstNumberInput ||
    !seckondNumberInput ||
    !thirdthNumberInput ||
    !numbersResult
  ) {
    return;
  }
  let numbers = [
    Number(firstNumberInput.value),
    Number(seckondNumberInput.value),
    Number(thirdthNumberInput.value),
  ];
  if (
    firstNumberInput.value.trim() === "" &&
    seckondNumberInput.value.trim() === "" &&
    thirdthNumberInput.value.trim() === ""
  ) {
    numbersResult.innerHTML = "Введіть хоча б одне число";
    return;
  }
  if (
    isNaN(firstNumberInput.value) ||
    isNaN(seckondNumberInput.value) ||
    isNaN(thirdthNumberInput.value)
  ) {
    numbersResult.innerHTML = "Ви ввели текст";
    return;
  }
  let theBiggestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > theBiggestNumber) {
      theBiggestNumber = numbers[i];
    }
  }
  numbersResult.innerHTML = `Найбільше число, яке ви ввели - ${theBiggestNumber}`;
}
setInterval(getMaxNumber, 1000);
