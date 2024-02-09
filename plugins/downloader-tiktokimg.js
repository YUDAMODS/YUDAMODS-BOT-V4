const axios = require('axios');
const cheerio = require('cheerio')
const { ttimg } = require("../lib/yudamods")

const handler = async (m, { conn, text: tiktok, args, command, usedPrefix }) => {
    if (!tiktok) throw '*Masukkan tautan tiktok gambar, contoh: "https://vm.tiktok.com/ZM2cqBRVS/".*';
    try {
        let res = await ttimg(tiktok);
        let result = res?.data;
        if (result.length > 0) {
            // Send the first image with a success caption to the group
            await conn.sendMessage(m.chat, { image: { url: result[0] }, caption: 'Sukses download image tiktok Sisa nya botz telah kirim ke private chat' }, { quoted: m });

            // Send the remaining images to private chat
            for (let i = 1; i < result.length; i++) {
                await conn.sendFile(m.sender, result[i], 'tiktokimg.jpg', '', m);
            }
        } else {
            throw '*Tidak ditemukan gambar di tautan yang diberikan.*';
        }

    } catch (error) {
        console.error(error);
        throw '*Tidak ada respons dari halaman, coba lagi nanti.*';
    }
};
handler.help = ['ttimg', 'tiktokimg'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttimg|tiktokimg)$/i;
handler.limit = true
handler.premium = false
module.exports = handler;

