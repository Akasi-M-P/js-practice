"use strict"

//Mark's BMI Calculation
const markMass = 78;
const markHeight = 1.69;

const markBMI = markMass / markHeight ** 2;

console.log(markBMI);

//John's BMI Calculation
const johnMass = 92;
const johnHeight = 1.95;

const johnBMI = johnMass / johnHeight ** 2;

console.log(johnBMI);

//Comparison of Mark and John BMI
const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);



const driverAge = 10; // Assigning the value 50 to the variable driverAge

if (driverAge >= 18) {
  // Checking if driverAge is greater than or equal to 18
  console.log(`Driver passed with ${driverAge} years`); // Printing a message indicating the driver passed
} else {
  const underAge = 18 - driverAge; // Calculating the number of years under the legal driving age
  console.log(`Driver is ${underAge} years under age to drive`); // Printing a message indicating the driver is under age
}


//if/else statement

//Mark's BMI Calculation
const markMass = 78;
const markHeight = 1.69;

const markBMI = markMass / markHeight ** 2;

//John's BMI Calculation
const johnMass = 92;
const johnHeight = 1.95;

const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`Mark BMI: ${markBMI} is higher than john's BMI: ${johnBMI}`);
} else {
  console.log(`John's BMI: ${johnBMI} is higher than Mark's BMI: ${markBMI}`);
}



/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy


Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106



*/


// Calculate the average score for each team
const dolphins1 = 96 + 108 + 89; // Calculate the total score for the first set of dolphins' games
const koalas1 = 88 + 91 + 110; // Calculate the total score for the first set of koalas' games
const average = 3; // Define the number of games played (used for calculating the average)

// Calculate the average score for the first set of dolphins' games
const dolphins1AverageScore = dolphins1 / average;
console.log(dolphins1AverageScore);

// Calculate the average score for the first set of koalas' games
const koalas1AverageScore = koalas1 / average;
console.log(koalas1AverageScore);

// Calculate the average score for the second set of dolphins' games
const dolphins2 = 97 + 112 + 101; // Calculate the total score for the second set of dolphins' games

// Calculate the average score for the second set of dolphins' games
const dolphins2AverageScore = dolphins2 / average;
console.log(dolphins2AverageScore);

// Calculate the average score for the second set of koalas' games
const koalas2 = 109 + 95 + 123; // Calculate the total score for the second set of koalas' games

// Calculate the average score for the second set of koalas' games
const koalas2AverageScore = koalas2 / average;
console.log(koalas2AverageScore);


/*Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score) */

// Determine the team with the highest average score for the first set of games
if (dolphins1AverageScore > koalas1AverageScore) {
  console.log(
    `Dolphins has the highest average score of ${dolphins1AverageScore}`
  );
} else if (dolphins1AverageScore < koalas1AverageScore) {
  console.log(`Koalas has the highest average score of ${koalas1AverageScore}`);
} else {
  console.log(`Dolphins and Koalas have the same average score`);
}



/*3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks � 

Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

*/



// Calculate the average score for each team
const dolphinsBonus1 = 97 + 112 + 101; // Calculate the total score for the first set of dolphins' games
const koalasBonus1 = 109 + 95 + 123; // Calculate the total score for the first set of koalas' games
const average = 3; // Define the number of games played (used for calculating the average)
const minimumScore = 100; // Define the minimum score required to be considered for winning

// Calculate the average score for the first set of dolphins' games
const dolphinsBonus1AverageScore = dolphinsBonus1 / average;
console.log(dolphinsBonus1AverageScore);

// Calculate the average score for the first set of koalas' games
const koalasBonus1AverageScore = koalasBonus1 / average;
console.log(koalasBonus1AverageScore);

// Check the conditions for determining the winner
if (
  dolphinsBonus1AverageScore > koalasBonus1AverageScore && // Check if Dolphins' average score is higher than Koalas'
  dolphinsBonus1AverageScore >= minimumScore // Check if Dolphins' average score meets the minimum score requirement
) {
  console.log(
    `Dolphins won the 🏆 with an average score of ${dolphinsBonus1AverageScore}`
  );
} else if (
  koalasBonus1AverageScore > dolphinsBonus1AverageScore && // Check if Koalas' average score is higher than Dolphins'
  koalasBonus1AverageScore >= minimumScore // Check if Koalas' average score meets the minimum score requirement
) {
  console.log(
    `Koalas won the 🏆 with an average score of ${koalasBonus1AverageScore}`
  );
} else {
  console.log(`Dolphins and Koalas have the same average score`); // If none of the conditions are met, both teams have the same average score
}



/* 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy 

 Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/



// Calculate the average score for each team
const dolphinsBonus2 = 97 + 112 + 101; // Calculate the total score for the first set of dolphins' games
const koalasBonus2 = 109 + 95 + 106; // Calculate the total score for the first set of koalas' games
const average = 3; // Define the number of games played (used for calculating the average)
const minimumScore = 100; // Define the minimum score required to be considered for winning

// Calculate the average score for the first set of dolphins' games
const dolphinsBonus2AverageScore = dolphinsBonus2 / average;
console.log(dolphinsBonus2AverageScore);

// Calculate the average score for the first set of koalas' games
const koalasBonus2AverageScore = koalasBonus2 / average;
console.log(koalasBonus2AverageScore);

// Check the conditions for determining the winner or draw
if (
  dolphinsBonus2AverageScore > koalasBonus2AverageScore && // Check if Dolphins' average score is higher than Koalas'
  dolphinsBonus2AverageScore >= minimumScore // Check if Dolphins' average score meets the minimum score requirement
) {
  console.log(`Dolphins won the 🏆 with an average score of ${dolphinsBonus2AverageScore}`);
} else if (
  koalasBonus2AverageScore > dolphinsBonus2AverageScore && // Check if Koalas' average score is higher than Dolphins'
  koalasBonus2AverageScore >= minimumScore // Check if Koalas' average score meets the minimum score requirement
) {
  console.log(`Koalas won the 🏆 with an average score of ${koalasBonus2AverageScore}`);
} else if (
  dolphinsBonus2AverageScore === koalasBonus2AverageScore && // Check if Dolphins' and Koalas' average scores are equal
  dolphinsBonus2AverageScore >= minimumScore // Check if the average score meets the minimum score requirement
) {
  console.log(`Dolphins and Koalas drew with the same average score of ${dolphinsBonus2AverageScore}`);
} else {
  console.log("No team won the trophy! 😌"); // If none of the conditions are met, no team meets the winning criteria
}


/*Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430 */

const bill = 430;

const totalBill =
  bill >= 50 && bill <= 300
    ? `The bill: ${bill}, the tip: ${(tip = bill * 0.15)} and total value: ${
        bill + tip
      }`
    : `the bill: ${bill}, the tip: ${(tip = bill * 0.2)}, the total value: ${
        bill + tip
      }`;

console.log(totalBill);

