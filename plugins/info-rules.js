let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
let teks = `➯ *Tɪᴅᴀᴋ Sᴘᴀᴍ Bᴏᴛ*
 _Kebijakan privasi atau Private without being in public_



• *Kebijakan Privasi:*
1. ${global.namebot} tidak akan merekam data riwayat chat user.
2. ${global.namebot} tidak akan menyebarkan nomor users.
3. ${global.namebot} tidak akan menyimpan media yang dikirimkan oleh users.
4. ${global.namebot} tidak akan menyalah gunakan data data users.
5. Owner ${global.namebot} berhak melihat data riwayat chat users.
6. Owner ${global.namebot} berhak melihat status users.
7. Owner ${global.namebot} dapat melihat riwayat chat, dan media yang dikirimkan users.

• Jika ada bug/eror di website kami saya mohon untuk Report nya, tanpa biaya dan aman

_Cara penggunaan ${global.namebot} Agar terhindar dari Suspand_

• *Peraturan ${global.namebot}:*
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi Owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

• *Note:*
1. Jika ada yang menjual/beli/sewa bot atas nomor ini, harap segera hubungi owner!
2. Jika ingin donasi bisa langsung aja ya social payment Dana 
3. jika ingin membeli scrip bot Whatsapp bisa langsung Hubungi ke no Whatsapp: wa.me/6283842204546
3. Ketik .sewa Jika Ingin SewaBot 

•Agar terhindar dari Suspand/Ban kalian bisa membaca juga di Peraturan kami.

•Perlu kalian tahu bahwa kami menjaga Privasi dari data-data anda!

• *Syarat Ketentuan ${global.namebot}:*

1. ${global.namebot} akan keluar dari group jika ada salah satu member melanggar peraturan.
2. ${global.namebot} dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. ${global.namebot} tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.
4. ${global.namebot} akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. ${global.namebot} bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

buat sejak: 2019
${footer}
`.trim()
conn.sendMessage(m.chat, {
text: teks,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: YUDAMODS,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}

handler.tags = ['info']
handler.command = /^(rules|rule)$/i
handler.help = ['rules']
module.exports = handler