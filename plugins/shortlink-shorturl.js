// ❗ ATUR APIKEYNYA DULU SEBELUM LAPOR OWNER!

import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args }) => {
	let title = `— *S H O R T E D  U R L* —`
    let caption = 'Silahkan Pilih Type Urlnya kak'
const sections = [
   {
	title: "TYPE URL",
	rows: [
	    {title: "TinyUrl", rowId: ".short " + args[0] + " tinyurl"},
	    {title: "OuO", rowId: ".short " + args[0] + " ouo"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: null,
  title: title,
  buttonText: "Shorted Link",
  sections
}

if (!args[0]) return m.reply('Linknya mana?')
if (!args[0].startsWith('https://')) throw 'Masukan Url Dengan Awalan *https://*'
if (!args[1]) return conn.sendMessage(m.chat, listMessage, { quoted: m })

let tesk = '🚀 *ʟɪɴᴋ:* '
let pros = '_*ᴄ ᴏ ɴ ᴠ ᴇ ʀ ᴛ ɪ ɴ ɢ . . .*_'
//TINY
if (args[1] == "tinyurl") {
	let tiny = await (await fetch(`https://api.lolhuman.xyz/api/shortlink?apikey=${global.lolkey}&url=${args[0]}`)).json()
m.reply(pros).then(_ => conn.reply(m.chat, `${tesk}${tiny.result}`,m))
}

//OuO
if (args[1] == "ouo") {
	let ouo = await (await fetch(`https://api.lolhuman.xyz/api/ouoshortlink?apikey=${global.lolkey}&url=${args[0]}`)).json()
	m.reply(pros).then(_=> conn.reply(m.chat, `${tesk}${ouo.result}`,m))
	}
}
handler.help = ['short <url> <type>']
handler.tags = ['internet']
handler.command = /^(short(url)?)$/i
handler.premium = true

export default handler