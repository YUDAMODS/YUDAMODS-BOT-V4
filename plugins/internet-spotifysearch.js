const fetch = require('node-fetch')
const { Spotify } = require("../lib/yudamods")
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=spotifysearch';  
async function handler(m, { conn, text, usedPrefix, command }) {
  if (!text) throw `🚩 *Example:* ${usedPrefix + command} melukis senja`;
await conn.sendMessage(m.chat, { react: { text: "🕐",key: m.key,}})  
    m.reply(md)
  try {
    let response = await Spotify(text)
    let data = await response.json();
    let op = data.result

    var da = op.map(json => `${htki} *SEARCH SPOTIFY* ${htka}

*📒 Title:* ${json.title}
*👤 Artists:* ${json.artist}
*📅 Release Date:* ${json.release_date}
*🕒 Duration:* ${json.duration}
*🔗 Album:* ${json.album}
*🔗 Link:* ${json.url}
*🆔 Id:* ${json.id}
*🎵 Preview:* ${json.preview_mp3}
\n`).join('\n');

    conn.sendFile(m.chat, pp, 'image.jpg', da, m);
  } catch (err) {
    console.error(err);
    conn.reply(m.chat, 'Terjadi kesalahan saat pencarian.', m);
  }
}
handler.help = ['spotify'].map(v => v + ' <query>')
handler.tags = ['internet'];
handler.command = /^(spotify)$/i;
handler.limit = true;

module.exports = handler

