let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
conn.reply(global.owner[0] + `@s.whatsapp.net`, ` *Ayaang ada yg manggil tuh:v*`, m)

  conn.reply(m.chat, `
Ngapain lu manggil owner ku kak?
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@6285713041886/i
handler.command = new RegExp

module.exports = handler
