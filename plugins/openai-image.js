let handler = async (m, { conn, text, args, usedPrefix, command }) => {
       

        if (!text) return m.reply(`Please provide a query to generate an image. Example: ${usedPrefix + command} Beautiful landscape`);

        const apiUrl = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(text)}`;

        try {
          await conn.sendMessage(m.chat, { image: { url: apiUrl } }, { quoted: m });
        } catch (error) {
          console.error(error);
          m.reply("An error occurred while generating the image.");
        }
      }
handler.help = ['ai-image', 'dalle', 'aiimg', 'aiimage', 'openaiimage'].map(v => v + ' <query>')
handler.tags = ['openai']
handler.command = ['ai-image', 'dalle', 'aiimg', 'aiimage', 'openaiimage']
handler.limit = true
module.exports = handler
