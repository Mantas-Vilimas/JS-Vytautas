const LIGHT = "light";
const DARK = "dark";

const bodyElement = document.querySelector(`body.${LIGHT}`);
const buttonElement = document.querySelector(`button.${LIGHT}`);

function changeMode() {
  if (bodyElement.className === LIGHT) {
    bodyElement.className = DARK;
    buttonElement.className = DARK;
  } else {
    bodyElement.className = LIGHT;
    buttonElement.className = LIGHT;
  }
}

console.log(bodyElement);
console.log(buttonElement);

// //1. Sukurti BMI kalkuliatorių, kuris parodo ne svorio indeksą, o atsako ar mes turime viršsvorį ar ne.
// idx <= 18.5 - "Underweight"
// idx <= 25.0 - "Normal"
// idx >= 30.0 - "Overweight"
// idx >= 40.0 - "Obese"

// [weight (kg) / height (cm) / height (cm)] x 10,000

/**
 * Visa programa veiks tik paspaudus mygtuką.
 * 0. Cleanup, pravalom viską iš praeitų atsaktymų,
 *    klaidų tekstų.
 *
 * 1. paspaudžiamas mygtukas
 *
 * 2. paleidžia funkciją, kuri:
 *
 * 3. pasiimam reikšmes iš inputų
 *
 * 4. patikrinam reišmes iš inputų
 *    SĄLYGA: (ar reikšmė yra daugiau už 0)
 *
 * 5. JEIGU inputai atitinka SĄLYGA
 *    Atitinka: atlieka skaičiavimus
 *              Užrašo skaičavimus
 *    Neatitinka: išmeta klaidą
 *
 *
 *   KĄ TURIME NUTRINTI?:
 *   atsakymą,
 *   klaidos tekstus
 *
 *
 *
 *  Senas reikšmes inputuose
 */
