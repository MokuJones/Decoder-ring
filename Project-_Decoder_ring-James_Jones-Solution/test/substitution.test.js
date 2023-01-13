// Write your tests here!
const { expect } = require("chai");
const substitutionModule = require("../src/substitution");

describe("Moku's substitution() test", () => {
  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const actual = substitutionModule.substitution("Test", " ");
      expect(actual).to.be.false;
    })
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const actual = substitutionModule.substitution("Test", "notAlphabet");
      expect(actual).to.be.false;
    })
    it("should return false if the substitution alphabet does not contain unique characters", ()  => {
      const actual = substitutionModule.substitution("Test", "Tessst");
      expect(actual).to.be.false;
    })
  })
  describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      const response = "jrufscpw";
      expect(actual).to.eql(response);
    })
    it("should work with any kind of key with unique characters", () => {
      const actual = substitutionModule.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
      const response = "y&ii$r&";
      expect(actual).to.eql(response);
    })
    it("should preserve spaces", () => {
      const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      const response = "elp xhm xf mbymwwmfj dne";
      expect(actual).to.eql(response);
    })
  })
  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const actual = substitutionModule.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
      const response = "thinkful";
      expect(actual).to.eql(response);
    })
    it("should work with any kind of key with unique characters", () => {
      const actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
      const response = "message";
      expect(actual).to.eql(response);
    })
    it("should preserve spaces", () => {
      const actual = substitutionModule.substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
      const response = "you are an excellent spy";
      expect(actual).to.eql(response);
    })
  })
})
