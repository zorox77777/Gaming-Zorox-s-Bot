const {
  spawn
} = require("child_process");
const axios = require("axios");
const logger = require("./utils/log");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
app.get('/', function (_0x4221bf, _0x453165) {
  _0x453165.sendFile(path.join(__dirname, "/index.html"));
});
app.listen(port, () => {
  logger("Server is running on port " + port + "...", "[ STARTING ]");
}).on("error", _0x2fd2ee => {
  if (_0x2fd2ee.code === "EACCES") {
    logger("Permission denied. Cannot bind to port " + port + '.', "[ Error ]");
  } else {
    logger("Server error: " + _0x2fd2ee.message, "[ Error ]");
  }
});
global.countRestart = global.countRestart || 0;
function startBot(_0x4b9826) {
  if (_0x4b9826) {
    logger(_0x4b9826, "[ STARTING ]");
  }
  const _0x18d2ca = spawn("node", ["--trace-warnings", "--async-stack-traces", "cyber.js"], {
    'cwd': __dirname,
    'stdio': "inherit",
    'shell': true
  });
  _0x18d2ca.on("close", _0x39ff34 => {
    if (_0x39ff34 !== 0 && global.countRestart < 5) {
      global.countRestart += 1;
      logger("Bot exited with code " + _0x39ff34 + ". Restarting... (" + global.countRestart + "/5)", "[ RESTARTING ]");
      startBot();
    } else {
      logger("Bot stopped after " + global.countRestart + " restarts.", "[ STOPPED ]");
    }
  });
  _0x18d2ca.on("error", _0x92147e => {
    logger("An error occurred: " + JSON.stringify(_0x92147e), "[ Error ]");
  });
}
;
axios.get("https://github.com/muslimhakcerbd/Up-try-mri/main/package.json").then(_0x429aab => {
  logger(_0x429aab.data.name, "[ NAME ]");
  logger("Version: " + _0x429aab.data.version, "[ VERSION ]");
  logger(_0x429aab.data.description, "[ DESCRIPTION ]");
})["catch"](_0x1c2577 => {
  logger("Failed to fetch update info: " + _0x1c2577.message, "[ Update Error ]");
});
startBot();
