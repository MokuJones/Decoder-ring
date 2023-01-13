// Write your tests here!
const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe("Moku's caesar() test", () => {
  describe("error handling", () => {
  it("should return false if the shift is 0", () => {
    const actual = caesarModule.caesar("wklqnixo", 0);
    expect(actual).to.be.false;
  })
  it("should return false if the shift is greater than 25", () => {
    const actual = caesarModule.caesar("wklqnixo", 45);
    expect(actual).to.be.false;
  })
  it("should return false if the shift amount is less than -25", () => {
    const actual = caesarModule.caesar("wklqnixo", -45);
    expect(actual).to.be.false;
  })
    });
  describe("encoding a message", () => {
    
  it("should encode a message by shifting the letters", () => {
    const actual = caesarModule.caesar("thinkful", 3);
    const response = "wklqnixo";
    expect(actual).to.eql(response);
  })
  it("should leaves spaces and other symbols as is", () => {
    const actual = caesarModule.caesar("This is a secret message!", 8);
    const response = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.eql(response);
  })
  it("should ignore capital letters", () => {
    const actual = caesarModule.caesar("This is a secret message!", 8);
    const response = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.eql(response);
  })
  it("should appropriately handle letters at the end of the alphabet", () => {
    const actual = caesarModule.caesar("ZZZZZ", 1);
    const response = "aaaaa";
    expect(actual).to.eql(response);
  })
  it("should allow for a negative shift that will shift to the left", () => {
    const actual = caesarModule.caesar("AAAAA", -1);
    const response = "zzzzz";
    expect(actual).to.eql(response);
  })
    })
  describe("decoding a message", () => {
    
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const actual = caesarModule.caesar("bpqa qa i amkzmb umaaiom!", 8, false);
    const response = "this is a secret message!"; 
        expect(actual).to.eql(response);
    })
    it("should leaves spaces and other symbols as is", () => {
      const actual = caesarModule.caesar("aaa aa!", 1);
      const response = "bbb bb!";
      expect(actual).to.eql(response);
    })
    it("should ignore capital letters", () => {
      const actual = caesarModule.caesar("BbBb", -1);
      const response = "aaaa";
      expect(actual).to.eql(response);
    })
    it("should appropriately handle letters at the end of the alphabet" ,() => {
      const actual = caesarModule.caesar("zzzzz", 1);
      const response = "aaaaa";
      expect(actual).to.eql(response);
    })
    it("should allow for a negative shift that will shift to the left", () => {
      const actual = caesarModule.caesar("aaaaa", -1);
      const response = "zzzzz";
      expect(actual).to.eql(response);
    })
  })
})