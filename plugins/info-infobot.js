import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
    await conn.sendMessage(m.chat, { react: { text: '🥀', key: m.key } })
  const info = `

.    ╭─ׅ─ׅ┈ ☪︎︎︎︎̸─ׅ─ׅ┈ ─╮
╭╼☁️☁️
┃֪࣪  ╰─ׅ─ׅ┈─☪︎︎︎̸🍧☪︎︎︎︎̸─ׅ─ׅ┈ ─╯
├ׁ̟̇❍✎ *🄲ʀᴇᴀᴅᴏʀ:* ★彡( Ӿł_₥ł₲ɄɆⱠØ₦77ӾӾ )彡★
├ׁ̟̇❍✎ *🄼ᴏᴅᴏ:* Público
├ׁ̟̇❍✎ *🄱ᴀɪʟᴇʏs:* Multi Device
├ׁ̟̇❍✎ *🅃ɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ:* %muptime
├ׁ̟̇❍✎ *🅄sᴜᴀʀɪᴏs:* %totalreg
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

╭╼☁️☁️
├ׁ̟̇❍✎ *🄲ʟɪᴇɴᴛᴇ:* %name
├ׁ̟̇❍✎ *🄴xᴘ:* %exp
├ׁ̟̇❍✎ *🄽ɪᴠᴇʟ:* %level
├ׁ̟̇❍✎ *🅁ᴀɴɢᴏ:* %role
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

%readmore
*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*
`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://chat.whatsapp.com/` },
    mimetype: `application/${document}`,
    fileName: `「 𝐇𝐮ⷡ𝐓ⷪ𝐚ⷮ𝐨-𝐌𝐃󠁂󠀧󠁂🈀 」`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
showAdAttribution: !![],
            mediaType: 0x1,
            previewType: "PHOTO",
        title: "𝑩𝒐𝒕 𝑯𝒖𝑻𝒂𝒐-𝑴𝑫",
        thumbnail: imagen10,
        renderLargerThumbnail: !![],
        sourceUrl: "https://chat.whatsapp.com",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: fakegif2 });
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = ['меню'];

export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
