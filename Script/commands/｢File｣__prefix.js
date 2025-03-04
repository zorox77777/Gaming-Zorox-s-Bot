const fs = require("fs");

module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "given prefix detail",
  commandCategory: "Dành cho Admin",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;

  // যদি ক্র
  if (this.config.credits !== "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭") { 
    return api.sendMessage("আপনার স্ক্রিপ্টের ক্রেডিট পরিবর্তন করা হয়েছে!", threadID, messageID);
  }

  function out(data) {
    api.sendMessage(data, threadID, messageID);
  }

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  
  var arr = ["mpre","mprefix","prefix", "dấu lệnh", "prefix của bot là gì","daulenh", "duong", "what prefix", "freefix", "what is the prefix", "bot dead", "bots dead", "where prefix", "what is bot", "what prefix bot", "how to use bot" ,"how use bot", "where are the bots","bot not working","bot is offline","where prefix","prefx","prfix","prifx","perfix","bot not talking","where is bot"];

  arr.forEach(async i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() || body === i || str === body) {
      const prefix = threadSetting.PREFIX || global.config.PREFIX;

      // 
      const gifURL = "https://i.imgur.com/gSW285Z.gif"; 

      const msg = {
        body: `This Is My Prefix ⇉ [ ${prefix} ]\n💝🥀𝐎𝐖𝐍𝐄𝐑:- ULLASH 💫\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 Ullash ッ\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞ www.facebook.com/100000654976375\n👋For Any Kind Of Help Contact On Telegram channel Username 👉 @Online_income_bd7187`,
        attachment: await global.utils.getStreamFromURL(gifURL) 
      };

      return api.sendMessage(msg, threadID);
    }
  });
};

module.exports.run = async({ event, api }) => {
  return api.sendMessage("error", event.threadID);
};
