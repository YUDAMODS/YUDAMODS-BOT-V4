let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Masukan text order nya contoh sewa botz 1 bulan`
    if (text.length < 1 ) throw `order terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `order terlalu panjang, maksimal 1000 karakter!`
    let teks = `*${htki} ${command.toUpperCase()} ${htka}*\n📮 : ${text}\n*- @${m.sender.split`@`[0]}*`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply('☑️ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')
}
handler.command = /^(order)$/i
module.exports = handler