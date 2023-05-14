const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('buffs')
    .setDescription('weekly buffs schedule'),
  //type: SlashCommandBuilder.ChatInput,
  async execute(interaction) {
    interaction.reply({ content: '**Monday**: \n Heat of the Battle II, Reduced Rates II \n**Tuesday**: \n Meat and Mead II, Proper Care II \n**Wednesday**: \n Meat and Mead II, Proper Care II \n**Thursday**: \n Heat of the Battle II, Reduced Rates II \n**Friday**: \n Jackpot II, Reduced Rates II \n**Saturday**: \n Heat of the Battle III, Reduced Rates II \n**Sunday**: \n Heat of the Battle II, Reduced Rates II'})
  }
}