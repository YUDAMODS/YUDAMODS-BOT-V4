let handler = async m => m

handler.before = async function (m, { conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return true;

    let chat = global.db.data.chats[m.chat];

    if (chat.antibot) {
        if (m.isBaileys && m.fromMe == false) {
            if (isAdmin || !isBotAdmin) {
                return true;
            } else {
                try {
                    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
                    m.reply('*Bot Lain Terdeteksi*\n\nMaaf Kak Harus Saya Keluarkan, Karna Admin Mengaktifkan Anti Bot :)');
                } catch (error) {
                    console.error(error);
                    m.reply('Error saat mengeluarkan bot.');
                }
                return true;
            }
        }
    }

    return true;
}

module.exports = handler;
