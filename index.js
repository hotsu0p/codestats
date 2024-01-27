const fs = require('fs');

function getCodeStats(filePath) {
    try {
        const codeContent = fs.readFileSync(filePath, 'utf-8');
        const lines = codeContent.split('\n').length;
        const characters = codeContent.length;

        return {
            lines,
            characters,
        };
    } catch (error) {
        return {
            error: `Error reading file: ${error.message}`,
        };
    }
}

module.exports = getCodeStats;