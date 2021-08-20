import { writeFile, outputFile, outputFileSync, readFileSync, writeFileSync, readFile } from 'fs-iconv';
import { decode, encode } from 'iconv-jschardet';
import { EncodeOptions, parse, stringify } from 'ini';

const encodings = 'utf16le' as const;

export { encodings }

export function _handleReadContent(buf: string | Uint8Array | ArrayBuffer)
{
	if (buf instanceof ArrayBuffer)
	{
		buf = Buffer.from(buf)
	}

	return encode(buf)
}

export function _handleWriteContent(buf: string | Uint8Array | ArrayBuffer)
{
	if (buf instanceof ArrayBuffer)
	{
		buf = Buffer.from(buf)
	}

	return encode(buf, encodings, null, {
		addBOM: true,
	})
}

export function iniParse<T extends Record<string, any>>(buf: string | Uint8Array | ArrayBuffer): T
{
	return parse(_handleReadContent(buf).toString()) as T;
}

export function iniStringify<T extends Record<string, any>>(iniRecord: T, options?: EncodeOptions)
{
	return stringify(iniRecord, options);
}

export function readArcDpsLangIni<T extends Record<string, any>>(path: string)
{
	return readFile(path).then<T>(iniParse)
}

export function readArcDpsLangIniSync<T extends Record<string, any>>(path: string)
{
	return iniParse(readFileSync(path))
}

export function writeArcDpsLangIni(path: string, buf: string | Uint8Array | ArrayBuffer)
{
	return writeFile(path, _handleWriteContent(buf))
}

export function outputArcDpsLangIni(path: string, buf: string | Uint8Array | ArrayBuffer)
{
	return outputFile(path, _handleWriteContent(buf))
}

export function writeArcDpsLangIniSync(path: string, buf: string | Uint8Array | ArrayBuffer)
{
	return writeFileSync(path, _handleWriteContent(buf))
}

export function outputArcDpsLangIniSync(path: string, buf: string | Uint8Array | ArrayBuffer)
{
	return outputFileSync(path, _handleWriteContent(buf))
}
