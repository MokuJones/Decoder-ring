// Write your tests here!
const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

describe("Moku's polybius() test", () => {
  describe("encoding a message", ()  => {
    it("should encode a message by translating each letter to number pairs", () => {
      const actual = polybiusModule.polybius("thinkful");
      const response = "4432423352125413";
      expect(actual).to.eql(response);
    })
    it("should translate both 'i' and 'j' to 42", () => {
      const actual = polybiusModule.polybius("ij");
      const response = "4242";
      expect(actual).to.eql(response);
    })
    it("should leave spaces as is", () => {
      const actual = polybiusModule.polybius("Hello world");
      const response = "3251131343 2543241341";
      expect(actual).to.eql(response);
    })
  })
  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const actual = polybiusModule.polybius("3251131343", false);
      const response = "hello";
      expect(actual).to.eql(response);
    })
    it ("should translate 42 to both 'i' and 'j'", () => {
      const actual = polybiusModule.polybius("42", false);
      const response = "(i/j)";
      expect(actual).to.eql(response);
    })
    it("should leave spaces as is", () => {
      const actual = polybiusModule.polybius("3251131343 2543241341", false);
      const response = "hello world";
      expect(actual).to.eql(response);
    })
    it("should return false if the length of all numbers is odd", () => {
      const actual = polybiusModule.polybius("21314", false);
      expect(actual).to.be.false;
    })
  })
})