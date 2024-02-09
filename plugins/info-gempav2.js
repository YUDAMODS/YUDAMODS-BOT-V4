const fs = require('fs')
const fetch = require('node-fetch')
const { Gempa } = require("../lib/yudamods")
let handler = async (m, { conn, text }) => {
m.reply('Sedang Mendeteksi Getaran....')
let json = await Gempa()
//let json = res.hasil
let deteksi = `🚨 **Wᴀsᴘᴀᴅᴀ ɢᴇᴍᴘᴀ ᴛᴇʀᴅᴇᴛᴇᴋsɪ!!** 🚨\n\n
⏰ Waktu: ${json.Waktu}
🌐 Lintang: ${json.Lintang}
🌐 Bujur: ${json.Bujur}
📏 Magnitudo: ${json.Magnitudo}
🌊 Kedalaman: ${json.Kedalaman}
📍 Wilayah: ${json.Wilayah}
`
let map = json.Map
conn.sendMessage(m.chat, { image: { url: map }, caption: deteksi }, { quoted: m})
}
handler.help = ['infogempav2']
handler.tags = ['info']
 handler.command = /^(infogempav2|gempav2)$/i
 handler.limit = true
 module.exports = handler 
