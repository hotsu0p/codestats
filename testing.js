const getCodeStats = require('@hotsuop/codestats');

const filePath = "./codeStatsChecker.js";
const stats = getCodeStats(filePath);

if (stats.error) {
    console.error(stats.error);
} else {
    console.log(`Lines: ${stats.lines}`);
    console.log(`Characters: ${stats.characters}`);
}