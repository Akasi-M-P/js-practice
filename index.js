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
