module.exports= {
  name: 'join',
  description: 'Make bot join Voice channel',
  guildOnly: true,
  async execute(message, _args) {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play('/home/alex/Music/is_this_it.mp3');
    } else {
      message.reply('You need to join a voice channel first!');
    }
  },
}
