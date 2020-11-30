# Hyper JavaScript Snippets (Visual Studio Code)

[![Version](https://img.shields.io/vscode-marketplace/v/t7yang.hyper-javascript-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=t7yang.hyper-javascript-snippets)
[![Downloads](https://img.shields.io/vscode-marketplace/d/t7yang.hyper-javascript-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=t7yang.hyper-javascript-snippets)
[![Rating](https://img.shields.io/vscode-marketplace/r/t7yang.hyper-javascript-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=t7yang.hyper-javascript-snippets)

## Introduction
Hyper JavaScript Snippets is a snippets collection for JavaScript and TypeScript. The snippets follow some rules to make it more friendly to intellisense, point-free-style programming etc. Prettier is highly recommanded to work with this extension.

Install from VSCode Extension Marketplace [Hyper JavaScript Snippets](https://marketplace.visualstudio.com/items?itemName=t7yang.hyper-javascript-snippets).

## What's the difference
1. Cursor to the end - more easy to go next and let developer decide ending semicolon.
2. No semicolon - for point-free friendly, except some snippets than surely end up with a semicolon. (👎 Standard JS Style)
3. No newline - except few "big structure" snippets (like for loop).
4. No placeholder - except something break without a placeholder (like import module).

## Suggestions
- Use [Prettier](https://prettier.io/) to help you formating your code.
- Set `"editor.snippetSuggestions": "top"`.
- Set `"editor.formatOnSave": true,`.
- Set `"editor.suggest.snippetsPreventQuickSuggestions": false,`.

## Known issues
- Moving cursor when typing in active snippet break tab stop ([intented](https://github.com/Microsoft/vscode/issues/32790#issuecomment-323655481)), but sometime okey 😩.
  - Can not use "choice" to provide selection, affect: destrucring assignment...
- There is no intenllisense / autocomplete hint when typing in active snippet (VSCode default).
  - Affect: No more autocomplete hint including any snippet, object methods, or global function .
  - Turn off `editor.suggest.snippetsPreventQuickSuggestions` help a bit.
- Can not correctly generate paired bracket when there is a character right beside cursor.
  - A space added before `:`, affect: `sw`, `case`, `pd`, etc.

### Declarations
| Prefix | Desc                                    | Body                     |
| -----: | --------------------------------------- | ------------------------ |
|   `va` | var assignment                          | `var ${1} = ${0}`        |
|   `la` | let assignment (ES2015)                 | `let ${1} = ${0}`        |
|   `ca` | const assignment (ES2015)               | `const ${1} = ${0}`      |
|  `vad` | var destructuring assignment (ES2015)   | `var ${0:dest} = ${1}`   |
|  `lad` | let destructuring assignment (ES2015)   | `let ${0:dest} = ${1}`   |
|  `cad` | const destructuring assignment (ES2015) | `const ${0:dest} = ${1}` |

### Conditional
| Prefix | Desc              | Body                                                                                                                                                 |
| -----: | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
|   `if` | if statement      | `if (${1}) ${0}`                                                                                                                                     |
|   `el` | else statement    | `else ${0}`                                                                                                                                          |
| `ifel` | if/else statement | `if (${1}) ${2} else ${0}`                                                                                                                           |
| `elif` | else if statement | `else if (${1}) ${0}`                                                                                                                                |
|  `ter` | ternary operator  | `${1} ? ${2} : ${0}`                                                                                                                                 |
|   `sw` | switch case       | <code>switch (${1}) {<br>&nbsp;&nbsp;case ${2} :<br>&nbsp;&nbsp;&nbsp;&nbsp;$0<br>&nbsp;&nbsp;default:<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>}</code> |
| `case` | switch's case     | <code>case ${1} :<br>&nbsp;&nbsp;${0}</code>                                                                                                         |

### Statement
| Prefix | Desc                       | Body                                                                                                                                          |
| -----: | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|   `fo` | for loop                   | `for (${1} ; ${2} ; ${3}) ${0}`                                                                                                               |
|  `foi` | for in loop                | <code>for (const ${1} in ${2}) {<br>&nbsp;&nbsp;if (${2}.hasOwnProperty(${1})) {<br>&nbsp;&nbsp;&nbsp;&nbsp;${0}<br>&nbsp;&nbsp;}<br>}</code> |
|  `fof` | for of loop (ES2015)       | `for (const ${1} of ${2}) ${0}`                                                                                                               |
|  `foa` | for await of loop (ES2018) | `for await (const ${1} of ${2}) ${0}`                                                                                                         |
|   `wh` | while loop                 | `while (${1}) ${0}`                                                                                                                           |
|   `tc` | try/catch                  | `try {${1}} catch ${2} {${0}}`                                                                                                                |
|   `tf` | try/finally                | `try {${1}} finally {${0}}`                                                                                                                   |
|  `tcf` | try/catch/finally          | `try {${1}} catch ${2} {${3}} finally {${0}}`                                                                                                 |

### Functions
| Prefix | Desc                                           | Body                               |
| -----: | ---------------------------------------------- | ---------------------------------- |
|    `f` | anonymous function                             | `function(${1}) {${0}}`            |
|   `fn` | named function                                 | `function ${1}(${2}) {${0}}`       |
|   `fa` | async anonymous function                       | `async function (${1}) {${0}}`     |
|  `fna` | async named function                           | `async function ${1}(${2}) {${0}}` |
|   `af` | arrow function (ES2015)                        | `(${1}) => ${0}`                   |
|  `afa` | async arrow function (ES2015)                  | `async (${1}) => ${0}`             |
| `iife` | immediately-invoked function expression (IIFE) | `(${2})(${1})${0}`                 |
|   `pd` | parameter destructuring with type (TypeScript) | `${0:param} : ${1:type}`           |

### Iterables
| Prefix | Desc             | Body                                 |
| -----: | ---------------- | ------------------------------------ |
|  `seq` | sequence of 0..n | `[...Array(${1:length}).keys()]${0}` |

### Objects
| Prefix | Desc           | Body             |
| -----: | -------------- | ---------------- |
|   `ol` | object literal | `{ ${1}: ${0} }` |

### Classes
| Prefix | Desc                       | Body                                                                            |
| -----: | -------------------------- | ------------------------------------------------------------------------------- |
|   `cs` | class (ES2015)             | <code>class ${1:name} {<br>&nbsp;&nbsp;${0}<br>}</code>                         |
|  `cse` | class extends (ES2015)     | <code>class ${1:name} extends ${2:base} {<br>&nbsp;&nbsp;${0}<br>}</code>       |
| `ctor` | class constructor (ES2015) | `constructor(${1}) {${0}}`                                                      |
|  `csm` | method (ES2015)            | `${1:name}(${2}) {${0}}`                                                        |
| `csma` | async method (ES2015)      | `async ${1:name}(${2}) {${0}}`                                                  |
| `gter` | getter (ES2015)            | `get ${1:property}() {${0}}`                                                    |
| `ster` | setter (ES2015)            | `set ${1:property}(${2:value}) {${0}}`                                          |
|   `gs` | getter and setter (ES2015) | <code>get ${1:property}() {${0}}<br><br>set ${1:property}(${2:value}) {}</code> |

### Types
| Prefix | Desc       | Body                                |
| -----: | ---------- | ----------------------------------- |
|  `tof` | typeof     | `typeof ${1:source} === ${0}`       |
|  `iof` | instanceof | `${1:source} instanceof ${0:Class}` |

### Promises
| Prefix | Desc                      | Body                        |
| -----: | ------------------------- | --------------------------- |
|   `pr` | Promise (ES2015)          | `new Promise(${0})`         |
|  `prs` | Promise resolve (ES2015)  | `Promise.resolve(${1})${0}` |
|  `prj` | Promise reject (ES2015)   | `Promise.reject(${1})${0}`  |
|  `pra` | Promise all (ES2015)      | `Promise.all(${1})${0}`     |
|  `prt` | Promise type (TypeScript) | `Promise<${0}>`             |

### ES2015 Modules
|  Prefix | Desc                      | Body                                          |
| ------: | ------------------------- | --------------------------------------------- |
|   `exp` | export (ES2015)           | `export ${0}`                                 |
|  `expd` | export default (ES2015)   | `export default ${0}`                         |
| `expas` | export as (ES2015)        | `export { ${1} as ${2} };${0}`                |
|  `expf` | export from (ES2015)      | `export ${2:name} from '${1}';${0}`           |
| `expaf` | export all from (ES2015)  | `export *${2} from '${1}';${0}`               |
|   `imp` | import module (ES2015)    | `import ${2:name} from '${1}';${0}`           |
|  `impf` | import file (ES2015)      | `import '${1}';${0}`                          |
| `impas` | import module as (ES2015) | `import ${2:*} as ${3:name} from '${1}';${0}` |

### Node.js
|    Prefix | Desc                   | Body                                     |
| --------: | ---------------------- | ---------------------------------------- |
|      `cb` | Node.js style callback | `(err, ${1:response}) => {${0}}`         |
| `require` | require                | `require(${1:path})${0}`                 |
|     `req` | require assignment     | `const ${2:name} = require('${1}');${0}` |
|      `em` | exports.member         | `exports.${1} = ${2};${0}`               |
|      `me` | module.exports         | `module.exports = ${1}${0}`              |
|      `on` | event handler          | `on('${1:event}', ${2:callback});${0}`   |

### Console
| Prefix | Desc          | Body                                                                   |
| -----: | ------------- | ---------------------------------------------------------------------- |
|   `cl` | console.log   | `console.log(${1})${0}`                                                |
|   `ce` | console.error | `console.error(${1})${0}`                                              |
|   `cw` | console.warn  | `console.warn(${1})${0}`                                               |
|   `cd` | console.dir   | `console.dir(${1})${0}`                                                |
|   `ct` | console.time  | <code>console.time('${1}') <br>${0}<br> console.timeEnd('${1}')</code> |

### Timers
|  Prefix | Desc                       | Body                                         |
| ------: | -------------------------- | -------------------------------------------- |
|  `sett` | setTimeout                 | `setTimeout(${2:callback}, ${1:delay})${0}`  |
| `setin` | setInterval                | `setInterval(${2:callback}, ${1:delay})${0}` |
| `setim` | setImmediate (node.js)     | `setImmediate(${1:callback}${2})${0}`        |
|    `nt` | process nextTick (node.js) | `process.nextTick(${1});${0}`                |

### Miscellaneous
| Prefix | Desc                          | Body            |
| -----: | ----------------------------- | --------------- |
|   `us` | insert 'use strict' statement | `'use strict';` |

### TypeScript (Data Types)
| Prefix | Desc                    | Body                              |
| -----: | ----------------------- | --------------------------------- |
|  `typ` | type (TypeScript)       | `type ${1:name} = ${0}`           |
|  `int` | interface (TypeScript)  | `interface ${1:name} {${2}}${0}`  |
|  `enu` | enum (TypeScript)       | `enum ${1:name} {${2}}${0}`       |
|  `enc` | const enum (TypeScript) | `const enum ${1:name} {${2}}${0}` |
|  `mod` | module (TypeScript)     | `module ${1:name} {${2}}${0}`     |
|  `nam` | namespace (TypeScript)  | `namespace ${1:name} {${2}}${0}`  |

> Only in `typescript` and `typescriptreact` file type.
