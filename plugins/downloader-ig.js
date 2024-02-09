const fetch = require('node-fetch')
const { md } = require("../lib/function")
let handler = async (m, { conn, args, text, usedPrefix, command }) => { 
if (!args[0]) throw `🚩 *Example:* ${usedPrefix+command} https://www.instagram.com/reel/Co18PSBAmkh/?igshid=MmJiY2I4NDBkZg==`
await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
await md(m)
let res = await fetch(`https://new-api-lorenzo.cyclic.app/api/download/instagram?apikey=YT:LORENZOBOTMD&url=${args[0]}`)
let data = await res.json()
let json = data.result
let cap = `INSTAGRAM
 
Title: ${json.title}

${footer}`
conn.sendMessage(m.chat, { video: { url: json.url }, caption: cap }, { quoted: m})
};
handler.help = ['igdl', 'instagram']
handler.tags = ['downloader']
handler.command = /^(igdl|instagram|ig)$/i
handler.limit = true
module.exports = handler