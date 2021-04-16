//PRELOADER
window.addEventListener('load', () => {
  const preloader = document.querySelector('#preloader');
  preloader.classList.add('opacity-0');
  preloader.classList.add('pointer-events-none');
})

/* GET ELEMENTS WIDTH AND MAKE THEIR WIDTH EQUAL TO THEIR HEIGHT */
function resizeItems() {
  document.querySelectorAll(".item").forEach((item) => {
    let itemW = item.offsetWidth;
    item.style.height = String(itemW) + "px";
  });
}

resizeItems();

//clock

function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var midday = "AM";
  midday = hour >= 12 ? "pm" : "am"; /* assigning AM/PM */
  hour =
    hour == 0
      ? 12
      : hour > 12
      ? hour - 12
      : hour; /* assigning hour in 12-hour format */
  hour = changeTime(hour);
  min = changeTime(min);
  sec = changeTime(sec);
  document.querySelectorAll(".Clocktime").forEach((item) => {
    item.innerHTML =
      hour +
      " : " +
      min +
      "<span style='font-size: smaller;'> " +
      midday +
      "</span>"; /* adding time to the div */
  });

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  var curWeekDay = days[date.getDay()]; // get day
  var curDay = date.getDate(); // get date
  var curMonth = months[date.getMonth()]; // get month
  var curYear = date.getFullYear(); // get year
  var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear; // get full date
  document.getElementById("Clockdate").innerHTML = date;

  var t = setTimeout(currentTime, 1000); /* setting timer */
}

