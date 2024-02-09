let handler = m => m
const isToxic = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|babi|anj|bangsad|bgsd|peler|pantek|ngentod|kontol|ngentd|ngntod|koncol|kncl|kncol|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|a(su|sw|syu)/i // tambahin sendiri
handler.before = async function (m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let name = await conn.getName(m.sender) // Use await here
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiToxic = isToxic.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id
    
    if (chat.antiToxic && isAntiToxic) {
        await conn.reply(m.chat, `🚩 *Terdeteksi ${name} Telah Mengirim Kata-Kata Aneh!*\n\n_“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim)._ ${isBotAdmin ? '' : '\n\n_Bot bukan admin_'}`)
        if (isBotAdmin && chat.antiToxic) {
            await conn.sendMessage(m.chat, { delete: m.key })
            return !1
        } else if (!chat.antiToxic) {
             await conn.sendMessage(m.chat, { delete: m.key })
            await conn.sendMessage(m.chat, 'Semoga harimu suram!')           
            return !1
        }
    }
    return !0
}

module.exports = handler















/*
Di record : Zyko MD
©Zyko MD 2023

 * ig: @zykomd
 * yt: @zykobotz
 * tt: @zykosiapa

Jangan di hapus creatornya kack
Saya capek ngetik kode 

"Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
(QS ash-Shaff: 2-3).
*/