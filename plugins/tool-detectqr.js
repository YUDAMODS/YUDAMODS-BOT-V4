const uploadImage = require('../lib/uploadImage.js');
const fetch = require('node-fetch');
const util = require('util');

let handler = async (m, { conn, command, usedPrefix }) => {
    try {
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || '';

        if (!mime) throw `Balas gambar dengan perintah ${usedPrefix}${command}`;
        if (!/image\/(jpe?g|png)/.test(mime)) throw `Jenis ${mime} tidak didukung`;

        let img = await q.download();
        let mem = await uploadImage(img);
        
        m.reply('Tunggu sebentar...');
        
        const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`);
        const data = await res.json();
        
        if (data && data[0] && data[0].symbol && data[0].symbol[0] && data[0].symbol[0].data) {
            m.reply(util.format(data[0].symbol[0].data));
        } else {
            throw 'Tidak dapat mendeteksi QR pada gambar';
        }
    } catch (error) {
        console.error(error);
        m.reply(`Balas gambar dengan perintah ${usedPrefix}${command}`);
    }
};

handler.help = ['detectqr'].map(v => v + ' <reply image>');
handler.tags = ['tools'];
handler.command = /^detectqr$/i;
handler.limit = true
module.exports = handler;