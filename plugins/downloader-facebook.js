const api = require('api-dylux');
const util = require("util");

let handler = async (m, { conn, text, usedPrefix, command }) => {
   
        if (!text) throw `🚩 *Example:* ${usedPrefix + command} link fb`;
         try {
        let quality = text.split(' ')[1] || '360p';
        let f = await api.fbdl(text, quality);
        if (f.filesize >= 100000) {
            return m.reply('File Melebihi Batas ' + util.format(f));
        }
        await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        let hasil = `*DOWNLOADER FACEBOOK*
Title: ${f.title}
Ext : mp4
Size: ${f.size}`;
        await conn.sendFile(m.chat, f.videoUrl, 'fbmp4', hasil, m);
    } catch (e) {
        console.error(e);
        m.reply('Error: Internal server down');
    }
};

handler.help = ['facebook'].map(v => v + ' <url>');
handler.command = /^(facebook|fb)(downloader|dl)?$/i;
module.exports = handler;
