# Discord Code Stats Bot

This is a Discord bot that calculates and displays code statistics for a specified directory. It uses the `code-stats` npm package to calculate the statistics and discord.js to interact with Discord.

## Installation

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Replace `'your-token-goes-here'` in `bot.js` with your Discord bot token.
4. Run `node bot.js` to start the bot.

## Usage

Once the bot is running, you can use the `!codeStats` command in any text channel that the bot has access to. The bot will then calculate the code statistics for the specified directory and display them in an embedded message.

## Configuration

You can configure the bot by modifying the `config` object in `bot.js`. The `languages` array specifies the programming languages to count lines for, the `exclude` array specifies directories to ignore, and the `depthLimit` property specifies the maximum depth to traverse.

## Dependencies

- [discord.js](https://discord.js.org/#/)
- [code-stats](https://www.npmjs.com/package/@hotsuop/codestats?activeTab=readme)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
