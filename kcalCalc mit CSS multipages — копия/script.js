// Burger
document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".main_navbar").classList.toggle("open");
});

let rad = document.getElementsByName("input_male");
let male;
function maleCheck() {
  for (var i = 0; i < rad.length; i++) {
    if (rad[i].checked) {
      //   console.log("Male is:" + i);
      male = i;
      //   console.log(male);
      localStorage.setItem("male", male);
    }
  }
}

let kg;
function getGewicht() {
  kg = document.getElementById("masse_kg").value;
  // console.log(kg);
  localStorage.setItem("kg", JSON.stringify(kg));
}
let sm;
function getHeight() {
  sm = document.getElementById("height_sm").value;
  // console.log(sm);
  localStorage.setItem("sm", JSON.stringify(sm));
}
let years;
function getYears() {
  years = document.getElementById("years").value;
  // console.log(years);
  localStorage.setItem("years", JSON.stringify(years));
}

let result;

function calcKcal() {
  if (male == 0) {
    result = 66.5 + 13.75 * kg + 5.003 * sm - 6.775 * years;
    // document.write(result);
    localStorage.setItem("result", result);
  } else {
    result = 655.1 + 9.563 * kg + 1.85 * sm - 4.676 * years;
    // document.write(result);
    localStorage.setItem("result", result);
  }
}

function display() {
  let done = document.getElementById("alldone");
  done.innerHTML = result;
}
let a = 1;
function dropDown(e) {
  e.preventDefault();
  if (a == 1) {
    document.getElementById("menu").style.display = "flex";
    a = 0;
  } else {
    document.getElementById("menu").style.display = "none";
    a = 1;
  }
}
let activity;
function item(x) {
  let content = x.id;
  activity = x.value;
  document.getElementById("option").innerHTML = content;
  document.getElementById("menu").style.display = "none";
  if (a == 1) {
    a = 0;
  } else {
    a = 1;
  }
}

