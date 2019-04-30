const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    //!tempmute @user 1s/m/h/d

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Je ne trouve pas cet utilisateur !");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Je ne peut pas mute cet utilisateur !");
    let muterole = message.guild.roles.find(`name`, "muted");
    
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    
    let mutetime = args[1];
    if (!mutetime) return message.reply("Vous n'avez pas spécifiez de temps !");

    await (tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> à bien été mute pour ${ms(ms(mutetime))}`);

    setTimeout(function () {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}>à bien été unmute après le délai défini ;)`);
    }, ms(mutetime));


    
}

module.exports.help = {
    name: "tempmute"
}