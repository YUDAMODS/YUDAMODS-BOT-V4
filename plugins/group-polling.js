let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
if (!text.split('|')[1]) throw 'Gunakan Format\n' + usedPrefix + command + ' halo |ya|gak'

let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
}
let cap = `*Polling Request By* ${name}\n*Pesan:* ${text.split('|')[0]}`
return conn.sendMessage(m.chat, {
  poll: { name: cap,
    selectableCount: 1,
    values: a,
  }
})
}  
 
handler.help = ['polling'].map(v => v + ' <pesan|teks1|teks2>')
handler.tags = ['group'] 
handler.command = ['poll', 'polling'] 
handler.group = true
handler.admin = true
handler.owner = true
module.exports = handler
