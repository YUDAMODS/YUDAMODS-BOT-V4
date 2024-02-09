let handler = async (m, { conn, args, text, usedPrefix, command}) => {
let jasa = `
🌟🌟🌟 PROMO SPESIAL! 🌟🌟🌟
🔥🔥🔥 PANEL INSTALASI HANYA 15K! 🔥🔥🔥

Butuh bantuan untuk menginstal panel dengan mudah dan cepat? Jangan khawatir! yudamods MD hadir untuk memberikan solusi terbaik untuk Anda.

✨ Tawaran Istimewa ✨
🌈 Jasa instalasi panel seharga 15K saja!
💥 Dapatkan panel yang Anda inginkan tanpa ribet!
💻 Kami akan menangani semua langkah instalasi untuk Anda.
🌟 Tingkatkan pengalaman Anda dalam mengelola bot dan aplikasi dengan mudah!

✅ Keuntungan Jasa Instalasi kami:
🔹 Profesional dan Terpercaya
🔹 Proses Instalasi yang Cepat
🔹 Bisa disesuaikan dengan kebutuhan Anda
🔹 Bantuan teknis yang responsif

Jadi, tunggu apa lagi? Manfaatkan promo spesial ini sekarang juga!

📲 Hubungi kami melalui WhatsApp:
wa.me/6283842204546

🌟🌟🌟 yudamods MD - Solusi Terbaik untuk Anda! 🌟🌟🌟
`
m.reply(jasa)
}
handler.help = ['buatpnl', 'installpanel']
handler.tags = ['ownerstore']
handler.command = /^(jasainstallpannel|installpanel)$/i;
module.exports = handler
