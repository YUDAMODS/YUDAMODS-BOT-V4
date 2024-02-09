/*import { MessageType } from '@adiwajshing/baileys'*/

let handler = async (m, { conn }) => {
  m.reply(`
╭━━━━━━━━━━━⊱♔⊰━━━━━━━━━━━━╮
┃   『 𝐈𝐧𝐟𝐨 𝐑𝐚𝐧𝐤 』  
╰━━━━━━━━━━━⊱♔⊰━━━━━━━━━━━━╯
┃ Member = User Gratisan  
┃ Premium = User Premium  
┃ Police = Police Bot  
┃ Owner = Owner Bot  
┃ Owner & Premium = Owner Bot & User Premium  
╰━━━━━━━━━━━⊱♔⊰━━━━━━━━━━━━╯`
)
}

handler.help = ['rank']
handler.tags = ['main']
handler.command = /^rank$/i
handler.premium = false

module.exports = handler