require('dotenv').config();

const Discord = require('discord.js');
const Memer = require('random-jokes-api');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }); 
const prefix = "lol ";

client.on('ready', () => {
    console.log(`${client.user.username} has just logged in.`)
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefix)) {
        return;
    }
    const cmdargs = msg.content
        .trim()
        .substring(prefix.length)
        .split(/\s+/); 
    args = cmdargs.join(" ").toLowerCase();
    const command = args;
    console.log(args);   

    if (cmdargs[0] === "delete") {
        let num = 2;
        if (cmdargs[1]) {
            num = Number(cmdargs[1]) + 1;
        }
        msg.channel.bulkDelete(num);
        msg.channel.send(`LoLboi deleted ${num - 1} messages for you`)
    }
    




















    if (command === "hello") {
        msg.reply("heyy");
    }
})



















client.login(process.env.LoLboi_token);
