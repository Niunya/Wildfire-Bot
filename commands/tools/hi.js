const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hi')
    .setDescription('be nice to our bot'),
  //type: SlashCommandBuilder.ChatInput,
  async execute(interaction) {
    interaction.reply({ content: 'Hi stinky Wildfire! c:'})
  }
}