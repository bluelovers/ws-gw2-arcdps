"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outputArcDpsLangIniSync = exports.writeArcDpsLangIniSync = exports.outputArcDpsLangIni = exports.writeArcDpsLangIni = exports.readArcDpsLangIniSync = exports.readArcDpsLangIni = exports.iniStringify = exports.iniParse = exports._handleWriteContent = exports._handleReadContent = exports.encodings = void 0;
const fs_iconv_1 = require("fs-iconv");
const iconv_jschardet_1 = require("iconv-jschardet");
const ini_1 = require("ini");
const encodings = 'utf16le';
exports.encodings = encodings;
function _handleReadContent(buf) {
    if (buf instanceof ArrayBuffer) {
        buf = Buffer.from(buf);
    }
    return (0, iconv_jschardet_1.encode)(buf);
}
exports._handleReadContent = _handleReadContent;
function _handleWriteContent(buf) {
    if (buf instanceof ArrayBuffer) {
        buf = Buffer.from(buf);
    }
    return (0, iconv_jschardet_1.encode)(buf, encodings, null, {
        addBOM: true,
    });
}
exports._handleWriteContent = _handleWriteContent;
function iniParse(buf) {
    return (0, ini_1.parse)(_handleReadContent(buf).toString());
}
exports.iniParse = iniParse;
function iniStringify(iniRecord, options) {
    return (0, ini_1.stringify)(iniRecord, options);
}
exports.iniStringify = iniStringify;
function readArcDpsLangIni(path) {
    return (0, fs_iconv_1.readFile)(path).then(iniParse);
}
exports.readArcDpsLangIni = readArcDpsLangIni;
function readArcDpsLangIniSync(path) {
    return iniParse((0, fs_iconv_1.readFileSync)(path));
}
exports.readArcDpsLangIniSync = readArcDpsLangIniSync;
function writeArcDpsLangIni(path, buf) {
    return (0, fs_iconv_1.writeFile)(path, _handleWriteContent(buf));
}
exports.writeArcDpsLangIni = writeArcDpsLangIni;
function outputArcDpsLangIni(path, buf) {
    return (0, fs_iconv_1.outputFile)(path, _handleWriteContent(buf));
}
exports.outputArcDpsLangIni = outputArcDpsLangIni;
function writeArcDpsLangIniSync(path, buf) {
    return (0, fs_iconv_1.writeFileSync)(path, _handleWriteContent(buf));
}
exports.writeArcDpsLangIniSync = writeArcDpsLangIniSync;
function outputArcDpsLangIniSync(path, buf) {
    return (0, fs_iconv_1.outputFileSync)(path, _handleWriteContent(buf));
}
exports.outputArcDpsLangIniSync = outputArcDpsLangIniSync;
//# sourceMappingURL=ini.js.map