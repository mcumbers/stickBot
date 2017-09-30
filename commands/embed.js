exports.run = async (client, msg, [...text]) => {
  const embed = new client.methods.Embed()
    .setDescription(text.join(" "))
    .setColor([114, 137, 218]);
  return msg.edit("", {embed: embed});
};

exports.conf = {
  enabled: true,
  selfbot: true,
  runIn: ["text", "dm", "group"],
  aliases: [">"],
  permLevel: 10,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: []
};

exports.help = {
  name: 'embed',
  description: 'Embeds some text.',
  usage: "<text:str> [...]",
  usageDelim: "",
  type: "commands"
};