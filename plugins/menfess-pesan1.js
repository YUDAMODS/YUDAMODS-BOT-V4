const fetch = require('node-fetch')
let handler = async(m, {
	conn, text, usedPrefix, command, args
}) => {
    if (!args || !args[0]) return conn.reply(m.chat, `🚩 Please enter the message\nExample of Use: ${usedPrefix + command} ${nomorown} pesan untuknya`, fakes, fakeyt)
	let ngen = ['|']
	if (args[0].includes(ngen)) throw 'Replace Symbol | So spaces'
	if (args[0].length > 14) throw 'Extension Number'
	if (args[0].length < 7) throw 'Abbreviation Number'
	if (args[0].startsWith('0')) throw 'Use format 62'
	if (!args[0]) throw 'Masukkan Teks'
	
    let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
	let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	let tujuan = `👋 Saya *${conn.user.name}*, Pesan Untuk Kamu
👥 Dari : *PENGIRIM RAHASIA*
${htki} 💌 Pesan ${htka}
${htjava} ${txt}


${htki} PESAN RAHASIA ${htka}
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: ${usedPrefix + command} ${nomorown} pesan untuknya
Contoh: ${usedPrefix + command} ${nomorown} hai`
	if (!m.quoted) {
		await conn.reply(mention, tujuan)
	} else {
		await conn.reply(mention, tujuan)
		let media = q ? await m.getQuotedObj() : false || m
		await conn.copyNForward(mention, media, false).catch(_ => _)
	}
	let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
👥 Dari : @${m.sender.replace(/@.+/, '')}
👥 Untuk : @${mention.replace(/@.+/, '')}
${htki} 💌 Pesan ${htka}
${htjava} ${txt}
`
	await conn.reply(m.chat, suks, m, { mentions: conn.parseMention(suks) })
}
handler.help = ['menfess1 <628XXXXXXXXXX> <pesan>']
handler.tags = ['anonymous', 'menbalas']
handler.command = /^(menfess1|confess1|menfes1|confes1)$/i
handler.limit = true
handler.private = true
module.exports = handler
