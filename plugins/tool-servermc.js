const axios = require('axios');
const cheerio = require('cheerio');
const { servermc } = require("../lib/yudamods")
let handler = async (m, { conn, text, usedPrefix, command }) => {
    try {
        let res = await servermc();
        let no = 0;
        let teks = "==============";

        for (let i of res) {
            no += 1;
            teks += `\n${no.toString()}. `;
            teks += `IP: ${i.ip}\n`;
            teks += `Port: ${i.port}\n`;
            teks += `Version: ${i.versi}\n`;
            teks += `Players: ${i.player}\n`;
        }

        teks += "==============";
        conn.sendMessage(m.chat, { text: teks }, { quoted: m });
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, 'Terjadi kesalahan. Silakan coba lagi nanti.', m);
    }
};

handler.help = ['servermc'];
handler.tags = ['tools'];
handler.command = /^(servermc)$/i;
handler.limit = true;
module.exports = handler;

