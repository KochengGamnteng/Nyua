import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
if (!text) throw 'Input text'
    
    let json = await fetch(`https://api.lolhuman.xyz/api/roboguru?apikey=${global.lolkey}&query=${text}&grade=sma&subject=sejarah`)
        let jsons = await json.json()
        let caption = `ʀᴇsᴜʟᴛ`
        for (let x of jsons.result) {
        caption += `
        
sᴏᴀʟ: ${x.question}

ᴊᴀᴡᴀʙᴀɴ: ${x.answer}

*JAWABAN LAINYA*
`}
        return m.reply(caption)
        
}
handler.help = ['roboguru']
 handler.tags = ['internet']
 handler.command = /^(roboguru)$/i 
  
 export default handler