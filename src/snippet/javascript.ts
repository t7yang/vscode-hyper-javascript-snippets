import { createXSnippets } from '../model/snippet.fn.js';

export const javascript = createXSnippets({
  va: {
    name: 'var assignment',
    body: 'var $1 = $0',
  },
  la: {
    name: 'let assignment (ES2015)',
    body: 'let $1 = $0',
  },
  ca: {
    name: 'const assignment (ES2015)',
    body: 'const $1 = $0',
  },
  vad: {
    name: 'var destructuring assignment (ES2015)',
    body: 'var ${0:dest} = $1',
  },
  lad: {
    name: 'let destructuring assignment (ES2015)',
    body: 'let ${0:dest} = $1',
  },
  cad: {
    name: 'const destructuring assignment (ES2015)',
    body: 'const ${0:dest} = $1',
  },

  if: {
    name: 'if statement',
    body: 'if ($1) $0',
  },
  el: {
    name: 'else statement',
    body: 'else $0',
  },
  ifel: {
    name: 'if/else statement',
    body: 'if ($1) $2 else $0',
  },
  elif: {
    name: 'else if statement',
    body: 'else if ($1) $0',
  },
  ter: {
    name: 'ternary operator',
    body: '$1 ? $2 : $0',
  },
  sw: {
    name: 'switch case',
    body: 'switch ($1) {\n\tcase $2 : $3\n\tdefault: $0\n}',
  },
  cas: {
    name: 'case',
    body: 'case $1 : $0',
  },

  fo: {
    name: 'for loop',
    body: 'for ($1 ; $2 ; $3) $0',
  },
  foi: {
    name: 'for in loop',
    body: 'for (const $1 in $2) {\n\tif ($2.hasOwnProperty($1)) {\n\t\t$0\n\t}\n}',
  },
  fof: {
    name: 'for of loop (ES2015)',
    body: 'for (const $1 of $2) $0',
  },
  foa: {
    name: 'for await of loop (ES2018)',
    body: 'for await (const $1 of $2) $0',
  },
  wh: {
    name: 'while loop',
    body: 'while ($1) $0',
  },
  tc: {
    name: 'try/catch',
    body: 'try {$1} catch $2 {$0}',
  },
  tf: {
    name: 'try/finally',
    body: 'try {$1} finally {$0}',
  },
  tcf: {
    name: 'try/catch/finally',
    body: 'try {$1} catch $2 {$3} finally {$0}',
  },

  f: {
    name: 'function',
    body: 'function ($1) {$0}',
  },
  fn: {
    name: 'named/generator function',
    body: 'function $1($2) {$0}',
  },
  fa: {
    name: 'async function',
    body: 'async function ($1) {$0}',
  },
  fna: {
    name: 'async named/generator function',
    body: 'async function $1($2) {$0}',
  },
  af: {
    name: 'arrow function (ES2015)',
    body: '($1) => $0',
  },
  afa: {
    name: 'async arrow function (ES2015)',
    body: 'async ($1) => $0',
  },
  iife: {
    name: 'immediately-invoked function expression (IIFE)',
    body: '($2)($1)$0',
  },

  seq: {
    name: 'sequence of 0..n',
    body: '[...Array(${1:length}).keys()]$0',
  },

  ol: {
    name: 'object literal',
    body: '{ $1: $0 }',
  },

  cs: {
    name: 'class (ES2015)',
    body: 'class $1 {\n\t$0\n}',
  },
  cse: {
    name: 'class extends (ES2015)',
    body: 'class $1 extends ${2:base} {\n\t$0\n}',
  },
  cst: {
    name: 'class constructor (ES2015)',
    body: 'constructor($1) {$0}',
  },
  csm: {
    name: 'method (ES2015)',
    body: '${1:name}($2) {$0}',
  },
  csma: {
    name: 'async method (ES2015)',
    body: 'async ${1:name}($2) {$0}',
  },
  gter: {
    name: 'getter (ES2015)',
    body: 'get ${1:property}() {$0}',
  },
  ster: {
    name: 'setter (ES2015)',
    body: 'set ${1:property}(${2:value}) {$0}',
  },
  gs: {
    name: 'getter and setter (ES2015)',
    body: 'get ${1:property}() {$0}\n\nset ${1:property}(${2:value}) {}',
  },

  tof: {
    name: 'typeof',
    body: 'typeof ${1:source} ${2:=}== $0',
  },
  iof: {
    name: 'instanceof',
    body: '${1:source} instanceof ${0:Class}',
  },

  pr: {
    name: 'Promise new (ES2015)',
    body: 'new Promise($0)',
  },
  prs: {
    name: 'Promise resolve (ES2015)',
    body: 'Promise.resolve($1)$0',
  },
  prj: {
    name: 'Promise reject (ES2015)',
    body: 'Promise.reject($1)$0',
  },
  pra: {
    name: 'Promise all (ES2015)',
    body: 'Promise.all($1)$0',
  },
  pras: {
    name: 'Promise all settled (ES2020)',
    body: 'Promise.allSettled($1)$0',
  },
  prn: {
    name: 'Promise any (ES2021)',
    body: 'Promise.any($1)$0',
  },
  prt: {
    name: 'Promise type (TypeScript)',
    body: 'Promise<$0>',
  },

  exp: {
    name: 'export (ES2015)',
    body: 'export $0',
  },
  expd: {
    name: 'export default (ES2015)',
    body: 'export default $0',
  },
  expas: {
    name: 'export as (ES2015)',
    body: 'export $1 as $2;$0',
  },
  expf: {
    name: 'export from (ES2015)',
    body: "export ${2:name} from '$1';$0",
  },
  expaf: {
    name: 'export all from (ES2015)',
    body: "export *$2 from '$1';$0",
  },
  im: {
    name: 'import (ES2015)',
    body: 'import$0',
  },
  imm: {
    name: 'import.meta (ES2015)',
    body: 'import.meta$0',
  },
  imu: {
    name: 'import.meta.url (ES2015)',
    body: 'import.meta.url$0',
  },
  imp: {
    name: 'import module (ES2015)',
    body: "import ${2:name} from '$1'$3;$0",
  },
  imd: {
    name: 'import module dynamically (ES2020)',
    body: 'import($1)$0',
  },
  imf: {
    name: 'import file (ES2015)',
    body: "import '$1';$0",
  },
  impas: {
    name: 'import module as (ES2015)',
    body: "import ${2:*} as ${3:name} from '$1'$3;$0",
  },

  cb: {
    name: 'Node.js style callback',
    body: '(err, ${1:response}) => {$0}',
  },
  re: {
    name: 'require (Node.JS)',
    body: 'require(${1:path})$0',
  },
  req: {
    name: 'require assignment (Node.JS)',
    body: "const ${2:name} = require('$1');$0",
  },
  em: {
    name: 'exports.member (Node.JS)',
    body: 'exports.$1 = $2;$0',
  },
  me: {
    name: 'module.exports (Node.JS)',
    body: 'module.exports = $1$0',
  },
  on: {
    name: 'event handler',
    body: "on('${1:event}', ${2:callback});$0",
  },

  cl: {
    name: 'console.log',
    body: 'console.log($1)$0',
  },
  cla: {
    name: 'console.assert',
    body: 'console.assert($1)$0',
  },
  clcl: {
    name: 'console.clear',
    body: 'console.clear($1)$0',
  },
  clc: {
    name: 'console.count',
    body: 'console.count($1)$0',
  },
  clcr: {
    name: 'console.countReset',
    body: 'console.countReset($1)$0',
  },
  cld: {
    name: 'console.debug',
    body: 'console.debug($1)$0',
  },
  cldi: {
    name: 'console.dir',
    body: 'console.dir($1)$0',
  },
  cldx: {
    name: 'console.dirxml',
    body: 'console.dirxml($1)$0',
  },
  cle: {
    name: 'console.error',
    body: 'console.error($1)$0',
  },
  clg: {
    name: 'console.group',
    body: ['console.group($1);', '$0', 'console.groupEnd($1);'],
  },
  clgc: {
    name: 'console.groupCollapsed',
    body: ['console.groupCollapsed($1);', '$0', 'console.groupEnd($1);'],
  },
  cli: {
    name: 'console.info',
    body: 'console.info($1)$0',
  },
  cltb: {
    name: 'console.table',
    body: 'console.table($1)$0',
  },
  clt: {
    name: 'console.time',
    body: ['console.time($1);', '$0', 'console.timeEnd($1);'],
  },
  cltl: {
    name: 'console.timeLog',
    body: 'console.timeLog($1)$0',
  },
  cltr: {
    name: 'console.trace',
    body: 'console.trace($1)$0',
  },
  clw: {
    name: 'console.warn',
    body: 'console.warn($1)$0',
  },

  sett: {
    name: 'setTimeout',
    body: 'setTimeout(${2:callback}, ${1:delay})$0',
  },
  setin: {
    name: 'setInterval',
    body: 'setInterval(${2:callback}, ${1:delay})$0',
  },
  setim: {
    name: 'setImmediate',
    body: 'setImmediate(${1:callback}$2)$0',
  },
  nt: {
    name: 'process nextTick',
    body: 'process.nextTick($1);$0',
  },

  us: {
    name: "insert 'use strict' statement",
    body: "'use strict';",
  },
});
