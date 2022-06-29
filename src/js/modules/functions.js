import * as el from "./elems.js";
import {dataBase} from './db.js';
export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
  });
}

export const shuffle = (array) => {
  let newArr = [...array]
  let currentIndex = newArr.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArr[currentIndex], newArr[randomIndex]] = [
      newArr[randomIndex],
      newArr[currentIndex],
    ];
  }
  return newArr;
};


//##################DOM MANIPULATIONS######################
//#########################################################

//########SIDE MENU#######

export const openMenu = () => {
  el.mobileMenu.classList.toggle("show");
  el.fog.classList.toggle("hide");
  el.burgerMain.classList.toggle("rotated");
  el.burgerSide.classList.toggle("rotated");
  document.body.classList.toggle("noscroll");
};

export const fogClose = () => {
  el.mobileMenu.classList.remove("show");
  el.fog.classList.add("hide");
  el.burgerMain.classList.remove("rotated");
  el.burgerSide.classList.remove("rotated");
  document.body.classList.toggle("noscroll");
};

//#########CARD SLIDER######

export const makePic = (imgSrc, imgAlt) => {
  let newPic = document.createElement("img");
  newPic.setAttribute("src", imgSrc);
  newPic.setAttribute("alt", imgAlt);
  return newPic;
};

export const makeNamedDiv = (petName) => {
  let namedDiv = document.createElement("div");
  namedDiv.innerHTML = petName;
  namedDiv.classList.add("pets__card-title");
  return namedDiv;
};

export const makeCardButton = (id) => {
  let newButton = document.createElement("button");
  newButton.innerHTML = "Learn more";
  newButton.classList.add("pets__card-button");
  newButton.setAttribute("data-id", id);
  return newButton;
};

export const addCard = (imgSrc, imgAlt, petName, id) => {
  let newCard = document.createElement("div");
  let newPic = makePic(imgSrc, imgAlt);
  let namedDiv = makeNamedDiv(petName);
  let newButton = makeCardButton(id);
  newCard.innerHTML =
    newPic.outerHTML + namedDiv.outerHTML + newButton.outerHTML;
  newCard.classList.add("pets__card");
  return newCard;
};

