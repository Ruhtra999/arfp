const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&?")

bot.user.setStatus('dmd');

bot.on('message', message => { 

    if(message.content === "Arfp"){
        message.reply("Oui?");
    }

});

bot.login(process.env.TOKEN);
