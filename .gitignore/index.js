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
  if (message.content.startsWith(prefix + "avatar")) {

message.channel.send({embed: {

    title: "Votre avatar",

    image: {

        url: message.author.avatarURL

    },

    color: 15722240

}

    })

}
});

bot.on('message', message => {
    if(message.content[0] === prefix) {
        let spliteMessage = message.content.split(' ');
        if(spliteMessage[0] === "&hello") {
            message.channel.send("world!");
            message.author.createDM().then(channel => {
                channel.send('WORLD!');
            }).catch(console.error);
        bot.channels.get('434344990508843011').send("Commande §hello utilisée par : " + message.author.username);
        }
      
        else if(spliteMessage[0] === "&help") {
            message.channel.send("Liste des commandes envoyées en privée.");
            message.author.createDM().then(channel => {
                channel.send('**|!| Bientôt !|!**');
            }).catch(console.error);
        bot.channels.get('439538605380206603').send("Commande &help utilisée par : " + message.author.username);
        }             
    }    
});

bot.on('message', message => {
    if (message.content === prefix + "ping"){
        message.channel.sendMessage("Temps de latence avec le serveur : " + `${message.createdTimestamp - Date.now()}` + "MS");  
    }
});      

bot.on('message', message => {

    if (message.content === prefix + "info") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information de Discord :")
        .addField("Nom du Discord :", message.guild.name)        
        .addField("Crée par :", message.guild.ownerID)
        .addField("Tu as rejoint le :", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord :", message.guild.memberCount)
        .addField("Émojis :", message.guild.emojis)
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0xFF0000")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "créateur") {
        var embed = new Discord.RichEmbed()
        .setDescription("Pour visiter le site du créateur :")
        .addField("Lien :", "http://xrainbow.000webhostapp.com")
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x2EFE2E")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "sm") {
        var embed = new Discord.RichEmbed()
        .setDescription("Réseaux sociaux de P&C Minecraft :")
        .addField("Instagram :", "...") 
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "socialmedia") {
        var embed = new Discord.RichEmbed()
        .setDescription("Réseaux sociaux de P&C Minecraft :")
        .addField("Instagram :", "...")
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)
    }
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "infos-🗞").send(`${member} vient d'arriver ! Souhaité lui la bienvenue :wink:`)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "infos-🗞").send(`${member} a quitté  **P&C Minecraft**. Nous sommes ravis de t'avoir accueilli :cry:`)
});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', 'Membres');
    member.addRole(role)
})
