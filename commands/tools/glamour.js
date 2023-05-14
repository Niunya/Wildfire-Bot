const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('housing')
    .setDescription('housing snapshots'),
  //type: SlashCommandBuilder.ChatInput,
  async execute(interaction) {
    interaction.reply({ content: '**Housing Snap:** \n https://housingsnap.com/'})
  }
}