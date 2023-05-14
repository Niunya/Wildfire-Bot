const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('marketboard')
    .setDescription('marketboard tracker'),
  //type: SlashCommandBuilder.ChatInput,
  async execute(interaction) {
    interaction.reply({ content: '**Universalis:** \n https://universalis.app/'})
  }
}