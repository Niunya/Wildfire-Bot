const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('glamour')
    .setDescription('Glamour Collection'),
  //type: SlashCommandBuilder.ChatInput,
  async execute(interaction) {
    interaction.reply({ content: '**Eorzea Collection:** \n https://ffxiv.eorzeacollection.com/'})
  }
}