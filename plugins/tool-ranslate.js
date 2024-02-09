let translate = require('@vitalets/google-translate-api')

let handler = async (m, { args, usedPrefix, command }) => {
	let lang, text
	if (args.length >= 2) {
		lang = args[0], text = args.slice(1).join(' ')
	} else if (m.quoted && m.quoted.text) {
		lang = args[0], text = m.quoted.text
	} else throw `Contoh: ${usedPrefix + command} id Hello World
*Note: Tidak semua Bahasa Support*
aa	Afar	
ab	Abkhaz	
ae	Avestan	
af	Afrikaans	
ak	Akan	
am	Amharic	
an	Aragonese	
ar	Arabic	
as	Assamese	
av	Avaric	
ay	Aymara	
az	Azerbaijani	
ba	Bashkir	
be	Belarusian	
bg	Bulgarian	
bh	Bihari	
bi	Bislama	
bm	Bambara	
bn	Bengali	
bo	Tibetan	
br	Breton	
bs	Bosnian	
ca	Catalan	
ce	Chechen	
ch	Chamorro	
co	Corsican	
cr	Cree	
cs	Czech	
cu	Old Church Slavonic	
cv	Chuvash	
cy	Welsh	
da	Danish	
de	German	
dv	Divehi	
dz	Dzongkha	
ee	Ewe	
el	Greek	
en	English	
eo	Esperanto	
es	Spanish	
et	Estonian	
eu	Basque	
fa	Persian	
ff	Fula	
fi	Finnish	
fj	Fijian	
fo	Faroese	
fr	French	
fy	Western 
ga	Irish	
gd	Scottish 
gl	Galician	
gu	Gujarati	
gv	Manx	
ha	Hausa	
he	Hebrew	
hi	Hindi	
ho	Hiri Motu	
hr	Croatian	
ht	Haitian	
hu	Hungarian	
hy	Armenian	
hz	Herero	
ia	Interlingua	
id	Indonesian	
ie	Interlingue	
ig	Igbo	
ii	Nuosu	
ik	Inupiaq	
io	Ido	
is	Icelandic	
it	Italian	
iu	Inuktitut	
ja	Japanese	
jv	Jawa
ka	Georgian	
kg	Kongo	
ki	Kikuyu	
kj	Kwanyama	
kk	Kazakh	
kl	Kalaallisut	
km	Khmer	
kn	Kannada	
ko	Korean	
kr	Kanuri	
ks	Kashmiri	
ku	Kurdish	
kv	Komi	
kw	Cornish	
ky	Kyrgyz	
la	Latin	
lb	Luxembourgish	
lg	Ganda	
li	Limburgish	
ln	Lingala	
lo	Lao	
lt	Lithuanian	
lu	Luba-Katanga	
lv	Latvian	
mg	Malagasy	
mh	Marshallese	
mi	Māori	
mk	Macedonian	
ml	Malayalam	
mn	Mongolian	
ms	Malay	
mt	Maltese	
my	Burmese	
na	Nauru	
nb	Norwegian 
nd	Northern 
ne	Nepali	
ng	Ndonga	
nl	Dutch	
nn	Norwegian Nynorsk	
no	Norwegian	
nr	Southern 
nv	Navajo	
ny	Chichewa	
oc	Occitan	
oj	Ojibwe	
om	Oromo	
or	Oriya
os	Ossetian	
pa	Panjabi	
pi	Pāli	
pl	Polish	
ps	Pashto	
pt	Portuguese
qu	Quechua	
rm	Romansh	
rn	Kirundi	
ro	Romanian	
ru	Russian	
rw	Kinyarwanda	
sa	Sanskrit	
sc	Sardinian	
sd	Sindhi	
se	Northern Sami
sg	Sango	
si	Sinhala
sk	Slovak	
sl	Slovenian	
sn	Shona	
so	Somali	
sq	Albanian
sr	Serbian	
ss	Swati	
st	Southern Sotho	
su	Sundanese	
sv	Swedish	
sw	Swahili	
ta	Tamil	
te	Telugu	
tg	Tajik	
th	Thai	
ti	Tigrinya	
tk	Turkmen	
tl	Tagalog	
tn	Tswana	
to	Tonga	
tr	Turkish	
ts	Tsonga	
tt	Tatar	
tw	Twi	
ty	Tahitian	
ug	Uyghur	
uk	Ukrainian	
ur	Urdu	
uz	Uzbek	
ve	Venda	
vi	Vietnamese	
vo	Volapük	
wa	Walloon	
wo	Wolof	
xh	Xhosa	
yi	Yiddish	
yo	Yoruba	
za	Zhuang	
zh	Chinese	
zu	Zulu`
	let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
	if (!res) throw `Error: The language "${lang}" is not supported`
	m.reply(`*Dari:* ${res.from.language.iso}\n*Ke:* ${lang}\n\n${res.text}`.trim())
}
handler.help = ['translate']
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i

module.exports = handler