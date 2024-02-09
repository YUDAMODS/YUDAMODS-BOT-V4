const api = require('api-dylux');

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Input URL';

  try {
    let res = await api.GDriveDl(text);

    if (!res) throw 'Invalid';

    let {
      downloadUrl,
      fileName,
      fileSize,
      fileSizeB
    } = res;

    let caption = `
*💌 Name:* ${fileName}
*📊 Size:* ${fileSize}
*📨 Filesizeb:* ${fileSizeB}
    `;

    m.reply(caption);
    conn.sendMessage(m.chat, { document: { url: downloadUrl }, fileName, mimetype: 'application/zip' }, { quoted: m });
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'Gagal mengunduh file', m);
  }
};

handler.help = ['gdrive'].map(v => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(gdrivedl|gdrive)$/i;
handler.limit = true;

module.exports = handler;
