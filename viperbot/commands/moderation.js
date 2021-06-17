import * as Util from '../util.js'

export const purge = ({message, args, self}) => {
  Util.assertPermission(message.member, 'MANAGE_MESSAGES', self)
  Util.assertArgCount(args, 1, self)
  message.channel.bulkDelete(Util.asNumber(args[0], self) + 1)
}

export const kick = ({message, args, self, client}) => {
  Util.assertPermission(message.member, 'KICK_MEMBERS', self)
  Util.assertArgCountAtLeast(args, 2, self)
  let user = Util.asUser(client, args[0], self)
  message.guild.member(user).kick(args[1] ?? '')
  message.channel.send(`Kicked ${user}${(args[1] && ' (' + args[1] + ')') ?? ''}.`)
}