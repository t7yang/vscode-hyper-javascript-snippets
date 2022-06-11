interface Meta<T> {
  filename: string;
  dict: T;
}

export interface VscSnippet {
  prefix: string | Array<string>;
  body: string | Array<string>;
  description?: string;
}

export interface VscSnippetDict {
  [k: string]: VscSnippet;
}

export interface VscSnippetDictMeta extends Meta<VscSnippetDict> {}

export interface XSnippet extends Pick<VscSnippet, 'body' | 'description'> {
  name: string;
}

export interface XSnippetDict {
  [k: string]: XSnippet;
}

export interface XSnippetDictMeta extends Meta<XSnippetDict> {}
