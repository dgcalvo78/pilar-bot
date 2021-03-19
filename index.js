const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "!"


client.once('ready', () => {
   client.user.setPresence({
       status:'online',
       activity: {
        name:' a Pilar',
        type: 'WATCHING'
      } 
   });
});


client.on("message", function(message) {

    if (message.author.id === '264477975628480514') message.react('819963117534314506');//reacciona a pilar con :eyes2:

    if (message.author.id === '577134098066440234' && message.channel.id !== '578984251849048064') {
        message.channel.send('amigo te equivocaste de canal, andate a <#578984251849048064>') //mensajes de musica en pilares te mandan a musica
    }; 

    if (message.author.bot || !message.content.startsWith(prefix) ) return;     

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
//comandos
    if (command === "bracket") {
        message.reply('mañana juega G2 y pasao tu puta madre <:jhinzhao:779837354659676269>');
    };

    if (command === "ayuda") {
        message.channel.send('r');
    };

    if(command === "pilar"){
       
        const weekDay = new Date().getDay();
        const monthDay = new Date().getDate();
        const hour = new Date ().getHours();

        if(weekDay === 0 || weekDay > 4 && monthDay % 2 === 0){

            message.reply('hoy no es dia pilarense... <:pilartriste:723321962432036894>');
            
        }

        if (hour >= 22 && hour < 7) {

            message.reply('se acabó el dia pilarense por hoy...<:pilartriste:723321962432036894>'); 

        };

        message.reply('hoy si es dia pilarense!! <:pilarcontenta:714780527546204180>');
        
    };
    
});

client.login(config["BOT-TOKEN"]);

