const fetch = require('node-fetch');
var handler = async (m, {
    conn,
    text,
    usedPrefix,
    command
}) => {
    if (!text) throw `🚩 *Example:* ${usedPrefix + command} link yt`
await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
    m.reply(md)    
    try {
            //let media = await api.ytmp4()
      let api = await fetch(`https://new-api-lorenzo.cyclic.app/api/download/ytplay?apikey=YT:LORENZOBOTMD&query=${encodeURIComponent(text)}`);
        let don = await api.json();
        let f = don.result;

        let cop = `
Title: ${f.title}
Channel: ${f.channel}
Seconds: ${f.seconds}
ID: ${f.id}
Category: ${f.category}
Views: ${f.views}
Public Date: ${f.publicDate}
Upload Date: ${f.uploadDate}
URL: ${f.url}
Description: ${f.description}
`;

       conn.sendMessage(m.chat, {
            text: cop,
            contextInfo: {
                externalAdReply: {
                    title: v, // Change v to usedPrefix
                    body: f.title,
                    thumbnailUrl: f.image,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fkontak
        });
        
conn.sendMessage(m.chat, { video: { url: f.download.video }, caption: cop }, { quoted: m})        
        
    } catch (e) {
        m.reply('Error: Internal server down');
    }
};

handler.help = ['mp4', 'a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp4)$/i

handler.exp = 0
handler.register = true
handler.limit = true
module.exports = handler;


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
