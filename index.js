import VIPERBot from './viperbot.js'
import * as Util from './viperbot/util.js'

const bot = new VIPERBot('!', {

  echo: ({message, self}) => message.channel.send(message.content.substr(bot.prefix.length + self.length + 1)),

  purge: ({message, args, self}) => {
    Util.assertPermission(message.member, 'MANAGE_MESSAGES', self)
    Util.assertArgCount(args, 1, self)
    message.channel.bulkDelete(Util.asNumber(args[0], self) + 1)
  },

  pick: ({message, args, self}) => {
    Util.assertArgCountAtLeast(args, 1, self)
    message.channel.send(args[Math.floor(Math.random() * args.length)])
  },

  kick: ({message, args, self, client}) => {
    Util.assertPermission(message.member, 'KICK_MEMBERS', self)
    Util.assertArgCountAtLeast(args, 2, self)
    let user = Util.asUser(client, args[0], self)
    message.guild.member(user).kick(args[1] ?? '')
    message.channel.send(`Kicked ${user}${(args[1] && ' (' + args[1] + ')') ?? ''}.`)
  },

  status: ({message}) => message.channel.send(Util.randomItem([
    'All systems go!',
    'Ready to roll!',
    'Standing by...',
    'Ready to make some trouble!',
    'What do you want?!',
    'Yaaawn...',
    'Here. Obviously.'
  ]))


}).login(process.env['BOT_TOKEN'])