// Write a JavaScript function toCamelCase that converts a string to camelCase
// with validation and error handling.
// - Accept only non-empty strings, throw an error for null, undefined,
//   non-strings or whitespace-only strings.
// - Handle spaces, underscores and dashes, including multiple in a row.
// - First word lowercase, next words capitalized.
// Examples:
// "first name" -> "firstName"
// "user_id" -> "userId"
// "SCREEN_NAME" -> "screenName"
// "mobile-number" -> "mobileNumber"
// 123 or null should throw a clear error.

function toCamelCase(str) {
  // Input validation
  if (str === null || str === undefined) {
    throw new Error('Input cannot be null or undefined');
  }
  
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  
  if (str.trim() === '') {
    throw new Error('Input cannot be an empty or whitespace-only string');
  }

  return str
    .toLowerCase()
    .split(/[\s_-]+/)
    .filter(word => word.length > 0)
    .map((word, index) => 
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}

module.exports = toCamelCase;
