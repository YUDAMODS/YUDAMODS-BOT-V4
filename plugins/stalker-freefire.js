let axios = require('axios')
const { stalkff } = require("../lib/yudamods")
let handler = async (m, { conn, text }) => {
if (!text) throw 'Input your ID?'
let result = await stalkff(text)
m.reply(`Nama: ${result.nickname}\nID: ${text}`)
}
handler.help = ['stalkff']
handler.tags = ['stalker']
handler.command = /^(stalkff|epep|idfreefire|idff)$/i
handler.limit = true
module.exports = handler
