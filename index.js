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



/* Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 */

// Calculate the total score for the Dolphins and Koalas
const dolphinsScore = 44 + 23 + 71;
const koalasScore = 65 + 54 + 49;

// Calculate the average score for a team
const calcAverage = (teamScore) => teamScore / 3;

// Calculate the average score for the Dolphins and Koalas
const avgDolphins = calcAverage(dolphinsScore);
const avgKoalas = calcAverage(koalasScore);

console.log(avgDolphins, avgKoalas);

// Check the winner of the game based on average scores
function checkWinner(avgDolphins, avgKoalas) {
  const winner =
    avgDolphins >= 2 * avgKoalas
      ? `Dolphins won with ${avgDolphins} points against Koalas with ${avgKoalas} points`
      : avgKoalas >= 2 * avgDolphins
      ? `Koalas won with ${avgKoalas} points against Dolphins with ${avgDolphins} points`
      : "No team won the game!";
  return winner;
}

console.log(checkWinner()); // logs "No team won the game"!



/* Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44 */


// Define a function named calcTip that takes a bill amount as a parameter
const calcTip = (bill) => {
  // Check if the bill amount is between 50 and 300 (inclusive)
  // If true, calculate the tip as 15% of the bill amount
  // If false, calculate the tip as 20% of the bill amount
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// Calculate the tip amount for different bill amounts using the calcTip function and log the results
console.log(calcTip(125)); // Logs "The tip amount is 18.75"
console.log(calcTip(555)); // Logs "The tip amount is 111"
console.log(calcTip(44)); // Logs "The tip amount is 8.8"

// Create an array named bills containing different bill amounts
const bills = [125, 555, 44];

// Calculate the tip amounts for each bill in the bills array using the calcTip function and store them in the tips array
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// Calculate the total amounts (bill + tip) for each bill in the bills array and store them in the totals array
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// Log the totals array
console.log(totals); // Logs an array of total amounts [143.75, 666, 52.8]


/* Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall. */

// Define the "mark" object with properties and a method
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

// Define the "john" object with properties and a method
const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

// Calculate the BMI for Mark and John
mark.calcBMI();
john.calcBMI();

console.log(mark); // Output the "mark" object
console.log(john); // Output the "john" object

// Determine the comparison of BMI values between Mark and John
const highBMI =
  mark.bmi > john.bmi
    ? `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})`
    : john.bmi > mark.bmi
    ? `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})`
    : "Please try again later";

console.log(highBMI); // Output the comparison result




/* Data Structures, Modern Operators and Strings
Coding Challenge #1

We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 
'players2')

2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players

3. Create an array 'allPlayers' containing all players of both teams (22 
players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};




// Destructuring assignment: Extracts values from game.players array and assigns them to players1 and players2.
const [players1, players2] = game.players;

// Destructuring assignment: Extracts the first element (goalkeeper) from players1 and puts the rest in fieldPlayers array using the spread operator.
const [gk, ...fieldPlayers] = players1;

// Combining arrays: Merges players1 and players2 arrays into a new array called allPlayers.
const allPlayers = [...players1, ...players2];

// Log the allPlayers array to the console.
console.log(allPlayers);

// Creating a new array players1Final by adding three players (Thiago, Coutinho, and Perisic) to the end of players1 array.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// Log the players1Final array to the console.
console.log(players1Final);

// Destructuring assignment with nested objects: Extracts values from the game.odds object and assigns them to variables team1, draw, and team2.
const {
  odds: { team1, x: draw, team2 },
} = game;

// Log the values of team1, draw, and team2 to the console.
console.log(team1, draw, team2);

// Declaring a function named printGoals, which takes a variable number of arguments (players) using the rest parameter.
const printGoals = function (...players) {
  // Log the players array to the console.
  console.log(players);

  // Log the number of goals scored (the length of the players array) to the console.
  console.log(`${players.length} goals were scored`);
};

// Call the printGoals function with the game.scored array as arguments using the spread operator.
printGoals(...game.scored);

// Conditional statement: If team1 has higher odds than team2, log "Team 1 is more likely to win" to the console.
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");



/* Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}*/


// Loop through the 'game.scored' array, which contains objects with goal information (goalNumber and player).
for (const { goalNumber, player } of game.scored) {
  // Log each player's goalNumber and name to the console.
  console.log(`Goal ${goalNumber} : ${player}`);
}

// Get an array containing the values (goal information objects) from 'game.scored'.
const goalNumber = Object.values(game.scored);
// Log the 'goalNumber' array to the console.
console.log(goalNumber);

// Loop through the 'game.scored' array using the 'entries()' method, which provides both the index (i) and the goalScorer (goal information object).
for (const [i, goalScorer] of game.scored.entries()) {
  // Log each player's index and name to the console.
  console.log(`Goal ${i} : ${goalScorer}`);
}

// Get an array containing the odds values from the 'game.odds' object.
const odds = Object.values(game.odds);
// Initialize a variable 'average' to calculate the average of odds.
let average = 0;
// Loop through the 'odds' array and sum up all the odds.
for (const odd of odds) {
  average += odd;
}
// Calculate the average by dividing the sum by the number of odds and log it to the console.
average /= odds.length;
console.log(average);

// Loop through the 'game.odds' object, which contains odds for each team and the draw.
for (const [team, odd] of Object.entries(game.odds)) {
  // Determine whether it's a draw or a team victory and create the 'teamStr' accordingly.
  const teamStr =
    team === "x"
      ? "draw"
      : `victory
${game[team]}`;
  // Log the odds of each team or draw to the console.
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Initialize an empty object called 'scorers' to keep track of goal counts for each player.
const scorers = {};

// Loop through the 'game.scored' array again to count the number of goals for each player and store it in the 'scorers' object.
for (const goalScorer of game.scored) {
  // Check if the player is already in the 'scorers' object.
  if (scorers.hasOwnProperty(goalScorer)) {
    // If the player is in the object, increment their goal count by 1.
    scorers[goalScorer] += 1;
  } else {
    // If the player is not in the object, add them with 1 goal.
    scorers[goalScorer] = 1;
  }
}

// Log the 'scorers' object, which now contains the names of players who scored as properties and the number of goals as values.
console.log(scorers);


/* Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOALCoding Challenge #3
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL*/


// Create a Map named gameEvents, which stores events in the game as key-value pairs (minute => event).
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

// 1. Create a new Set 'events' to store unique event types (values) from gameEvents.
const events = [...new Set(gameEvents.values())];

// Log the 'events' array to the console, which contains unique event types.
console.log(events);

// 2. Remove the event that happened at minute 64 from the gameEvents Map.
gameEvents.delete(64);

// Log the updated 'gameEvents' Map to the console without the event at minute 64.
console.log(gameEvents);

// 3. Get the last time (minute) from the gameEvents Map by converting keys to an array, and then using pop().
const time = [...gameEvents.keys()].pop();

// Log the last time to the console.
console.log(time);

// Calculate the average time between events and log it to the console.
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// Define constants 'fullTime' and 'halfTime' for 90 minutes and 45 minutes respectively.
const fullTime = 90;
const halfTime = 45;

// Loop through the gameEvents Map using destructuring, calculating the half and logging the event with half and minute to the console.
for (const [min, event] of gameEvents) {
  const half =
    min <= halfTime
      ? "FIRST HALF"
      : min <= fullTime
      ? "SECOND HALF"
      : "EXTRA TIME";

  console.log(`[${half}] ${min} : ${event}`);
}


/*
A Closer Look at Functions
Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things:
1.1. Display a prompt window for the user to input the number of the 
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For 
example, if the option is 3, increase the value at position 3 of the array by 
1. Make sure to check if the input is a number and if the number makes 
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation?
The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
 */

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(`What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)`)
    );
    return answer;
  },
};
console.log(poll.answers);

poll.registerNewAnswer();

for (const [number, language] of Object.entries(poll.options)) {
  for (let i = 0; i < poll.answers.length; i++) {
    console.log(poll.answers);
    if (poll.options === 0) {
      poll.answers[i] = +1;
    }
  }






