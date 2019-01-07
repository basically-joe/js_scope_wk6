   // Ep1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

    // Will output The murderer is Miss Scarlet due to block scope of Const
    // and no attempted change of variable that isn't already mutable.

    // Ep2

 // const murderer = 'Professor Plum';
 //
 // const changeMurderer = function() {
 //   murderer = 'Mrs. Peacock';
 // }
 //
 // const declareMurderer = function() {
 //   return `The murderer is ${murderer}.`;
 // }
 //
 // changeMurderer();
 // const verdict = declareMurderer();
 // console.log(verdict);

     // Will output an error i.e. Assignment to constant variable as
     // attempting to change the murderer variable on line 24
     // which has been set with const variable and isn't mutable


     // Ep3

  // let murderer = 'Professor Plum';
  //
  // const declareMurderer = function() {
  //   let murderer = 'Mrs. Peacock';
  //   return `The murderer is ${murderer}.`;
  // }
  //
  // const firstVerdict = declareMurderer();
  // console.log('First Verdict: ', firstVerdict);
  //
  // const secondVerdict = `The murderer is ${murderer}.`;
  // console.log('Second Verdict: ', secondVerdict);

  // 1st output will be First verdict: The murderer is Mrs. Peacock due to block scope
  // of let variable of murderer being changed on line 45
  // 2nd output will be Second verdict: The murderer is Professor Plum due to block scope of let
  // and no attempted change of let variable.

     // Ep4

  // let suspectOne = 'Miss Scarlet';
  // let suspectTwo = 'Professor Plum';
  // let suspectThree = 'Mrs. Peacock';
  //
  // const declareAllSuspects = function() {
  //   let suspectThree = 'Colonel Mustard';
  //   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
  // }
  //
  // const suspects = declareAllSuspects();
  // console.log(suspects);
  // console.log(`Suspect three is ${suspectThree}.`);

   // First output is The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
   // As let variable on line 64, this can be changed to Colonel Mustard with block scope of let variable.
   // Second output is Suspect three is Mrs. Peacock, as block scope on line 67
   // wouldn't impact line 63 let variable which would remain as initially defined.

   // Ep5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

   // The output will be The weapon is the revolver because the scenario object weapon is mutable
   // and can be changed by line 89 when Revolver string is passed in with block scope.

   // Ep6

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

   // Should return The murderer is Mrs. White. as let variable on line 105 can be changed by calling
   // plotTwist function with block scope using const variable on line 110-112

   // Ep7

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

   // returns The murderer is Mr. Green as let variable on line 130
   // will only be impacted by change of block variable function on lines 132-133
   // lines 138-139 only changes plotTwist on 135-137

   // Ep8

// const scenario = {
//   murderer: 'Mrs. Peacock', // Colonel Mustard
//   room: 'Conservatory', // Dining Room
//   weapon: 'Lead Pipe' // Candle Stick
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard'; // this changes murderer to Colonel Mustard in 163 as mutable
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) { //Colonel Mustard passed in === murderer
//         scenario.weapon = 'Candle Stick'; // changes weapon on 165 to Candlestick as mutable
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

   // Overall output is The weapon is Candle Stick, see notes above to why and what happens.

   // Ep9

// let murderer = 'Professor Plum'; // nothing has impacted this variable, remains Professor Plum
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock'; // This let variable has block scope so isn't affecting anything outside of this if statement
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

   // The output will be The murderer is Professor Plum, as line 204 block scope doesn't impact
   // initially set let variable on line 201.
