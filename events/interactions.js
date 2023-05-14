const {Interaction} = require('discord.js')

module.exoirts = {
  name: 'interactionCreate'
  run: async (interaction, client) => {
    if (!interaction.isCommand())return;

    const command = client.commands.get(interaction.commandName)

    if(!command) return;

    try {
      await command.run(interaction, client)
    } catch (error) {
      console.log(error)
      await ineraction.reply({content: 'There was an error running this command uwu', ephemeral:true})();
    }
  }
}