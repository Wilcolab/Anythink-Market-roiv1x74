// Create a JavaScript function called toKebabCase by following these steps:
// 1. Start with a basic version that turns "Hello World" into "hello-world"
//    by lowercasing and replacing spaces with hyphens.
// 2. Extend it to handle spaces, underscores and camelCase
//    (e.g. "hello_world", "helloWorld", "Hello world_again") and normalize
//    everything to kebab-case.
// 3. Add input validation: accept only non-empty strings, trim extra spaces
//    and throw a clear error for null, undefined, non-strings or
//    whitespace-only values. Add a few examples in comments.

// Examples:
// "Hello World" -> "hello-world"
// "hello_world" -> "hello-world"
// "helloWorld" -> "hello-world"
// "Hello world_again" -> "hello-world-again"
// "SCREEN_NAME" -> "screen-name"
// null or 123 -> throws error

function toKebabCase(str) {
  // Input validation
  if (str === null || str === undefined) {
    throw new Error('Input cannot be null or undefined');
  }
  
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  
  const trimmed = str.trim();
  
  if (trimmed === '') {
    throw new Error('Input cannot be an empty or whitespace-only string');
  }

  return trimmed
    // Insert hyphen before uppercase letters (for camelCase handling)
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    // Replace underscores and spaces with hyphens
    .replace(/[\s_]+/g, '-')
    // Convert to lowercase
    .toLowerCase()
    // Remove multiple consecutive hyphens
    .replace(/-+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-|-$/g, '');
}

module.exports = toKebabCase;
