const fs = require('fs')
const fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: '𝙳 𝙰 𝚃 𝙰 𝙱 𝙰 𝚂 𝙴', 
  jpegThumbnail: fs.readFileSync('./thumbnail.jpg'),
                            }
                          }
                        }
	let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
conn.reply(m.chat, '*Succes*', m)
conn.reply(`${nomorown}` + '@s.whatsapp.net', `*🗓️ Database:* ${date}`, null)
let sesi = await fs.readFileSync('./database.json')
return await conn.sendMessage(`${nomorown}` + '@s.whatsapp.net', { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: fdoc })
    
 }
 
 handler.help = ['backupdb']
handler.tags = ['owner']
handler.command = /^(backupdb)$/i
handler.rowner = true

module.exports = handler 