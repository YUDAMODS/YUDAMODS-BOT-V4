const fetch = require('node-fetch');
const handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan teksnya';
  m.reply('Tunggu sebentar...');
  const url = `https://api.zeeoneofc.my.id/api/canvas/nuliskanan?apikey=RCo6vEcS&text=${encodeURIComponent(text)}`;
  conn.sendFile(m.chat, url, '', '', m);
};
handler.help = ['nuliskanan'].map(v => v + ' <text>')
handler.tags = ['nulis']
handler.command = /^nuliskanan$/i
handler.limit = true
module.exports = handler 