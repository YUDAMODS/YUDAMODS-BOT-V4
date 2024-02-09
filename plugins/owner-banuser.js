let handler = async (m, { conn, args }) => { 
    if (!args || !args[0]) throw 'Siapa yang mau di banned om?'
    let mention = m.mentionedJid[0] || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) throw 'Tag salah satu lah'
    if (!(mention in global.db.data.users)) throw 'User tidak terdaftar dalam DATABASE!!'
    let user = global.db.data.users[mention]
    if (user.banned) throw 'User telah terbanned!!'
    let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || '' 
    user.banned = true 
    user.BannedReason = txt 
    m.reply('Berhasil Banned USER!')
    m.reply('*Kamu dibanned oleh OWNER Atau MODERATOR!!*\n *HUBUNGI* \n' + global.owner.map((v, i) => '*Owner ' + (i + 1) + ':* wa.me/' + v).join('\n') + '\n\n' + global.mods.map((v, i) => '*Moderator ' + (i + 1) + ':* wa.me/' + v).join('\n'), mention)
}

handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban(user)?$/i
handler.owner = true

module.exports = handler
/*
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Siapa yg mau dibanned?🗿'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, 'sᴜᴄᴄᴇs!', m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban(user)?$/i
handler.rowner = true

export default handler
*/