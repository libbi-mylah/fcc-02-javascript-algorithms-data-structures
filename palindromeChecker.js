// Create a function named `palindrome` that takes a parameter `str`.
function palindrome(str) {
  // Use the `toUpperCase()` method to convert the parameter `str` to uppercase.
  // Assign this to the var `upperCaseStr`.
  var upperCaseStr = str.toUpperCase();
  // Use the `replace()` method to remove anything that is not A-Za-z0-9.
  // Assign this to the var `stippedUpperStr`.
  var strippedUpperStr = upperCaseStr.replace(/[^A-Za-z0-9]/g, "");
  // Use the `split()` method to create an array out of the characters in `strippedUpperStr`.
  // Reverse the array with the `reverse()` method.
  // Use the `join()` method to return a reversed string.
  // Assign this to the var `reverseStr`.
  var reverseStr = strippedUpperStr.split("").reverse().join("");
  // Return true or false if the argument passed in is a palindrome or not.
  return strippedUpperStr === reverseStr;
}

palindrome("eye");
palindrome("not a palindrome");