export const makeSet = () => {
  let currentBase = [];
  let stripeSize;

  if (window.innerWidth >= 768) {
    stripeSize = 3;
  } else if (window.innerWidth < 768 && window.innerWidth >= 320) {
    stripeSize = 2;
  } else if (window.innerWidth <= 320) {
    stripeSize = 1;
  }

  const getSet = () => {
    if (currentBase.length === 0) {
      return shuffle(dataBase).slice(0, stripeSize);
    }
    currentBase = shuffle(
      dataBase.filter((x) => !currentSet.some((y) => x.name === y.name))
    ).slice(0, stripeSize);
    return currentBase;
  };


  //
  //IMPLEMENT UNRANDOM
  //

  // const getItems = (array, amount) => {
  //   const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  //   const arrOut = [];
  //   let sample;
  //   while (arrOut.length < amount) {
  //     sample = getRandomItem(array);
  //     if (!currentBase.includes(sample) && !arrOut.includes(sample)) {
  //       arrOut.push(sample);
  //     }
  //   }

  //   return arrOut;
  // };

  //
  //IMPLEMENT UNRANDOM
  //

  //currentBase = getItems(dataBase, size);
  currentBase = getSet();

  const getItemInfo = (index) => {
    return [currentBase[index].img, currentBase[index].description, currentBase[index].name]
  }

  let cardEntries = [];
  let setSize;
  let width = window.innerWidth;
  let content = document.getElementsByClassName("pets__content-stripe")[0];
  content.innerHTML = "";
  if (width > 1280) {
    setSize = 3;
  } else if (width < 1280 && width >= 768) {
    setSize = 2;
  } else if (width < 768) {
    setSize = 1;
  }
  for (let i = 0; i < setSize; i++) {
    content.innerHTML += addCard(...getItemInfo(i),i).outerHTML;
    cardEntries.push(currentBase[i]);
  }

  const makePopup = (index) => {
    let entry = currentBase[index];
    let newPopup = document.createElement("div");
    newPopup.classList.add("popup__container");
    newPopup.innerHTML = `
    <div class="popup__button"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/></svg>
    </div>
    <div class='popup__content'>
    <img class='popup__pic' src='${entry.img}' alt='${entry.description}'/>
    <div class='popup__text'>
      <h3 class='popup__title'>${entry.name}</h3>
      <h4 class='popup__subtitle'>${entry.type} - ${entry.breed}</h4>
      <p class='popup__description'>${entry.description}</p>
      <ul class='popup__list'>
        <li class='popup__list-item'><b>Age:</b>${entry.age}</li>
        <li class='popup__list-item'><b>Inoculations:</b>${entry.inoculations}</li>
        <li class='popup__list-item'><b>Diseases:</b>${entry.diseases}</li>
        <li class='popup__list-item'><b>Parasites:</b>${entry.parasites}</li>
      </ul>
    </div>
    </div>
    `;
    const fogClosePopup = () => {
      document.getElementsByClassName("popup__container")[0].remove();
      el.fog.removeEventListener("click", fogClosePopup);
      document.body.style.overflowY = "visible";
    };
    document.body.append(newPopup);
    let closePopupButton = document.getElementsByClassName("popup__button")[0];
    closePopupButton.addEventListener("click", () => {
      el.fog.classList.toggle("hide");
      document.getElementsByClassName("popup__container")[0].remove();
      document.body.style.overflowY = "visible";
    });
    el.fog.addEventListener("click", fogClosePopup);
  };

  let cardButtons = document.getElementsByClassName("pets__card-button");

  const cardPopup = (event) => {
    el.fog.classList.toggle("hide");
    makePopup(event.target.dataset.id);
    document.body.style.overflowY = "hidden";
  };

  for (let k = 0; k < cardButtons.length; k++) {
    cardButtons[k].addEventListener("click", cardPopup);
  }

  const toggleFade = () => {
    content.classList.toggle("transform-active");
  };
  toggleFade();
  setTimeout(toggleFade, 500);
};

//########################################
//#############PETS#######################
//########################################

export let size;
if (window.innerWidth >= 1280) {
  size = 8;
} else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
  size = 6;
} else if (window.innerWidth <= 320) {
  size = 3;
}

let myBase = [];

for (let i = 0; i < 48 / dataBase.length; i++) {
  myBase = myBase.concat(JSON.parse(JSON.stringify(shuffle([...dataBase]))));
}
for (let j = 0; j < myBase.length; j++) {
  myBase[j]["id"] = j;
}
console.log(myBase);
export let counter = 0;
export const sliceBasePlus = () => {
  if (counter === myBase.length + 1) {
    return [];
  }
  let currentSet = [];
  for (let i = counter; i < counter + size; i++) {
    currentSet.push(myBase[i]);
  }
  counter += size;
  return currentSet;
};

const sliceBaseMinus = () => {
  if (counter === 0) {
    return [];
  }
  let currentSet = [];
  counter -= size * 2;
  for (i = counter; i < counter + size; i++) {
    currentSet.push(myBase[i]);
  }
  counter += size;
  return currentSet;
};

const makeCard = (index, base) => {
  //let currentBase = shuffle([...dataBase]);
  let petInfo = base[index];
  let newCard = document.createElement("div");
  newCard.classList.add("main__card");
  newCard.innerHTML = `
    <img src="${petInfo.img}" alt="${petInfo.description}"/>
    <div class="main__card-title">${petInfo.name}</div>
    <button class="main__card-button" data-id=${petInfo.id}>Learn more</button>
  `;
  //console.log(newCard);
  return newCard;
};
export const makeSetOfCards = (array) => {
  let container = document.getElementsByClassName("main__container")[0];
  container.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    container.innerHTML += makeCard(i, array).outerHTML;
  }
};

