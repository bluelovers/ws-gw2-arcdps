/**
 * Created by user on 2021/8/21.
 */

import { lang, e_translate } from 'arcdps-enum-builder/lib/lang/en';
import Bluebird from 'bluebird';
import { join } from 'path';
import { __root } from '../__root';
import { encodings, outputArcDpsLangIni, readArcDpsLangIni } from '../../lib/ini';
import { $enum } from "ts-enum-util";
import { array_unique_overwrite } from 'array-hyper-unique';
import { EncodeOptions, parse, stringify, unsafe, safe as _safe } from 'ini';
import { cn2tw_min, tw2cn_min } from 'cjk-conv/lib/zh/convert/min';

import Segment from 'novel-segment/lib/Segment';

export function createSegment()
{
	return new Segment({
		autoCjk: true,
		optionsDoSegment: {
			convertSynonym: true,
		},
		all_mod: true,
		nodeNovelMode: true,
	});
}

const segment = createSegment();

export function toTW(value: string)
{
	return cn2tw_min(segment.stringify(segment.doSegment(value)), {
		safe: false,
	})
		.replace(/日志/g, '日誌')
		.replace(/窗口/g, '視窗')
		;
}

const ids = $enum(e_translate).getValues();
const lost_ids = new Set<string>();

function safe(s: string)
{
	return _safe(s).replace(/^"(.+)"$/, '$1')
}

Bluebird.map([
		join(__root, 'test/source/chs.ini'),
		join(__root, 'test/source/cht-002.ini'),
		join(__root, 'test/source/cht.ini'),
		join(__root, 'test/source/overwrite.ini'),
	], (file) => readArcDpsLangIni<{
		lang: Record<string, string>
	}>(file).then(ini =>
	{
		return ini.lang || ini as any as Record<string, string>
	}))
	.then((inis: Record<string, string>[]) =>
	{

		let cht_new = ['[lang]'];

		cht_new.push(`;${encodings} BOM`);
		cht_new.push(`;Traditional Chinese`);
		cht_new.push(`;https://raw.githubusercontent.com/bluelovers/ws-gw2-arcdps/master/packages/arcdps-lang-ini/lib/arcdps_lang.ini`);
		cht_new.push(`;Links`);
		cht_new.push(`;https://www.deltaconnected.com/arcdps/translations`);
		cht_new.push(`;https://raw.githubusercontent.com/Snowy1794/Arcdps-translation-Chinese-simplified/master/arcdps_lang.ini`);
		cht_new.push(`;`);
		cht_new.push(`;`);

		let no_lang = [];

		let latest_idx = inis.length - 1;

		for (let key in lang)
		{
			//let key: keyof typeof lang = e_translate[i] as any;
			let i = e_translate[key];

			if (!(key in lang))
			{
				console.warn(i, key)

				continue;
			}

			let cv: string[] = [];
			let v: string;

			const en = lang[key];

			cv.push(en);

			lost_ids.add(i);

			inis
				.forEach((ini, index) =>
				{
					let value = ini[i];

					if (i in ini)
					{
						lost_ids.delete(i);
					}

					if (latest_idx === index && i in ini)
					{
						cv.push(value);
						v = value ?? '';
					}
					else if (value?.length)
					{
						let v2 = toTW(value);

						cv.push(value);
						cv.push(v2);

						if (value !== en)
						{
							v = v2
						}
					}

				})
			;

			array_unique_overwrite(cv, {
				removeFromFirst: true,
			});

			cv = cv.filter(v => v?.length);

			if (cv.length)
			{
				v ??= cv.pop();

				cv.reduce(function (a, b)
				{
					if (v !== b && b?.length)
					{
						a.push(`;${i}=${safe(b)}`);
					}

					return a;
				}, cht_new);
			}

			if (v?.length && v !== en)
			{
				cht_new.push(`${i}=${safe(v)}`);
			}
			else
			{
				no_lang.push(`;${i}=${safe(en)}`);
			}

			console.log(i, key, safe(en), '=', v !== en ? v : '')

		}

		cht_new.push(`; miss/removed list`);

		cht_new.push(`; not translation list`);

		cht_new.push(...no_lang);

		cht_new.push('');
		cht_new.push('');

		let out = cht_new.join("\n");

		return outputArcDpsLangIni(join(__root, 'lib/arcdps_lang.ini'), out)
	})
;
