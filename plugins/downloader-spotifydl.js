const fetch = require('node-fetch');
const { pickRandom, md } = require("../lib/function")
const { Spotifydl } = require("../lib/yudamods")
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `🚩 *Example:* ${usedPrefix + command} https://spotify.link/YjPWma74ADb`;
  await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
  await md(m)
  try {
    let imgr = pickRandom(flaaa)
    let res = await Spotifydl(text);
    let data = await res.json();
    if (data.status) {
      let { title, artist, album, url, id, release_date, duration, durationMs, thumbnail, preview_mp3 } = data.result;
      let cap = `
────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────
*🎵 Title:* ${title}
*👤 Artist:* ${artist}
*💿 Album:* ${album}
*🔗 URL:* ${url}
*🆔 ID:* ${id}
*📅 Release Date:* ${release_date}
*⏱️ Duration:* ${duration} (${durationMs} ms)
*🖼️ Thumbnail:* ${thumbnail}
*🎧 Preview MP3:* [Link](${preview_mp3}) 🎶
      `;
      await conn.sendFile(m.chat, imgr + 'DOWLP DOWNLOADER SPOTIFY', 'erorr.jpg', cap, m)
      await conn.sendFile(m.chat, preview_mp3, 'preview.mp3', '', m);
    } else {
      throw 'Failed to fetch data from Spotify.';
    }
  } catch (error) {
    console.error(error);
    throw 'Error while processing the request.';
  }
};

handler.help = ['spotifydl'].map(v => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(spotifydl)$/i;
handler.limit = true;
module.exports = handler;