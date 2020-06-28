module.exports = {
  name: 'user-info',
  description: 'Displays username and id',
  execute(message, _args) {
    const author = message.author;
    message.channel.send(`Your username: ${author.username}\nYour ID: ${author.id}`);
  },
};
