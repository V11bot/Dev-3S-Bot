let handler = async m => conn.sendButton(m.chat, `
      ━━━━『 *DONASI KAK* 』━━━━
➸ Dana : 0831-8332-1692
➸ Gopay : 0831-8332-1692
➸ Pulsa : 0831-8332-1692
➸ Saweria : https://wa.me/p/6068742659806028/15012058590
*➸ QRIS : Chat Owner*

(Melanggar Rules Di Ban 1 hari) 
Donasi supaya bot terus update & Aktif

`.trim(), '© ʙʟᴀᴄᴋ ʙᴏᴛ ᴏғᴄ', { 'button[0]': 'Owner', 'row[0]': '.owner'}, m, {}, 'location', 'https://telegra.ph/file/1149dc82a0cc9d2d8b0c5.jpg') // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['donasi']
handler.command = /^dona(te|si)$/i

module.exports = handler
