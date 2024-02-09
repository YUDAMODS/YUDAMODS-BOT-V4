const axios = require('axios')
const cheerio = require('cheerio')
const { igstalk } = require("../lib/yudamods")
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args || !args[0]) throw `Gunakan format ${usedPrefix}${command} [username]
Contoh: ${usedPrefix}${command} jokowi
`.trim()
  let res = await igstalk(args[0])
  let json = JSON.parse(JSON.stringify(res))
  let iggs = `*/ Instagram Stalker \\*

Full name : ${json.fullname}
Username : ${json.username}
Post : ${json.post}
Followers : ${json.followers}
Following : ${json.following}
Link: https://instagram.com/${json.username}
Bio : ${json.bio}`
  conn.sendFile(m.chat, json.profile, 'error.jpg', iggs, m)
}
handler.help = ['igstalk <username>']
handler.tags = ['stalker']
handler.command = /^(igstalk)$/i
handler.limit = true

module.exports = handler