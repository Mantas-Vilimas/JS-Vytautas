// console.log(Boolean("")); //false
// console.log(Boolean(0)); //false

// console.log(Boolean("a")); //true
// console.log(Boolean(1)); //true
// console.log(Boolean(-1)); //true

// console.log(Number(true));
// console.log(Number(false));

// let x = 123;
// x = -x;

// console.log(x)

// let pirmasZodis = "Vardenis";
// let antrasZodis = "Pavardenis";

// let antraFraze = `${pirmasZodis} ${antrasZodis}`;
// let kitaFraze = pirmasZodis + " " + antrasZodis;

// const pradziosValandos = 18;
// const maxMinutes = 60;

// const dabartinesValandos = Number(prompt("Kiek dabar valandu?"));
// const dabartinesMinutes = Number(prompt("Kiek dabar minuciu?"))
// const isNotTooLate = Number(dabartinesValandos < pradziosValandos);

// let valandosTikrinimas = dabartinesMinutes > 0;
// let valandosKeitimas = Number(valandosTikrinimas);
// let skirtumasValandu = dabartinesValandos + valandosKeitimas;
// let likutisValandu = (pradziosValandos - dabartinesValandos - valandosKeitimas) * isNotTooLate;

// let likutisMinuciu = (60 - dabartinesMinutes) * valandosKeitimas *isNotTooLate;

// alert(`Iki pabaigos liko ${likutisValandu}val. ir ${likutisMinuciu}`)

// console.log("Valandos", dabartinesValandos, typeof dabartinesValandos);
// console.log("Minutes", dabartinesMinutes, typeof dabartinesMinutes);

// console.log("A", "" + 1 + 0);  //"10"
// console.log("B", "" - 1 + 0); //-1
// console.log("C", true + false); // 1
// console.log("D", 6 / "3"); // 2
// console.log("E", "2" * "3"); // 6
// console.log("F", 4 + 5 + "px"); // "45px" geras atsaakymas "9px"
// console.log("G", "$" + 4 + 5);  // "$45"
// console.log("H", "4" - 2); //2
// console.log("I", "4px" - 2); //NaN
// console.log("J", "  -9  " + 5); // "-9 5"
// console.log("K", "  -9  " - 5); // -14

// console.log(null +1); // 1
// console.log(undefined + 1) // NaN

//Kai reikia prideti plus viena yra shorthandas ""=+ ir skaicius" kiek nori prideti arba ++ (+1 prideda)
// let i = 0;

// i += 1;

// console.log(i);

// let y = 0;

// y++;

// console.log(y)

// let x = 0;

// ++x;

// console.log(x)

// console.log("AAC" > "AAB");

// const metai = prompt("Kurie dabar metai?");

// let x;

// if (metai === "2022") {
//   alert("Tu teisus");
//   x = 0;
// } else {
//   ("Tu neteisus");
//   x = 1;
// }

// console.log(x);

// const carColor = prompt("Kokia automobilio spalva? (red, blue, yellow...)");
// const carModel = prompt(
//   "Koks automobilio modelis? (Irasykite pagaminimo metus)"
// );
// const carMake = prompt("Kas automobilio gamintojas? ( Ferrari , etc.)");
// const carMileage = prompt(
//   "Kokia automobilio rida? (Kiek kilometru nuvaziuota?)"
// );

// if (carColor === "red") {
//   if (Number(carModel) > 2010) {
//     alert("Buy");
//   } else if (carMileage < 50000) {
//     alert("Buy");
//   } else {
//     alert("Don't Buy");
//   }
// } else {
//   if (carColor === "yellow") {
//     if (carMake === "Ferrari") {
//       alert("Buy");
//     } else {
//       ("Don't buy");
//     }
//   } else {
//     alert("Don't Buy");
//   }
// }

// const mass = Number(prompt("Koks jusu svoris kilogramais?"));
// const heightMeters = Number(prompt("Koks jusu ugis metrais?"));

// const bmi = mass / heightMeters ** 2;

// if (bmi < 18.5) {
//   alert("jusu BMI per mazas");
// } else if (bmi < 25) {
//   alert("jusu svoris normalus");
// } else if (bmi > 25) {
//   alert("jusu turite virsvorio");
// } else if (bmi > 30) {
//   alert("nustok valgyti");
// } else if (bmi > 35) {
//   alert("nustok valgyti ilgesni laika");
// } else {
//   alert("nustok valgyti visai");
// }

// const gender = prompt("Kokia jusu lytis? (vyras/moteris)");
// const weight = Number(prompt("Koks jusu svoris kilogramais?"));
// const height = Number(prompt("Koks jusu ugis centimetrais?"));
// const age = Number(prompt("Koks jusu amzius mmetais?"));
// const activityLevel = Number(
//   prompt("Koks jusu aktyvumo lygis? (0, 1 , 2, 3, 4)")
// );

// let bmr;

// if (gender === "vyras") {
//   bmr = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age;
//   console.log("vyras");
// } else {
//   bmr = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
//   console.log("moteris");
// }

// console.log(bmr);

// if (activityLevel === 0) {
//   alert(bmr * 1.2);
// } else if (activityLevel === 1) {
//   alert(bmr * 1.375);
// } else if (activityLevel === 2) {
//   alert(bmr * 1.55);
// } else if (activityLevel === 3) {
//   alert(bmr * 1.725);
// } else {
//   alert(bmr * 1.9);
// }

// const definiteBudget = prompt("Definite budget? (y/n)");

// if (definiteBudget === "y") {
//   if (prompt("Known Champion for it? (y/n)") === "y") {
//     if (prompt("Clear project scope? (y/n)") === "y") {
//       if (prompt("Achievable time scale? (y/n)") === "y") {
//         alert("Go for it");
//       } else {
//         alert("Get more time");
//       }
//     } else {
//       if (prompt("Happy to profit? (y/n)") === "y") {
//         alert("Cash In");
//       } else {
//         alert("Explain why it matters");
//       }
//     }
//   } else {
//     alert("Leave it alone");
//   }
// } else {
//   if (prompt("Alternative Funding? (y/n)") === "y") {
//     alert("Sort Out funding");
//   } else {
//     alert("Leave it alone");
//   }
// }
