const komada = require("komada");

const botConfig = require("./botConfig.json");

const stickBot = new komada.Client({
	//Komada config
	ownerID: botConfig.ownerID,
	prefix: botConfig.prefix,
	cmdEditing: true,
	cmdLogging: true,
	clientOptions: {
		fetchAllMembers: true
	}
});

stickBot.login(botConfig.botToken);