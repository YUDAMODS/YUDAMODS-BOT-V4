const fetch = require('node-fetch');
const axios = require('axios');

const delay = (time) => {
    return new Promise(res => setTimeout(res, time));
};

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
};

const pickRandom = (list) => {
    return list[Math.floor(list.length * Math.random())];
};

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}


async function wait(m) {
    const loadingText = Array.from({ length: 30 }, (_, i) => `《 █${'█'.repeat(i).padEnd(30, '▒')}》${i}%`);

    const lll = await conn.sendMessage(m.chat, { text: 'ʟᴏᴀᴅɪɴɢ... 0%' }, { quoted: m });

    for (let i = 0; i < loadingText.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 100)); // Sesuaikan dengan kebutuhan (100 milidetik)
        await conn.relayMessage(m.chat, {
            protocolMessage: {
                key: lll.key,
                type: 14,
                editedMessage: {
                    conversation: loadingText[i]
                }
            }
        }, {});
    }
}

async function md(m) {
    const arr = [
        { text: `*《 █▒▒▒▒▒▒▒▒▒▒▒》10%*`, timeout: 100 },
        { text: `*《 ████▒▒▒▒▒▒▒▒》30%*`, timeout: 100 },
        { text: `*《 ███████▒▒▒▒▒》50%*`, timeout: 100 },
        { text: `*《 ████████▒▒▒▒》85%*`, timeout: 100 },
        { text: `*《 ████████████》100%*`, timeout: 100 },        
        { text: `*DONE ✅*`, timeout: 100 },   
    ];

    const lll = await conn.sendMessage(m.chat, { text: '*《 █▒▒▒▒▒▒▒▒▒▒▒》5%*' }, { quoted: m });

    for (let i = 0; i < arr.length; i++) {
        await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
        await conn.relayMessage(m.chat, {
            protocolMessage: {
                key: lll.key,
                type: 14,
                editedMessage: {
                    conversation: arr[i].text
                }
            }
        }, {});
    }
}

module.exports = { delay, sleep, isUrl, pickRandom, wait, md, getRandom };
