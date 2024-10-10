let userInputTemp = prompt (`Input Fahrenheit temperature and we'll convert it into Celsius!`);

// create a function called "convertToCelsius" that takes in the user input (fahrenheit) and returns the celsius temp
  //celsiusTemp = (fahrenheitTemp - 32)*(5/9)
const convertToCelsius = (userInputTemp) => {
  return (userInputTemp - 32)*(5/9);

 }

// create a function called describeTemp which will take in a Fahrenheit temp and return a description based on
// Temperature     ->     Description
// < 32              ->      "very cold"
// < 64              ->          "cold"        
// < 86              ->         "warm"     
// < 100             ->           "hot"       
// >= 100            ->        "very hot"  

const describeTemp = (userInputTemp) => {
  if(userInputTemp < 32) {
    return `very cold`;
  } else if (userInputTemp < 64) {
    return `cold`;
  } else if (userInputTemp < 86) {
    return `warm`;
  } else if (userInputTemp < 100) {
    return `hot`;
  } else {
    return `very hot`;
  } 
}
let celsiusTemp = convertToCelsius(userInputTemp);
let description = describeTemp(userInputTemp);
// send an alert to user including fahren temp they entered, what that temp is in celsius, and how it feels.

alert(`You entered ${userInputTemp}F, which is ${celsiusTemp}C, which feels ${description}!`)
