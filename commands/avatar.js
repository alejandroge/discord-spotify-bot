module.exports = {
  name: 'avatar',
  description: 'Gets links for mentioned users\' avatars',
  execute(message, _args) {
    const channel = message.channel;

    if (!message.mentions.users.size) {
      const author = message.author;
      return channel
        .send(`Your avatar my king: <${author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
    }

    const avatarList = message.mentions.users.map(u => {
      return `${u.username}'s avatar: <${u.displayAvatarURL({ format: 'png', dynamic: true })}>`;
    });
    channel.send(avatarList);
  },
};
