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


