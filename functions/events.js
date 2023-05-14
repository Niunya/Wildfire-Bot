module.exports = (client) => {
  client.handleEvents = async (eventFiles, path) => {
    for (const file of eventFiles) {
      if (event.once) {
        client.once(event.name, (args) => event.run(...args,client))
      }else {
        client.on(event.name, (...args) => event.run(...args,client))
      }
    }
  }
}