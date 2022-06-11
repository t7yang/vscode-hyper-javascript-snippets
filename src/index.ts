import { writeFile } from 'fs/promises';
import { mapToVscSnippetDicMeta } from './model/snippet.fn.js';
import { XSnippetDictMeta } from './model/snippet.js';
import { javascript } from './snippet/javascript.js';
import { typescript } from './snippet/typescript.js';

(async function main() {
  const outputPath = new URL('../dist/', import.meta.url);

  const metas: XSnippetDictMeta[] = [
    { filename: 'javascript', dict: javascript },
    { filename: 'typescript', dict: typescript },
  ];
  await Promise.all(
    mapToVscSnippetDicMeta(metas, 'Hyper').map(meta =>
      writeFile(new URL(`${meta.filename}.json`, outputPath), JSON.stringify(meta.dict)),
    ),
  ).then(() => console.log('Build snippets done!'));
})();
