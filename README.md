# romanize-n

Functions for converting integers to roman numerals and roman numerals to integers.

## Installing

Install via NPM

`npm i romanize-n`

or via Yarn

`yarn add romanize-n`

## Getting Started

```javascript
import { romanize, deromanize } from romanize-n;

// Use with integers > 0
let myRomanNumeral = romanize(3999);
console.log(myRomanNumeral); // MMMCMXCIX

let myInt = deromanize(myRomanNumeral);
console.log(myInt); // 3999
```

### Links

[romanize-n's NPM Page](https://npmjs.com/package/romanize-n)

[romanize-n's GitHub Page](https://github.com/mick-io/romanize-n)

### Built With

[TypeScript](https://typescriptlang.org)

### Authors

[Mick Piereder](https://github.com/mick-io)

### License

This project is licensed under the MIT License - see the LICENSE.md file for details
