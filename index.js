const fs = require('fs').promises;
const path = require('path');
const { parse } = require('acorn');
const chalk = require('chalk');

async function getCodeStats(folderPath, config = { languages: ['js'], exclude: [], fileTypes: ['xml'], depthLimit: Infinity }) {
    const projectStats = {
        totalFiles: 0,
        totalLines: 0,
        totalCharacters: 0,
        totalFunctions: 0,
        totalClasses: 0,
        totalComments: 0,
        fileTypesStats: {},
        files: [],
    };

    async function analyzeCode(filePath) {
        try {
            const codeContent = await fs.readFile(filePath, 'utf-8');
            const lines = codeContent.split('\n').length;
            const characters = codeContent.length;

            let functionsCount = 0;
            let classesCount = 0;

            const isJsonFile = path.extname(filePath).toLowerCase() === '.json';

            if (!isJsonFile && config.languages.some(language => filePath.endsWith(`.${language}`))) {
                const parsedCode = parse(codeContent, { sourceType: 'module' });
                functionsCount = parsedCode.body.filter(node => node.type === 'FunctionDeclaration').length;
                classesCount = parsedCode.body.filter(node => node.type === 'ClassDeclaration').length;
            }

            const comments = codeContent.match(/(\/\/.*$)|(\/\*[\s\S]*?\*\/)/gm) || [];
            const commentsCount = comments.length;

            projectStats.totalLines += lines;
            projectStats.totalCharacters += characters;
            projectStats.totalFunctions += functionsCount;
            projectStats.totalClasses += classesCount;
            projectStats.totalComments += commentsCount;

            const fileType = isJsonFile ? 'json' : path.extname(filePath).slice(1);
            projectStats.fileTypesStats[fileType] = projectStats.fileTypesStats[fileType] || {
                files: 0,
                lines: 0,
            };
            projectStats.fileTypesStats[fileType].files += 1;
            projectStats.fileTypesStats[fileType].lines += lines;

            projectStats.files.push({
                filePath,
                lines,
                characters,
                functionsCount,
                classesCount,
                commentsCount,
                fileType,
            });
        } catch (error) {
            console.error(chalk.red(`Error reading file ${filePath}: ${error.message}`));
        }
    }

    async function processFolder(folderPath, depth) {
        if (depth > config.depthLimit) {
            return;
        }

        const files = await fs.readdir(folderPath);

        await Promise.all(files.map(async file => {
            const filePath = path.join(folderPath, file);
            const stats = await fs.stat(filePath);

            if (stats.isDirectory() && !config.exclude.includes(file)) {
                await processFolder(filePath, depth + 1);
            } else if (
                stats.isFile() &&
                ((config.languages.some(language => filePath.endsWith(`.${language}`)) || (config.fileTypes && config.fileTypes.includes(path.extname(file).slice(1)))) &&
                    !config.exclude.includes(file))
            ) {
                await analyzeCode(filePath);
                projectStats.totalFiles++;
            }
        }));
    }

    await processFolder(folderPath, 0);

    return projectStats;
}

module.exports = getCodeStats;