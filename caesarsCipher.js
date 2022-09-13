// Declare a function named `rot13` that takes a parameter `str`
function rot13(str) {
  // Return `str`
  return (
    str
      // Split the string into an array
      .split("")
      // Create a new array named `item`
      .map((item) => {
        // Loop through the string
        // Check for capitalized letters A through Z
        // Return a new string with the index moved 13 times to the left if the index is greater than 13 but less than 90
        // Else return index moved 13 times to the right
        let a = item.replace(
          /[A-Z]/g,
          item.charCodeAt(0) + 13 > 90
            ? String.fromCharCode(item.charCodeAt(0) - 13)
            : String.fromCharCode(item.charCodeAt(0) + 13)
        );
        // Return 'a'
        return a;
      })
      // Concatenate the array and return the new string
      .join("")
  );
}
// Test
// Returns "FREE CODE CAMP"
rot13("SERR PBQR PNZC");
// Returns "FREE PIZZA!"
rot13("SERR CVMMN!");
// Returns "FREE LOVE?"
rot13("SERR YBIR?");
// Returns "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
