// 2. Sukurti BMR kalkuliatorių
// For men: BMR = 66.5 + (13.75 * weight in kg) + (5.003 * height in cm) - (6.75 * age)
// For women: BMR = 655.1 + (9.563 * weight in kg) + (1.850 * height in cm) - (4.676 * age)

// To determine your total daily calorie needs, multiply your BMR by the appropriate activity factor, as follows:
// Sedentary (little or no exercise): calories = BMR × 1.2;
// Lightly active (light exercise/sports 1-3 days/week): calories = BMR × 1.375;
// Moderately active (moderate exercise/sports 3-5 days/week): calories = BMR × 1.55;
// Very active (hard exercise/sports 6-7 days a week): calories = BMR × 1.725; and
// If you are extra active (very hard exercise/sports & a physical job): calories = BMR × 1.9.
// // suvedami atsakymai ar esam vyras/moteris, svoris aukštis ir amžius.
// // atsakomas koks mūsų aktyvumo lygis
// // atsakomas kiek kalorijų mums reikia per dieną

//0. atliekamas cleanup
//1. paimami duomenys is inputu
//2. patikriname ar vyras ar moteris
//3. Patikriname koks aktyvumo lygis
//4. Patikriname ar nera klaidu ir ar viskas suvesta
//5. Jeigu yra klaidu atvaizduojami kurie inputai blogi
//6. Jei nera klaidu atliekami skaiciavimai ir parodomas rezultatas

function calculateBMR() {
  errorReset();
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  const ageInput = document.querySelector("#age");
  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);
  const age = Number(ageInput.value);

  const genderInput = document.querySelector('input[name="gender"]:checked');
  let gender;
  if (genderInput) {
    gender = genderInput.value;
  }

  const activityInput = document.querySelector(
    'input[name="activity"]:checked'
  );

  let activity;
  if (activityInput) {
    activity = activityInput.value;
  }

  const isHeightValid = height > 0;
  const isWeightValid = weight > 0;
  const isAgeValid = age > 0;
  const isGenderValid = "man" === gender || "woman" === gender;
  const isActivityValid =
    "sedentary" === activity ||
    "light" === activity ||
    "moderately" === activity ||
    "very" === activity ||
    "extra" === activity;

  let activityMultiplier;
  if (activity === "sedentary") {
    activityMultiplier = 1.2;
  } else if (activity === "light") {
    activityMultiplier = 1.375;
  } else if (activity === "moderately") {
    activityMultiplier = 1.55;
  } else if (activity === "very") {
    activityMultiplier = 1.725;
  } else {
    activityMultiplier = 1.9;
  }

  const result = document.querySelector("#result");
  const overlay = document.querySelector("#overlay");

  if (
    isHeightValid &&
    isWeightValid &&
    isAgeValid &&
    isGenderValid &&
    isActivityValid
  ) {
    if (gender === "man") {
      const BMR = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age;
      const caloriesNeed = BMR * activityMultiplier;
      const caloriesNeedRound = (Math.round(caloriesNeed * 100) / 100).toFixed(
        0
      );
      overlay.className = "visible";
      result.className = "visible";
      result.innerText = `You need ${caloriesNeedRound} calories/day`;
      resetCalculation();
    } else {
      const BMR = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
      const caloriesNeed = BMR * activityMultiplier;
      const caloriesNeedRound = (Math.round(caloriesNeed * 100) / 100).toFixed(
        0
      );
      overlay.className = "visible";
      result.className = "visible";
      result.innerText = `You need ${caloriesNeedRound} calories/day`;
      resetCalculation();
    }
  } else {
    if (!isHeightValid) {
      const heightError = document.querySelector("#height-error");
      heightError.innerText = "error";
    }
    if (!isWeightValid) {
      const weightError = document.querySelector("#weight-error");
      weightError.innerText = "error";
    }
  }
  if (!isAgeValid) {
    const ageError = document.querySelector("#age-error");
    ageError.innerText = "error";
  }
  if (!isGenderValid) {
    const genderError = document.querySelector("#gender-error");
    genderError.innerText = "error";
  }
  if (!isActivityValid) {
    const activityError = document.querySelector("#activity-error");
    activityError.innerText = "error";
  }
}

function resetCalculation() {
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  const ageInput = document.querySelector("#age");
  const genderInput = document.querySelector('input[name="gender"]:checked');
  const activityInput = document.querySelector(
    'input[name="activity"]:checked'
  );
  heightInput.value = "";
  weightInput.value = "";
  ageInput.value = "";
  activityInput.checked = false;
  genderInput.checked = false;
}

function errorReset() {
  const heightError = document.querySelector("#height-error"); //! deklaruoti tokie patys kaip ir pries tai, kaip optimizuoti?? REIKIA iskelti i virsu tik tuos kieno verte nepasikeis. Radio ar checkbox kelti negalima
  const weightError = document.querySelector("#weight-error");
  const ageError = document.querySelector("#age-error");
  const genderError = document.querySelector("#gender-error");
  const activityError = document.querySelector("#activity-error");
  heightError.innerText = "";
  weightError.innerText = "";
  ageError.innerText = "";
  genderError.innerText = "";
  activityError.innerText = "";
  const result = document.querySelector("#result");
  result.innerText = "";
  result.className = "";
}

function closeWindow() {
  const overlay = document.querySelector("#overlay");
  overlay.className = "invisible";
}
