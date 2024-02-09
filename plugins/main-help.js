let handler = async (m, { conn }) => {
   let text = `*FITUR BOTZ:*
- *Sticker Maker* : type *'.sticker'* to make a sticker.
- *Facebook Downloader* : type *'.facebook'* to download videos from Facebook.
- *TikTok Downloader* : type *'.tiktok'* to download videos from TikTok.
- *All Commands* : type *'.all'* to see all Botz commands.
- *Owner* : type *'.owner'* if you have a need/and don't understand how to use Botz.

*HOW TO USE:*
Type the appropriate command in the chat with Botz.

*NOTES:*
- Make sure to send a message to Botz in the form of text or caption.
- Some features require a link to download, so make sure you send the link correctly.

Don't hesitate to ask Owner Botz if you run into difficulties or have further questions.

Thanks for using Botz!`
  
  return conn.reply(m.chat, text, m)
}

handler.help = ['help']
handler.tags = ['main']
handler.command = /^help$/i

module.exports = handler
