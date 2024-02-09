const { truth } = require('@bochilteam/scraper')
const fetch = require('node-fetch')
const fs = require('fs')
const moment = require('moment-timezone')

let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let name = conn.getName(m.sender)
  let cin = await truth()
  m.reply(`${ucapan()} ${name}\n\nTruth:\n${cin}`)
}
handler.help = ['truth']
handler.tags = ['quotes']
handler.command = /^(truth)$/i
module.exports = handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Malam"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}
