let handler = async (m, { conn, usedprefix, command }) => {
await m.reply(global.wait)
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendButton(m.chat, wm, wm, global.API('https://some-random-api.ml', '/canvas/Glass', {
        avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), [['ðŸ”„ Again', `.${command}`]], m)
}

handler.help = ['glass']
handler.tags = ['maker']

handler.command = /^(glass)$/i
handler.register = true
handler.limit = true

export default handler