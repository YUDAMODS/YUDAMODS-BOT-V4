const fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
if (!text) throw "Hay adakah yang bisa saya bantu??"
await m.reply('Searching...')
const apiUrl1 = `https://vihangayt.me/tools/chatgpt?q=${encodeURIComponent(text)}`;
const apiUrl2 = `https://gurugpt.cyclic.app/gpt4?prompt=${encodeURIComponent(text)}&model=llama`;
try {  
  const response1 = await fetch(apiUrl1);
  const responseData1 = await response1.json();

  if (response1.status === 200 && responseData1 && responseData1.status === true && responseData1.data) {
    
    const message = responseData1.data;
    const me = m.sender;
    await conn.sendMessage(m.chat, { text: message, mentions: [me] }, { quoted: m });
  } else {
    
    const response2 = await fetch(apiUrl2);
    const responseData2 = await response2.json();

    if (response2.status === 200 && responseData2 && responseData2.data) {

const message = responseData2.data;
const me = m.sender;
await conn.sendMessage(m.chat, { text: message, mentions: [me] }, { quoted: m });
    } else {
m.reply("Sorry, I couldn't fetch a response from both APIs at the moment.");
    }
  }
} catch (error) {
  console.error(error);
  m.reply("An error occurred while fetching the response from both APIs.");
}
}
handler.help = ['chatgpt', 'gpt', 'chat', 'ai', 'openai'].map(v => v + ' <text>')
handler.tags = ['openai']
 handler.command = /^(chatgpt|gpt|chat|ai|openai)$/i
 handler.limit = true
module.exports = handler
