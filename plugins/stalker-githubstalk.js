const axios = require ("axios")
const fetch = require("node-fetch")
const { MessageType } = require('@adiwajshing/baileys')
const { getBuffer } = require("../lib/yudamods")
let handler = async(m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, 'Harap Masukan Username\n\ncontoh: .githubstalk yudamodsMD', m)

  await m.reply('Searching...')
    let anu = await fetch(`https://api.github.com/users/${text}`).then(a => a.json())
    let thumb = await getBuffer(anu.avatar_url)
    let hasil = `*── 「 GITHUB STALK♨️ 」 ──*
➸ *Bio*: ${anu.bio}
➸ *Perusahaan*: ${anu.company}
➸ *Repo Publik:* ${anu.public_repos}
➸ *Gists Publik:* ${anu.public_gists}
➸ *Follower:* ${anu.followers}
➸ *Following:* ${anu.following}
➸ *Lokasi:* ${anu.location}
➸ *Link:* ${anu.html_url}
`
    await conn.sendMessage(m.chat, { image: thumb, caption: hasil, quoted: m })
}
handler.help = ['githubstalk']
handler.tags = ['stalker']
handler.command = /^(ghstalk|githubstalk)$/i
handler.limit = true

module.exports = handler

