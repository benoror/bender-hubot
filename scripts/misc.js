module.exports = function(bot) {

  /*
   * Mirror :pedro-sola: reactions everywhere
   */
  bot.react(function(res) {
    if(res.message.type === "added" && res.message.reaction === "pedro-sola") {
      bot.adapter.client.web.reactions.add(res.message.reaction, {
        channel: res.message.item.channel, timestamp: res.message.item.ts
      });
    }
  }),
    
  /*
  * Thinking gif
  *
  */
  bot.hear(/mmmmm+/i, function(res) {
    const choices = ['https://media.tenor.com/images/9c05104503e8435917e90ad7de81b758/tenor.gif',
                      'https://cdn.discordapp.com/attachments/156224964297490433/355754035204194304/1504582967120.gif',
                      'http://i.imgur.com/E9Mp2wb.gif',
                      'https://media.giphy.com/media/CaiVJuZGvR8HK/source.gif',
                      'http://i.imgur.com/k4zOyhU.gif'];
    
    res.send(choices[Math.floor(choices.length * Math.random())]);
  })
    
  /*
  * Godinez
  *
  */
  bot.hear(/(compañeritos|juntita|saludos\ cordiales|godinez)/gmi, function(res) {
    const choices = ['http://i.espectaculos.televisa.com/2017/06/godinez.jpg',
                     'https://media.giphy.com/media/xThuW3Z1SvtUxjBHRm/giphy.gif',
                     'https://media.giphy.com/media/3o6wrfa5nQkbTRFTC8/giphy.gif',
                     'https://media.giphy.com/media/Hs93tTmXvkUxO/giphy.gif',
                     'http://i2.esmas.com/2017/06/01/927572/meme-godinez-610x600.jpg',
                     'https://media.giphy.com/media/BrB6VyTMD1qyQ/giphy.gif',
                     'http://www.elgrafico.mx/sites/default/files/styles/f5-689x388/public/field/image/20.jpg?itok=9LdDUsZQ'];
    
    res.send(choices[Math.floor(choices.length * Math.random())]);
  })
};

