const fs = require("fs")
let handler = async (m, { conn, args, text, usedPrefix, command, isROwner, isCreator }) => {
      let asu = JSON.parse(fs.readFileSync(`./lib/database/json/${command}.json`))
      let asup = asu[Math.floor(Math.random() * asu.length)]
      await conn.sendMessage(m.chat, { video: { url: asup.url }, caption: `${command}` }, { quoted: m })
}
handler.help = ['tiktokgirl', 'santuy', 'panrika', 'notnot', 'kayes']
handler.tags = ['asupan']
handler.command = ['tiktokgirl', 'santuy', 'panrika', 'notnot', 'kayes']
module.exports = handler
