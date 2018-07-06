# Hyper JavaScript Snippets (Visual Studio Code)

[![Version](https://img.shields.io/vscode-marketplace/v/t7yang.hyper-javascript-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=t7yang.hyper-javascript-snippets)
[![Downloads](https://img.shields.io/vscode-marketplace/d/t7yang.hyper-javascript-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=t7yang.hyper-javascript-snippets)
[![Rating](https://img.shields.io/vscode-marketplace/r/t7yang.hyper-javascript-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=t7yang.hyper-javascript-snippets)

## Introduction
Hyper JavaScript Snippets is a snippets collection for JavaScript and TypeScript. The snippets follow some rules to make it more friendly to intellisense, point-free-style programming etc. Prettier is highly recommanded to work with this extension.

## Install and Setting
Install from VSCode Extension Marketplace [Hyper JavaScript Snippets](https://marketplace.visualstudio.com/items?itemName=t7yang.hyper-javascript-snippets).

Set `"editor.snippetSuggestions": "top"` to make VSCode show snippets on top of the suggestions.

## Snippets
Snippets are design in several different user friendly aspects compare to other snippet extensions, most of the snippets in this extension without a end semicolon and instructment placeholder.

### The Reason Why
Below explain the reason why these snippets have difference design perspective.

#### Rule 1: Cursor to the end
Snippets make cursor going to the end for let you determine should or should not add a semicolon and easy to going next.

#### Rule 2: Mostly no semicolon
Snippets end without a semicolon, except those snippets who surely end up with a semicolon. Not because of "Standard JS Style" (actually it is not standard), instead, it make you more controlable to the flow, as well as more friendly to point-free-style.

You still can easily determine whether or not to add a end semicolon because of the  "Rule 1". Or, if you using formatter like [Prettier](https://prettier.io/), semicolon would never a issue anymore.

#### Rule 3: No newline
Newline is added Only if it is necessary (like `switch case`). You who determine code should write in one line or multiple line. Besides, add a newline is just about a click.

#### Rule 4: Placeholder only if needed
Inappropriate placeholder may mess up everything, even intellisense. Placeholder is added only if it does not break anything or intellisense break without it.


### Declarations
| Prefix | Desc                                    | Body                    |
| -----: | --------------------------------------- | ----------------------- |
| `va`   | var assignment                          | `var ${1} = ${0}`       |
| `la`   | let assignment (ES2015)                 | `let ${1} = ${0}`       |
| `ca`   | const assignment (ES2015)               | `const ${1} = ${0}`     |
| `vda`  | var destructuring assignment (ES2015)   | `var ${2} = ${1}${0}`   |
| `lda`  | let destructuring assignment (ES2015)   | `let ${2} = ${1}${0}`   |
| `cda`  | const destructuring assignment (ES2015) | `const ${2} = ${1}${0}` |

### Conditional
| Prefix    | Desc              | Body                                                                                                                                                 |
| --------: | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `if`      | if statement      | `if (${1}) {${0}}`                                                                                                                                   |
| `else`    | else statement    | `else {${0}}`                                                                                                                                        |
| `ifel`    | if/else statement | `if (${1}) {${2}} else {${0}}`                                                                                                                       |
| `elif`    | else if statement | `else if (${1}) {${0}}`                                                                                                                              |
| `ternary` | ternary operator  | `${1} ? ${2} : ${3}`                                                                                                                                 |
| `switch`  | switch case       | <code>switch (${1}) {<br>&nbsp;&nbsp;case ${2} :<br>&nbsp;&nbsp;&nbsp;&nbsp;$0<br>&nbsp;&nbsp;default:<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>}</code> |
| `case`    | switch's case     | <code>case ${1} :<br>&nbsp;&nbsp;${0}</code>                                                                                                         |

### Iteration
| Prefix    | Desc                   | Body                                                                                                                                          |
| --------: | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `for`     | for loop               | <code>for (${1} ; ${2} ; ${3}) {<br>&nbsp;&nbsp;${0}<br>}</code>                                                                              |
| `forarr`  | for loop array         | <code>for (let ${1} = 0, ${2} = ${3}.length; ${1} < ${2}; ${1}++) {<br>&nbsp;&nbsp;${0}<br>}</code>                                           |
| `rforarr` | reverse for loop array | <code>for (let ${1} = ${2}.length - 1; ${1} >= 0; ${1}--) {<br>&nbsp;&nbsp;${0}<br>}</code>                                                   |
| `forin`   | for in loop            | <code>for (const ${1} in ${2}) {<br>&nbsp;&nbsp;if (${2}.hasOwnProperty(${1})) {<br>&nbsp;&nbsp;&nbsp;&nbsp;${0}<br>&nbsp;&nbsp;}<br>}</code> |
| `forof`   | for of loop (ES2015)   | <code>for (const ${1} of ${2}) {<br>&nbsp;&nbsp;${0}<br>}</code>                                                                              |
| `while`   | while loop             | `while (${1}) {${0}}`                                                                                                                         |
| `tc`      | try/catch              | `try {${0}} catch (error) {${1}}`                                                                                                             |
| `tryfin`  | try/finally            | `try {${0}} finally {${1}}`                                                                                                                   |
| `tcf`     | try/catch/finally      | `try {${0}} catch (error) {${1}} finally {${2}}`                                                                                              |

### Functions
| Prefix   | Desc                                           | Body                                   |
| -------: | ---------------------------------------------- | -------------------------------------- |
| `dp`     | destructuring parameter (ES2015)               | `{${0}}: ${1:parameter}`               |
| `f`      | anonymous function                             | `function(${1}) {${2}}${0}`            |
| `fn`     | named function                                 | `function ${1}(${2}) {${3}}${0}`       |
| `af`     | arrow function (ES2015)                        | `(${1}) => ${2}`                       |
| `fa`     | async anonymous function                       | `async function (${1}) {${2}}${0}`     |
| `fna`    | async named function                           | `async function ${1}(${2}) {${3}}${0}` |
| `afa`    | async arrow function (ES2015)                  | `async (${1}) => ${2}`                 |
| `iife`   | immediately-invoked function expression (IIFE) | `(${2})(${1})${0}`                     |
| `fapply` | function apply                                 | `${1}.apply(${2:this})${0}`            |
| `fcall`  | function call                                  | `${1}.call(${2:this})${0}`             |
| `fbind`  | function bind                                  | `${1}.bind(${2:this})${0}`             |
| `gf`     | anonymous generator function (ES2015)          | `function* (${1}) {${0}}`              |
| `gfa`    | async generator function (ES2018)              | `async function* (${1}) {${0}}`        |
| `gfn`    | named generator function (ES2015)              | `function* ${1}(${2}) {${0}}`          |
| `gfna`   | async named generator function (ES2018)        | `async function* ${1}(${2}) {${0}}`    |

### Iterables
| Prefix | Desc             | Body                                 |
| -----: | ---------------- | ------------------------------------ |
| `seq`  | sequence of 0..n | `[...Array(${1:length}).keys()]${0}` |

### Objects
| Prefix | Desc                               | Body                                            |
| -----: | ---------------------------------- | ----------------------------------------------- |
| `ol`   | object literal                     | `{ ${1}: ${2}, }`                               |
| `kv`   | key/value pair                     | `${1}: ${2},`                                   |
| `oa`   | Object.assign                      | `Object.assign(${1:dest}, ${2:source})`         |
| `oc`   | Object.assign copy (shallow clone) | `Object.assign({}, ${1:original}, ${2:source})` |

### Classes
| Prefix  | Desc                       | Body                                                                            |
| ------: | -------------------------- | ------------------------------------------------------------------------------- |
| `c`     | class (ES2015)             | <code>class ${1:name} {<br>&nbsp;&nbsp;${0}<br>}</code>                         |
| `cex`   | class extends (ES2015)     | <code>class ${1:name} extends ${2:base} {<br>&nbsp;&nbsp;${0}<br>}</code>       |
| `ctor`  | class constructor (ES2015) | `constructor(${1}) {${0}}`                                                      |
| `cm`    | method (ES2015)            | `${1:name}(${2}) {${0}}`                                                        |
| `acm`   | async method (ES2015)      | `async ${1:name}(${2}) {${0}}`                                                  |
| `gter`  | getter (ES2015)            | `get ${1:property}() {${0}}`                                                    |
| `ster`  | setter (ES2015)            | `set ${1:property}(${2:value}) {${0}}`                                          |
| `gs`    | getter and setter (ES2015) | <code>get ${1:property}() {${0}}<br><br>set ${1:property}(${2:value}) {}</code> |
| `pctor` | prototypal constructor     | `var ${1:Class} = function(${2}) {${0}};`                                       |
| `proto` | prototype method           | `${1:Class}.prototype.${2:method} = function(${3}) {${0}};`                     |

### Types
| Prefix | Desc       | Body                                 |
| -----: | ---------- | ------------------------------------ |
| `tof`  | typeof     | `typeof ${1:source} === '${2:type}'` |
| `iof`  | instanceof | `${1:source} instanceof ${2:Class}`  |

### Promises
| Prefix | Desc             | Body                             |
| -----: | ---------------- | -------------------------------- |
| `p`    | Promise (ES2015) | `new Promise(${0})`              |
| `pth`  | Promise.then     | `${1:promise}.then(${2})${0}`    |
| `pcat` | Promise.catch    | `${1:promise}.catch(${2})${0}`   |
| `pfin` | Promise.finally  | `${1:promise}.finally(${2})${0}` |

### ES2015 Modules
| Prefix   | Desc                      | Body                                          |
| -------: | ------------------------- | --------------------------------------------- |
| `exp`    | export (ES2015)           | `export ${0}`                                 |
| `expd`   | export default (ES2015)   | `export default ${0}`                         |
| `expas`  | export as (ES2015)        | `export { ${1} as ${2} };${0}`                |
| `expf`   | export from (ES2015)      | `export ${2:name} from '${1}';${0}`           |
| `import` | import (ES2015)           | `import ${1}`                                 |
| `imp`    | import module (ES2015)    | `import ${2:name} from '${1}';${0}`           |
| `impas`  | import module as (ES2015) | `import ${2:*} as ${3:name} from '${1}';${0}` |

### Node.js
| Prefix    | Desc                   | Body                                     |
| --------: | ---------------------- | ---------------------------------------- |
| `cb`      | Node.js style callback | `(err, ${1:response}) => {${0}}`         |
| `require` | require                | `require(${1:path})${0}`                 |
| `req`     | require assignment     | `const ${2:name} = require('${1}');${0}` |
| `em`      | exports.member         | `exports.${1} = ${2};${0}`               |
| `me`      | module.exports         | `module.exports = ${1}${0}`              |
| `on`      | event handler          | `on('${1:event}', ${2:callback});${0}`   |

### Console
| Prefix | Desc                  | Body                              |
| -----: | --------------------- | --------------------------------- |
| `cl`   | console.log           | `console.log(${1})${0}`           |
| `ce`   | console.error         | `console.error(${1})${0}`         |
| `cw`   | console.warn          | `console.warn(${1})${0}`          |
| `cll`  | console.log labeled   | `console.log('${1}', ${1})${0}`   |
| `cel`  | console.error labeled | `console.error('${1}', ${1})${0}` |
| `cwl`  | console.warn labeled  | `console.warn('${1}', ${1})${0}`  |

### Timers
| Prefix     | Desc                       | Body                                         |
| ---------: | -------------------------- | -------------------------------------------- |
| `sett`     | setTimeout                 | `setTimeout(${2:callback}, ${1:delay})${0}`  |
| `setin`    | setInterval                | `setInterval(${2:callback}, ${1:delay})${0}` |
| `setim`    | setImmediate (node.js)     | `setImmediate(${1:callback}${2})${0}`        |
| `nexttick` | process nextTick (node.js) | `process.nextTick(${1});${0}`                |

### Miscellaneous
| Prefix | Desc                          | Body            |
| -----: | ----------------------------- | --------------- |
| `us`   | insert 'use strict' statement | `'use strict';` |

### TypeScript
| Prefix | Desc                   | Body                             |
| -----: | ---------------------- | -------------------------------- |
| `typ`  | type (TypeScript)      | `type ${1:name} = ${0}`          |
| `int`  | interface (TypeScript) | `interface ${1:name} {${2}}${0}` |
| `enum` | enum (TypeScript)      | `enum ${1:name} {${2}}${0}`      |
| `mod`  | module (TypeScript)    | `module ${1:name} {${2}}${0}`    |
| `nam`  | namespace (TypeScript) | `namespace ${1:name} {${2}}${0}` |
