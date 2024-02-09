const { hentaivid } = require("../lib/zyko")
let handler = async (m, { text, args, usedPrefix, command }) => {
    m.reply(`hello, the command ${command} has been given by botz to chat to private, enjoy for the col hehe`)
    let cr = await hentaivid(text);
    let tan = cr[Math.floor(Math.random(), cr.length)]
    let vap = `
⭔ Title : ${tan.title}
⭔ Category : ${tan.category}
⭔ Mimetype : ${tan.type}
⭔ Views : ${tan.views_count}
⭔ Shares : ${tan.share_count}
⭔ Source : ${tan.link}
⭔ Media Url : ${tan.video_1}
`
conn.sendMessage(m.sender, { video: { url: tan.video_1 }, caption: vap }, { quoted: m})
};
handler.help = ['vidhentai'];
handler.command = /^(vidhentai)$/i;
handler.tags = ['nsfw'];
handler.premium = true;
handler.limit = true;

module.exports = handler
