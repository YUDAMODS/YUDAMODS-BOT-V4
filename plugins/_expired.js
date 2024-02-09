let handler = m => m
handler.before = function (m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        let caption = `🚩 Bye *${this.user.name}* will be left from the group!!`
    await this.reply(caption)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
module.exports = handler
/*
export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, 'Bye🖐 bot akan left!!')
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
*/