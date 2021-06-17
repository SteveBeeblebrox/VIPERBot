import * as Discord from 'discord.js'

export default class VIPERBot {
  #prefix
  #commands
  #client
  constructor(prefix, commands) {
    this.#client = new Discord.Client();
    this.#prefix = prefix
    this.#commands = commands

    this.#client.on('message', (message) => {
      if(message.author.bot) return

      if(!message.content.startsWith(this.#prefix)) return

      let contents = this.#breakCommand(message.content.substr(this.#prefix.length))

      try {
        if(contents[0] in this.#commands)
          this.#commands[contents[0]]({
            message: message,
            args: contents.splice(1),
            self: contents[0],
            client: this.#client
          })
        else throw `Unknown command \`${contents[0]}\` (Note that commands are case sensitive).`
      } catch (error) {
        message.channel.send('Error: ' + error)
      }

    })

    this.#client.on('ready', () => {
      this.#client.user.setActivity(`${this.#client.guilds.cache.size} Server${this.#client.guilds.cache.size > 1 && 's' || ''}`, { type: 'WATCHING' }).catch(console.error);
    })

  }

  #breakCommand(string) {
    let exp = /[^\s"]+|"([^"]*)"/gi
    let result = []
    let match = null

    do {
        match = exp.exec(string)
        if (match != null)
            result.push(match[1] ? match[1] : match[0])
    } while (match != null)

    return result
  }

  get prefix() {
    return this.getPrefix()
  }

  getPrefix() {
    return this.#prefix
  }

  login(token) {
    this.#client.login(token)
    return this
  }
}