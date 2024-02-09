const fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
	let res = await fetch(`https://api.waifu.pics/sfw/${command}`)
	if (!res.ok) throw await res.text()
	let json = await res.json()	
 conn.sendFile(m.chat, json.url, 'image.jpg', `Nyaww~ 🐾💗 ${command.capitalize()}`, m)
}	
handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko']
handler.limit = true
module.exports = handler
