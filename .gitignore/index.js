const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = (";");

bot.on('ready', function() {
  bot.user.setGame(";help | Dev By NeYziX");
  console.log("le bot a démarré"); 
  bot.channels.get('437294879853248532').send("**=======================**");
  bot.channels.get('437294879853248532').send("| LE BOT VIENT DE SE LANCER |");
  bot.channels.get('437294879853248532').send("**=======================**");
});

bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {
    if(message.content[0] === prefix) {
        let spliteMessage = message.content.split(' ');     
        if(spliteMessage[0] === ";spam") {
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
            message.channel.send("@everyone");
        }             
    }    
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member}, passe un bon moment sur Seima-Network :wink:`)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member} a quitté Seima-Network.`)
});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', 'Joueurs');
    member.addRole(role)
})
