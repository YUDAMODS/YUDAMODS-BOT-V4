const fetch = require('node-fetch');
const handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan teksnya';
  m.reply('Tunggu sebentar...');
  const url = `https://api.zeeoneofc.my.id/api/canvas/nuliskiri?apikey=RCo6vEcS&text=${encodeURIComponent(text)}`;
  conn.sendFile(m.chat, url, '', '', m);
};
handler.help = ['nuliskiri'].map(v => v + ' <text>')
handler.tags = ['nulis']
handler.command = /^nuliskiri$/i
handler.limit = true
module.exports = handler 