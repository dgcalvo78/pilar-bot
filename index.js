const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const prefix = "!";

//estado del bot en discord
client.once('ready', () => {
   client.user.setPresence({
       status:'online',
       activity: {
        name:' a Pilar',
        type: 'WATCHING'
      } 
   });
});

//evento mensaje 
client.on("message", function(message) {

    //if (message.author.id === '264477975628480514') message.react('819963117534314506');//reacciona a pilar con :eyes2:

    if (message.author.id === '577134098066440234' && message.channel.id !== '578984251849048064') {
        message.channel.send('amigo te equivocaste de canal, andate a <#578984251849048064>'); //mensajes de musica en pilares te mandan a musica (no funca)
    }; 

    if (message.author.bot || !message.content.startsWith(prefix) ) return;     

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    
    //ejecutar comandos
    if (!client.commands.has(command)) return;

    try {
	    client.commands.get(command).execute(message, args);

    } catch (error) {
	    console.error(error);
	    message.reply('manín te repasaste de listo');
    }

    
});

client.login(config["BOT-TOKEN"]);

