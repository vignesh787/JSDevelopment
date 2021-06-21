// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;

// Prettier automatically changes single quotes to double quotes
const name = "Vignesh";

// Prettier automatically adds the paranthesis fo birthYear- overridden at .prettierrc configuration file
const returnAge = birthYear => 2021 - birthYear;

console.log(returnAge(1988));
