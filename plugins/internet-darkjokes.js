const bo = require('dhn-api')
let handler = async (m, { conn }) => {
const res = await bo.Darkjokes()
await conn.sendFile(m.chat, res, 'darkjoke.jpg', `Dark ga si adick adick`, m)
}
handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^(darkjoke)$/i
handler.limit = true

module.exports = handler