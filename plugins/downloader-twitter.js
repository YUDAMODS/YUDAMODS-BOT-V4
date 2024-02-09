const fetch = require('node-fetch')
const { twitter } = require("../lib/yudamods")
const { md } = require("../lib/function")
let handler = async (m, { usedPrefix, command, conn, args }) => {
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
  await md(m)
  let res = await twitter(args[0])
  let cap = `description: ${res.desc}`
conn.sendMessage(m.chat, { video: { url: res.video_sd }, caption: cap }, { quoted: m}) 
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^twitter$/i
handler.limit = true
handler.group = true

module.exports = handler
