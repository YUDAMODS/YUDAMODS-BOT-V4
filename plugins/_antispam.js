let handler = m => m

handler.before = function (m, { isAdmin, isBotAdmin }) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    if (chat.antiSpam) {
    if (nomorown.includes(m.sender)) throw '🚩 Owner Mah Free!'
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 5) {
               user.banned = true
    let caption = `🚩 Banned *@${m.sender.split("@")[0]}* Jangan spam!`
    this.reply(caption, m, { mentions: this.parseMention(caption) })
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
     }
}
module.exports = handler
/*
export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
                global.db.data.users[m.sender].banned = true // auto banned bila terjadi spam
                m.reply('*Jangan Spam!!*')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}
*/