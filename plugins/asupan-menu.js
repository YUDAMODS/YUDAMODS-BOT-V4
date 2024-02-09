const fs = require("fs")
let handler = async (m, { conn, args, text, usedPrefix, command, isROwner, isCreator }) => {
      let asu = JSON.parse(fs.readFileSync(`./lib/database/json/${command}.json`))
      let asup = asu[Math.floor(Math.random() * asu.length)]
      await conn.sendMessage(m.chat, { image: { url: asup }, caption: `${command}` }, { quoted: m })
}
handler.help = ['china', 'indonesia', 'japan','korea', 'malaysia', 'thailand', 'vietnam']
handler.tags = ['asupan']
handler.command = /^(china|indonesia|japan|korea|malaysia|thailand|vietnam)$/i
module.exports = handler
