const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = "j/";

bot.on('ready', function () {
  bot.user.setGame('j/help').catch(console.error)
})

bot.on('message', message => {

  if(message.content === "Bonjour"){
    message.channel.send("Salut").catch(console.error);
  }

bot.login(process.env.TOKEN)
