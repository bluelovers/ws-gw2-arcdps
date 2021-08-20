/**
 * Created by user on 2021/8/20.
 */

import fetch from 'cross-fetch';
import Bluebird from 'bluebird';
import { outputFile, saveFile } from 'fs-iconv';
import { join } from 'path';
import { __root } from '../__root';
import { decode, detect, encode } from 'iconv-jschardet';
import _fetch from 'node-fetch';
import { outputArcDpsLangIni } from '../../lib/ini';

const _chs = join(__root, 'test/source', 'chs.ini');
const encodings = 'utf16le';

Bluebird.props({
	chs: (fetch as any as typeof _fetch)('https://raw.githubusercontent.com/Snowy1794/Arcdps-translation-Chinese-simplified/master/arcdps_lang.ini').then(res => res.arrayBuffer()),
}).then(async ({
	chs,
}) =>
{
	return outputArcDpsLangIni(_chs, chs)
})
