import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} mabar`
    
    let json = await fetch(`https://api.lolhuman.xyz/api/moddroid?apikey=${global.lolkey}&query=${text}`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
*Nama* : ${x.name}
*Link :* ${x.link}
`
        return conn.sendButton(m.chat, caption, wm, `${x.icon}`, [['BACK MENU','.menu']] ,m)
}
}
handler.help = ['moddroid']
 handler.tags = ['internet'] 
 handler.command = /^(moddroid)$/i 
  
 export default handler