import * as Util from '../util.js'

export const purge = ({message, args, self}) => {
  Util.assertPermission(message.member, 'MANAGE_MESSAGES', self)
  Util.assertArgCount(args, 1, self)
  message.channel.bulkDelete(Util.asNumber(args[0], self) + 1)
}

export const prune = Util.aliasFor('purge')

export const kick = ({message, args, self, client}) => {
  Util.assertPermission(message.member, 'KICK_MEMBERS', self)
  Util.assertArgCount(args, 2, self)
  let user = Util.asUser(client, args[0], self)
  message.guild.member(user).kick(args[1] ?? '')
  message.channel.send(`Kicked ${user}${(args[1] && ' (' + args[1] + ')') ?? ''}.`)
}

export const ban = ({message, args, self, client}) => {
  Util.assertPermission(message.member, 'BAN_MEMBERS', self)
  Util.assertArgCountBetween(args, 2, 3, self)
  let daysToPurge = 0;
  if(args.length === 3)
    daysToPurge = Util.clamp(Util.asNumber(args[2]), 0, 7)
  let user = Util.asUser(client, args[0], self)
  message.guild.member(user).ban({days: daysToPurge, reason: args[1] ?? ''})
  message.channel.send(`Banned ${user}${args.length === 3 && ` and removed ${daysToPurge} days of their messages`|| ''}${(args[1] && ' (' + args[1] + ')') ?? ''}.`)
}

export const remove = Util.aliasFor('ban')