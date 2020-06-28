module.exports = {
  name: 'prune',
  description: 'Bulk deletes messages in a channel',
  execute(message, args) {
    if (!message.channel) return message.reply('soz this command works only in channels');

    const amount = parseInt(args[0]) + 1;
    if (isNaN(amount)) { return message.reply('Soz, that doesn\'t seem to be a valid number.'); }
    else if (amount <= 1 || amount > 100) {
      return message.reply('Soz, you need to input a number between 1 and 99.');
    }

    message.channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
      message.channel.send('soz there was an error trying to prune message in this channel!');
    });
  },
};
