let handler = async (m, { conn, isOwner }) => {
	let groups = Object.values(await conn.groupFetchAllParticipating())
	
	let imgr = flaaa.getRandom()
	let str = Object.keys(groups).map((i, index) => {
        return `*${dmenut}* ${1 + index}
*${dmenub} Name :* ${groups[i].subject}
*${dmenub} Owner :* ${groups[i].owner ? "@" + groups[i].owner.split("@")[0] : "Unknown"}
*${dmenub} Subject Owner :* ${groups[i].subjectOwner ? "@" + groups[i].subjectOwner.split("@")[0] : "Unknown"}
*${dmenub} ID :* ${groups[i].id}
*${dmenub} Restrict :* ${groups[i].restrict}
*${dmenub} Announce :* ${groups[i].announce}
*${dmenub} Ephemeral :* ${new Date(groups[i].ephemeralDuration* 1000).toDateString()}
*${dmenub} Desc ID :* ${groups[i].descId}
*${dmenub} Description :* ${groups[i].desc?.toString().slice(0, 10) + '...' || 'unknown'}
${isOwner ? `*${dmenub} Participants :* ${groups[i].participants.length}` : ''}
*${dmenub} Created :* ${new Date(groups[i].subjectTime* 1000).toDateString()}
*${dmenub} Creation :* ${new Date(groups[i].creation* 1000).toDateString()}
*${dmenub} Size :* ${groups[i].size}
${dmenuf}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, bottime, str, `${imgr + 'Group List'}`, [['B A C K', '.menu'],['LIST PC', '.listpc']],m)
}

handler.menugroup = ['groups', 'grouplist']
handler.tagsgroup = ['group']
handler.register = true
handler.command = /^((gro?ups?list)|(listgro?ups?)|(listgc))$/i

export default handler