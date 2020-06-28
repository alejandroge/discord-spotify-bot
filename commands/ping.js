module.exports = {
  name: 'ping',
  cooldown: 5,
  description: 'Ping!',
  execute(message, _args) {
    message.channel.send('Pong bitch!');
  },
};
