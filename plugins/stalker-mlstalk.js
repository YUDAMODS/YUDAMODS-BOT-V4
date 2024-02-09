const axios = require('axios');
const { mlstalk } = require("../lib/yudamods")
let handler = async (m, { conn, args, usedPrefix, command }) => {
 let response = args.join(' ').split('|')
 if (!args[0]) throw `Masukkan ID dan ZoneID!\nContoh: ${usedPrefix + command} 1827122x|1928x`
 let result = await mlstalk(response[0], response[1])
 let hasil = `${htki} ML Stalker ${htka}\n\nUsername: ${result.userName}\nID: ${response[0]}\nZoneID: ${response[1]}`
 m.reply(hasil)
}

handler.help = ['mlstalk']
handler.tags = ['stalker']
handler.command = /^(mlstalk)$/i
handler.limit = true

module.exports = handler

