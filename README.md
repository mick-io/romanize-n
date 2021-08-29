# romanize-n

Functions for converting integers to roman numerals and roman numerals to integers.

## Installing

Install via NPM

`npm i romanize-n`

or via Yarn

`yarn add romanize-n`

## Getting Started

```javascript
import { romanize, deromanize } from romanization;

// Use with integers > 0
let myRomanNumeral = romanize(3999);
console.log(myRomanNumeral); // MMMCMXCIX

let myInt = deromanize(myRomanNumeral);
console.log(myInt); // 3999
```

### Links

[Romanization NPM Page](https://npmjs.com/package/romanization)

[Romanization GitHub Page](https://github.com/mick-io/romanizationn)

### Built With

[TypeScript](https://typescriptlang.org)

### Authors

[Mick Piereder](https://github.com/mick-io)

### License

This project is licensed under the MIT License - see the LICENSE.md file for details
