const { pinterest } = require("../lib/zyko")
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw 'Input Query / Pinterest Url'
    let res = await pinterest(text);
        await conn.sendFile(m.chat, res, 'pinterest.jpg', `Result From: ${text}\n\nLink: ${res}`, m);
}

handler.help = handler.alias = ['pinterest']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i
handler.limit = true
module.exports = handler