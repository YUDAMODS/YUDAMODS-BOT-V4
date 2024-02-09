let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.menfess = conn.menfess ? conn.menfess : {}
    if (!text) throw `*Apa itu Menfess?* https://www.google.com/search?q=apa+itu+menfess\n\n*Cara penggunaan :*\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `*Cara penggunaan :*${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Anonymous|Haloo`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw 'Nomer tidak terdaftar di whatsapp.';
    if (jid == m.sender) throw 'tidak bisa mengirim pesan menfess ke diri sendiri.'
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
    	let id = + new Date
        let tek = `Hai @${data.jid.split("@")[0]}, Lu nerima pesan Menfess nih.\n\nDari: *${name}*\nPesan: \n*${pesan}*\n\nMau balas pesan ini? bisa kok.\nTinggal ketik pesannya lalu kirim aja, nanti saya sampaikan ke *${name}*.`.trim();
        let imgr = 'https://telegra.ph/file/26886f4dbd97e8eb445be.gif'
        await conn.sendFile(data.jid, imgr, 'menfess.jpg', `${tek}`, m)
        .then(() => {
            m.reply('Berhasil mengirim pesan menfess.\n\n*Note:* _Tidak ada balasan? Ya jangan salahin saya, berarti orang yang kamu kirimi pesan belum menjawab pesan kamu._')
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
}
handler.tags = ['anonymous', 'menbalas']
handler.help = ['menfess', 'menfes'].map(v => v + ' <nomor|nama pengirim|pesan>')
handler.command = /^(menfess|menfes)$/i
handler.private = true

module.exports = handler