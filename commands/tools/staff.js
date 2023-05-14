const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('staff')
    .setDescription('members of staff'),
  //type: SlashCommandBuilder.ChatInput,
  async execute(interaction) {
    interaction.reply({ content: '**Leads:** \n Extos Azur \n Gray Gorgon \n **Officers:** \n Giant Nein \n Major Qt \n Mattea Willow \n Rengaria Hawkins \n Zane Scintillae'})
  }
}