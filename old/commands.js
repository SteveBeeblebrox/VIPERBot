const Util = require('./util.js')

exports.echo = (message, args) => message.channel.send(message.content.substr(6))
exports.help = (message) => message.reply('I\'m afraid I can\'t do that Dave')
exports.purge = (message, args, command) => {
  Util.assertPermission(message.member, 'MANAGE_MESSAGES')
  Util.assertArgCount(args, 1, command)
  message.channel.bulkDelete(Util.assertNumber(args[0], command) + 1)
}

exports.viper = (message, args, command) => {
  Util.assertArgCount(args, 0, command)
  message.channel.send('Use this like to invite VIPER to other servers: <https://discord.com/api/oauth2/authorize?client_id=854473329212653588&permissions=8&scope=bot>')
}

exports.pick = (message, args, command) => {
  message.channel.send(args[Math.floor(Math.random() * args.length)])
}