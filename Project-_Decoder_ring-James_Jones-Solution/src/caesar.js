// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift > 25 || shift < -25) {
      return false;
    }
    shift *= encode ? 1 : -1;
    let lowerCaseInput = input.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let newInput = '';
    for (let i = 0; i < lowerCaseInput.length; i++) {
      let currentLength = lowerCaseInput[i];
      if (alphabet.indexOf(currentLength) < 0) {
        newInput += currentLength;
        continue;
      }
      let currentIndex = alphabet.indexOf(currentLength);
      let newIndex = currentIndex + shift;
      if (newIndex > 25) newIndex = newIndex - 26;
      if (newIndex < 0) newIndex = newIndex + 26;
       newInput += alphabet[newIndex];
    }
    return newInput;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
