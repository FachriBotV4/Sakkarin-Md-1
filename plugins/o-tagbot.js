let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
conn.reply(global.owner[0] + `@s.whatsapp.net`, ` *Ayaang ada yg manggil tuh, mau sewa mungkin:v*`, m)

  conn.reply(m.chat, `
Apa ngetag gw?
Gw cuma bot, gosah Di tag
Ahhh Yamete 
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@6281335334848 |@6281335334848/i
handler.command = new RegExp

module.exports = handler
