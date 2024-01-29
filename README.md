# Discord Code Stats Bot

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A Discord bot that calculates and displays code statistics for a specified directory. It uses the `code-stats` npm package to calculate the statistics and discord.js to interact with Discord.

## Installation

```bash
npm install discord.js @hotsuop/codestats


## Usage

Once the bot is running, you can use the `!codeStats` command in any text channel that the bot has access to. The bot will then calculate the code statistics for the specified directory and display them in an embedded message.

## API

javascript
getCodeStats(folderPath: string, config: Object): Promise<Object>


Returns a promise that resolves with an object containing code statistics or rejects with an error if the directory couldn't be read.

- `folderPath`: The path to the directory to analyze.
- `config`: An optional configuration object.

## Example

javascript
const getCodeStats = require('./index.js');

// Define the folder path to analyze
const folderPath = './hold';

// Define the configuration object
const config = {
 languages: ['js', 'py', 'ts', 'json'], // Add your desired languages
 exclude: ['node_modules', 'build'],
 depthLimit: Infinity,
};

// Call getCodeStats with the folder path and configuration
getCodeStats(folderPath, config)
 .then(projectStats => {
   // Display the calculated project stats
   console.log('Project Statistics:');
   console.log(`Total Files: ${projectStats.totalFiles}`);
   console.log(`Total Lines: ${projectStats.totalLines}`);
   console.log(`Total Characters: ${projectStats.totalCharacters}`);
   console.log(`Total Functions: ${projectStats.totalFunctions}`);
   console.log(`Total Classes: ${projectStats.totalClasses}`);
   console.log(`Total Comments: ${projectStats.totalComments}`);
 })
 .catch(error => {
   console.error(error.message);
 });


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

Inspired by the need for a quick code stats checker.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Issues

If you find any issues or have suggestions, please open an issue.

