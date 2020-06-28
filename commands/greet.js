module.exports = {
  name: 'greet',
  description: 'Greets mentioned users',
  execute(message, _args) {
    if (!message.mentions.users.size) {
      return message.reply('You need to tag a user in order to greet them! You silly');
    }
    message.channel.send(message.mentions.users.map(u => `Welcome to this server ${u.username}`));
  },
};
