import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Input text'
	let res = await fetch(`https://api.lolhuman.xyz/api/nulis?apikey=${global.lolkey}&text=${encodeURIComponent(text)}`)
	if (res.status !== 200) throw res.statusText
	conn.sendMessage(m.chat, { image: { url: res.url }}, { quoted: m })
}
handler.help = handler.alias = ['nulis']
handler.tags = ['nulis']
handler.command = /^(nulis)$/i
handler.limit = false

export default handler