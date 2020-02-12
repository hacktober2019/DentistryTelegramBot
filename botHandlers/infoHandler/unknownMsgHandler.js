const {infoMessages} = require("../../constant");
const {bot} = require('../../createBot');

module.exports = async msg => {

    await bot.sendMessage(
        msg.chat.id, infoMessages.anyMsg, infoMessages.menu
    );
}