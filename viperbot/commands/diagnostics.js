import * as Util from '../util.js'

export const uptime = ({message, args, self, bot}) => {
  Util.assertPermission(message.member, 'MANAGE_MEMBERS', self)
  Util.assertArgCount(args, 0, self)
  message.channel.send(`Up since ${bot.upSince.toDateString()} - ${bot.upSince.toLocaleTimeString()} GMT (${(new Date().getTime() - bot.upSince.getTime()) / 1000}s).`)
}

export const status = ({message}) => message.channel.send(Util.randomItem([
  'All systems go!',
  'Ready to roll!',
  'Standing by...',
  'Ready to make some trouble!',
  'What do you want?!',
  'Yaaawn...',
  'Here. Obviously.'
]))
