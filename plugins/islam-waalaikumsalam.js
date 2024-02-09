let handler = async (m, { conn }) => {
let thumb = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=inferno-logo&doScale=false&scaleWidth=400&scaleHeight=400&fontsize=50&fillTextType=0&backgroundColor=black&text=WAALAIKUMSSALAM`
let caption = `*Waalaikummussalam warahmatullahi wabarokatuh*


"Orang yang mengucapkan salam seperti ini maka ia mendapatkan 30 pahala, kemudian, orang yang dihadapan atau mendengarnya membalas dengan kalimat yang sama yaitu “Wa'alaikum salam warahmatullahi wabarakatuh” atau ditambah dengan yang lain (waridhwaana). Artinya selain daripada do'a selamat juga meminta pada Allah SWT"
`

await conn.sendFile(m.chat, thumb, 'shalat.jpg', `${caption}`, m)

       }
       
handler.customPrefix = /^(assalamualaikum|Salom|salam)/i
handler.command = new RegExp
module.exports = handler