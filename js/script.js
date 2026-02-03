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

let rightArrow = document.getElementById("rightArrow");
let leftArrow = document.getElementById("leftArrow");
let photo = document.getElementById("photo");
let imgName = document.getElementById("imgName");
let imgInfo = document.getElementById("imgInfo");
let zeroPhoto = "url(/img/myPhoto.jpg)";
let firstPhoto = "url(/img/gpt.png)";
let seckondPhoto = "url(/img/githup.png)";
let photos = [zeroPhoto, firstPhoto, seckondPhoto];
let line1 = document.getElementById("_1");
let line2 = document.getElementById("_2");
let line3 = document.getElementById("_3");
let displayPhoto = 0;
photo.style.backgroundImage = photos[displayPhoto];
line1.classList.remove("team__item");
line1.classList.add("line_activ");

function controlImage() {
  if (displayPhoto === 0) {
    leftArrow.style.display = "none";
  } else {
    leftArrow.style.display = "block";
  }
  if (displayPhoto === photos.length - 1) {
    rightArrow.style.display = "none";
  } else {
    rightArrow.style.display = "block";
  }
}
rightArrow.addEventListener("click", () => {
  displayPhoto++;
  rightArrow.style.opacity = "100%";
  photo.style.backgroundImage = photos[displayPhoto];
  controlImage();
  controlName();
});
leftArrow.addEventListener("click", () => {
  displayPhoto = displayPhoto - 1;
  leftArrow.style.opacity = "100%";
  photo.style.backgroundImage = photos[displayPhoto];
  controlImage();
  controlName();
});
function controlName() {
  imgName.style.textAlign = "center";
  imgInfo.style.textAlign = "center";
  line1.classList.remove("line_activ");
  line2.classList.remove("line_activ");
  line3.classList.remove("line_activ");
  line1.classList.add("team__item");
  line2.classList.add("team__item");
  line3.classList.add("team__item");

  if (displayPhoto === 0) {
    imgName.innerHTML = "Timur";
    imgInfo.innerHTML = "Розробник цього сайту";
    line1.classList.add("line_activ");
    line1.classList.remove("team__item");
  }
  if (displayPhoto === 1) {
    imgName.innerHTML = "Chat GPT";
    imgInfo.innerHTML = "допомагав у вирішенні різних проблем";
    line2.classList.add("line_activ");
    line2.classList.remove("team__item");
  }
  if (displayPhoto === 2) {
    imgName.innerHTML = "githup";
    imgInfo.innerHTML =
      "сприяв зберіганню файлів, щоб їх не втратити, забезпечував постійний доступ до коду та допомагав ділитися ним";
    line3.classList.add("line_activ");
    line3.classList.remove("team__item");
  }
}

// scientists

const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];
let filteredBloks;
let Albert = document.getElementById("Albert");
let Isaac = document.getElementById("Isaac");
let Galileo = document.getElementById("Galileo");
let Marie = document.getElementById("Marie");
let Johannes = document.getElementById("Johannes");
let Nicolaus = document.getElementById("Nicolaus");
let Max = document.getElementById("Max");
let Katherine = document.getElementById("Katherine");
let Ada = document.getElementById("Ada");
let Sarah = document.getElementById("Sarah");
let LiseMeitner = document.getElementById("LiseMeitner");
let HannaHammarström = document.getElementById("HannaHammarström");
let scientistsList = document.getElementById("scientistsList");
let scientistsName = [
  Albert,
  Isaac,
  Galileo,
  Marie,
  Johannes,
  Nicolaus,
  Max,
  Katherine,
  Ada,
  Sarah,
  LiseMeitner,
  HannaHammarström,
];
function bornOn1800Plus(scientists, scientistsName) {
  for (let i = 0; i < scientists.length; i++) {
    if (scientists[i].born >= 1800) {
      filteredBloks = true;
    } else {
      filteredBloks = false;
    }
    if (filteredBloks === false) {
      scientistsName[i].style.display = "none";
    }
  }
}
function alphavitFilter(scientists, scientistsName) {
  scientistsName.textContent.sort();
  scientistsList.appendChild()
}
let btn19st = document.getElementById("btn19st");
btn19st.addEventListener("click", () => {
  bornOn1800Plus(scientists, scientistsName);
});
