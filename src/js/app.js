//console.log("Some words to prove that JS is working");
import * as el from "./modules/elems.js";
import * as funcs from "./modules/functions.js";
//import {dataBase} from "./modules/db.js";
//import * as mainFunctions from "./main/script.js";
// console.log(dataBase);
// console.log(funcs.shuffle(dataBase))
// console.log(el.burgerMain, el.burgerSide);

funcs.isWebp();


el.burgerMain.addEventListener("click", funcs.openMenu);
el.burgerSide.addEventListener("click", funcs.openMenu);
el.fog.addEventListener("click", funcs.fogClose);

for (let i = 0; i < el.mobileMenuPoints.length; i++) {
  el.mobileMenuPoints[i].addEventListener("click", funcs.openMenu);
}

if(el.title.innerHTML === 'Cozy House'){
for (let i = 0; i < el.sliderArrows.length; i++) {
  el.sliderArrows[i].addEventListener("click", funcs.makeSet);
}
funcs.makeSet();
}

if(el.title.innerHTML === "Our Pets"){
  let visibleSet = funcs.sliceBasePlus();
  funcs.makeSetOfCards(visibleSet);
  el.currentPageCounter.innerHTML = funcs.counter / funcs.size;
  funcs.toggleNavButtons();
  funcs.makeButtonsListen();
}
