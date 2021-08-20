/**
 * Created by user on 2021/8/20.
 */

import fetch from 'cross-fetch';
import Bluebird from 'bluebird';
import { outputFile } from 'fs-extra';
import { join } from 'path';
import { __root } from '../__root';
import emitTsFiles from 'build-ts-file';

const _en = join(__root, 'lib/lang', 'en.ts');

Bluebird.props({
	cEnum: fetch('https://www.deltaconnected.com/arcdps/translations/enum.c').then(res => res.text()),
	cDefault: fetch('https://www.deltaconnected.com/arcdps/translations/default.c').then(res => res.text()),
}).then(async ({
	cEnum,
	cDefault,
}) => {

	await Promise.all([
		outputFile(join(__root, 'test/source', 'enum.c'), cEnum),
		outputFile(join(__root, 'test/source', 'default.c'), cDefault),
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



	return outputFile(_en, contents)
		.then(() => emitTsFiles(_en, {
			verbose: true,
		}))
})

