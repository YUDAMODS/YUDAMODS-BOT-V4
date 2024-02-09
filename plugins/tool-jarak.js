const { jarak } = require("../lib/yudamods")
let handler = async (m, { 
conn,
 text,
 usedPrefix,
 command
 }) => {
	var [from, to] = text.split`|`
	if (!(from && to)) throw `🚩 *Example:* ${usedPrefix+command} Sukabumi|bandung`
	var data = await jarak(from, to)
	if (data.img) return conn.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
	else m.reply(data.desc)
}
handler.help = ['jarak']
handler.tags = ['tools', 'internet']
handler.command = ['jarak']

module.exports = handler
