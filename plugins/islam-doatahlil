import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, command }) => {
    
    let json = await fetch(`https://saipulanuar.ga/api/muslim/tahlil`)
        let jsons = await json.json()
        let caption = `*⎔┉━ doa tahlil 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
*no* : ${x.no}
*judul:* ${x.judul}
*arab:* ${x.arab}
*arti:* ${x.id}
`}
        return m.reply(caption)
        
}
handler.help = ['doatahlil']
 handler.tags = ['quran']
 handler.command = /^(doatahlil|tahlil)$/i 
  
 export default handler