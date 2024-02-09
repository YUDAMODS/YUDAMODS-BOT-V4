const { sticker } = require('../lib/sticker')
const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')


let handler = async(m, { conn }) => {
await m.reply(md)
  let res = await fetch('https://api.waifu.pics/nsfw/blowjob')
  let json = await res.json()
  let stiker = await sticker(null, json.url, global.packname, global.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
}
handler.help = ['henstick', 'tic']
handler.tags = ['nsfw', 'sticker']
handler.command = /^(henstick|tic)$/i
handler.premium = true

module.exports = handler 
