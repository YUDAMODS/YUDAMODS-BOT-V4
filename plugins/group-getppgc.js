let handler = async (m, { conn, participants, groupMetadata }) => {
	try {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    let cap = `*「 SUKSES AMBIL PP GROUP」*\npp group sukses di ambil dari group\nnama : ${groupMetadata.subject}`
    conn.sendMessage(m.chat, { image: { url: pp }, caption: cap }, { quoted: m})
	} catch (e) {
		console.log(e)
		m.reply(`Gagal mengambil pp grup.`)
	}
}
handler.help = ['getppgc']
handler.tags = ['group']
handler.command = /^(getpp(gc|gro?up))$/i

handler.group = true

module.exports = handler