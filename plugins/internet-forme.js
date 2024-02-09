let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, text, usedPrefix }) => {
setTimeout(() => {
m.reply(`Nah ini untuk kamu.. 🥰\nKlik link iya..
For you ♡
ZOONK KAK HEHEH
`)
}, 15000)
setTimeout(() => {
conn.reply(m.chat, 'Ciee.. nungguin nih hehe', m)
}, 10000)
setTimeout(() => {
conn.reply(m.chat, 'Mau liat nggak kamu? 😆', m)
}, 5000)
setTimeout(() => {
conn.reply(m.chat, 'Aku punya kejutan spesial loh untuk mu.. 😅', m)
}, 0)
}
handler.help = ['forme']
handler.tag = ['internet']
handler.command = /^(forme)$/i

module.exports = handler