module.exports = {
  name: 'server',
  description: 'Displays Guild name and Members count',
  execute(message, _args) {
    const server = message.guild;
    if(!server) return message.reply('Cannot tell, we are not chatting in a server');

    message.channel.send(`Server name: ${server.name}\nTotal members: ${server.memberCount}`);
  },
};
