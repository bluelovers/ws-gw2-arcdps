"use strict";
/**
 * Created by user on 2021/8/21.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTW = exports.createSegment = void 0;
const tslib_1 = require("tslib");
const en_1 = require("arcdps-enum-builder/lib/lang/en");
const bluebird_1 = (0, tslib_1.__importDefault)(require("bluebird"));
const path_1 = require("path");
const __root_1 = require("../__root");
const ini_1 = require("../../lib/ini");
const ts_enum_util_1 = require("ts-enum-util");
const array_hyper_unique_1 = require("array-hyper-unique");
const ini_2 = require("ini");
const min_1 = require("cjk-conv/lib/zh/convert/min");
const Segment_1 = (0, tslib_1.__importDefault)(require("novel-segment/lib/Segment"));
function createSegment() {
    return new Segment_1.default({
        autoCjk: true,
        optionsDoSegment: {
            convertSynonym: true,
        },
        all_mod: true,
        nodeNovelMode: true,
    });
}
exports.createSegment = createSegment;
const segment = createSegment();
function toTW(value) {
    return (0, min_1.cn2tw_min)(segment.stringify(segment.doSegment(value)), {
        safe: false,
    })
        .replace(/日志/g, '日誌')
        .replace(/窗口/g, '視窗')
        .replace(/保存/g, '儲存')
        .replace(/更改/g, '變更')
        .replace(/默認/g, '預設')
        .replace(/高級/g, '進階')
        .replace(/\bbuff\b/ig, 'BUFF')
        .replace(/風格/g, '樣式');
}
exports.toTW = toTW;
const ids = (0, ts_enum_util_1.$enum)(en_1.e_translate).getValues();
const lost_ids = new Set();
function safe(s) {
    return (0, ini_2.safe)(s).replace(/^"(.+)"$/, '$1');
}
bluebird_1.default.map([
    (0, path_1.join)(__root_1.__root, 'test/source/chs.ini'),
    (0, path_1.join)(__root_1.__root, 'test/source/cht-002.ini'),
    (0, path_1.join)(__root_1.__root, 'test/source/cht.ini'),
    (0, path_1.join)(__root_1.__root, 'test/source/overwrite.ini'),
], (file) => (0, ini_1.readArcDpsLangIni)(file).then(ini => {
    return ini.lang || ini;
}))
    .then((inis) => {
    let cht_new = ['[lang]'];
    cht_new.push(`;${ini_1.encodings} BOM`);
    cht_new.push(`;Traditional Chinese`);
    cht_new.push(`;https://raw.githubusercontent.com/bluelovers/ws-gw2-arcdps/master/packages/arcdps-lang-ini/lib/arcdps_lang.ini`);
    cht_new.push(`;Links`);
    cht_new.push(`;https://www.deltaconnected.com/arcdps/translations`);
    cht_new.push(`;https://raw.githubusercontent.com/Snowy1794/Arcdps-translation-Chinese-simplified/master/arcdps_lang.ini`);
    cht_new.push(`;`);
    cht_new.push(`;`);
    let no_lang = [];
    let latest_idx = inis.length - 1;
    for (let key in en_1.lang) {
        //let key: keyof typeof lang = e_translate[i] as any;
        let i = en_1.e_translate[key];
        if (!(key in en_1.lang)) {
            console.warn(i, key);
            continue;
        }
        let cv = [];
        let v;
        const en = en_1.lang[key];
        cv.push(en);
        lost_ids.add(i);
        inis
            .forEach((ini, index) => {
            let value = ini[i];
            if (i in ini) {
                lost_ids.delete(i);
            }
            if (latest_idx === index && i in ini) {
                cv.push(value);
                v = value !== null && value !== void 0 ? value : '';
            }
            else if (value === null || value === void 0 ? void 0 : value.length) {
                let v2 = toTW(value);
                cv.push(value);
                cv.push(v2);
                if (value !== en) {
                    v = v2;
                }
            }
        });
        (0, array_hyper_unique_1.array_unique_overwrite)(cv, {
            removeFromFirst: true,
        });
        cv = cv.filter(v => v === null || v === void 0 ? void 0 : v.length);
        if (cv.length) {
            v !== null && v !== void 0 ? v : (v = cv.pop());
            cv.reduce(function (a, b) {
                if (v !== b && (b === null || b === void 0 ? void 0 : b.length)) {
                    a.push(`;${i}=${safe(b)}`);
                }
                return a;
            }, cht_new);
        }
        if ((v === null || v === void 0 ? void 0 : v.length) && v !== en) {
            cht_new.push(`${i}=${safe(v)}`);
        }
        else {
            no_lang.push(`;${i}=${safe(en)}`);
        }
        console.log(i, key, safe(en), '=', v !== en ? v : '');
    }
    cht_new.push(`; miss/removed list`);
    cht_new.push(`; not translation list`);
    cht_new.push(...no_lang);
    cht_new.push('');
    cht_new.push('');
    let out = cht_new.join("\n");
    return (0, ini_1.outputArcDpsLangIni)((0, path_1.join)(__root_1.__root, 'lib/arcdps_lang.ini'), out);
});
//# sourceMappingURL=build-ini.js.map