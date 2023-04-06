/* CREDITS TO https://github.com/FG98F */
let dir = 'https://api.lolhuman.xyz/api/sticker/dadu?apikey=c7b2aabfbc7f7554c8594364'
let handler = async (m, { conn }) => {
conn.sendFile(m.chat, dir, 'dadu.webp', '', m)
}
handler.help = ['dadu']
handler.tags = ['game']
handler.command = ['dadu'] 
export default handler