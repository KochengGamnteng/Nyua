/** @format */

import { youtubeSearch } from '@bochilteam/scraper'

let handler = async (m, { conn, command, text, args, usedPrefix }) => {
		if (!text) throw `Use example ${usedPrefix}${command} Dj Gamna Naufal`
		try {
		let { video } = await youtubeSearch(text)
			const listSections = [],
			tmp = [...video].map((v) => {
				switch (v.type) {
					case 'video':
						{
							listSections.push({
								title: v.title,
								rows: [
									{
										title: 'Video🎥',
										rowId: '!ytmp4 ' + v.url,
										description: `Download ${v.title} (${v.url})`,
									},
									{
										title: 'Audio🎧',
										rowId: '!ytmp3 ' + v.url,
										description: `Download ${v.title} (${v.url})`,
									},
								],
							});
						}
						break;
				}
			});
		const listMessage = {
			text: 'LIST DOWNLOAD📥\n',
			footer: '*sɪʟᴀᴋᴀɴ ᴘɪʟɪʜ ᴠɪᴅɪᴏ/ᴀᴜᴅɪᴏ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ*',
			title: '🔎Result From *' + text + '*\n',
			buttonText: 'ʀᴇsᴜʟᴛ',
			sections: listSections,
		};
		return conn.sendMessage(m.chat, listMessage)
		} catch(e) {
m.reply('*ʜᴀsɪʟ ᴛɪᴅᴀᴋ ᴅɪᴛᴇᴍᴜᴋᴀɴ*')
}

//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
 }

handler.menudownload = ['ytplay <teks> / <url>']
handler.tagsdownload = ['search']
handler.command = /^(play|(play)?yt(play|dl)?)$/i

export default handler