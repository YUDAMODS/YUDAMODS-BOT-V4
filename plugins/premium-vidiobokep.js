let handler = async (m, { conn, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
m.reply('_bot telah kirim ke private chat silakan untuk di cek_')
conn.sendMessage(m.sender, { video: { url: pickRandom(vbokep) }, caption: `Nih *${name}* Video Bokep nyah..` }, { quoted: m})
}
handler.help = ['vidiobokep']
handler.tags = ['premium']
handler.command = /^(vbokep|vidiobokep|bokep)$/i

handler.premium = true
handler.limit = false

handler.fail = null
handler.register = false

module.exports = handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const vbokep = [

"https://telegra.ph/file/f9f3d01fead02386e5331.mp4",
"https://telegra.ph/file/d1d7b11f5ab57b3e57d01.mp4",
"https://telegra.ph/file/11e0d15aac245accb6217.mp4",
"https://telegra.ph/file/dadd5f030d75ff9e787c8.mp4",
"https://telegra.ph/file/d18b06f324412d2cdb270.mp4",
"https://telegra.ph/file/7d3a354b69fe2e1c60d34.mp4",
"https://telegra.ph/file/1ae88269d50a627761072.mp4",
]