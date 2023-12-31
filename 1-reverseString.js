/*The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
2 seconds before reversing the string. The reversed string should then be printed as output. */

// Function to reverse a string
function reverseString(input) {
    return input.split('').reverse().join('');
  }
  
  // Main function to delay and reverse the input string
  function timeOut (input) {
    setTimeout(function () {
      const reversedString = reverseString(input);
      console.log("Reversed string: ", reversedString);
    }, 2000); // 2000 milliseconds = 2 seconds
  }
  
  // Example usage
  const input = "I am A web Developer";
  console.log("Original string: ", input);
  timeOut (input);
  