let kcalsum;
function calcfundKcal() {
  switch (activity) {
    case 0:
      kcalsum = localStorage.getItem("result") * 1.2;
      // console.log(kcalsum);
      localStorage.setItem("kcalsum", kcalsum);
      break;
    case 1:
      kcalsum = localStorage.getItem("result") * 1.375;
      // console.log(kcalsum);
      localStorage.setItem("kcalsum", kcalsum);
      break;
    case 2:
      kcalsum = localStorage.getItem("result") * 1.55;
      // console.log(kcalsum);
      localStorage.setItem("kcalsum", kcalsum);
      break;
    case 3:
      kcalsum = localStorage.getItem("result") * 1.7;
      // console.log(kcalsum);
      localStorage.setItem("kcalsum", kcalsum);
      break;
    case 4:
      kcalsum = localStorage.getItem("result") * 1.9;
      // console.log(kcalsum);
      localStorage.setItem("kcalsum", kcalsum);
      break;
  }
}
let wunsch = document.getElementsByName("willung");
let finalBedarf;
let bulkOdercut;
function getWillung() {
  for (var i = 0; i < wunsch.length; i++) {
    if (wunsch[i].checked) {
      bulkOdercut = i;
      // console.log(finalBedarf);
      localStorage.setItem("bulkOdercut", bulkOdercut);
    }
  }
}
let willungZahl;
function getWillungszhl() {
  willungZahl = document.getElementById("willungszahl1").value;
  // console.log(willungZahl);
  localStorage.setItem("willungZahl", willungZahl);
}
function endlich() {
  switch (bulkOdercut) {
    case 0:
      finalBedarf = -willungZahl * 275 + kcalsum;
      // console.log(finalBedarf);
      localStorage.setItem("finalBedarf", finalBedarf);
      break;
    case 1:
      finalBedarf = kcalsum;
      localStorage.setItem("finalBedarf", finalBedarf);
      break;
    case 2:
      finalBedarf = willungZahl * 275 + kcalsum;
      // console.log(finalBedarf);
      localStorage.setItem("finalBedarf", finalBedarf);
      break;
  }
}
function displayTotal() {
  let titalDisoly = document.getElementById("total_display");
  titalDisoly.innerHTML = finalBedarf;
}
let n = localStorage.getItem("kg");
let r = JSON.parse(n);
console.log(r);
let proteinbedarf;
function calcProt() {
  if (
    localStorage.getItem("male") == 0 &&
    localStorage.getItem("bulkOdercut") == 0
  ) {
    proteinbedarf = r * 2.5;
    proteindisplay();
  } else if (
    localStorage.getItem("male") == 0 &&
    localStorage.getItem("bulkOdercut") == 2
  ) {
    proteinbedarf = r * 2;
    proteindisplay();
  } else if (
    localStorage.getItem("male") == 0 &&
    localStorage.getItem("bulkOdercut") == 1
  ) {
    proteinbedarf = r * 1.5;
    proteindisplay();
  } else if (
    localStorage.getItem("male") == 1 &&
    localStorage.getItem("bulkOdercut") == 0
  ) {
    proteinbedarf = r * 3;
    proteindisplay();
  } else if (
    localStorage.getItem("male") == 1 &&
    localStorage.getItem("bulkOdercut") == 1
  ) {
    proteinbedarf = r * 1.5;
    proteindisplay();
  } else if (
    localStorage.getItem("male") == 1 &&
    localStorage.getItem("bulkOdercut") == 2
  ) {
    proteinbedarf = r * 2;
    proteindisplay();
  }
}
function proteindisplay() {
  let totalProtein = document.getElementById("protrinsumme");
  totalProtein.innerHTML = proteinbedarf;
  localStorage.setItem("proteinbedarf", proteinbedarf);
}
let fetbedarf;
function calcFet() {
  if (
    localStorage.getItem("male") == 0 &&
    localStorage.getItem("bulkOdercut") == 0
  ) {
    fetbedarf = r * 0.5;
    fatdisplay();
  } else if (
    localStorage.getItem("male") == 0 &&
    localStorage.getItem("bulkOdercut") == 2
  ) {
    fetbedarf = r * 2;
    fatdisplay();
  } else if (
    localStorage.getItem("male") == 0 &&
    localStorage.getItem("bulkOdercut") == 1
  ) {
    fetbedarf = r * 1;
    fatdisplay();
  } else if (
    localStorage.getItem("male") == 1 &&
    localStorage.getItem("bulkOdercut") == 0
  ) {
    fetbedarf = r * 0.5;
    fatdisplay();
  } else if (
    localStorage.getItem("male") == 1 &&
    localStorage.getItem("bulkOdercut") == 1
  ) {
    fetbedarf = r * 1;
    fatdisplay();
  } else if (
    localStorage.getItem("male") == 1 &&
    localStorage.getItem("bulkOdercut") == 2
  ) {
    fetbedarf = r * 1;
    fatdisplay();
  }
}
function fatdisplay() {
  let totalFat = document.getElementById("Fetsumme");
  totalFat.innerHTML = fetbedarf;
  localStorage.setItem("fetbedarf", fetbedarf);
}
let carbbedarf;
function calcCarb() {
  if (
    localStorage.getItem("male") == 0 &&
    localStorage.getItem("bulkOdercut") == 0
  ) {
    carbbedarf = r * 2;
    carbdisplay();
  } else if (
    localStorage.getItem("male") == 0 &&
    localStorage.getItem("bulkOdercut") == 2
  ) {
    carbbedarf = r * 7;
    carbdisplay();
  } else if (
    localStorage.getItem("male") == 0 &&
    localStorage.getItem("bulkOdercut") == 1
  ) {
    carbbedarf = r * 4;
    carbdisplay();
  } else if (
    localStorage.getItem("male") == 1 &&
    localStorage.getItem("bulkOdercut") == 0
  ) {
    carbbedarf = r * 1.5;
    carbdisplay();
  } else if (
    localStorage.getItem("male") == 1 &&
    localStorage.getItem("bulkOdercut") == 1
  ) {
    carbbedarf = r * 4;
    carbdisplay();
  } else if (
    malocalStorage.getItem("male") == 1 &&
    localStorage.getItem("bulkOdercut") == 2
  ) {
    carbbedarf = r * 6;
    carbdisplay();
  }
}
function carbdisplay() {
  let totalCarb = document.getElementById("carbsbedarf");
  totalCarb.innerHTML = carbbedarf;
  localStorage.setItem("carbbedarf", carbbedarf);
}
function dissplayAllgemein() {
  let grund = document.getElementById("grunfdcalzeigen");
  grund.innerHTML = localStorage.getItem("result");
  let tottta = document.getElementById("totalcalzeigen");
  tottta.innerHTML = localStorage.getItem("kcalsum");
  let allP = document.getElementById("proteinzeigen");
  allP.innerHTML = localStorage.getItem("proteinbedarf");
  let allF = document.getElementById("fettzeigen");
  allF.innerHTML = localStorage.getItem("fetbedarf");
  let allC = document.getElementById("carbszeigen");
  allC.innerHTML = localStorage.getItem("carbbedarf");
}
dissplayAllgemein();
function clearLS() {
  localStorage.clear();
}
