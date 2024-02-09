const axios = require('axios');
const cheerio = require('cheerio');
const { scariresep } = require("../lib/yudamods")
let handler = async (m, { conn, text, usedPrefix, command }) => {
    try {
        if (!text) throw `Masukkan query\nContoh: ${usedPrefix + command} ayam bakar`;

        let res = await scariresep(text);
        let no = 0;
        let teks = "";

        for (let i of res.data) {
            no += 1;
            teks += `\n${no.toString()}. `;
            teks += `Judul: ${i.judul}\n`;
            teks += `Link: ${i.link}\n`;
        }

        teks += "=============="
        conn.sendMessage(m.chat, { text: teks }, { quoted: m });
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, 'Terjadi kesalahan. Silakan coba lagi nanti.', m);
    }
};
handler.help = ['cariresep'].map(v => v + ' <query>')
handler.tags = ['internet']
handler.command = /^cariresep$/i;
handler.limit = true 
module.exports = handler;

