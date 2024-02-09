let handler = async (m, { conn, usedPrefix, command }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let chat = global.db.data.chats[m.chat];
    let msgs = global.db.data.msgs;
    let msg = Object.entries(msgs).map(([nama, isi]) => ({ nama, ...isi }));
    let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${++index}\n────────────────────────\n\n`
}
m.reply(teks)
}
   
handler.help = ['all', 'doc', 'vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'list' + v);
handler.tags = ['database'];
handler.command = /^(daftar|list)(all|vn|doc|msg|video|audio|img|stic?ker|gif)$/i;

module.exports = handler