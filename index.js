const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "!"

/*
client.once('ready', () => {
    console.log('Ready!');
});
*/

client.on("message", function(message) {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    if(message.member.roles.find(r => r.name === 'Fresita 🍓')) {
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'eyes2')
        message.react(reactionEmoji);
    };

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "bracket") {
        message.reply('mañana juega G2 y pasao tu puta madre <:jhinzhao:779837354659676269>')
    };

    if(command === "pilar"){
       
        const weekDay = new Date().getDay();
        const monthDay = new Date().getDate();
        const hour = new Date ().getHours();

        if(weekDay === 0 || weekDay > 4 && monthDay % 2 === 0){

            message.reply('hoy no es dia pilarense... <:pilartriste:723321962432036894>');
            
        } else {

            hourmsg(hour, message);
            message.reply('hoy si es dia pilarense!! <:pilarcontenta:714780527546204180>');

        };
    };
    
});

client.login(config["BOT-TOKEN"]);
function hourmsg(hour, message) {
    if (hour > 23 && hour < 6) {
        message.reply('se acabó el dia pilarense por hoy...<:pilartriste:723321962432036894>'); 
    };
}

