var api = require('api-dylux');
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `🚩 *Example:* ${usedPrefix + command} https://youtube.com/shorts/Akm3ijSj5Xc?si=2bWdhUa4dhAxLiV0`;
    try {
        let anu = await api.ytmp3(text);
        let cop = `
Title : ${anu.title}
Ext : mp3
Duration : ${anu.duration}
Viewers : ${anu.views}
Size : ${anu.size}
Quality : ${anu.quality}
Publish : ${anu.publish}
Author : ${anu.channel}
Description : ${anu.desc}

${footer}`;
        let imgr = pickRandom(flaaa2);
        let thumbnail = await conn.getFile(anu.thumb);
        let doc = {
            audio: {
                url: anu.dl_url
            },
            mimetype: 'audio/mp4',
            fileName: `${anu.title}`,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: anu.dl_url,
                    title: anu.title,
                    body: 'Your body text here', // Change 'Your body text here' to your desired text
                    sourceUrl: anu.dl_url,
                    thumbnail: thumbnail.data
                }
            }
        };
        
        // Send text info
        conn.sendFile(m.chat, imgr + 'ytmp3', 'yt.mp3.jpg', cop, m)

        // Send audio file
        conn.sendMessage(m.chat, doc, { quoted: m });
    } catch (e) {
        console.error(e);
        m.reply('Error: Internal server down');
    }
};

handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> <without message>`);
handler.tags = ['downloader'];
handler.command = /^yt(a|mp3)$/i
handler.exp = 0;
handler.register = true;
handler.limit = true;

module.exports = handler;

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}
