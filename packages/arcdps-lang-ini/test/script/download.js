"use strict";
/**
 * Created by user on 2021/8/20.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cross_fetch_1 = (0, tslib_1.__importDefault)(require("cross-fetch"));
const bluebird_1 = (0, tslib_1.__importDefault)(require("bluebird"));
const path_1 = require("path");
const __root_1 = require("../__root");
const ini_1 = require("../../lib/ini");
const _chs = (0, path_1.join)(__root_1.__root, 'test/source', 'chs.ini');
const encodings = 'utf16le';
bluebird_1.default.props({
    chs: cross_fetch_1.default('https://raw.githubusercontent.com/Snowy1794/Arcdps-translation-Chinese-simplified/master/arcdps_lang.ini').then(res => res.arrayBuffer()),
}).then(async ({ chs, }) => {
    return (0, ini_1.outputArcDpsLangIni)(_chs, chs);
});
//# sourceMappingURL=download.js.map