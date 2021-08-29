import { deromanize, romanize } from "./index";

describe("romanization", () => {
  describe("romanize", () => {
    const ERROR_MSG = "romanize must be called with an positive integer";

    it("should throw an error if not called with typeof 'number'", () => {
      const items = [true, "5", undefined, null, {}];
      for (const item of items) {
        try {
          // @ts-ignore
          const out = romanize(item);
          expect(out).toBe(undefined);
        } catch (error) {
          expect(error.message).toBe(ERROR_MSG);
        }
      }
    });

    it("should throw an error if called with a floating point number", () => {
      try {
        const out = romanize(81.232);
        expect(out).toBe(undefined);
      } catch (error) {
        expect(error.message).toBe(ERROR_MSG);
      }
    });

    it("should throw an error if called with 0", () => {
      try {
        const out = romanize(0);
        expect(out).toBe(undefined);
      } catch (error) {
        expect(error.message).toBe(ERROR_MSG);
      }
    });

    it("should throw an error if called with a number less than 1", () => {
      try {
        const out = romanize(-6);
        expect(out).toBe(undefined);
      } catch (error) {
        expect(error.message).toBe(ERROR_MSG);
      }
    });

    it("should convert positive whole integers to roman numerals", () => {
      const tests: Array<[number, string]> = [
        [2, "II"],
        [3, "III"],
        [4, "IV"],
        [6, "VI"],
        [4, "IV"],
        [5, "V"],
        [9, "IX"],
        [12, "XII"],
        [16, "XVI"],
        [29, "XXIX"],
        [44, "XLIV"],
        [45, "XLV"],
        [68, "LXVIII"],
        [83, "LXXXIII"],
        [97, "XCVII"],
        [99, "XCIX"],
        [400, "CD"],
        [500, "D"],
        [501, "DI"],
        [649, "DCXLIX"],
        [798, "DCCXCVIII"],
        [891, "DCCCXCI"],
        [1000, "M"],
        [1004, "MIV"],
        [1006, "MVI"],
        [1023, "MXXIII"],
        [2014, "MMXIV"],
        [3999, "MMMCMXCIX"],
      ];

      for (const [input, expected] of tests) {
        const out = romanize(input);
        expect(out).toBe(expected);
      }
    });
  });

  describe("deromanize", () => {
    it("should throw an error if called with a non-roman numeral string", () => {
      const input = "a string";
      const msg = `"${input}" is not a valid Roman Numeral`;
      try {
        const out = deromanize(input);
        expect(out).toBe(undefined);
      } catch (error) {
        expect(error.message).toBe(msg);
      }
    });

    it("should throw an error if called with an empty string", () => {
      try {
        const out = deromanize("");
        expect(out).toBe(undefined);
      } catch (error) {
        expect(error.message).toBe('"" is not a valid Roman Numeral');
      }
    });

    it("should throw an error if not called with typeof 'string'", () => {
      const items = [1, true, undefined, null, {}];
      for (const item of items) {
        try {
          //@ts-ignore
          const out = deromanize(item);
          expect(out).toBe(undefined);
        } catch (error) {
          expect(error.message).toBe(`"${item}" is not a valid Roman Numeral`);
        }
      }
    });

    it("should convert roman numerals into integers", () => {
      const tests: Array<[string, number]> = [
        ["I", 1],
        ["IV", 4],
        ["VI", 6],
        ["IX", 9],
        ["XII", 12],
        ["XVI", 16],
        ["XXIX", 29],
        ["XLIV", 44],
        ["XLV", 45],
        ["LXVIII", 68],
        ["LXXXIII", 83],
        ["XCVII", 97],
        ["XCIX", 99],
        ["CD", 400],
        ["D", 500],
        ["DI", 501],
        ["DCXLIX", 649],
        ["DCCXCVIII", 798],
        ["DCCCXCI", 891],
        ["M", 1000],
        ["MIV", 1004],
        ["MVI", 1006],
        ["MXXIII", 1023],
        ["MMXIV", 2014],
        ["MMMCMXCIX", 3999],
      ];

      for (const [input, expected] of tests) {
        const out = deromanize(input);
        expect(out).toBe(expected);
      }
    });
  });
});
