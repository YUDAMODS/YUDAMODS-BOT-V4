const { snapsave } = require("@bochilteam/scraper-sosmed")
let handler = async (m, { conn, args, text, usedPrefix, command }) => { 
if (!args[0]) throw `🚩 *Example:* ${usedPrefix+command} https://www.instagram.com/reel/Co18PSBAmkh/?igshid=MmJiY2I4NDBkZg==`
m.reply(md)
try {
res = await snapsave(args[0]);
let media = await res[0].url;
const sender = m.sender.split(`@`)[0];
await conn.sendMessage(m.chat, { video: { url: media }, caption: `ini kak videonya @${sender}\n\n${footer}`, mentions: [m.sender], }, fkontak,)
m.reply('_Audio Sedang Proses_')
await delay(7000)
await conn.sendMessage(m.chat, { audio: { url: media }, mimetype: 'audio/mp4', fileName: `${media}.mp3` }, m,)
  } catch (error) {
    console.error(error)
    conn.reply(m.chat, "Gagal mengunduh video", m)
  }
}
handler.help = ['igdl2', 'instagram2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(igdl2|instagram2|ig2)$/i
handler.limit = true
module.exports = handler
const delay = time => new Promise(res => setTimeout(res, time))