const makePopup = (index) => {
  let entry = myBase[index];
  let newPopup = document.createElement("div");
  newPopup.classList.add("popup__container");
  newPopup.innerHTML = `
  <div class="popup__button"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/></svg>
  </div>
  <div class='popup__content'>
  <img class='popup__pic' src='${entry.img}' alt='${entry.description}'/>
  <div class='popup__text'>
    <h3 class='popup__title'>${entry.name}</h3>
    <h4 class='popup__subtitle'>${entry.type} - ${entry.breed}</h4>
    <p class='popup__description'>${entry.description}</p>
    <ul class='popup__list'>
      <li class='popup__list-item'><b>Age:</b>${entry.age}</li>
      <li class='popup__list-item'><b>Inoculations:</b>${entry.inoculations}</li>
      <li class='popup__list-item'><b>Diseases:</b>${entry.diseases}</li>
      <li class='popup__list-item'><b>Parasites:</b>${entry.parasites}</li>
    </ul>
  </div>
  </div>
  `;
  const fogClosePopup = () => {
    document.getElementsByClassName("popup__container")[0].remove();
    el.fog.removeEventListener("click", fogClosePopup);
    document.body.style.overflowY = "visible";
  };
  document.body.append(newPopup);
  let closePopupButton = document.getElementsByClassName("popup__button")[0];
  closePopupButton.addEventListener("click", () => {
    el.fog.classList.toggle("hide");
    document.getElementsByClassName("popup__container")[0].remove();
    document.body.style.overflowY = "visible";
  });
  el.fog.addEventListener("click", fogClosePopup);
};

const cardPopup = (event) => {
  el.fog.classList.toggle("hide");
  console.log(event.target.dataset.id);
  makePopup(event.target.dataset.id);
  document.body.style.overflowY = "hidden";
};

export const makeButtonsListen = () => {
  let cardButtons = document.getElementsByClassName("main__card-button");
  for (let k = 0; k < cardButtons.length; k++) {
    cardButtons[k].addEventListener("click", cardPopup);
  }
};

export const toggleNavButtons = () => {
  const turnOff = (elem) => {
    if (!elem.classList.contains("inactive")) {
      elem.classList.add("inactive");
    } else console.log("u cant turn Off what already turned off!!!");
  };

  const turnOn = (elem) => {
    if (elem.classList.contains("inactive")) {
      elem.classList.remove("inactive");
    } else console.log("already on!!!!!!");
  };

  if (counter === size) {
    turnOff(el.firstButton);
    el.firstButton.removeEventListener("click", showFirstPage);
    turnOff(el.prevButton);
    el.prevButton.removeEventListener("click", showPrevPage);
    turnOn(el.nextButton);
    el.nextButton.addEventListener("click", showNextPage);
    turnOn(el.lastButton);
    el.lastButton.addEventListener("click", showLastPage);
    return;
  }
  if (counter > size && counter < myBase.length) {
    turnOn(el.firstButton);
    el.firstButton.addEventListener("click", showFirstPage);
    turnOn(el.prevButton);
    el.prevButton.addEventListener("click", showPrevPage);
    turnOn(el.nextButton);
    el.nextButton.addEventListener("click", showNextPage);
    turnOn(el.lastButton);
    el.lastButton.addEventListener("click", showLastPage);
    return;
  }
  if (counter === myBase.length) {
    turnOff(el.nextButton);
    el.nextButton.removeEventListener("click", showNextPage);
    turnOff(el.lastButton);
    el.lastButton.removeEventListener("click", showLastPage);
    turnOn(el.firstButton);
    el.firstButton.addEventListener("click", showFirstPage);
    turnOn(el.prevButton);
    el.prevButton.addEventListener("click", showPrevPage);
    return;
  }
};
let visibleSet;
const showNextPage = () => {
  visibleSet = sliceBasePlus();
  makeSetOfCards(visibleSet);
  el.currentPageCounter.innerHTML = counter / size;
  toggleNavButtons();
  makeButtonsListen();
};

const showPrevPage = () => {
  visibleSet = sliceBaseMinus();
  makeSetOfCards(visibleSet);
  currentPageCounter.innerHTML = counter / size;
  toggleNavButtons();
  makeButtonsListen();
};

const showFirstPage = () => {
  counter = 0;
  showNextPage();
  toggleNavButtons();
  makeButtonsListen();
};

const showLastPage = () => {
  counter = myBase.length - size;
  showNextPage();
  toggleNavButtons();
  makeButtonsListen();
};
