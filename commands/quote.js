const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Sends a random quote without attribution'),
    async execute(interaction) {

        const quotes = JSON.parse(fs.readFileSync('data/brad-quotes.json'));
        const randInt = Math.floor(Math.random() * quotes.length);
        await interaction.reply(quotes[randInt]);
    },
};