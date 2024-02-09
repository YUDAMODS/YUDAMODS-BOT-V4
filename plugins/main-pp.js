let handler = async (m, { conn, usedPrefix: _p }) => {
  let name = conn.getName(m.sender)
  let message = `
Hello ${name}! Thank you for using this bot service.

The following is a list of commands you can use:

1. *.menu* - Displays the menu list
2. *.info* - Displays information about this bot
3. *.help* - Displays help on how to use this bot

Please use the command above to interact with this bot. Thank You!
  `
  conn.reply(m.chat, message, m)
}

handler.customPrefix = /^(pp|p)$/i
handler.command = new RegExp

module.exports = handler
