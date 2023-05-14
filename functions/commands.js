const { REST } = require('@discord.js/rest')
const { routes } = require('discord-api-types/v9')
const fs = require('fs')
const token = process.env['token']

const clientId = '1106618736456237116'
const guildId = '957376283677974529'

module.exports = (client) => {
  client.handleCommands = async (commandFolders, path) => {
    client.commandArray = [];
    for (folder of commandFolders) {
      const commandFiles =
fs.readdirSync(`${path}/${folder}`).filter(file => file.endsWith(".js")
      for (const file of commandFiles) {
        const command = require(`../commands/${folder}/${file}`);

        client.commands.set(command.name, command);

        client.commandArray.push(command)
        
      }
    }

    const rest = new REST({
      version: '9'
    }).setToken(token)

    async () => {
      try {
        console.log('Refreshing slash commands');

        await rest.put(
          Routes.applicationsCommands(clientId),
          {
            body:
              client.commandArray
          },
        );

        console.log('Successfully reloaded slash commands')
      } catch (error) {
        console.log(error)
      }
    })();
  }
}