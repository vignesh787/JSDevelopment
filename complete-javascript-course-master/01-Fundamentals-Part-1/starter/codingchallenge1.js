// BMI = mass/ height * height

/*const markHeight = 1.69;
const johnHeight = 1.95;
const markMass = 78;
const johnMass = 92;
*/
const markHeight = 1.88;
const johnHeight = 1.76;
const markMass = 95;
const johnMass = 85;



let markBMI,johnBMI,higherBMI;

markBMI = markMass/(markHeight ** 2);
johnBMI = johnMass/(johnHeight * johnHeight);

console.log({markHeight,markMass,markBMI});

console.log({johnHeight,johnMass,johnBMI});

higherBMI = markBMI > johnBMI;

console.log(higherBMI);
