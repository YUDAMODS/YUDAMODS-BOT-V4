let handler = async (m, { conn }) => {
	if (m.quoted?.chat != 'status@broadcast') throw `replay Pesan Status\natau Command status dengan text .downloadsw`
	let buffer = await m.quoted.download()
	await conn.sendFile(m.chat, buffer, '', m.quoted.text || '', null, false, { quoted: m }).catch(_ => m.reply(m.quoted.text || ''))
}

handler.help = ['downloadsw'].map(v => v + ' <reply/sw>')
handler.tags = ['tools']
handler.command = /^((sw|status)(dl|download)|(dl|download)(sw|status))$/i
module.exports = handler