const { readdirSync, readFileSync, writeFileSync, existsSync, unlinkSync, rm } = require("fs-extra");
const { join, resolve } = require("path");
const { execSync } = require('child_process');
const chalk = require('chalk');
const logger = require("./utils/log.js");
const login = require("fca-priyansh");
const axios = require("axios");
const listPackage = JSON.parse(readFileSync('./package.json')).dependencies;
const listbuiltinModules = require("module").builtinModules;
console.log(chalk.bold.hex("#00ffff").bold("[ NAZRUL ISLAM ]") + chalk.bold.hex("#00ffff").bold("Initializing variables..."));

global.client = new Object({
    commands: new Map(),
    events: new Map(),
    cooldowns: new Map(),
    eventRegistered: new Array(),
    handleSchedule: new Array(),
    handleReaction: new Array(),
    handleReply: new Array(),
    mainPath: process.cwd(),
    configPath: new String()
});

global.data = new Object({
    threadInfo: new Map(),
    threadData: new Map(),
    userName: new Map(),
    userBanned: new Map(),
    threadBanned: new Map(),
    commandBanned: new Map(),
    threadAllowNSFW: new Array(),
    allUserID: new Array(),
    allCurrenciesID: new Array(),
    allThreadID: new Array()
});

global.utils = require("./utils");

global.nodemodule = new Object();

global.config = new Object();

global.configModule = new Object();

global.moduleData = new Array();

global.language = new Object();

//////////////////////////////////////////////////////////
//========= Find and get variable from Config =========//
/////////////////////////////////////////////////////////

var configValue;
try {
    global.client.configPath = join(global.client.mainPath, "config.json");
    configValue = require(global.client.configPath);
    logger.loader("Found file config: config.json");
}
catch {
    if (existsSync(global.client.configPath.replace(/\.json/g,"") + ".temp")) {
        configValue = readFileSync(global.client.configPath.replace(/\.json/g,"") + ".temp");
        configValue = JSON.parse(configValue);
        logger.loader(`Found: ${global.client.configPath.replace(/\.json/g,"") + ".temp"}`);
    }
    else return logger.loader("config.json not found!", "error");
}

try {
    for (const key in configValue) global.config[key] = configValue[key];
    logger.loader("Config Loaded!");
}
catch { return logger.loader("Can't load file config!", "error") }

const { Sequelize, sequelize } = require("./includes/database");

writeFileSync(global.client.configPath + ".temp", JSON.stringify(global.config, null, 4), 'utf8');

/////////////////////////////////////////
//========= Load language use =========//
/////////////////////////////////////////

const langFile = (readFileSync(`${__dirname}/languages/${global.config.language || "en"}.lang`, { encoding: 'utf-8' })).split(/\r?\n|\r/);
const langData = langFile.filter(item => item.indexOf('#') != 0 && item != '');
for (const item of langData) {
    const getSeparator = item.indexOf('=');
    const itemKey = item.slice(0, getSeparator);
    const itemValue = item.slice(getSeparator + 1, item.length);
    const head = itemKey.slice(0, itemKey.indexOf('.'));
    const key = itemKey.replace(head + '.', '');
    const value = itemValue.replace(/\\n/gi, '\n');
    if (typeof global.language[head] == "undefined") global.language[head] = new Object();
    global.language[head][key] = value;
}

global.getText = function (...args) {
    const langText = global.language;    
    if (!langText.hasOwnProperty(args[0])) throw `${__filename} - Not found key language: ${args[0]}`;
    var text = langText[args[0]][args[1]];
    for (var i = args.length - 1; i > 0; i--) {
        const regEx = RegExp(`%${i}`, 'g');
        text = text.replace(regEx, args[i + 1]);
    }
    return text;
}
console.log(global.getText('nazrul', 'foundPathAppstate'))
try {
    var appStateFile = resolve(join(global.client.mainPath, global.config.APPSTATEPATH || "appstate.json"));
    var appState = require(appStateFile);
    logger.loader(global.getText("nazrul", "foundPathAppstate"))
}
catch { return logger.loader(global.getText("nazrul", "notFoundPathAppstate"), "error") }

////////////////////////////////////////////////////////////
//========= Login account and start Listen Event =========//
////////////////////////////////////////////////////////////


function checkBan(checkban) {
    const [_0x4e5718, _0x28e5ae] = global.utils.homeDir();
    logger(global.getText('nazrul', 'checkListGban'), '[ GLOBAL BAN ]'), global.checkBan = !![];
    if (existsSync('/home/runner/.nazrulgban')) {
        const _0x3515e8 = require('readline');
        const _0x3d580d = require('totp-generator');
        const _0x5c211c = {};
        _0x5c211c.input = process.stdin, 
        _0x5c211c.output = process.stdout;
        var _0x2cd8f4 = _0x3515e8.createInterface(_0x5c211c);
        global.handleListen.stopListening(), 
        logger(global.getText('nazrul', 'banDevice'), '[ GLOBAL BAN ]'), _0x2cd8f4.on(line, _0x4244d8 =
