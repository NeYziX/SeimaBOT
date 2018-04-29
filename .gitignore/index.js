const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&");

bot.on('ready', function() {
  bot.user.setGame("&help | Dev By NeYziX");
  console.log("le bot a démarré"); 
  bot.channels.get('439538605380206603').send("**=======================**");
  bot.channels.get('439538605380206603').send("| LE BOT VIENT DE SE LANCER |");
  bot.channels.get('439538605380206603').send("**=======================**");
});

bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.length).split(/ +/);
    command = args.shift().toLoworCase();
  
    if (command === "kick") {
        let modRole = message.guild.roles.find("name", "Ban");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("Erreur : Permission insuffisante !").catch(console.error);
        }
        if(message.mentions.users.size === 0) {
            return message.reply("merci de mentionner l'utilisateur à expulser.").catch(console.error);
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        id(!kickMember) {
            return message.reply("Cet utilisateur est introuvable ou impossible à expulser.")
        }
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("Je n'ai pas la permissions KICK_MEMBERS pour faire ceci.").catch(console.error);
        }
        kickMember.kick().then(member => {
            message.reply(`${member.user.username} a été expulsé avec succès.`).catch(console.error);
            message.guild.channels.find("name", "général-🎮").send(`**${member.user.username}** a été expulsé du discord par **${message.author.username}**`)
        }).catch(console.error)
        
    }
  
    if (command === "ban") {
        let modRole = message.guild.roles.find("name", "Ban");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("Erreur !").catch(console.error);
        }
        const member = message.mentions.members.first();
        if (!member) return message.reply("Merci de mentionner l'utilisateur à bannir.");
        member.ban().then(member => {
            message.reply(`**${member.user.username}** a été banni avec succès.`).catch(console.error);
            message.guild.channels.find("name", "général-🎮").send(`**${member.user.username}** a été banni du discord par **${message.author.username}**`)
        }).catch(console.error)
}});                             
