const uploadImage = require('../lib/uploadImage.js');

let handler = async (m, { conn, command, usedPrefix }) => {
    try {
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || '';

        if (!mime) throw `Balas gambar, audio, atau video dengan perintah ${usedPrefix}${command}`;
        if (!/image\/(jpe?g|png)/.test(mime) && !/audio\/.*/.test(mime) && !/video\/.*/.test(mime)) throw `Jenis ${mime} tidak didukung`;

        let media = await q.download();
        let mem = await uploadImage(media);
        m.reply('Tunggu sebentar...');

        if (/^image\/(jpe?g|png)$/.test(mime)) {
            await conn.sendMessage(m.chat, { image: { url: mem }, caption: 'subscribe yt zyko md official\n\nhttps://www.youtube.com/@zykobotz', viewOnce: true, quoted: m }, 'extendedTextMessage');
        } else if (/^audio\/.*/.test(mime)) {
            await conn.sendMessage(m.chat, { audio: { url: mem }, mimetype: mime, caption: 'subscribe yt zyko md official\n\nhttps://www.youtube.com/@zykobotz', viewOnce: true, quoted: m }, 'extendedTextMessage');
        } else if (/^video\/.*/.test(mime)) {
            await conn.sendMessage(m.chat, { video: { url: mem }, caption: 'subscribe yt zyko md official\n\nhttps://www.youtube.com/@zykobotz', viewOnce: true, quoted: m }, 'extendedTextMessage');
        }

    } catch (error) {
        console.error(error);
        m.reply(`Balas gambar, audio, atau video dengan perintah ${usedPrefix}${command}`);
    }
};

handler.help = ['toonce', 'toviewonce'].map(v => v + ' <reply image, audio, or video>');
handler.tags = ['tools'];
handler.command = /^(toonce|toviewonce)$/i;
handler.limit = true;
module.exports = handler;
