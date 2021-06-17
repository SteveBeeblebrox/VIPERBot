const Discord = require('discord.js');
const Commands = require('./commands.js');
const {breakCommand} = require('./util.js');
const config = require('./config.json')

config.prefix = config.prefix || '$'

const client = new Discord.Client();

client.on('ready', function() {
  client.user.setActivity(`${client.guilds.cache.size} Servers`, { type: 'WATCHING' }).catch(console.error);
})

client.on('guildCreate', guild => {
    guild.roles.create({
        data: {
            name: "VIPER Theme",
            color: "#2ecc71"
        }
    }).then(role => guild.member(client.user).roles.add(role)).catch(console.error)
});

client.on('message', function(message) {
  if(message.author.bot || !message.content.startsWith(config.prefix)) return;

  let contents = breakCommand(message.content.substr(1))

  try {
    if(contents[0] in Commands) Commands[contents[0]](message, contents.splice(1), contents[0])
  } catch (error) {
    message.channel.send('Error: ' + error)
  }

});

client.login(process.env['BOT_TOKEN']);