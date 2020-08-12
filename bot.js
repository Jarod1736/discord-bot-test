const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('pong');
    }

    if (command === 'pong'){
        message.channel.send('say ping');
    }

    if(!args.length) message.channel.send('${args}');

});

client.login(process.env.BOT_TOKEN);
