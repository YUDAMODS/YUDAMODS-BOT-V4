const cheerio = require("cheerio");
const axios = require("axios");
const { Lirik } = require("../lib/zyko")
let handler = async (m, { conn, text, usedPrefix, command }) => {    
    if (!text) throw `Judul lagu mana?\n Contoh :${usedPrefix}${command} aku suka dia`;

    try {
        let res = await Lirik(text);
        let json = res;
        let cap = `S E A R C H   L I R I K 

pencarian: ${text}




hasil: ${json.lirik}`;

        conn.sendFile(m.chat, json.thumb, 'error.jpg', cap, m);
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, `Gagal melakukan pencarian untuk ${text}. Tidak ditemukan.`, m);
    }
};

handler.help = ['lirik'].map(v => v + ' <nama lagu>');
handler.tags = ['internet'];
handler.command = /^(lirik|lyrics)$/i;
handler.limit = true 
module.exports = handler;