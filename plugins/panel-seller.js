const cheerio = require("cheerio")
const fs = require('fs')
const fetch = require('node-fetch')
const crypto = require("crypto")
const moment = require('moment-timezone')
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} : ${wibm} : ${wibs}`
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
switch (command) {
case "1gb": {
let t = text.split(',');
if (t.length < 2) return conn.reply(m.chat,`*Format salah!*

Penggunaan:
${usedPrefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1000"
let cpu = "30"
let disk = "1000"
let email = username + "@gmail.com"
 if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return conn.reply(m.chat, JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
conn.reply(m.chat,`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${wktuwib} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
conn.sendMessage(u, { text: ctf, mentions: [ `${m.sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: conn.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return conn.reply(m.chat, JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await conn.reply(m.chat,`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${wktuwib} WIB
`)

}
break
case "2gb": {

let t = text.split(',');
if (t.length < 2) return conn.reply(m.chat,`*Format salah!*

Penggunaan:
${usedPrefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2000"
let cpu = "50"
let disk = "2000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return conn.reply(m.chat, JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
conn.reply(m.chat,`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${wktuwib} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
conn.sendMessage(u, { text: ctf, mentions: [ `${m.sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: conn.chat })

let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return conn.reply(m.chat, JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await conn.reply(m.chat,`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${wktuwib} WIB
`)

}
break
case "3gb": {

let t = text.split(',');
if (t.length < 2) return conn.reply(m.chat,`*Format salah!*

Penggunaan:
${usedPrefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3000"
let cpu = "75"
let disk = "3000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return conn.reply(m.chat, JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
conn.reply(m.chat,`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${wktuwib} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
conn.sendMessage(u, { text: ctf, mentions: [ `${m.sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: conn.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return conn.reply(m.chat, JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await conn.reply(m.chat,`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${wktuwib} WIB
`)

}

break
case "4gb": {

let t = text.split(',');
if (t.length < 2) return conn.reply(m.chat,`*Format salah!*

Penggunaan:
${usedPrefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4000"
let cpu = "100"
let disk = "4000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return conn.reply(m.chat, JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
conn.reply(m.chat,`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${wktuwib} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
conn.sendMessage(u, { text: ctf, mentions: [ `${m.sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: conn.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return conn.reply(m.chat, JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await conn.reply(m.chat,`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${wktuwib} WIB
`)

}

break
case "5gb": {

let t = text.split(',');
if (t.length < 2) return conn.reply(m.chat,`*Format salah!*

Penggunaan:
${usedPrefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5000"
let cpu = "130"
let disk = "5000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return conn.reply(m.chat, JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
conn.reply(m.chat,`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${wktuwib} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
conn.sendMessage(u, { text: ctf, mentions: [ `${m.sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: conn.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return conn.reply(m.chat, JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await conn.reply(m.chat,`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${wktuwib} WIB
`)

}

break
case "6gb": {

let t = text.split(',');
if (t.length < 2) return conn.reply(m.chat,`*Format salah!*

Penggunaan:
${usedPrefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "6000"
let cpu = "150"
let disk = "6000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return conn.reply(m.chat, JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
conn.reply(m.chat,`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${wktuwib} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
conn.sendMessage(u, { text: ctf, mentions: [ `${m.sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: conn.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return conn.reply(m.chat, JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await conn.reply(m.chat,`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${wktuwib} WIB
`)

}

break
case "unli": {

let t = text.split(',');
if (t.length < 2) return conn.reply(m.chat,`*Format salah!*

Penggunaan:
${usedPrefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return conn.reply(m.chat, JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
conn.reply(m.chat,`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${wktuwib} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
conn.sendMessage(u, { text: ctf, mentions: [ `${m.sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: conn.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return conn.reply(m.chat, JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await conn.reply(m.chat, `

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${wktuwib} WIB

`)
break
    }
  }
}

handler.help = ['1gb', '2gb', '3gb', '4gb', '5gb', '6gb', 'unli']
handler.tags = ['seller']
handler.command = ['1gb', '2gb', '3gb', '4gb', '5gb', '6gb', 'unli']
handler.premium = true
handler.owner = true 
module.exports = handler
