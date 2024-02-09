const fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/megumin')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendFile(m.chat, json.url, 'image.jpg', 'Istrinya Kartun', m)
}

handler.help = ['megumin']
handler.tags = ['anime']
handler.command = /^(megumin)$/i
handler.limit = true
module.exports = handler
