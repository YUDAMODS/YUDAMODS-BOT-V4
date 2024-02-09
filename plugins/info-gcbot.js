const fetch = require('node-fetch')
const { pickRandom } = require("../lib/function")
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let gc = pickRandom(flaaa)
let pp = `${gc} GROUP BOT WHATSAPP : YUDAMODS`
let cap = `
*𝐇𝐚𝐥𝐨 𝐁𝐚𝐧𝐡 𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐉𝐨𝐢𝐧 && 𝐁𝐚𝐜𝐚 𝐑𝐮𝐥𝐞𝐬❗*
╔═══════════════════
║ _*Group All*_ YUDAMODS
╠═══════════════════
║➸ _Group :_
║ ${sgc1}
╚════════════════════
╔════════════════════
║ *RULES GROUP BOT*
╠════════════════════
║𝐍𝐨 𝐒𝐡𝐚𝐫𝐞 18+
║𝐍𝐨 𝐬𝐡𝐚𝐫𝐞 𝐋𝐢𝐧𝐤
║𝐍𝐨 𝐒𝐡𝐚𝐫𝐞 𝐕𝐢𝐫𝐮𝐬 
║𝐍𝐨 𝐒𝐩𝐚𝐦 𝐂𝐨𝐦𝐦𝐚𝐧𝐝
║𝐃𝐢𝐥𝐚𝐫𝐚𝐧𝐠 𝐓𝐞𝐥𝐟𝐨𝐧 𝐁𝐨𝐭
║𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐁𝐞𝐫 𝐄𝐭𝐢𝐤𝐚
║𝐃𝐢𝐥𝐚𝐫𝐚𝐧𝐠 𝐇𝐢𝐧𝐚 𝐁𝐨𝐭
║𝐌𝐚𝐮 𝐒𝐞𝐰𝐚? 𝐊𝐞𝐭𝐢𝐤 .owner
╚════════════════════`
conn.sendMessage(m.chat, { image: { url: pp }, caption: cap }, { quoted: m})
}
handler.help = ['gcko']
handler.tags = ['info']
handler.command = /^gc(ko|zyko|groupzyko)?$/i

module.exports = handler
