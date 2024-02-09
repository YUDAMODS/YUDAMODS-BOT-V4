const axios = require('axios')
const { Telesticker } = require("../lib/yudamods")
var handler = async (m, { conn, args }) => {
	if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let res = await Telesticker(args[0])
		await m.reply(`Sending ${res.length} stickers...`)
		if (m.isGroup && res.length > 30) {
			await m.reply('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < res.length; i++) {
				conn.sendMessage(m.sender, { sticker: { url: res[i].url }})
			}
		} else {
			for (let i = 0; i < res.length; i++) {
				conn.sendMessage(m.chat, { sticker: { url: res[i].url }})
			}
		}
	} else throw 'Input Query / Telesticker Url'
}
handler.help = ['telesticker']
handler.tags = ['downloader']
handler.command = /^(telestic?ker|stic?kertele)$/i
handler.limit = true
module.exports = handler
