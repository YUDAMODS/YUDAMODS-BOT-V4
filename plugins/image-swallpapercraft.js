let axios = require('axios')
let cheerio = require('cheerio')
const { swallpapercraft } = require("../lib/zyko")
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} motor`
    let res = await swallpapercraft(text)
    const img = res[Math.floor(Math.random() * res.length)]
    conn.sendFile(m.chat, img, 'wallpaper.jpg', `Result from *${text}*`, m)
}
handler.help = ['swallpapercraft'].map(v => v + ' <query>')
handler.tags = ['image']
handler.command = /^(swallpapercraft)$/i
handler.limit = true
module.exports = handler

