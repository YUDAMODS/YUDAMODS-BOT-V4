let fetch = require('node-fetch');
let uploadImage = require('../lib/uploadImage.js');
let axios = require("axios");
const { jadianime } = require("../lib/yudamods")
let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';  
  if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadianime';  
  m.reply('Tunggu Sebentar...');  
  try {
    let media = await q.download();
    let url = await uploadImage(media);
    let hasil = await jadianime(url);

    await conn.sendFile(m.chat, hasil, 'removebg.jpg', 'HASIL JADI ANIME\n\nJangan lupa subscribe channel YUDAMODS atau\nklik link bawah ini\nhttps://youtube.com/@YUDAMODS', m);
  } catch (error) {
    console.error(error);
    m.reply(`image tidak di dukung/erorr`);
  }
};

handler.help = ['jadianime'].map(v => v + ' <reply/image>');
handler.tags = ['internet'];
handler.command = /^(jadianime)$/i;
handler.limit = true;
module.exports = handler;