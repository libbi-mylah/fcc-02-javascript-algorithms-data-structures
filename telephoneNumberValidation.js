// Create a function named `telephoneCheck` that takes a parameter `str`
function telephoneCheck(str) {
  // Search for patterns that start with or without 1
  // Search for white space
  // Search for strings with different possibilities
  // Search for all digits
  // Specify the lower and upper number of patterns
  // Check for existence of the digits that match the patterns specified
  return (
    /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/
      // Use the RegEx 'test' to search for 'str'
      .test(str)
  );
}
// Test
telephoneCheck("555-555-5555");
