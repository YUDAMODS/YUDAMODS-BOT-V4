const api = require('@bochilteam/scraper');
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=gempa'
async function handler(m, { conn }) {
api.gempa()
.then(res => {
var gem = res.map(data => `${htki} *INFORMATION GEMPA* ${htka}

• Locate: *${data.locate}*
• Warning: *${data.warning}*
• Date: *${data.date}*
• Magnitude: *${data.magnitude}*
• Depth: *${data.depth}*
• Location: *${data.location}*\n`).join('\n');
conn.sendFile(m.chat, pp, 'gempa.jpg', gem, m);
})
.catch(err => {
console.error(err);
conn.reply(m.chat, 'Terjadi kesalahan saat memuat data gempa.', m);
});
}


handler.help = ['gempa'];
handler.tags = ['info'];
handler.command = /^gempa$/i

module.exports = handler;