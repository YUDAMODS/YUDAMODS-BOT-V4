
const { Tiktokdl } = require("../lib/yudamods")
const { wait } = require("../lib/function")
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
 if (!text) throw `🚩 *Example:* ${usedPrefix+command} https://vt.tiktok.com/ZSNCXnAUj/`
    await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
    await wait(m)
    let ler = await Tiktokdl(text)
    let cer = ler.result
	let cap = `
              *「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────
*📛 Nickname:* ${cer.author.nickname}
*📒 Description:* ${cer.desc}
_©YT YUDAMODS 🍭_`
conn.sendMessage(m.chat, { video: { url: cer.download.nowm }, caption: cap }, { quoted: m})
};
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttdl|tiktok|tiktokdl|tiktokdownload|tt|tiktokvid|ttvid)$/i
handler.limit = true
module.exports = handler


