import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let image = res.getRandom()
    const more = String.fromCharCode(8206)
    const readMore = more.repeat(4001)
    let link = image
    conn.sendHydrated(m.chat,`
*${htki} GOOGLE IMAGE ${htka}*
🔎 *Result:* ${text}
🌎 *Source:* Google
${readMore}
`, wm, link, link, '🔗 URL', null, null, [['Next', `.image ${text}`],[null,null],[null,null]],m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image)$/i
handler.limit = true

export default handler