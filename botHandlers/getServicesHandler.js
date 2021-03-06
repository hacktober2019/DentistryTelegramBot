const {bot} = require('../createBot');
const requestPromise = require('request-promise');
const {HOST} = require('../config/config');

module.exports = async msg => {

    let resBot = ``;

    let services = await requestPromise.get(HOST + '/services');

    services = JSON.parse(services);

    services.forEach((service) => {
        resBot += `\n Послуга: ${service.service} \n Ціна: ${service.price}\n`;
    });

    await bot.sendMessage(msg.chat.id, resBot);

};