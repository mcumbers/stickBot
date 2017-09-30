exports.run = async (client, msg, guild) => {
    if (msg.content !== "disapproval") return;

    return msg.edit("ಠ_ಠ");
};

exports.conf = {
    enabled: true,
    spamProtection: false,
};