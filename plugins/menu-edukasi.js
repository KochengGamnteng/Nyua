let handler = async (m, { conn }) => {

let cikiwir = `
Mari belajar`
let info = `
Silakan pilih menu edukasi di bawah`
const sections = [
   {
	title: `ᴘᴇɴᴄᴀʀɪᴀɴ`,
	rows: [
	    {title: "ROBOGURU🤖", rowId: '.roboguru', description: 'cari tau tentang tugas mu🔎' },
	    {title: "GOOGLE🔎", rowId: '.google', description: 'cari tentang masalah mu📖' },
	{title: "WIKIPEDIA📖", rowId: '.wikipedia', description: 'cari tau tentang apa saja📘' },
	]
	}, {
    title: `ɴᴜʟɪs ᴛᴜɢᴀs`,
	rows: [
	    {title: "NULIS✍️", rowId: '.nulis', description: 'bot akan nulisin tugas mu👋✍️' },
	]
	}, {
    title: `ᴇᴅᴜᴋᴀsɪ ɪsʟᴀᴍ`,
	rows: [
	    {title: "NIAT SOLAT📝", rowId: '.niatsolat', description: 'menampilkan niat solat📖' },
	{title: "HADISℹ️", rowId: '.hadis', description: 'hadis✍️' },
	{title: "DOA TAHLIL", rowId: '.doatahlil', description: 'menampilkan doa tahlil🕌' },
	{title: "BACAAN SHOLAT", rowId: '.bacaanshalat', description: 'menampilkan bacaan shalat🕌' },
	]
    },
]

const listMessage = {
  text: info,
  footer: cikiwir,
  title: null,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['edukasimenu']
handler.tags = ['main']
handler.command = /^(edukasimenu|menuedukasi)$/i

export default handler