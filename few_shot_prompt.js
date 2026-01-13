// Write a JavaScript function toCamelCase that converts strings to camelCase.
// Examples:
// "first name" -> "firstName"
// "user_id" -> "userId"
// "SCREEN_NAME" -> "screenName"
// "mobile-number" -> "mobileNumber"

function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(/[\s_-]+/)
    .map((word, index) => 
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}

module.exports = toCamelCase;
