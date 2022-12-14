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

console.log("labas");

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const heightError = document.querySelector("#height-error");
const weightError = document.querySelector("#weight-error");
const result = document.querySelector("#result");

console.log(heightInput, weightInput, heightError, weightError, result);

function calculateBMI() {
  cleanupResults();
  const heightCm = Number(heightInput.value);
  const weightKg = Number(weightInput.value);

  const isHeightValid = heightCm > 0;
  const isWeightValid = weightKg > 0;

  if (isHeightValid) {
    if (isWeightValid) {
      const BMI = (weightKg / heightCm / heightCm) * 10_000;
      result.innerText = BMI;
      heightInput.value = "";
      weightInput.value = "";
    } else {
      showWeightError();
    }
  } else {
    showHeightError();
    if (!isWeightValid) {
      showWeightError();
    }
  }
}

function cleanupResults() {
  heightError.innerText = "";
  weightError.innerText = "";
  result.innerText = "";
}

function showHeightError() {
  heightError.innerText = "Error";
}

function showWeightError() {
  weightError.innerText = "Error";
}
