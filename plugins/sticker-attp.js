let handler = async (m, { conn, text }) => {
    if (!text) return m.reply(`.attp halo`)
    conn.sendFile(m.chat, global.API(`https://api.lolhuman.xyz/api/attp?apikey=sgwn&text=${text}`), 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']

handler.command = /^attp$/i

export default handler