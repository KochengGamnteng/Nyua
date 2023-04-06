let handler = async (m, { conn }) => {
	const sukses = './src/avatar_contact.png'
 conn.sendFile(m.chat, 'https://saipulanuar.ga/api/asupan', 'asupan.mp4', 'Nih Jngn comly  ya', m)
 conn.sendFile(m.chat, sukses, 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['asupan3']
handler.tags = ['tools']
handler.command = /^asupan3$/i