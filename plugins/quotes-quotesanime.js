let axios = require('axios');
let cheerio = require('cheerio');
const { quotesAnime } = require("../lib/yudamods")
let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
let data = await quotesAnime();
let json = data[0]; // Adjusted to get the first quote from the array
let cap = `
🌟🌈 Q U O T E S  A N I M E 🌟🌈

*🎭 Karakter:* ${json.karakter}
*🎬 Anime:* ${json.anime}
*🎞 Episode:* ${json.episode}
*⏰ Up_at:* ${json.up_at}  
*🔗 Link:* ${json.link}

*💬 Quotes:* ${json.quotes}
`;

conn.sendFile(m.chat, json.gambar, 'erorr.jpg', cap, m);
} catch (error) {
console.error(error);
conn.reply(m.chat, 'Error fetching anime quotes. Please try again later.', m);
}
};

handler.help = ['quotesanime'];
handler.tags = ['quotes'];
handler.command = /^(quotesanime)$/i;
handler.limit = true;
module.exports = handler;

