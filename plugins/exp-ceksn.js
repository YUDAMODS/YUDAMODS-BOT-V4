const { MessageType } = require('@adiwajshing/baileys')
const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
   let __waktutionskh = (new Date - global.db.data.users[m.sender].snlast)
   let _waktutionskh = (+ 60000- __waktutionskh)
   let waktutionskh = clockString(_waktutionskh)
   if (new Date - global.db.data.users[m.sender].snlast > + 60000) {
   	global.db.data.users[m.sender].snlast = new Date * 1
       global.db.data.users[m.sender].limit -= 5
  let sn = createHash('md5').update(m.sender).digest('hex')
m.reply(`
${sn}`
        .trim())
    } else m.reply(`Mohon tunggu ${waktutionskh}`)
}

handler.help = ['ceksn']
handler.tags = ['xp']
handler.command = /^(ceksn)$/i
handler.register = true
handler.limit = false
module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}