function changeTime(k) {
  /* appending 0 before time elements if less than 10 */
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

currentTime();

function isHidden(target){
  if (target.classList.contains("hidden")){
    return true
  }
  return false
}

//wallpaper

const screen = document.querySelector("#screen");

screen.style.backgroundImage = "url(./img/bg-1.jpg)";

//modal and apps stuff

function hideModal(target) {
  if (!target.classList.contains("hidden")) {
    target.classList.add("hidden");
  }
  if (!target.classList.contains("flex")) {
    target.classList.remove("flex");
  }
}

function hideSModal(target){
  if(target==document.querySelector("#face-modal")){
    target.classList.add("opacity-0");
    target.classList.add("pointer-events-none");
  }
}

/* modals */

taskModal = document.querySelector("#task-modal");
galleryModal = document.querySelector("#gallery-modal");
ddgModal = document.querySelector("#ddg-modal");
igModal = document.querySelector("#ig-modal");
chessModal = document.querySelector("#chess-modal");
calcModal = document.querySelector("#calc-modal");
faceModal = document.querySelector("#face-modal");

/* task manager bars */

taskBar = document.querySelector("#task-bar");
galleryBar = document.querySelector("#gallery-bar");
ddgBar = document.querySelector("#ddg-bar");
igBar = document.querySelector("#ig-bar");
chessBar = document.querySelector("#chess-bar");
calcBar = document.querySelector("#calc-bar");
faceBar = document.querySelector("#face-bar");

taskBarCPU = document.querySelector("#task-barCPU");
galleryBarCPU = document.querySelector("#gallery-barCPU");
ddgBarCPU = document.querySelector("#ddg-barCPU");
igBarCPU = document.querySelector("#ig-barCPU");
chessBarCPU = document.querySelector("#chess-barCPU");
calcBarCPU = document.querySelector("#calc-barCPU");
faceBarCPU = document.querySelector("#face-barCPU");

/* Task manager tags */
galleryTag = document.querySelector("#gallery-tag");
ddgTag = document.querySelector("#ddg-tag");
igTag = document.querySelector("#ig-tag");
chessTag = document.querySelector("#chess-tag");
calcTag = document.querySelector("#calc-tag");
faceTag = document.querySelector("#face-tag");

/* purge task icons */

taskPurge = document.querySelector("#taskPurge");
galleryPurge = document.querySelector("#galleryPurge");
ddgPurge = document.querySelector("#ddgPurge");
igPurge = document.querySelector("#igPurge");
chessPurge = document.querySelector("#chessPurge");
calcPurge = document.querySelector("#calcPurge");
facePurge = document.querySelector("#facePurge");

/* background application modals */

taskBg = document.querySelector("#taskBg");
galleryBg = document.querySelector("#galleryBg");
ddgBg = document.querySelector("#ddgBg");
igBg = document.querySelector("#igBg");
chessBg = document.querySelector("#chessBg");
calcBg = document.querySelector("#calcBg");
faceBg = document.querySelector("#faceBg");

/* background application modal purge icons */

taskBgPurge = document.querySelector("#taskBgPurge");
galleryBgPurge = document.querySelector("#galleryBgPurge");
ddgBgPurge = document.querySelector("#ddgBgPurge");
igBgPurge = document.querySelector("#igBgPurge");
chessBgPurge = document.querySelector("#chessBgPurge");
calcBgPurge = document.querySelector("#calcBgPurge");
faceBgPurge = document.querySelector("#faceBgPurge");

function randomWidth(min,target){
  randomValue = Math.floor((Math.random() * 100) + min);
  target.style.width = String(randomValue) + '%';
}

function killTask(target){
  target.style.width = '0px';
}

const home = document.querySelector("#home").addEventListener("click", () => {
  hideModal(taskModal);
  hideModal(galleryModal);
  hideModal(ddgModal);
  hideModal(igModal);
  hideModal(chessModal);
  hideModal(calcModal);
  hideSModal(faceModal);
  if(!document.querySelector("#background-modal").classList.contains('hidden')){
    hideModal(document.querySelector("#background-modal"));
  }
});

const back = document.querySelector("#back").addEventListener("click", () => {
  if(!document.querySelector("#background-modal").classList.contains('hidden')){
    hideModal(document.querySelector("#background-modal"));
    return 0
  }
  hideModal(taskModal);
  hideModal(galleryModal);
  hideModal(ddgModal);
  hideModal(igModal);
  hideModal(chessModal);
  hideModal(calcModal);
  hideSModal(faceModal);
});

const windows = document.querySelector("#windows").addEventListener("click", () => {
  if(document.querySelector("#background-modal").classList.contains('hidden')){
    document.querySelector("#background-modal").classList.add("flex");
    document.querySelector("#background-modal").classList.remove("hidden");
  }else{
    hideModal(document.querySelector("#background-modal"));
  }
});

const gallery = document
  .querySelector("#gallery")
  .addEventListener("click", () => {
    galleryModal.classList.add("flex");
    galleryModal.classList.remove("hidden");
    galleryTag.classList.add("flex");
    galleryTag.classList.remove("hidden");
    galleryBg.classList.remove("hidden");
    resizeItems();
    randomWidth(20,galleryBar)
    randomWidth(10,galleryBarCPU)
  });

function changeWallpaper(
  trigger,
  number,
  target = document.querySelector("#screen")
) {
  trigger.addEventListener(
    "click",
    () => (target.style.backgroundImage = "url(./img/bg-" + number + ".jpg)")
  );
}

for(let i = 1; i < 13; i++){
  let itemBg = document.querySelector("#changeBg-" + i);
  changeWallpaper(itemBg, i);
}

const task = document.querySelector("#task").addEventListener("click", () => {
  taskModal.classList.add("flex");
  taskModal.classList.remove("hidden");
  taskBg.classList.remove("hidden");
  randomWidth(25,taskBar)
  randomWidth(15,taskBarCPU)
});

const ddg = document.querySelector("#ddg").addEventListener("click", () => {
  ddgModal.classList.add("flex");
  ddgModal.classList.remove("hidden");
  ddgTag.classList.add("flex");
  ddgTag.classList.remove("hidden");
  ddgBg.classList.remove("hidden");
  randomWidth(15,ddgBar)
  randomWidth(25,ddgBarCPU)
});

const instagram = document
  .querySelector("#instagram")
  .addEventListener("click", () => {
    igModal.classList.add("flex");
    igModal.classList.remove("hidden");
    igTag.classList.add("flex");
    igTag.classList.remove("hidden");
    igBg.classList.remove("hidden");
    randomWidth(40,igBar)
    randomWidth(20,igBarCPU)
  });

const candy = document.querySelector("#chess").addEventListener("click", () => {
  chessModal.classList.add("flex");
  chessModal.classList.remove("hidden");
  chessTag.classList.add("flex");
  chessTag.classList.remove("hidden");
  chessBg.classList.remove("hidden");
  randomWidth(30,chessBar)
  randomWidth(35,chessBarCPU)
});

const calc = document.querySelector("#calc").addEventListener("click", () => {
  calcModal.classList.add("flex");
  calcModal.classList.remove("hidden");
  calcTag.classList.add("flex");
  calcTag.classList.remove("hidden");
  calcBg.classList.remove("hidden");
  randomWidth(10,calcBar)
  randomWidth(10,calcBarCPU)
});

const face = document.querySelector("#face").addEventListener("click", () => {
  faceModal.classList.remove("opacity-0");
  faceModal.classList.remove("pointer-events-none");
  faceTag.classList.add("flex");
  faceTag.classList.remove("hidden");
  faceBg.classList.remove("hidden");
  randomWidth(35,faceBar)
  randomWidth(40,faceBarCPU)
});

taskPurge.addEventListener('click', () => {
  hideModal(taskModal);
  taskBg.classList.add("hidden");
})

galleryPurge.addEventListener('click', () => {
  hideModal(galleryTag);
  killTask(galleryBar);
  killTask(galleryBarCPU);
  galleryBg.classList.add("hidden");
})

ddgPurge.addEventListener('click', () => {
  hideModal(ddgTag);
  killTask(ddgBar);
  killTask(ddgBarCPU);
  ddgBg.classList.add("hidden");
})

igPurge.addEventListener('click', () => {
  hideModal(igTag);
  killTask(igBar);
  killTask(igBarCPU);
  igBg.classList.add("hidden");
})

chessPurge.addEventListener('click', () => {
  hideModal(chessTag);
  killTask(chessBar);
  killTask(chessBarCPU);
  chessBg.classList.add("hidden");
})

calcPurge.addEventListener('click', () => {
  hideModal(calcTag);
  killTask(calcBar);
  killTask(calcBarCPU);
  calcBg.classList.add("hidden");
})

facePurge.addEventListener('click', () => {
  hideModal(faceTag);
  killTask(faceBar);
  killTask(faceBarCPU);
  faceBg.classList.add("hidden");
})

taskBgPurge.addEventListener('click', () => {
  hideModal(taskModal);
  taskBg.classList.add("hidden");
  if(isHidden(taskBg) && isHidden(galleryBg) && isHidden(ddgBg) && isHidden(igBg) && isHidden(chessBg) && isHidden(calcBg) && isHidden(faceBg)){
    hideModal(document.querySelector('#background-modal'))
  }
})

galleryBgPurge.addEventListener('click', () => {
  hideModal(galleryTag);
  killTask(galleryBar);
  killTask(galleryBarCPU);
  hideModal(galleryModal)
  galleryBg.classList.add("hidden");
  if(isHidden(taskBg) && isHidden(galleryBg) && isHidden(ddgBg) && isHidden(igBg) && isHidden(chessBg) && isHidden(calcBg) && isHidden(faceBg)){
    hideModal(document.querySelector('#background-modal'))
  }
})

ddgBgPurge.addEventListener('click', () => {
  hideModal(ddgTag);
  killTask(ddgBar);
  killTask(ddgBarCPU);
  hideModal(ddgModal)
  ddgBg.classList.add("hidden");
  if(isHidden(taskBg) && isHidden(galleryBg) && isHidden(ddgBg) && isHidden(igBg) && isHidden(chessBg) && isHidden(calcBg) && isHidden(faceBg)){
    hideModal(document.querySelector('#background-modal'))
  }
})

igBgPurge.addEventListener('click', () => {
  hideModal(igTag);
  killTask(igBar);
  killTask(igBarCPU);
  hideModal(igModal)
  igBg.classList.add("hidden");
  if(isHidden(taskBg) && isHidden(galleryBg) && isHidden(ddgBg) && isHidden(igBg) && isHidden(chessBg) && isHidden(calcBg) && isHidden(faceBg)){
    hideModal(document.querySelector('#background-modal'))
  }
})

chessBgPurge.addEventListener('click', () => {
  hideModal(chessTag);
  killTask(chessBar);
  killTask(chessBarCPU);
  hideModal(chessModal)
  chessBg.classList.add("hidden");
  if(isHidden(taskBg) && isHidden(galleryBg) && isHidden(ddgBg) && isHidden(igBg) && isHidden(chessBg) && isHidden(calcBg) && isHidden(faceBg)){
    hideModal(document.querySelector('#background-modal'))
  }
})

calcBgPurge.addEventListener('click', () => {
  hideModal(calcTag);
  killTask(calcBar);
  killTask(calcBarCPU);
  hideModal(calcModal)
  calcBg.classList.add("hidden");
  if(isHidden(taskBg) && isHidden(galleryBg) && isHidden(ddgBg) && isHidden(igBg) && isHidden(chessBg) && isHidden(calcBg) && isHidden(faceBg)){
    hideModal(document.querySelector('#background-modal'))
  }
})

faceBgPurge.addEventListener('click', () => {
  hideModal(faceTag);
  killTask(faceBar);
  killTask(faceBarCPU);
  hideSModal(faceModal)
  faceBg.classList.add("hidden");
  if(isHidden(taskBg) && isHidden(galleryBg) && isHidden(ddgBg) && isHidden(igBg) && isHidden(chessBg) && isHidden(calcBg) && isHidden(faceBg)){
    hideModal(document.querySelector('#background-modal'))
  }
})

const galleryOpen = document
  .querySelector("#galleryOpen")
  .addEventListener("click", () => {
    galleryModal.classList.add("flex");
    galleryModal.classList.remove("hidden");
    resizeItems();
    hideModal(taskModal);
    hideModal(ddgModal)
    hideModal(igModal);
    hideModal(chessModal);
    hideModal(calcModal);
    hideSModal(faceModal);
    if(!document.querySelector("#background-modal").classList.contains('hidden')){
      hideModal(document.querySelector("#background-modal"));
    }
  });

const taskOpen = document.querySelector("#taskOpen").addEventListener("click", () => {
  taskModal.classList.add("flex");
  taskModal.classList.remove("hidden");
  hideModal(galleryModal) ;
  hideModal(ddgModal);
  hideModal(igModal);
  hideModal(chessModal);
  hideModal(calcModal);
  hideSModal(faceModal);
  if(!document.querySelector("#background-modal").classList.contains('hidden')){
    hideModal(document.querySelector("#background-modal"));
  }
});

const ddgOpen = document.querySelector("#ddgOpen").addEventListener("click", () => {
  ddgModal.classList.add("flex");
  ddgModal.classList.remove("hidden");
  hideModal(taskModal);
  hideModal(galleryModal) ;
  hideModal(igModal);
  hideModal(chessModal);
  hideModal(calcModal);
  hideSModal(faceModal);
  if(!document.querySelector("#background-modal").classList.contains('hidden')){
    hideModal(document.querySelector("#background-modal"));
  }
});

const igOpen = document
  .querySelector("#igOpen")
  .addEventListener("click", () => {
    igModal.classList.add("flex");
    igModal.classList.remove("hidden");
    hideModal(taskModal);
    hideModal(galleryModal) ;
    hideModal(ddgModal);
    hideModal(chessModal);
    hideModal(calcModal);
    hideSModal(faceModal);
    if(!document.querySelector("#background-modal").classList.contains('hidden')){
      hideModal(document.querySelector("#background-modal"));
    }
  });

const candyOpen = document.querySelector("#chessOpen").addEventListener("click", () => {
  chessModal.classList.add("flex");
  chessModal.classList.remove("hidden");
  hideModal(taskModal);
  hideModal(galleryModal) ;
  hideModal(ddgModal);
  hideModal(igModal);
  hideModal(calcModal);
  hideSModal(faceModal);
  if(!document.querySelector("#background-modal").classList.contains('hidden')){
    hideModal(document.querySelector("#background-modal"));
  }
});

const calcOpen = document.querySelector("#calcOpen").addEventListener("click", () => {
  calcModal.classList.add("flex");
  calcModal.classList.remove("hidden");
  hideModal(taskModal);
  hideModal(galleryModal) ;
  hideModal(ddgModal);
  hideModal(igModal);
  hideModal(chessModal);
  hideSModal(faceModal);
  if(!document.querySelector("#background-modal").classList.contains('hidden')){
    hideModal(document.querySelector("#background-modal"));
  }
});

const faceOpen = document.querySelector("#faceOpen").addEventListener("click", () => {
  faceModal.classList.remove("opacity-0");
  hideModal(taskModal);
  hideModal(galleryModal);
  hideModal(ddgModal);
  hideModal(igModal);
  hideModal(chessModal);
  hideModal(calcModal);
  if(!document.querySelector("#background-modal").classList.contains('hidden')){
    hideModal(document.querySelector("#background-modal"));
  }
});