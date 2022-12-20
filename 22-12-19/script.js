const dragonHealth = document.querySelector("#dragon-health");
let dragonHealthValue = Number(dragonHealth.textContent);
const knightHealth = document.querySelector("#knight-health");
let knightHealthValue = Number(knightHealth.textContent);
const attackButton = document.querySelector("#attack-action");
const defendButton = document.querySelector("#defend-action");
const healButton = document.querySelector("#heal-action");
const battleLog = document.querySelector("#battle-log");
const mainElement = document.querySelector("main");
const gameStatus = document.querySelector("#game-status");

console.log(dragonHealth, knightHealth, dragonHealthValue, knightHealthValue);

attackButton.addEventListener("click", attackAction);
defendButton.addEventListener("click", defendAction);
healButton.addEventListener("click", healAction);

let knightDamage;
let dragonDamage;
let actionTextKnight;
let actionTextDragon;
let isKnightDefending = false;
let knightHealing;
let knightAttackChance;

function knightAttackChanceCalculator() {
  knightAttackChance = Math.random() < 33 / 100;
  return knightAttackChance;
}

function attackAction() {
  if (isKnightDefending) {
    if (knightAttackChanceCalculator()) {
      knightDamage = 0;
      knightHealing = 0;
      actionTextKnight = "attacks with no luck";
      knightAttack();
      dragonAttack();
      submitBattleLog();
      console.log(knightDamage, dragonDamage, knightHealing);
      battleEnd();
    } else {
      knightDamage = Math.ceil(Math.random() * 10) * 2;
      actionTextKnight = "attacks with double damage";
      knightAttack();
      dragonAttack();
      submitBattleLog();
      console.log(knightDamage, dragonDamage, knightHealing);
      battleEnd();
    }
  } else {
    if (knightAttackChanceCalculator()) {
      isKnightDefending = false;
      knightHealing = 0;
      knightDamage = 0;
      actionTextKnight = "attacks with no luck";
      knightAttack();
      dragonAttack();
      submitBattleLog();
      console.log(knightDamage, dragonDamage, knightHealing);
      battleEnd();
    } else {
      isKnightDefending = false;
      knightHealing = 0;
      actionTextKnight = "attacks";
      actionTextDragon = "attacks";
      knightDamage = Math.ceil(Math.random() * 10);
      dragonDamage = Math.ceil(Math.random() * 20);
      dragonHealthValue = dragonHealthValue - knightDamage;
      dragonHealth.textContent = dragonHealthValue;
      dragonAttack();
      submitBattleLog();
      console.log(knightDamage, dragonDamage, knightHealing);
      battleEnd();
    }
  }
}

function knightAttack() {
  dragonDamage = Math.ceil(Math.random() * 20);
  dragonHealthValue = dragonHealthValue - knightDamage;
  dragonHealth.textContent = dragonHealthValue;
}

function defendAction() {
  isKnightDefending = true;
  knightHealing = 0;
  if (isKnightDefending) {
    actionTextKnight = "is defending";
    actionTextDragon = "attacks";
    knightDamage = 0;
    dragonDamage = 0;
    submitBattleLog();
    console.log(knightDamage, dragonDamage, knightHealing);
    battleEnd();
  }
}

function healAction() {
  isKnightDefending = false;
  knightDamage = 0;
  knightHealing = Math.ceil(Math.random() * 30);
  dragonDamage = Math.ceil(Math.random() * 20);
  knightHealth.textContent = knightHealthValue + knightHealing - dragonDamage;

  actionTextKnight = "heals";
  actionTextDragon = "attacks";
  submitBattleLog();
  console.log(knightDamage, dragonDamage, knightHealing);
  battleEnd();
}

function dragonAttack() {
  if (dragonHealthValue < 0) {
    gameStatus.textContent = "Knight Wins";
  } else {
    actionText = "attacks";
    knightHealthValue = knightHealthValue - dragonDamage;
    knightHealth.textContent = knightHealthValue;
  }
}

function battleEnd() {
  if (knightHealthValue < 0) {
    gameStatus.textContent = "Dragon Wins";
  }
  if (dragonHealthValue < 0) {
    gameStatus.textContent = "Knight Wins";
  }
}

function submitBattleLog() {
  battleLog.style.display = "flex";
  const battleLogRound = document.createElement("div");
  battleLog.append(battleLogRound);
  createBattleLogElements(battleLogRound);
}

let roundNumber = 1;

function createBattleLogElements(battleLog) {
  const round = document.createElement("p");
  const knightAttackLog = document.createElement("p");
  const dragonAttackLog = document.createElement("p");
  round.classList.add("round-number");
  round.textContent = "Round" + " " + roundNumber;
  roundNumber++;

  if (knightHealing > 0) {
    knightAttackLog.textContent = `Knight ${actionTextKnight} ${knightHealing}.`;
    dragonAttackLog.textContent = `Dragon ${actionTextDragon} and deals ${dragonDamage} damage.`;
    battleLog.append(round, knightAttackLog, dragonAttackLog);
  }
  if (knightDamage > 0) {
    knightAttackLog.textContent = `Knight ${actionTextKnight} and deals ${knightDamage} damage.`;
    dragonAttackLog.textContent = `Dragon ${actionTextDragon} and deals ${dragonDamage} damage.`;
    battleLog.append(round, knightAttackLog, dragonAttackLog);
  } else {
    if (knightHealing > 0) {
      knightAttackLog.textContent = `Knight ${actionTextKnight} ${knightHealing}.`;
      dragonAttackLog.textContent = `Dragon ${actionTextDragon} and deals ${dragonDamage} damage.`;
      battleLog.append(round, knightAttackLog, dragonAttackLog);
    } else {
      knightAttackLog.textContent = `Knight ${actionTextKnight} and deals ${knightDamage} damage.`;
      dragonAttackLog.textContent = `Dragon ${actionTextDragon} and deals ${dragonDamage} damage.`;
      battleLog.append(round, knightAttackLog, dragonAttackLog);
    }
  }
  if (isKnightDefending) {
    knightAttackLog.textContent = `Knight ${actionTextKnight}.`;
    dragonAttackLog.textContent = `Dragon ${actionTextDragon} and deals ${dragonDamage} damage.`;
    battleLog.append(round, knightAttackLog, dragonAttackLog);
  }
}
