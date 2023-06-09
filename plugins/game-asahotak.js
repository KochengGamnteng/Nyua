import fs from 'fs'
import fetch from 'node-fetch'
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {

    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', wm, null, [['Bantuan', usedPrefix + 'ao']], conn.asahotak[id][0])
        throw false
    }
    let res = JSON.parse(fs.readFileSync('./api/asahotak.json'))
    let random = Math.floor(Math.random() * res.length)
    let json = res[random]
    let caption = `
    ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}ao untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.asahotak[id] = [
        await conn.sendButton(m.chat, caption, wm, ['hint', `${usedPrefix}ao`], m),
        json, poin,
        setTimeout(() => {
            if (conn.asahotak[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, ['asahotak', '/asahotak'], conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i

export default handler