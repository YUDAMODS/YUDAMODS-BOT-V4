let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, '🚩 Sorry your format is wrong\n\nExample:\n.menfess 62××××|hello dear', m)
    if (!pesan) return conn.reply(m.chat, '🚩 Sorry Your Format Is Wrong\n\nExample:\n.menfess 62××××|hello dear', m)
    if (text > 500) return conn.reply(m.chat, '🚩 Long Text!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `Hi Saya Bot Ada Yang Kirim Pesan Ke Kamu
Seseorang Temanmu
(Pengirim Rahasia)
⬡──⬡─────────⬡──⬡
📫Pengirim : Someone

💌 Pesan : ${pesan}
⬡──⬡─────────⬡──⬡
Maaf Anda Belum Bisa Membalas ke Pengirim

------------------------------------------

▮PENGIRIM RAHASIA 」 
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: .menfess nomor|pesan untuknya
Contoh: .menfess 628xxxxxxxxxx|hai owner`

    conn.reply(korban + '@s.whatsapp.net', spam1)

    let logs = `Sukses Mengirim Pesan
👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}
⬡──⬡─────────⬡──⬡
💌 Isi Pesan : ${pesan}
⬡──⬡─────────⬡──⬡`

    await conn.reply(m.chat, logs, m, { mentions: conn.parseMention(logs) })
}
handler.help = ['menfess2 nomor|pesan']
handler.tags = ['anonymous', 'menbalas']

handler.command = /^(menfess2|confess2|menfes2|confes2)$/i

handler.limit = true
handler.private = true
module.exports = handler