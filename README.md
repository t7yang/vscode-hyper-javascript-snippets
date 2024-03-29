# Hyper JavaScript Snippets (Visual Studio Code)

[![Version](https://img.shields.io/vscode-marketplace/v/t7yang.hyper-javascript-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=t7yang.hyper-javascript-snippets)
[![Downloads](https://img.shields.io/vscode-marketplace/d/t7yang.hyper-javascript-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=t7yang.hyper-javascript-snippets)
[![Rating](https://img.shields.io/vscode-marketplace/r/t7yang.hyper-javascript-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=t7yang.hyper-javascript-snippets)

## Introduction
Hyper JavaScript Snippets is a snippets collection for JavaScript and TypeScript. The snippets follow some rules to make it more friendly to intellisense, point-free-style programming etc. Prettier is highly recommanded to work with this extension.

Install from VSCode Extension Marketplace [Hyper JavaScript Snippets](https://marketplace.visualstudio.com/items?itemName=t7yang.hyper-javascript-snippets).

## Advantages
1. Easy Learn - related snippets shared a same namespace or pattern, like every `for` loop prefix start with `fo`, all assignment snippet share `*a` pattern.
2. Composable - No semicolon (point-free friendly), no newline, no placeholder, small snippet, the very end tabstop as possible, make composing snippets friendly.
3. Avoid conflict - Try to avoid snippet's prefix conflict with variable name and built-in snippet's prefix.

## Suggestions
- Use [Prettier](https://prettier.io/) to help you formating your code.
- Disable built-in snippets with [Control Snippets](https://marketplace.visualstudio.com/items?itemName=svipas.control-snippets) or hiding with built-in command [`Insert Snippet`](https://marketplace.visualstudio.com/items?itemName=svipas.control-snippets).
- Set `"editor.snippetSuggestions": "top"`.
- Set `"editor.formatOnSave": true,`.
- Set `"editor.suggest.snippetsPreventQuickSuggestions": false,`.

## Known issues
- Moving cursor on snippet content break tab stop ([intented](https://github.com/Microsoft/vscode/issues/32790#issuecomment-323655481)), but okey on user input content 😩.
  - Can not use "choice" to provide selection, affect: destrucring assignment...
- There is no intenllisense / autocomplete hint when typing in active snippet (VSCode default).
  - Affect: No more autocomplete hint including any snippet, object methods, or global function .
  - Turn off `editor.suggest.snippetsPreventQuickSuggestions` help a bit.
- Can not correctly generate paired bracket when there is a character right beside cursor.
  - A space added before `:`, affect: `sw`, `case`, `pd`, etc.

## FAQ

> How to remember so many snippets prefix for new user? <br />

Related snippets shared a same namespace, like for every `for` loop snippets prefix are start with `fo`, all assignment snippets shared `*a` pattern.

### Declarations
| Prefix | Desc                                    | Body                   |
| -----: | --------------------------------------- | ---------------------- |
|   `va` | var assignment                          | `var $1 = $0`          |
|   `la` | let assignment (ES2015)                 | `let $1 = $0`          |
|   `ca` | const assignment (ES2015)               | `const $1 = $0`        |
|  `vad` | var destructuring assignment (ES2015)   | `var ${0:dest} = $1`   |
|  `lad` | let destructuring assignment (ES2015)   | `let ${0:dest} = $1`   |
|  `cad` | const destructuring assignment (ES2015) | `const ${0:dest} = $1` |

### Conditional
| Prefix | Desc              | Body                 |
| -----: | ----------------- | -------------------- |
|   `if` | if statement      | `if ($1) $0`         |
|   `el` | else statement    | `else $0`            |
| `ifel` | if/else statement | `if ($1) $2 else $0` |
| `elif` | else if statement | `else if ($1) $0`    |
|  `ter` | ternary operator  | `$1 ? $2 : $0`       |
|   `sw` | switch case       | `switch ($1) {$2}$0` |
| `case` | switch's case     | `case $1 : $0`       |

### Statement
| Prefix | Desc                       | Body                                  |
| -----: | -------------------------- | ------------------------------------- |
|   `fo` | for loop                   | `for ($1 ; $2 ; $3) $0`               |
|  `foi` | for in loop                | `for (const $1 in $2) $0`             |
|  `fof` | for of loop (ES2015)       | `for (const $1 of $2) $0`             |
|  `foa` | for await of loop (ES2018) | `for await (const $1 of $2) $0`       |
|   `wh` | while loop                 | `while ($1) $0`                       |
|   `tc` | try/catch                  | `try {$1} catch $2 {$0}`              |
|   `tf` | try/finally                | `try {$1} finally {$0}`               |
|  `tcf` | try/catch/finally          | `try {$1} catch $2 {$3} finally {$0}` |

### Functions
| Prefix | Desc                                                        | Body                           |
| -----: | ----------------------------------------------------------- | ------------------------------ |
|    `f` | function                                                    | `function ($1) {$0}`           |
|    `f` | function (TypeScript)                                       | `function ($1)$2 {$0}`         |
|   `fn` | named/generator function                                    | `function $1($2) {$0}`         |
|   `fn` | named/generator function (TypeScript)                       | `function $1($2)$3 {$0}`       |
|   `fa` | async function                                              | `async function ($1) {$0}`     |
|   `fa` | async function (TypeScript)                                 | `async function ($1)$2 {$0}`   |
|  `fna` | async named/generator function                              | `async function $1($2) {$0}`   |
|  `fna` | async named/generator function (TypeScript)                 | `async function $1($2)$3 {$0}` |
|   `af` | arrow function (ES2015)                                     | `($1) => $0`                   |
|  `afa` | async arrow function (ES2015)                               | `async ($1) => $0`             |
|   `ar` | arrow function with return type (ES2015, TypeScript)        | `($1)$2 => $0`                 |
|  `ara` | async arrow function with return type (ES2015, TypeScript)  | `async ($1)$2 => $0`           |
|   `ag` | generic/generator arrow function (ES2015, TypeScript)       | `$1($2)$3 => $0`               |
|  `aga` | async generic/generator arrow function (ES2015, TypeScript) | `async $1($2)$3 => $0`         |
| `iife` | immediately-invoked function expression (IIFE)              | `($2)($1)$0`                   |
|   `pd` | parameter destructuring with type (TypeScript)              | `${0:param} : ${1:type}`       |

### Iterables
| Prefix | Desc             | Body                               |
| -----: | ---------------- | ---------------------------------- |
|  `seq` | sequence of 0..n | `[...Array(${1:length}).keys()]$0` |

### Objects
| Prefix | Desc           | Body         |
| -----: | -------------- | ------------ |
|   `ol` | object literal | `{ $1: $0 }` |

### Classes
| Prefix | Desc                       | Body                                                                          |
| -----: | -------------------------- | ----------------------------------------------------------------------------- |
|   `cs` | class (ES2015)             | <code>class ${1:name} {<br>&nbsp;&nbsp;$0<br>}</code>                         |
|  `cse` | class extends (ES2015)     | <code>class ${1:name} extends ${2:base} {<br>&nbsp;&nbsp;$0<br>}</code>       |
|  `cst` | class constructor (ES2015) | `constructor($1) {$0}`                                                        |
|  `csm` | method (ES2015)            | `${1:name}($2) {$0}`                                                          |
| `csma` | async method (ES2015)      | `async ${1:name}($2) {$0}`                                                    |
| `gter` | getter (ES2015)            | `get ${1:property}() {$0}`                                                    |
| `ster` | setter (ES2015)            | `set ${1:property}(${2:value}) {$0}`                                          |
|   `gs` | getter and setter (ES2015) | <code>get ${1:property}() {$0}<br><br>set ${1:property}(${2:value}) {}</code> |

### Types
| Prefix | Desc       | Body                                |
| -----: | ---------- | ----------------------------------- |
|  `tof` | typeof     | `typeof ${1:source} === $0`         |
|  `iof` | instanceof | `${1:source} instanceof ${0:Class}` |

### Promises
| Prefix | Desc                         | Body                       |
| -----: | ---------------------------- | -------------------------- |
|   `pr` | Promise (ES2015)             | `new Promise($0)`          |
|  `prs` | Promise resolve (ES2015)     | `Promise.resolve($1)$0`    |
|  `prj` | Promise reject (ES2015)      | `Promise.reject($1)$0`     |
|  `pra` | Promise all (ES2015)         | `Promise.all($1)$0`        |
| `pras` | Promise all settled (ES2020) | `Promise.allSettled($1)$0` |
|  `prn` | Promise any (ES2021)         | `Promise.any($1)$0`        |
|  `prt` | Promise type (TypeScript)    | `Promise<$0>`              |

### ES2015 Modules
|  Prefix | Desc                               | Body                                        |
| ------: | ---------------------------------- | ------------------------------------------- |
|   `exp` | export (ES2015)                    | `deprecated: export $0`                     |
|  `expd` | export default (ES2015)            | `deprecated: export default $0`             |
| `expas` | export as (ES2015)                 | `deprecated: export { $1 as $2 };$0`        |
|  `expf` | export from (ES2015)               | `deprecated: export ${2:name} from '$1';$0` |
| `expaf` | export all from (ES2015)           | `deprecated: export *$2 from '$1';$0`       |
|    `ex` | export (ES2015)                    | `export $0`                                 |
|   `exd` | export default (ES2015)            | `export default $0`                         |
|  `exas` | export as (ES2015)                 | `export { $1 as $2 };$0`                    |
|   `exf` | export from (ES2015)               | `export ${2:name} from '$1';$0`             |
|  `exaf` | export all from (ES2015)           | `export *$2 from '$1';$0`                   |
|    `im` | import (ES2015)                    | `import$0`                                  |
|   `imm` | import.meta (ES2015)               | `import.meta$0`                             |
|   `imu` | import.meta.url (ES2015)           | `import.meta.url$0`                         |
|   `imp` | import module (ES2015)             | `import ${2:name} from '$1'$3;$0`           |
|   `imd` | import module dynamically (ES2020) | `import($1)$0`                              |
|   `imf` | import file (ES2015)               | `import '$1';$0`                            |
| `impas` | import module as (ES2015)          | `import ${2:*} as ${3:name} from '$1'$3;$0` |

### Node.js
| Prefix | Desc                   | Body                                 |
| -----: | ---------------------- | ------------------------------------ |
|   `cb` | Node.js style callback | `(err, ${1:response}) => {$0}`       |
|   `re` | require                | `require(${1:path})$0`               |
|  `req` | require assignment     | `const ${2:name} = require('$1');$0` |
|   `em` | exports.member         | `exports.$1 = $2;$0`                 |
|   `me` | module.exports         | `module.exports = $1$0`              |
|   `on` | event handler          | `on('${1:event}', ${2:callback});$0` |

### Console
| Prefix | Desc                   | Body                                                                  |
| -----: | ---------------------- | --------------------------------------------------------------------- |
|   `cl` | console.log            | `console.log($1)$0`                                                   |
|  `cla` | console.assert         | `console.assert($1)$0`                                                |
| `clcl` | console.clear          | `console.clear($1)$0`                                                 |
|  `clc` | console.count          | `console.count($1)$0`                                                 |
| `clcr` | console.countReset     | `console.countReset($1)$0`                                            |
|  `cld` | console.debug          | `console.debug($1)$0`                                                 |
| `cldi` | console.dir            | `console.dir($1)$0`                                                   |
| `cldx` | console.dirxml         | `console.dirxml($1)$0`                                                |
|  `cle` | console.error          | `console.error($1)$0`                                                 |
|  `clg` | console.group          | <code>console.group($1)<br>$0<br>console.groupEnd($1)</code>          |
| `clgc` | console.groupCollapsed | <code>console.groupCollapsed($1)<br>$0<br>console.groupEnd($1)</code> |
|  `cli` | console.info           | `console.info($1)$0`                                                  |
| `cltb` | console.table          | `console.table($1)$0`                                                 |
|  `clt` | console.time           | <code>console.time('$1') <br>$0<br> console.timeEnd('$1')</code>      |
| `cltl` | console.timeLog        | `console.timeLog($1)$0`                                               |
| `cltr` | console.trace          | `console.trace($1)$0`                                                 |
|  `clw` | console.warn           | `console.warn($1)$0`                                                  |

### Timers
|  Prefix | Desc                       | Body                                       |
| ------: | -------------------------- | ------------------------------------------ |
|  `sett` | setTimeout                 | `setTimeout(${2:callback}, ${1:delay})$0`  |
| `setin` | setInterval                | `setInterval(${2:callback}, ${1:delay})$0` |
| `setim` | setImmediate (node.js)     | `setImmediate(${1:callback}$2)$0`          |
|    `nt` | process nextTick (node.js) | `process.nextTick($1);$0`                  |

### Miscellaneous
| Prefix | Desc                          | Body            |
| -----: | ----------------------------- | --------------- |
|   `us` | insert 'use strict' statement | `'use strict';` |

### TypeScript (Data Types)
| Prefix | Desc                    | Body                          |
| -----: | ----------------------- | ----------------------------- |
|  `typ` | type (TypeScript)       | `type ${1:name} = $0`         |
|  `int` | interface (TypeScript)  | `interface ${1:name} {$2}$0`  |
|  `enu` | enum (TypeScript)       | `enum ${1:name} {$2}$0`       |
|  `enc` | const enum (TypeScript) | `const enum ${1:name} {$2}$0` |
|  `mod` | module (TypeScript)     | `module ${1:name} {$2}$0`     |
|  `nam` | namespace (TypeScript)  | `namespace ${1:name} {$2}$0`  |

> Only in `typescript` and `typescriptreact` file type.
