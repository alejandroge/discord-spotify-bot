module.exports = {
  name: 'greet',
  description: 'Greets mentioned users',
  args: true,
  execute(message, _args) {
    message.channel.send(message.mentions.users.map(u => `Welcome to this server ${u.username}`));
  },
};
