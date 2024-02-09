let handler = m => m
handler.before = async function (m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin, isOwner }) {
    let user = db.data.users[m.sender]                              
    if (user.health > 100) {
            user.health = 100
        }
    if (user.health < 0) {
            user.health = 0
        }
    }

module.exports = handler