const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix, token } = require('./config.json');

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  const channel = message.channel;

  if (command === 'ping') {
    channel.send('Pong bitch!');
  }
  else if (command === 'server') {
    const server = message.guild;
    if(!server) return channel.send('Cannot tell, we are not chatting in a server');

    channel.send(`Server name: ${server.name}\nTotal members: ${server.memberCount}`);
  }
  else if (command === 'user-info') {
    const author = message.author;
    channel.send(`Your username: ${author.username}\nYour ID: ${author.id}`);
  }
  else if (command === 'args-info') {
    if (!args.length) {
      return channel.send(`You didn't provide any arguments, ${message.author}`);
    }

    channel.send(`Command name ${command}\nArguments: ${args}`);
  }
  else if (command === 'greet') {
    if (!message.mentions.users.size) {
      return message.reply('You need to tag a user in order to greet them! You silly');
    }
    channel.send(message.mentions.users.map(u => `Welcome to this server ${u.username}`));
  }
  else if (command === 'avatar') {
    if (!message.mentions.users.size) {
      const author = message.author;
      return channel
        .send(`Your avatar my king: <${author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
    }

    const avatarList = message.mentions.users.map(u => {
      return `${u.username}'s avatar: <${u.displayAvatarURL({ format: 'png', dynamic: true })}>`;
    });
    channel.send(avatarList);
  }
  else if (command === 'prune') {
    const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
      return message.reply('Soz, that doesn\'t seem to be a valid number.');
    }
    else if (amount <= 1 || amount > 100) {
      return message.reply('Soz, you need to input a number between 1 and 99.');
    }

    channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
      message.channel.send('Soz, there was an error trying to prune message in this channel!');
    });
  }
});

client.login(token);
