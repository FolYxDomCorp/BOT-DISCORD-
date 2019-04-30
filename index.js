const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });

});

client.on('message', function (message){
    if (message.content === '!aide')
    message.reply(`                 :tulip: **SolariaHeberg** :rose: 
    Tu viens d'entrée la commande ! aide ce qui signifie que tu as besoin de moi !
    
    **>>**Voilà quelque question que tu peux te possé !:
    
    **>>**Les Teamspeak sont des anciennes versions ?? 
    **Réponse**: Oui se sont de ancinnes versions !
    
    **>>**Combien de temps dure les serveurs Ts et web ?
    **Réponse**:Il sont tous à **vie** et **gratuit** :wink:
    
    Si ta question n'apparaît pas dans celle proposé contacte un membre du staff 
    
    **Cordialment Responsable/Développeur Ŧσ𝓁Yx™**
    
    *S'il n'y a pas de membres du staff de connecté veut créer un ticket support*`)
})

client.on('message', function (message){
    if (message.content === '!Folyx')
    message.reply(`**FolYx, est un super dévloppeur !:wink:**`)
})
client.on('message', function (message){
    if (message.content === '!Funox')
    message.reply(`** Funox, est un super Gérant !:wink:**`)
})
client.on('message', function (message){
    if (message.content === '!site')
    message.reply(`**Voici notre site web:**http://solaria-heberg.fr/`)

})

client.login('NTcwODUwMjMxNTg0MDMwNzIw.XML8Zg.niNeif-nONIyExELrnZDegJJMcA');