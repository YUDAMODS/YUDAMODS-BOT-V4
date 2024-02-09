const api = require('api-dylux')
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
 if (!text) throw `🚩 *Example:* ${usedPrefix+command} https://www.xvideos.com/video23898726/first_time_teen_railed`
 try {
await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
m.reply('_bot telah kirim ke private chat_')
let res = await api.xvideosdl(text)
  if (!res) throw 'Link Tidak Valid'
  let {
  title,
  views,
  vote,
  likes,
  deslikes,
  size,
  sizeB,
  thumb,
  url_dl
  } = res
  let cap = `DOWNLOAD +18\n\nXVIDEOSDL
title: ${title}
views: ${views}
vote: ${vote}
likes: ${likes}
deslikes: ${deslikes}
size: ${size}
sizeB: ${sizeB}
thumb: ${thumb}`
conn.sendMessage(sender, { video: { url: url_dl }, caption: cap }, { quoted: m})
  } catch (error) {
    console.error(error)
    conn.reply(m.chat, "Gagal mengunduh video", m)
  }
}
handler.help = ['xvideosdl'].map(v => v + ' <url>')
handler.tags = ['premium', 'nsfw']
handler.command = /^(xvideosdl)$/i
handler.premium = true 
module.exports = handler 