import { appendXSnippet, replaceXSnippet } from '../model/snippet.fn.js';
import { javascript } from './javascript.js';

export const typescript = appendXSnippet(
  replaceXSnippet(javascript, {
    f: {
      body: 'function ($1)$2 {$0}',
    },
    fn: {
      body: 'function $1($2)$3 {$0}',
    },
    fa: {
      body: 'async function ($1)$2 {$0}',
    },
    fna: {
      body: 'async function $1($2)$3 {$0}',
    },
  }),
  {
    ar: {
      name: 'arrow function with return type (ES2015)',
      body: '($1)$2 => $0',
    },
    ara: {
      name: 'async arrow function with return type (ES2015)',
      body: 'async ($1)$2 => $0',
    },
    ag: {
      name: 'generic/generator arrow function (ES2015)',
      body: '$1($2)$3 => $0',
    },
    aga: {
      name: 'async generic/generator arrow function (ES2015)',
      body: 'async $1($2)$3 => $0',
    },
    pd: {
      name: 'parameter destructuring with type (TypeScript)',
      body: '${0:param} : ${1:type}',
    },
    typ: {
      name: 'type (TypeScript)',
      scope: 'typescript',
      body: 'type ${1:name} = $0',
    },
    int: {
      name: 'interface (TypeScript)',
      scope: 'typescript',
      body: 'interface ${1:name} {$2}$0',
    },
    enu: {
      name: 'enum (TypeScript)',
      scope: 'typescript',
      body: 'enum ${1:name} {$2}$0',
    },
    enc: {
      name: 'const enum (TypeScript)',
      scope: 'typescript',
      body: 'const enum ${1:name} {$2}$0',
    },
    mod: {
      name: 'module (TypeScript)',
      scope: 'typescript',
      body: 'module ${1:name} {$2}$0',
    },
    nam: {
      name: 'namespace (TypeScript)',
      scope: 'typescript',
      body: 'namespace ${1:name} {$2}$0',
    },
  },
);
