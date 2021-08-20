/// <reference types="node" />
import { EncodeOptions } from 'ini';
declare const encodings: "utf16le";
export { encodings };
export declare function _handleReadContent(buf: string | Uint8Array | ArrayBuffer): Buffer;
export declare function _handleWriteContent(buf: string | Uint8Array | ArrayBuffer): Buffer;
export declare function iniParse<T extends Record<string, any>>(buf: string | Uint8Array | ArrayBuffer): T;
export declare function iniStringify<T extends Record<string, any>>(iniRecord: T, options?: EncodeOptions): string;
export declare function readArcDpsLangIni<T extends Record<string, any>>(path: string): Promise<T>;
export declare function readArcDpsLangIniSync<T extends Record<string, any>>(path: string): Record<string, any>;
export declare function writeArcDpsLangIni(path: string, buf: string | Uint8Array | ArrayBuffer): Promise<void>;
export declare function outputArcDpsLangIni(path: string, buf: string | Uint8Array | ArrayBuffer): Promise<void>;
export declare function writeArcDpsLangIniSync(path: string, buf: string | Uint8Array | ArrayBuffer): void;
export declare function outputArcDpsLangIniSync(path: string, buf: string | Uint8Array | ArrayBuffer): void;
