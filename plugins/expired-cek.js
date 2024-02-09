let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (global.db.data.chats[m.chat].expired < 1) throw `Group Ini Tidak DiSet Expired !`
    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var jumlahHari = 86400000 * args[0]
    var now = new Date() * 1
    
    let caption = `*${htki} ᴇxᴘɪʀᴇᴅ ${htka}*
${msToDate(global.db.data.chats[who].expired - now)}`
conn.reply(m.chat, `${caption}\n\nAdd Expired /expired\nDelete Expired /delexpired`, m)    
}
handler.help = ['cekexpired']
handler.tags = ['group']
handler.command = /^((cek)?expired)$/i
handler.group = true
module.exports = handler
function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}


/*let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (db.data.chats[m.chat].expired < 1) throw `Group Ini Tidak DiSet Expired !`
    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var jumlahHari = 86400000 * args[0]
    var now = new Date() * 1
    
    conn.reply(m.chat, `*${htki} ᴇxᴘɪʀᴇᴅ ${htka}*
${msToDate(global.db.data.chats[who].expired - now)}`, m)
}
handler.help = ['cekexpired']
handler.tags = ['group']
handler.command = /^((cek)?expired)$/i
handler.group = true

export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Days ☀️\n" + hours + " Hours 🕐\n" + minutes + " Minute ⏰";
    // +minutes+":"+sec;
}
*/