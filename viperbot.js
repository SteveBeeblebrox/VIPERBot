import * as Discord from 'discord.js'
import * as Util from './viperbot/util.js'

export default class VIPERBot {
  #prefix
  #commands
  #client
  #upSince
  constructor(prefix, commands) {
    this.#client = new Discord.Client();
    this.#prefix = prefix
    this.#commands = commands
    this.#upSince = new Date()

    this.#commands['github'] = ({message}) => message.channel.send('VIPERBot GitHub: https://github.com/SteveBeeblebrox/VIPERBot')

    this.#client.on('message', (message) => {
      if(message.author.bot) return

      if(!message.content.startsWith(this.#prefix)) return

      let contents = this.#breakCommand(message.content.substr(this.#prefix.length))

      try {
        if(this.#commands.hasOwnProperty(contents[0]))
          this.#commands[contents[0]]({
            message: message,
            args: contents.splice(1),
            self: contents[0],
            client: this.#client,
            bot: this
          })
        else throw `Unknown command \`${contents[0]}\` (Note that commands are case sensitive).`
      } catch (error) {
        message.channel.send('Error: ' + error)
      }

    })

    this.#client.on('ready', () => {
      this.#client.user.setActivity(`${this.#client.guilds.cache.size} Server${this.#client.guilds.cache.size > 1 && 's' || ''}`, { type: 'WATCHING' }).catch(console.error);

      this.#client.user.setAvatar('./assets/avatar.png')

      const username = this.#client.user.username

      this.#commands[username] ??= Util.aliasFor('help')
      this.#commands[username.toLowerCase()] ??= Util.aliasFor('help')
      this.#commands['help'] ??= Util.respond(`Hi, I\'m ${username}.`)

      this.#client.guilds.cache.forEach(guild =>
        guild.member(this.#client.user).setNickname(this.#prefix + username))
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
    return this.#prefix
  }

  get upSince() {
    return this.#upSince
  }

  get commands() {
    return this.#commands
  }

  login(token) {
    this.#client.login(token)
    return this
  }
}