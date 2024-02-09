const { ssweb } = require('../lib/ssweb')
let handler = async (m, { conn, usedPrefix, command, args }) => {
  if (!args[0]) throw 'Linknya mana?'
  m.reply(md)
  let res = await ssweb(args[0]);
  conn.sendFile(m.chat, res.result, 'ssweb.png', '*「 Screenshot Web 」*', null, { thumbnail: Buffer.alloc(0) });
};

handler.help = ['ssweb'];
handler.tags = ['internet'];
handler.command = /^ss(web)?|scre?e?nshu?o?t$/i;
module.exports = handler
