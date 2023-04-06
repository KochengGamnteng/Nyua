import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} mabar`
    
    let json = await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${global.lolkey}&query=${text}`)
        let jsons = await json.json()
        let caption = `*RESULT*`
        for (let x of jsons.result) {
        caption += `
*ɴᴀᴍᴀ📛* : ${x.title}
*ʟɪɴᴋ📌* : https://youtu.be/${x.videoId}
`}
conn.sendButton(m.chat, `*––––『 YT SEARCH 』––––*`, caption, `./media/ytsearch.jpg`, [ 
       [`Download`, `.play ${text}`] 
       ], m, {asLocation: true}) 
 } 
handler.help = ['ytsearch'].map(v => v + ' <name>') 
 handler.tags = ['YouTube'] 
 handler.command = /^(yts|ytsearch)$/i 
  
 export default handler