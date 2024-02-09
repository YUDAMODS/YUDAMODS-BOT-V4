let handler = async (m, { conn, command, text, args }) => {
    if (!text) throw 'Format salah!\n\nTambah limit: addlimit <tag orang> <jumlah limit>\nKurangi limit: removelimit <tag orang> <jumlah limit>'
    let [who, limitValue] = text.split(' ')
    if (!who) throw 'Tag orang yang akan diubah limitnya!'
    if (isNaN(limitValue)) throw 'Jumlah limit harus angka!'
    limitValue = parseInt(limitValue)
    let user = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let users = global.db.data.users
    if (!users[user]) users[user] = { limit: 0 }
    if (command === 'addlimit') {
        users[user].limit += limitValue
        conn.reply(m.chat, `Berhasil menambahkan ${limitValue} limit untuk @${user.split('@')[0]}!`, m)
    } else if (command === 'removelimit') {
        if (limitValue > users[user].limit) {
            users[user].limit = 0
            conn.reply(m.chat, `Berhasil mengurangi limit untuk @${user.split('@')[0]}. Money kini menjadi 0!`, m)
        } else {
            users[user].limit -= limitValue
            conn.reply(m.chat, `Berhasil mengurangi ${limitValue} limit untuk @${user.split('@')[0]}!`, m)
        }
    }
}

handler.help = ['addlimit', 'removelimit']
handler.tags = ['xp']
handler.command = /^(add|remove)limit$/i
handler.rowner = true
module.exports = handler
