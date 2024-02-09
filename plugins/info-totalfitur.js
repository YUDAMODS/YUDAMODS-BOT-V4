let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
await conn.sendMessage(m.chat, {
text: `Total Fitur saat ini: ${totalf}`,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})   
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler