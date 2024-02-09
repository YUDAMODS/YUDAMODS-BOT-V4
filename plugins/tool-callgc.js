let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Example: ${usedPrefix}${command} hallo namaku zyko`)
conn.relayMessage(m.chat,{
 scheduledCallCreationMessage: {
 callType: 1,
 scheduledTimestampMs:  Date.now(),
 title: `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${text}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`, 
}
}, {})
}
handler.help = ['callgc <teks>']
handler.tags = ['tools']
handler.command = /^callgc$/i
handler.owner = true
handler.admin = true
handler.group = true
handler.botAdmin = true

module.exports = handler;