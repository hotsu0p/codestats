

# Code Stats Checker

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A simple npm package to check the number of lines and characters in your code.

## Installation

```bash
npm install @hotsuop/code-stats
```

## Usage

```js
const getCodeStats = require("@yourusername/code-stats-checker");

const filePath = "path/to/your/code/file.js";
const stats = getCodeStats(filePath);

if (stats.error) {
  console.error(stats.error);
} else {
  console.log(`Lines: ${stats.lines}`);
  console.log(`Characters: ${stats.characters}`);
}
```

## API

`getCodeStats(filePath: string): Object`

Returns an object with code statistics or an error if the file couldn't be read.

- `filePath`: The path to the code file.

## Example

```js
const getCodeStats = require("@yourusername/code-stats-checker");

const filePath = "path/to/your/code/file.js";
const stats = getCodeStats(filePath);

if (stats.error) {
  console.error(stats.error);
} else {
  console.log(`Lines: ${stats.lines}`);
  console.log(`Characters: ${stats.characters}`);
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

Inspired by the need for a quick code stats checker.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Issues

If you find any issues or have suggestions, please open an issue.
