import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Example use ${usedPrefix}${command} jokowi`
let ho = await fetch(`https://api.lolhuman.xyz/api/stalkig/${text}?apikey=kocheng`)
let f = await ho.json()
let tulisan =`
📛username: ${f.result.username}
📝full name: ${f.result.fullname}
📷posting: ${f.result.posts}
💌followers: ${f.result.followers}
❤️following: ${f.result.following}
ℹ️bio: ${f.result.bio}`

await conn.sendButton(m.chat, tulisan, wm, `${f.result.photo_profile}`, [['BACK MENU','.menu']] ,m)
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(igstalk|igs|stalkig)$/i

export default handler