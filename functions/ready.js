const botConfig = require("../botConfig.json");

exports.init = (client) => {
	client.config.devLogging = botConfig.devLogging;
    client.config.devLogChannel = botConfig.devLogChannel;

    if (!client.config.devLogging) return;

    const botRestart = new client.methods.Embed()
        .setAuthor(client.user.tag, client.user.avatarURL())
        .setColor("#fff200")
        .setTimestamp()
        .setFooter("SelfBot restarted")

    return client.channels.get(client.config.devLogChannel).send('', { disableEveryone: true, embed: botRestart });
}
