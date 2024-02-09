
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let menu_nya = `
*ZYKO STORE*
*✓SEDIA PANNEL*

LIST HARGA PANEL BY YUDA STORE 

🚀 RAM 1GB CPU 30% 3K/BULAN
🚀 RAM 2GB CPU 50% 7K/BULAN
🚀 RAM 3GB CPU 75% 10K/BULAN
🚀 RAM 4GB CPU 100% 15K/BULAN
🚀 RAM 5GB CPU 130% 20K/BULAN
🚀 RAM 6GB CPU 150% 25K/BULAN
🚀 RAM 7GB CPU 175% 30K/BULAN
🚀 RAM 8GB CPU 175% 35K/BULAN

🚀 RAM,CPU,DISK UNLIMITED 30K/40 hari 

🚀 ADMIN PANEL 45K/BULAN

[ KEUNTUNGAN PANEL ]

• BISA BUAT RUN BOT NO RIBET
• WEBSITE/APK CLOSE BOT TETAP ON/JALAN
• GA BOROS KUOTA
• GA MENUHIN MEMORI
• BISA OPEN MURBUG

[ KEUNTUNGAN ADMIN PANEL ]

• BISA CREATE PANEL SENDIRI
• BISA CREATE PANEL SEPUAS NYA
• BISA JUAL PANEL KE ORANG LAIN
• BISA BALMOD KALO LU NIAT JUALAN

MINAT?PM
https://wa.me/${global.nomorown}

© ZYKO MD`
conn.sendMessage(m.chat, {
text: menu_nya,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['panel', 'listpanel']
handler.tags = ['ownerstore']
handler.command = /^(panel|listpanel)$/i;
module.exports = handler