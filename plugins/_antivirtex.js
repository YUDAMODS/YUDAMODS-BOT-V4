let handler = m => m

handler.before = async function (m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) return
  let chat = global.db.data.chats[m.chat]
  let name = this.getName(m.sender)

  if (chat.antiVirtex && text > 2000) {
    this.reply(m.chat `
*「 🚩 ANTI VIRTEX 」*

Detected *${name}* has sent virtex!

Sorry you will be kicked from this group!
`.trim(), m)

    this.groupRemove(m.chat, [m.sender])
  } else return false
}
handler.group = true

module.exports = handler
