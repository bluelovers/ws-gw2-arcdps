"use strict";
/**
 * Created by user on 2021/8/20.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cross_fetch_1 = (0, tslib_1.__importDefault)(require("cross-fetch"));
const bluebird_1 = (0, tslib_1.__importDefault)(require("bluebird"));
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const __root_1 = require("../__root");
const build_ts_file_1 = (0, tslib_1.__importDefault)(require("build-ts-file"));
const _en = (0, path_1.join)(__root_1.__root, 'lib/lang', 'en.ts');
bluebird_1.default.props({
    cEnum: (0, cross_fetch_1.default)('https://www.deltaconnected.com/arcdps/translations/enum.c').then(res => res.text()),
    cDefault: (0, cross_fetch_1.default)('https://www.deltaconnected.com/arcdps/translations/default.c').then(res => res.text()),
}).then(async ({ cEnum, cDefault, }) => {
    await Promise.all([
        (0, fs_extra_1.outputFile)((0, path_1.join)(__root_1.__root, 'test/source', 'enum.c'), cEnum),
        (0, fs_extra_1.outputFile)((0, path_1.join)(__root_1.__root, 'test/source', 'default.c'), cDefault),
    ]);
    cEnum = cEnum.replace(/^(\s+)(LANG_COMMON_AS_FRIENDLY),/gm, '$1\/\/ @ts-ignore\n$1$2,');
    cDefault = cDefault.replace(/lang\[([^\]]+)\] = "(.+)";/gm, `\/**\n * $2\n *\/\n$1: "$2" as const,`);
    cDefault = cDefault.replace(/^(\s*)(LANG_COMMON_AS_FRIENDLY)\b/gm, '$1\/\/ @ts-ignore\n$1$2');
    let contents = [
        cEnum,
        `export { e_translate };`,
        `const lang = {`,
        cDefault,
        `};`,
        `export { lang };`,
        `export default lang;\n\n`,
    ].join('\n\n');
    return (0, fs_extra_1.outputFile)(_en, contents)
        .then(() => (0, build_ts_file_1.default)(_en, {
        verbose: true,
    }));
});
//# sourceMappingURL=download.js.map