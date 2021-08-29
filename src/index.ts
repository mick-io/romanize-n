const table: Array<[string, number]> = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

function isRomanNumeral(s: string): boolean {
  if (typeof s !== "string") {
    return false;
  }
  let re = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/;
  return re.test(s);
}

/**
 * Converts a string containing a roman numeral to it's integer value.
 *
 * @param {string} numeral the roman numeral to be converted to an integer.
 * @returns {number} The integer value of [numeral]
 * @throws An error is thrown if the input [numeral] is not a string or does not
 * match the following roman numeral regular expression:
 * /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/
 * @example ```js
 * let myInt = deromanize("VI");
 * console.log(myInt); // 6
 * ```
 */
export function deromanize(numeral: string): number {
  if (!isRomanNumeral(numeral)) {
    throw new Error(`"${numeral}" is not a valid Roman Numeral`);
  }
  let out = 0;
  for (const [char, value] of table) {
    while (numeral.startsWith(char)) {
      out += value;
      numeral = numeral.slice(char.length);
    }
  }
  return out;
}

/**
 * Converts a base 10 integer into  it's equivalent roman numeral.
 *
 * @param {number} int An integer greater than 0 that will be converted to a
 * Roman Numeral.
 * @returns {string} The roman numeral representation of the input integer.
 * @throws An error is thrown if the input is not of type "number", the
 * input is not an whole number, or the input is less than 1.
 * @example ```js
 * const myRomanNumeral = romanize(3999);
 * console.log(myRomanNumeral); // MMMCMXCIX
 * ```
 */
export function romanize(int: number): string {
  // if int is not of type number, not an integer, or is less than 1
  if (typeof int !== "number" || int % 1 !== 0 || int < 1) {
    throw new Error("romanize must be called with an positive integer");
  }
  let numeral = "";
  for (const [char, value] of table) {
    while (int - value >= 0) {
      numeral += char;
      int -= value;
    }
  }
  return numeral;
}
