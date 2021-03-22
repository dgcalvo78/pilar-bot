const isEven = require("../utils/isEven");
const isWeekend = require("../utils/isWeekend");

module.exports = {
	name: 'pilar',
	description: 'es hoy dia pilarense? ',
	execute(message, args) {
		const weekDay = new Date().getDay();
        const monthDay = new Date().getDate();
        const hour = new Date ().getHours();

        if(isWeekend(weekDay) && isEven(monthDay) || weekDay === 1){

            message.reply('hoy no es dia pilarense... <:pilartriste:723321962432036894>');
            return;
            
        }

        if (hour >= 22 && hour < 7) {

            message.reply('se acabó el dia pilarense por hoy...<:pilartriste:723321962432036894>'); 
            return;

        };

        message.reply('hoy si es dia pilarense!! <:pilarcontenta:714780527546204180>');
        return;
	},
};