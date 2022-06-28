const dataBase = [
  {
    name: "Jennifer",
    img: "../../assets/images/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

const burgerMain = document.querySelectorAll(".header__button")[0];
const burgerSide = document.querySelectorAll(".header__button")[1];
const mobileMenu = document.querySelector(".navigation__container-mobile");
const fog = document.querySelector(".fog");
const mobileMenuPoints = document.querySelectorAll(
  ".navigation__container-mobile .navigation__menu-mobile ul li"
);
const sliderArrows = document.getElementsByClassName("slider__arrow");
let cardEntries = [];
const openMenu = () => {
  mobileMenu.classList.toggle("show");
  fog.classList.toggle("hide");
  burgerMain.classList.toggle("rotated");
  burgerSide.classList.toggle("rotated");
  document.body.classList.toggle("noscroll");
};

const fogClose = () => {
  mobileMenu.classList.remove("show");
  fog.classList.add("hide");
  burgerMain.classList.remove("rotated");
  burgerSide.classList.remove("rotated");
  document.body.classList.toggle("noscroll");
};

burgerMain.addEventListener("click", openMenu);
burgerSide.addEventListener("click", openMenu);
fog.addEventListener("click", fogClose);

for (i = 0; i < mobileMenuPoints.length; i++) {
  mobileMenuPoints[i].addEventListener("click", openMenu);
}

// const pets = ['Sam', 'Mike', 'Pete', 'Jess', 'Manny', 'Gary', 'Katy', 'Phill'];
// let currentView = [];
// let pastView = [];
// let randomNumber = 0;

// const spawnPets = (amount) =>{
//   if(amount === 8){
//     return pets;
//   }
//   pastView = currentView;
//   currentView = [];
//   for(i=0;i<amount;i++){
//     randomNumber = Math.floor(Math.random()*pets.length);
//     if (!currentView.includes(pets[randomNumber]) && !pastView.includes(pets[randomNumber])){
//       currentView.push(pets[randomNumber])
//     }
//     else {for(j=0;j>-1; j++){
//         randomNumber = Math.floor(Math.random()*pets.length);
//         if(!currentView.includes(pets[randomNumber]) && !pastView.includes(pets[randomNumber])){
//           break
//         }
//     }
//       currentView.push(pets[randomNumber])}
//   }
//   console.log(currentView);
// }

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const makePic = (imgSrc, imgAlt) => {
  let newPic = document.createElement("img");
  newPic.setAttribute("src", imgSrc);
  newPic.setAttribute("alt", imgAlt);
  return newPic;
};

const makeNamedDiv = (petName) => {
  let namedDiv = document.createElement("div");
  namedDiv.innerHTML = petName;
  namedDiv.classList.add("pets__card-title");
  return namedDiv;
};

const makeCardButton = (id) => {
  let newButton = document.createElement("button");
  newButton.innerHTML = "Learn more";
  newButton.classList.add("pets__card-button");
  newButton.setAttribute("data-id", id);
  return newButton;
};

let cardButton = document.createElement("button");
cardButton.innerHTML = "Learn more";
cardButton.classList.add("pets__card-button");

const addCard = (imgSrc, imgAlt, petName, id) => {
  let newCard = document.createElement("div");
  let newPic = makePic(imgSrc, imgAlt);
  let namedDiv = makeNamedDiv(petName);
  let newButton = makeCardButton(id);
  newCard.innerHTML =
    newPic.outerHTML + namedDiv.outerHTML + newButton.outerHTML;
  newCard.classList.add("pets__card");
  return newCard;
};

const makeSet = () => {
  let currentBase = [];
  let size;
  if (window.innerWidth >= 768) {
    size = 3;
  } else if (window.innerWidth < 768 && window.innerWidth >= 320) {
    size = 2;
  } else if (window.innerWidth <= 320) {
    size = 1;
  }
  const getSet = () => {
    if (currentBase.length === 0) {
      return shuffle([...dataBase]).slice(0, size);
    }
    currentBase = shuffle(
      [...dataBase].filter((x) => !currentSet.some((y) => x.name === y.name))
    ).slice(0, size);
    return currentBase;
  };

  const getItems = (array, amount) => {
    const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const arrOut = [];
    let sample;
    while (arrOut.length < amount) {
      sample = getRandomItem(array);
      if (!currentBase.includes(sample) && !arrOut.includes(sample)) {
        arrOut.push(sample);
      }
    }

    return arrOut;
  };

  //currentBase = getItems(dataBase, size);
  currentBase = getSet();

  const getPetName = (index) => {
    return currentBase[index].name;
  };
  const getImgSrc = (index) => {
    return currentBase[index].img;
  };
  const getImgAlt = (index) => {
    return currentBase[index].description;
  };

  cardEntries = [];
  let setSize;
  let width = window.innerWidth;
  let content = document.getElementsByClassName("pets__content-stripe")[0];
  content.innerHTML = "";
  if (width > 768) {
    setSize = 3;
  } else if (width <= 768 && width > 320) {
    setSize = 2;
  } else if (width <= 320) {
    setSize = 1;
  }
  for (let i = 0; i < setSize; i++) {
    content.innerHTML += addCard(
      getImgSrc(i),
      getImgAlt(i),
      getPetName(i),
      i
    ).outerHTML;
    cardEntries.push(currentBase[i]);
    //console.log('card numba', i);
    //getNames();
  }

  const makePopup = (index) => {
    let entry = currentBase[index];
    let newPopup = document.createElement("div");
    newPopup.classList.add("popup__container");
    // let closePopupButton = document.createElement('div');
    // closePopupButton.classList.add('popup__button');
    // closePopupButton.innerHTML='<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/></svg>'
    // closePopupButton.addEventListener('click', ()=>{document.getElementsByClassName('popup__container')[0].remove()});
    //let newPopupContent = document.createElement('div');
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
      fog.removeEventListener("click", fogClosePopup);
      document.body.style.overflowY = "visible";
    };
    document.body.append(newPopup);
    let closePopupButton = document.getElementsByClassName("popup__button")[0];
    closePopupButton.addEventListener("click", () => {
      fog.classList.toggle("hide");
      document.getElementsByClassName("popup__container")[0].remove();
      document.body.style.overflowY = "visible";
    });
    fog.addEventListener("click", fogClosePopup);
  };

  let cardButtons = document.getElementsByClassName("pets__card-button");
  const cardPopup = (event) => {
    fog.classList.toggle("hide");
    //console.log(event.target.dataset.id);
    makePopup(event.target.dataset.id);
    document.body.style.overflowY = "hidden";
  };
  for (let k = 0; k < cardButtons.length; k++) {
    cardButtons[k].addEventListener("click", cardPopup);
  }

  const toggleFade = () => {
    content.classList.toggle("transform-active");
    //console.log(content.classList);
  };
  toggleFade();
  setTimeout(toggleFade, 500);
  //console.log("set made");
};
const sliderStripe = document.querySelector(".pets__content-stripe");
const sliderStripeWrapper = document.querySelector(".pets__content-cards");

//makeSet();
for (let i = 0; i < sliderArrows.length; i++) {
  sliderArrows[i].addEventListener("click", makeSet);
}

const buildStripeArray = () => {
  let shuffledDB = shuffle([...dataBase]);
  shuffledDB.push(...shuffledDB.slice(0, 4));
  return shuffledDB;
};
const stripeArray = buildStripeArray();

const baseQuery = (index, type, base) => {
  return base[index][type];
};
const buildStripe = () => {
  sliderStripe.innerHTML = "";
  for (let i = 0; i < stripeArray.length; i++) {
    sliderStripe.innerHTML += addCard(
      baseQuery(i, "img", stripeArray),
      baseQuery(i, "description", stripeArray),
      baseQuery(i, "name", stripeArray),
      i
    ).outerHTML;

    console.log("based", i);
  }
  sliderStripe.style.overflow = "hidden";
};
buildStripe();
