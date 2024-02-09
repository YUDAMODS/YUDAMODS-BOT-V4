
const { mediafiredl } = require('@bochilteam/scraper')
const { lookup } = require('mime-types')

let handler = async (m, { conn, args }) => {
	if (!args[0]) throw 'Input URL' 
	if (!/https?:\/\/(www\.)?mediafire\.com/.test(args[0])) throw 'Invalid URL' 
	let res = await mediafiredl(args[0])
	let mimetype = await lookup(res.url)
	delete res.url2
	    let caption = `
*💌 Name:* ${res.filename}
*📊 Size:* ${res.filesizeH}
*🗂️ Extension:* ${res.ext}
*📨 Uploaded:* ${res.aploud}
`.trim()
    m.reply(caption)
	conn.sendMessage(m.chat, { document: { url: res.url }, fileName: res.filename, mimetype }, { quoted: m })
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i
handler.limit = true
module.exports = handler
