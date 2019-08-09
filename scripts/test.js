module.exports = function(bot) {

  bot.respond(/test/i, function(res) {
    res.send("WTF!");
  })

};
