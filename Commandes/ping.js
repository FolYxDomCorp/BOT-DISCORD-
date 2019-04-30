const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('Ping')
        .then((m) => m.edit(`Ton ping est de : **${Date.now() - début}**ms`));
};

module.exports.help = {
    name: 'ping'
};
