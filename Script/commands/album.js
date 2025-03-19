module.exports.config = {
  name: "album",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Shaon × ULLASH",
  description: "Send a random sad video",
  commandCategory: "media",
  usages: "",
  cooldowns: 5
};


module.exports.run = async function({
  event: e,
  api: a,
  args: n
}) {
  if (!n[0]) return a.sendMessage("╭─── 🎥 *𝙰𝙻𝙱𝚄𝙼 𝚅𝙸𝙳𝙴𝙾* 🎥 ───╮\n\n🔹 1️⃣  𝙸𝚜𝚕𝚊𝚖𝚒𝚌 𝚅𝚒𝚍𝚎𝚘\n🔹 2️⃣  𝙰𝚗𝚒𝚖𝚎 𝚅𝚒𝚍𝚎𝚘\n🔹 3️⃣  𝚂𝚑𝚊𝚒𝚛𝚒 𝚅𝚒𝚍𝚎𝚘\n🔹 4️⃣  𝚂𝚑𝚘𝚛𝚝 𝚅𝚒𝚍𝚎𝚘\n🔹 5️⃣  𝚂𝚊𝚍 𝚅𝚒𝚍𝚎𝚘\n🔹 6️⃣  𝚂𝚝𝚊𝚝𝚞𝚜 𝚅𝚒𝚍𝚎𝚘\n🔹 7️⃣  𝙵𝚘𝚘𝚝𝚋𝚊𝚕𝚕 𝚅𝚒𝚍𝚎𝚘\n🔹 8️⃣  𝙵𝚞𝚗𝚗𝚢 𝚅𝚒𝚍𝚎𝚘\n🔹 9️⃣  𝙻𝚘𝚟𝚎 𝚅𝚒𝚍𝚎𝚘\n🔹 🔟  𝙲𝙿𝙻 𝚅𝚒𝚍𝚎𝚘\n🔹 1️⃣1️⃣  𝙱𝚊𝚋𝚢 𝚅𝚒𝚍𝚎𝚘\n🔹 1️⃣2️⃣  𝙵𝚛𝚎𝚎 𝙵𝚒𝚛𝚎 𝚅𝚒𝚍𝚎𝚘\n🔹 1️⃣3️⃣  𝙻𝚘𝚏𝚒 𝚅𝚒𝚍𝚎𝚘\n🔹 1️⃣4️⃣  𝙷𝚊𝚙𝚙𝚢 𝚅𝚒𝚍𝚎𝚘\n🔹 1️⃣5️⃣  𝙷𝚞𝚖𝚊𝚢𝚞𝚗 𝚂𝚒𝚛 𝚅𝚒𝚍𝚎𝚘\n\n🔥 *𝙷𝙾𝚃 𝚅𝙸𝙳𝙴𝙾𝚂* 🔥\n🔞 1️⃣6️⃣  𝚂𝚎𝚡 𝚅𝚒𝚍𝚎𝚘\n🔞 1️⃣7️⃣  𝙷𝚘𝚛𝚗𝚢 𝚅𝚒𝚍𝚎𝚘\n🔞 1️⃣8️⃣  𝙸𝚝𝚎𝚖 𝚅𝚒𝚍𝚎𝚘\n🔞 1️⃣9️⃣  𝙷𝚘𝚝 𝚅𝚒𝚍𝚎𝚘\n🔞 2️⃣0️⃣  𝙲𝚊𝚙𝚌𝚞𝚝 𝚅𝚒𝚍𝚎𝚘\n\n💠 *𝙾𝚆𝙽𝙴𝚁:* ULLASH\n\n━━━━━━━━━━━━━━━━━━━━━\n\nTell me how many video numbers you want to see by replaying this message", e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
}; 

module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
}) => {
  var { p, h } = await linkanh(a.body);
  const axios = require("axios");
  if ("create" === t.type) {
    const response = await p.get(h);
    const data = response.data.data;
    const cap = response.data.shaon;
    const cn = response.data.count;
    let nayan = (await p.get(data, {
      responseType: "stream"
    })).data;
    return e.sendMessage({
      body: `🟡${cap}\n𝚃𝙾𝚃𝙰𝙻 𝚅𝙸𝙳𝙴𝙾:${cn}\n𝙰 𝙿 𝙸  𝚂 𝙷 𝙰 𝙾 𝙽📛`,
      attachment: nayan
    }, a.threadID, a.messageID)
  }
};

async function linkanh(choice) {
  const axios = require("axios");
  const apis = await axios.get('https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json');
  const n = apis.data.api
  const options = {
    "1": "/video/islam",
    "2": "/video/anime",
    "3": "/video/shairi",
    "4": "/video/short",
    "5": "/video/sad",
    "6": "/video/status",
    "7": "/video/football",
    "8": "/video/funny",
    "9": "/video/love",
    "10": "/video/cpl",
    "11": "/video/baby",
    "12": "/video/kosto",
    "13": "/video/lofi",
    "14": "/video/happy",
    "15": "/video/humaiyun",
    "16": "/video/sex",
    "17": "/video/horny",
    "18": "/video/item",
    "19": "/video/hot",
    "20": "/video/capcut",
    
  };
  const h = `${n}${options[choice]}`;
  return { p: axios, h };
}
