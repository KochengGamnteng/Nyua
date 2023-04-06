import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `❗ Harap masukan nomor dengan awalan 0 contoh *081775155057*`
let ho = await fetch(`https://saipulanuar.ga/api/convert/gopay1?nomor=${text}`)
let f = await ho.json()
let tulisan =`
ɴᴏᴍᴏʀ: ${text}
ʜᴀʀɢᴀ ᴊᴜᴀʟ: ${f.result.harga_jual}
ʜᴀʀɢᴀ ᴀᴅᴍɪɴ: ${f.result.harga_admin}
ɴᴀᴍᴀ ᴘʀᴏᴅᴜᴋ: ${f.result.nama_produk}
ɪᴅ ᴜsᴇʀ: ${f.result.id_user}

ᴄᴀʀᴀ ᴘᴇɴɢɢᴜɴᴀᴀɴ:
•Scan qr code di atas melalui aplikasi uang
elektronik mu!

•Jika sudah melakukan pembayaran harap periksa gopay mu untuk mengecek apakah saldo sudah masuk`

await conn.sendButton(m.chat, tulisan, wm, `${f.result.qr}`, [['BACK MENU','.menu']] ,m)
}
handler.help = ['gopay5k']
handler.tags = ['topup']
handler.limit = false
handler.command = /^(gopay5k)$/i

export default handler