exports.run = async (client, msg, guild) => {
    if (msg.content !== "lennyface") return;

    return msg.edit("( ͡° ͜ʖ ͡°)");
};

exports.conf = {
    enabled: true,
    spamProtection: false,
};