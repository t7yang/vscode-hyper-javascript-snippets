import { VscSnippetDictMeta, XSnippet, XSnippetDict, XSnippetDictMeta } from './snippet.js';

export const replaceXSnippet = <T extends XSnippetDict, R extends Partial<{ [k in keyof T]: Partial<XSnippet> }>>(
  s: T,
  r: R,
): T => {
  const snippet: T = Object.assign({}, s);
  Object.entries(r).forEach(([key, value]) => {
    if (!snippet[key]) throw Error(`Could not found key: ${key}} to replace, value: ${JSON.stringify(value, null, 2)}`);
    snippet[key as keyof T] = { ...snippet[key], ...value } as any;
  });
  return snippet;
};

export const appendXSnippet = <
  T extends XSnippetDict,
  A extends XSnippetDict,
  Result extends keyof T extends Exclude<keyof T, keyof A> ? T & A : never,
>(
  s: T,
  a: A,
): Result => {
  const snippet: Result = Object.assign({}, s) as any;
  Object.entries(a).forEach(([key, value]) => {
    if (snippet[key]) throw Error(`Found duplicated key: ${key} to append, value: ${JSON.stringify(value, null, 2)}`);
    snippet[key as keyof (T & A)] = value as any;
  });
  return snippet;
};

export const createXSnippets = <T extends XSnippetDict>(input: T): T => input;

export const mapToVscSnippetDicMeta = (metas: XSnippetDictMeta[], label: string): VscSnippetDictMeta[] =>
  metas.map(meta => {
    const entries = Object.entries(meta.dict);
    if (entries.length !== new Set(entries.map(([, { name }]) => name)).size)
      throw Error(`Found duplicated name in ${meta.filename}`);

    return {
      ...meta,
      dict: Object.fromEntries(
        entries.map(([prefix, xs]) => [xs.name, { prefix, body: xs.body, description: `${label}: ${xs.name}` }]),
      ),
    };
  });
