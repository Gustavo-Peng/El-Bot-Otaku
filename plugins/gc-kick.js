let handler = async (m, { conn, participants }) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ ππ πΎπππΌππΏπ\n#on restrict | #off restrict\nππ ππππππππΌπππ πΏππ½π πΌπΎππππΌπ ππ πΎπππΌππΏπ`
  if (!m.mentionedJid[0] && !m.quoted) throw 'Etiqueta a alguien del grupo para eliminarlo'
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  let owr = m.chat.split`-`[0]
  await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
  m.reply(`βSe eliminΓ³ a la rata de *@${user.split('@')[0]}*`, null, { mentions: [user] })
}

handler.help = ['kick']
handler.tags = ['adm']
handler.command = /^(kick|echar|hechar)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
