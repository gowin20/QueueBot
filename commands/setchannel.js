const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('set-channel')
        .setDescription('Designate a quote channel for the bot to parse')
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('The channel to read quotes from')),
    async execute(interaction) {
        const channel = interaction.options.getChannel('channel');
        await channel.send('It\'s this channel right?');
        await interaction.reply(`Set channel to ${channel}`);

        // parse existing messages in channel

        // get some kind of object with all messages in it
        // master loop through every message - using increment var
        // if message begins with a >
        // check for newline with no quote in same message
        // if so, that is attribution
        // otherwise, check i+1 for attribution
        // if no attribution there, quote is anonymous
    },
};