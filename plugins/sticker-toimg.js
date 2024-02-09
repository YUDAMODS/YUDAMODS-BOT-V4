const path = require("path");
const { exec } = require("child_process")
const fs = require("fs")
let handler = async (m, { conn, usedPrefix, command }) => {

const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
if (!/webp/.test(mime)) return m.reply(`Reply sticker dengan caption *${usedPrefix + command}*`)
m.reply(md)
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = path.join(__dirname, `${pickRandom(['.png'])}`);
exec(`ffmpeg -i ${media} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
conn.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['toimg']

module.exports = handler 
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}