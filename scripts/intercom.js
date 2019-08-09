module.exports = function(bot) {
  
 /*
  * NPS
  * "I answered a NPS survey and gave you a score of"
  *
  */
  bot.hear(/I answered a NPS survey and gave you a score of/i, function(res) {
    bot.messageRoom(`#customersuccess`, `@here Psst, new NPS in #intercom : ${'\n'}${res.message.text}`);
  })
};

