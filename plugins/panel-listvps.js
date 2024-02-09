let handler = async (m, { conn }) => {
  let menu_nya = `
Sudahkah Anda mencoba membeli VPS? 💻 Jika belum, inilah LIST HARGA VPS yudamods MD yang dapat membuat bisnis online Anda semakin terdongkrak! 🚀

🔹 RAM 2GB CORE 1: Rp15K
🔹 RAM 2GB CORE 2: Rp20K
🔹 RAM 4GB CORE 2: Rp30K
🔹 RAM 8GB CORE 4: Rp50K

NOTE:
✨ Kami memberikan GARANSI 7 HARI untuk memberikan Anda jaminan kepuasan penuh.
⏰ MASA AKTIF 1 BULAN yang memberikan Anda fleksibilitas dan kebebasan dalam menjalankan proyek Anda.
💡 VPS kami menggunakan platform DIGITALOCEAN (DO) yang terkenal akan keandalan dan performa tinggi.

MINAT? 💬 Jangan ragu untuk menghubungi kami melalui WhatsApp di nomor ini:
wa.me/6283856687521

© yudamods MD 🌟`
m.reply(menu_nya)
}
handler.help = ['vps', 'listvps']
handler.tags = ['ownerstore']
handler.command = /^(vps|listvps)$/i;
module.exports = handler

