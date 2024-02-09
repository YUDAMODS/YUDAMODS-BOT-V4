const fetch = require('node-fetch')
const { wait } = require("../lib/function")
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
  if (!args[0]) throw `🚩 *Example:* ${usedPrefix+command} https://vt.tiktok.com/ZSNayJdDb/`
  await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
let res = await fetch(`https://new-api-lorenzo.cyclic.app/api/download/tiktok?apikey=YT:LORENZOBOTMD&url=${text}`)
await wait(m)
let f = await res.json()
let json = f.result
conn.sendMessage(m.chat, { audio: { url: json.audio }, mimetype: 'audio/mp4', fileName: `${json.nickname}.mp3` })
}
handler.help = ['tiktokmp3'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tikaudio|tiktokmp3|ttdlmp3|ttmp3|tiktokdlmp3|gettt)$/i
handler.limit = true
module.exports = handler