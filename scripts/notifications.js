module.exports = function(bot) {

  /*
   * Nimbo-x app Slack Notifications
   */
  bot.router.post('/bender/:channel', function(request, response) {
    try {
      const channel = request.params.channel;
      bot.messageRoom(`#${channel}`, request.body.message);

      return response.status(200).send('OK');
    } catch(e) {
      return response.status(400).send(e.toString());
    }

  });
};
