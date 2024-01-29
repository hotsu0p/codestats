const getCodeStats = require('@hotsuop/codestats');

// Define the folder path to analyze
const folderPath = './example';

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

        // Display detailed stats for each file
        console.log('\nFile Statistics:');
        projectStats.files.forEach(fileStats => {
            console.log(`\nFile: ${fileStats.filePath}`);
            console.log(`Lines: ${fileStats.lines}`);
            console.log(`Characters: ${fileStats.characters}`);
            console.log(`Functions: ${fileStats.functionsCount}`);
            console.log(`Classes: ${fileStats.classesCount}`);
            console.log(`Comments: ${fileStats.commentsCount}`);
        });

        // Display file types summary
        console.log('\nFile Types Summary:');
        console.log('Type\t| Files\t| Lines');
        console.log('--------|-------|----------');
        for (const fileType in projectStats.fileTypesStats) {
            const fileTypeStats = projectStats.fileTypesStats[fileType];
            console.log(`${fileType}\t| ${fileTypeStats.files}\t| ${fileTypeStats.lines} (${((fileTypeStats.lines / projectStats.totalLines) * 100).toFixed(2)}%)`);
        }
        console.log('--------|-------|----------');
        console.log(`All\t| ${projectStats.totalFiles}\t| ${projectStats.totalLines}`);
    })
    .catch(error => {
        console.error(chalk.red(`Error: ${error.message}`));
    });