// Create a function named `convertToRoman` that takes a parameter `numToConvert`
function convertToRoman(numToConvert) {
  // Assign provided numbers as integers in an array to the variable `numbers`
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // Assign roman numerals as strings in an array to the variable `roman`
  const roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  // Initialize an empty string and assign it to the variable `result`
  let result = "";

  // Create a while loop that iterates through the `numbers` array
  numbers.forEach(function (number, i) {
    // Convert the current value if it is greater than or equal to the value of the current item iterated on in the array
    while (numToConvert >= number) {
      // Concatenates Roman strings while subtracting Arabic numbers until the string matches the condition for the while loop
      result += roman[i];
      numToConvert -= number;
    }
  });
  // Return the result of `convertToRoman`
  return result;
}

// Test
convertToRoman(36);
