// discord usage!
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] });
const getCodeStats = require('@hotsuop/codestats');

client.on('ready', () => {
    console.log(`Bot is ready as: ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.content === '!codestats') {
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
                // Create a new message embed
                const embed = new Discord.MessageEmbed()
                    .setTitle('Project Statistics')
                    .addField('Total Files', String(projectStats.totalFiles), true)
                    .addField('Total Lines', String(projectStats.totalLines), true)
                    .addField('Total Characters', String(projectStats.totalCharacters), true)
                    .addField('Total Functions', String(projectStats.totalFunctions), true)
                    .addField('Total Classes', String(projectStats.totalClasses), true)
                    .addField('Total Comments', String(projectStats.totalComments), true);

                // Send the embed to the channel
                message.channel.send({ embeds: [embed] });
            })
            .catch(error => {
                console.error(error.message);
            });
    }
});
client.login('MTIwMDkzODgzNDc1NDU1NjAxNg.G3ATkJ.5sUHjVigTxZHE4nxEMCLiY4GxtWzsYGmXDwSYM');