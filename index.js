const Discord = require("discord.js");
const fs = require("fs");
const TOKEN = process.env.BOT_TOKEN


const client = new Discord.Client();
client.commands = new Discord.Collection();
const musicchannel = client.channels.cache.get('578984251849048064')

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

    if (message.author.id === '577134098066440234' && message.channel !== musicchannel) {
        message.channel.send('manín te equivocaste de canal, andate a <#578984251849048064>'); //mensajes de musica en pilares te mandan a musica (no funca)
    }; 

    if (message.author.bot || !message.content.startsWith(prefix) ) return;     

    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    //ejecutar comandos
    if (!client.commands.has(commandName)) {
        message.reply('manín te repasaste de listo');
        return;
    }
    
    const command = client.commands.get(commandName);

    try {
	    command.execute(message,args)

    } catch (error) {
	    console.error(error);
	    message.reply('ahaha menudo error...');
    }

    
});

client.login(TOKEN);

