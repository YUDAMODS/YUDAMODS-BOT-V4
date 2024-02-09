const { tiktok } = require("../lib/yudamods")
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
 if (!text) throw `🚩 *Example:* ${usedPrefix+command} https://vt.tiktok.com/ZSNayJdDb/`
await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
conn.reply(m.chat, md, m)
try {
const res = await tiktok(text); // Change args[0] to text
const videoURL = res.video.noWatermark;
//const videoURLWatermark = res.video.watermark;
let cap  = `
Judul: ${res.title}
Upload: ${res.created_at}

STATUS:
=====================
Like = ${res.stats.likeCount}
Komen = ${res.stats.commentCount}
Share = ${res.stats.shareCount}
Views = ${res.stats.playCount}
Simpan = ${res.stats.saveCount}
=====================
Uploader: ${res.author.name || "Tidak ada informasi penulis"}
${res.author.unique_id}
https://www.tiktok.com/@${res.author.unique_id}
Bio: ${res.author.signature}
Lagu: ${res.music.play_url}
Resolusi: ${res.video.ratio}`
conn.sendMessage(m.chat, { video: { url: videoURL }, caption: cap }, { quoted: m})
conn.sendMessage(m.chat, { audio: { url: videoURL }, mimetype: 'audio/mp4', fileName: `${res.title}.mp3` })
  } catch (error) {
    console.error(error)
    conn.reply(m.chat, "Gagal mengunduh video", m)
  }
}
handler.help = ["tiktok2", "tt2"].map((v) => v + " <url>");
handler.tags = ["downloader"];
handler.command = /^(tt2|tiktok2)$/i;
handler.limit = true
module.exports = handler;
