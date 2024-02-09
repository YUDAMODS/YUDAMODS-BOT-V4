const cheerio = require("cheerio")
const fs = require('fs')
const fetch = require('node-fetch')
const crypto = require("crypto")
const moment = require('moment-timezone')
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh}:${wibm}:${wibs}`
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

switch (command) {
case "createadmin": {
let t = text.split(',');
if (t.length < 3) return conn.reply(m.chat, `*Format salah!*

Penggunaan:
${usedPrefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return conn.reply(m.chat, `*Format salah!*

Penggunaan:
${usedPrefix + command} email,username,name,number/tag`);
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
"first_name": name,
"last_name": "Memb",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return conn.reply(m.chat, JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await conn.sendMessage(m.chat, { text: `

*SUCCESSFULLY ADD USER*

TYPE: user

ID: ${user.id}
UUID: ${user.uuid}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
LANGUAGE: ${user.language}
ADMIN: ${user.root_admin}
️CREATED AT: ${week} ${date}
JAM : ${wktuwib} WIB


*Password Telah Dikirim Di Private Chat @${u.split`@`[0]}*`, mentions:[u],
})
conn.sendMessage(u, { text: `Hai Kak ${name} 

*BERIKUT DETAIL AKUN ADMIN PANEL ANDA*\n
 
ID: ${user.id}
EMAIL: ${user.email}
USERNAME: ${user.username}
PASSWORD: ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${wktuwib} WIB
️LOGIN: ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us



*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}`,
})
}
break
case 'addusr': {

let t = text.split(',');
if (t.length < 3) return conn.reply(m.chat, `*Format salah!*

Penggunaan:
${usedPrefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
//let password
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return conn.reply(m.chat, `*Format salah!*

Penggunaan:
${usedPrefix + command} email,username,name,number/tag`);
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[5]
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
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return conn.reply(m.chat, JSON.stringify(data.errors[0], null, 2));
let user = data.attributes

let p = await conn.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

TYPE: user

ID: ${user.id}
UUID: ${user.uuid}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
LANGUAGE: ${user.language}
ADMIN: ${user.root_admin}
CREATED AT: ${week} ${date}
JAM : ${wktuwib} WIB

LOGIN: ${domain}
*Password telah dikirim di private chat @${u.split`@`[0]}*`, mentions:[u],
})
conn.sendMessage(u, {
text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
🆔ID: ${user.id}
📬EMAIL : ${email}
👤USERNAME: ${username}
🔐PASSWORD: ${password.toString()} 
☢️CREATED AT: ${week} ${date}
⌚JAM : ${wktuwib} WIB

🖥️LOGIN: ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}`,

})
}
break
case 'delusr': {

let usr = args[0]
if (!usr) return conn.reply(m.chat, 'ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
//let res = await f.json()
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return conn.reply(m.chat, '*USER NOT FOUND*')
conn.reply(m.chat, '*SUCCESSFULLY DELETE THE USER*')
}
break
case "listusr": {
  
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
}
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
let u = user.attributes;
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await conn.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
conn.reply(m.chat, `Gunakan perintah ${usedPrefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case "listadmin": {
  
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
}
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
let u = user.attributes;
if (u.root_admin) {
  messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
  messageText += `${u.username}\n`;
  messageText += `${u.first_name} ${u.last_name}\n\n`;
}
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await conn.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
conn.reply(m.chat, `Gunakan perintah ${usedPrefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case 'detusr': {
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json()
if (res.errors) return conn.reply(m.chat, '*USER NOT FOUND*')
let u = res.attributes
conn.reply(m.chat, `*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${week} ${date}\`\`\``)
}
break
case 'addsrv': {

let s = text.split(',');
if (s.length < 7) return conn.reply(m.chat, `*Format salah!*

Penggunaan:
${usedPrefix + command} name,desc,userId,15,locId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];

let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
//console.log(data.attributes.startup)
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
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
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 20,
"allocations": 0,
},
// "allocation": {
// "default": 36
// }
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return conn.reply(m.chat, JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
conn.reply(m.chat, `*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${week} ${date}
JAM : ${wktuwib} WIB
`)
}
break
case 'delsrv': {

let srv = args[0]
if (!srv) return conn.reply(m.chat, 'ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return conn.reply(m.chat, '*SERVER NOT FOUND*')
conn.reply(m.chat, '*SUCCESSFULLY DELETE THE SERVER*')
}
break
case 'listsrv': {

let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data
let messageText = "Berikut list selver:\n\n";

for (let server of servers) {
let s = server.attributes
messageText += `ID: ${s.id} - Status: ${s.attributes?.server?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${s.name}\n`;
messageText += `${s.name} ${s.name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Selver: ${res.meta.pagination.count}`;
  
  await conn.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
conn.reply(m.chat, `Gunakan perintah ${usedPrefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case 'detsrv': {
let srv = args[0]
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
if (res.errors) return conn.reply(m.chat, '*SERVER NOT FOUND*')
let s = res.attributes
let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + c_apikey
}
})
let data = await f2.json();
let t = data.attributes
conn.reply(m.chat, `*${s.name.toUpperCase()} SERVER DETAILS*

\`\`\`STATUS: ${t.current_state}

ID: ${s.id}
UUID: ${s.uuid}
NAME: ${s.name}
DESCRIPTION: ${s.description}
MEMORY: ${await (format(t.resources.memory_bytes)).toString()} / ${s.limits.memory === 0 ? 'Unlimited' : s.limits.memory + 'MB'}
DISK: ${await (format(t.resources.disk_bytes)).toString()} / ${s.limits.disk === 0 ? 'Unlimited' : s.limits.disk + 'MB'}
CPU: ${t.resources.cpu_absolute}% / ${s.limits.cpu === 0 ? 'Unlimited' : s.limits.cpu + '%'}
CREATED AT: ${week} ${date}\`\`\``)
}
break
case 'reinstall': {

let srv = args[0]
if (!srv) return conn.reply(m.chat, 'ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return conn.reply(m.chat, '*SERVER NOT FOUND*')
conn.reply(m.chat, '*REINSTALLING THE SERVER..*')
}
break
case 'updatesrv': {

let t = text.split(',');
if (t.length < 4) return conn.reply(m.chat, `*Format salah*

Penggunaan:
${usedPrefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json()

let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return conn.reply(m.chat, JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
conn.reply(m.chat, `*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${week} ${date}
UPDATED AT: ${server.updated_at}`)
}
break
case 'startsrv': case 'stopsrv': case 'restartsrv': {
let action = command.replace('srv', '')

let srv = args[0]
if (!srv) return conn.reply(m.chat, 'ID nya mana?')
let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + c_apikey,
},
"body": JSON.stringify({
"signal": action
})
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return conn.reply(m.chat, JSON.stringify(res.errors[0], null, 2))
conn.reply(m.chat, `*SUCCESSFULLY ${action.toUpperCase()} THE SERVER*`)
break
    }
  }
}
handler.help = [
'createadmin',
'addusr',
'delusr',
'listusr',
'listadmin',
'detusr',
'addsrv',
'delsrv',
'listsrv',
'detsrv',
'reinstall',
'updatesrv',
'startsrv',
'stopsrv',
'restartsrv']
handler.tags = ['ownerstore']
handler.command = [
'createadmin',
'addusr',
'delusr',
'listusr',
'listadmin',
'detusr',
'addsrv',
'delsrv',
'listsrv',
'detsrv',
'reinstall',
'updatesrv',
'startsrv',
'stopsrv',
'restartsrv']

handler.owner = true 
module.exports = handler