// Write a function toCamelCase that converts a string to camelCase.
// Example: "first name" -> "firstName"

function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) => 
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}

module.exports = toCamelCase;
