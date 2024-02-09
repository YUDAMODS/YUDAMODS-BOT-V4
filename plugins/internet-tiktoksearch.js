const fetch = require('node-fetch')
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
 if (!text) throw `🚩 *Example:* ${usedPrefix+command} LisaameliaA`
    await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
    try {
    m.reply(md)
    let spas = "              "
    let res = await fetch(`https://new-api-lorenzo.cyclic.app/api/search/tiktoksearchv2?apikey=YT:LORENZOBOTMD&query=${text}`)
    let data = await res.json()
    let json = data.result
	let cap = `${spas}*「 T I K T O K S E A R C H 」*

*📛Author:* ${json.title}

${footer}`
conn.sendMessage(m.chat, { video: { url: json.no_watermark }, caption: cap }, { quoted: m})
} catch (error) {
    console.error(error)
    conn.reply(m.chat, `Gagal pencarian ${text} tidak ditemukan`, m)
  }
}
handler.help = ['tiktoksearch'].map(v => v + ' <text>')
handler.tags = ['internet']
handler.command = /^(tiktoksearch)$/i
handler.limit = true
module.exports = handler