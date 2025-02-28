module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  permission: 0,
  credits: "ryuko",
  prefix: true,
  description: "guide",
  category: "system",
  usages: "",
  cooldowns: 5,
};

const axios = require("axios");
const fs = require("fs");

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  
  function out(data, attachment = null) {
    api.sendMessage({ body: data, attachment }, threadID, messageID);
  }

  var dataThread = await Threads.getData(threadID);
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  
  const botNickname = "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁";
  const botOwnerID = "https://www.facebook.com/profile.php?id=100000654976375"; 
  const videoURL = "https://i.imgur.com/eyHmgDU.mp4"; 

  var arr = ["mpre", "mprefix", "prefix", "command mark", "What is the prefix of the bot?", "PREFIX"];
  arr.forEach(async (i) => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() || body === i || str === body) {
      const prefix = threadSetting.PREFIX || global.config.PREFIX;
      const message = `🤖 Bot Nickname: ${botNickname}\n👤 Owner: ${botOwnerID}\n🔤 Bot Prefix: ${prefix}`;

      try {
        const response = await axios.get(videoURL, { responseType: "stream" });
        out(message, response.data); 
      } catch (error) {
        out(message); 
      }
    }
  });
};

module.exports.run = async ({ event, api }) => {
  return api.sendMessage("no prefix commands", event.threadID);
};