const JavaScriptObfuscator = require('javascript-obfuscator')

let handler = async (m, { conn, text }) => {
if (!text) throw `Masukin Code-nya`
let res = JavaScriptObfuscator.obfuscate(text)
conn.reply(m.chat, res.getObfuscatedCode(), m)
}
handler.help = ['enc']
handler.tags = ['tools']
handler.command = /^enc(rypt)?$/i

module.exports = handler