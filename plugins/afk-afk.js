let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*[βππππβ] π΄π» ππππ°ππΈπΎ ${conn.getName(m.sender)} π΄πππ°ππ° πΈπ½π°π²ππΈππΎ (π°π΅πΊ), πΏπΎπ π΅π°ππΎπ π½πΎ π»πΎ π΄ππΈπππ΄ππ΄π½*\n\n*ββ πΌπΎππΈππΎ π³π΄ π»π° πΈπ½π°π²ππΈππΈπ³π°π³ (π°π΅πΊ)${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler