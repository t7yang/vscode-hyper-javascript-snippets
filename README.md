# Hyper JavaScript Snippets (Visual Studio Code)

[![Version](https://img.shields.io/vscode-marketplace/v/t7yang.hyper-javascript-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=t7yang.hyper-javascript-snippets)
[![Downloads](https://img.shields.io/vscode-marketplace/d/t7yang.hyper-javascript-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=t7yang.hyper-javascript-snippets)
[![Rating](https://img.shields.io/vscode-marketplace/r/t7yang.hyper-javascript-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=t7yang.hyper-javascript-snippets)

## Introduction
Hyper JavaScript Snippets is a snippets collection for JavaScript and TypeScript. The snippets follow some rules to make it more friendly to intellisense, point-free-style programming etc. Prettier is highly recommanded to work with this extension.

Install from VSCode Extension Marketplace [Hyper JavaScript Snippets](https://marketplace.visualstudio.com/items?itemName=t7yang.hyper-javascript-snippets).

## What's the difference
1. Cursor to the end - more easy to go next and let developer decide ending semicolon.
2. No semicolon - for point-free friendly, except some snippets than surely end up with a semicolon. (Standard JS Style 👍)
3. No newline - except few "big structure" snippets (like for loop).
4. No placeholder - except something break without a placeholder (like import module).

## Suggestions
- Use [Prettier](https://prettier.io/) to help you formating your code.
- Set `"editor.snippetSuggestions": "top"`.
- Set `"editor.formatOnSave": true,`.
- Set `"editor.suggest.snippetsPreventQuickSuggestions": false,`.

## Known issues
- Moving cursor when typing in snippet break tab stop ([intented](https://github.com/Microsoft/vscode/issues/32790#issuecomment-323655481)), but sometime okey 😩.
  - Can not use "choice" to provide selection, affect: destrucring assignment...
- There is no intenllisense providing when typing in snippet by default
  - Affect: parameter destructuring with type etc.
  - Fix by turn off `editor.suggest.snippetsPreventQuickSuggestions`.
- Can not correctly generate paired bracket when there is a character right beside cursor.
  - A space added left side `:`, affect: `switch`, `case`, `pd`, etc.
- Intellisense not available on tab stop status (no way, until code support).
  - Intellisense is not available on destructuring source (`cad`, `pd`, ...)

### Declarations

`va` <kbd>⇥</kbd> var assignment

```javascript
var ${1} = ${0}
```

`la` <kbd>⇥</kbd> let assignment (ES2015)

```javascript
let ${1} = ${0}
```

`ca` <kbd>⇥</kbd> const assignment (ES2015)

```javascript
const ${1} = ${0}
```

`vad` <kbd>⇥</kbd> var destructuring assignment (ES2015)

```javascript
var ${0:dest} = ${1}
```

`lad` <kbd>⇥</kbd> let destructuring assignment (ES2015)

```javascript
let ${0:dest} = ${1}
```

`cad` <kbd>⇥</kbd> const destructuring assignment (ES2015)

```javascript
const ${0:dest} = ${1}
```

### Conditional

`if` <kbd>⇥</kbd> if statement

```javascript
if (${1}) ${0}
```

`el` <kbd>⇥</kbd> else statement

```javascript
else ${0}
```

`ifel` <kbd>⇥</kbd> if/else statement

```javascript
if (${1}) ${2} else ${0}
```

`elif` <kbd>⇥</kbd> else if statement

```javascript
else if (${1}) ${0}
```

`ter` <kbd>⇥</kbd> ternary operator

```javascript
${1} ? ${2} : ${0}
```

`sw` <kbd>⇥</kbd> switch case

```javascript
switch (${1}) {
      case ${2} :
        $0
    default:
        break;
}
```

`case` <kbd>⇥</kbd> switch's case

 ```javascript
 case ${1} :
       ${0}
 ```

### Statement

`fo` <kbd>⇥</kbd> for loop

```javascript
for (${1} ; ${2} ; ${3}) ${0}
```

`foi` <kbd>⇥</kbd> for in loop

 ```javascript
 for (const ${1} in ${2}) {
       if (${2}.hasOwnProperty(${1})) {
           ${0}
     }
 }
 ```

`fof` <kbd>⇥</kbd> for of loop (ES2015)

```javascript
for (const ${1} of ${2}) ${0}
```

`foa` <kbd>⇥</kbd> for await of loop (ES2018)

```javascript
for await (const ${1} of ${2}) ${0}
```

`wh` <kbd>⇥</kbd> while loop

```javascript
while (${1}) ${0}
```

`tc` <kbd>⇥</kbd> try/catch

```javascript
try {${1}} catch ${2} {${0}}
```

`tf` <kbd>⇥</kbd> try/finally

```javascript
try {${1}} finally {${0}}
```

`tcf` <kbd>⇥</kbd> try/catch/finally

```javascript
try {${1}} catch ${2} {${3}} finally {${0}}
```

### Functions

`f` <kbd>⇥</kbd> anonymous function

```javascript
function(${1}) {${0}}
```

`fn` <kbd>⇥</kbd> named function

```javascript
function ${1}(${2}) {${0}}
```

`fa` <kbd>⇥</kbd> async anonymous function

```javascript
async function (${1}) {${0}}
```

`fna` <kbd>⇥</kbd> async named function

```javascript
async function ${1}(${2}) {${0}}
```

`af` <kbd>⇥</kbd> arrow function (ES2015)

```javascript
(${1}) => ${0}
```

`afa` <kbd>⇥</kbd> async arrow function (ES2015)

```javascript
async (${1}) => ${0}
```

`iife` <kbd>⇥</kbd> immediately-invoked function expression (IIFE)

```javascript
(${2})(${1})${0}
```

### Iterables

`seq` <kbd>⇥</kbd> sequence of 0..n

```javascript
[...Array(${1:length}).keys()]${0}
```

### Objects

`ol` <kbd>⇥</kbd> object literal

```javascript
{ ${1}: ${0} }
```

### Classes

`cs` <kbd>⇥</kbd> class (ES2015)

 ```javascript
 class ${1:name} {
       ${0}
 }
 ```

`cse` <kbd>⇥</kbd> class extends (ES2015)

 ```javascript
 class ${1:name} extends ${2:base} {
       ${0}
 }
 ```

`ctor` <kbd>⇥</kbd> class constructor (ES2015)

```javascript
constructor(${1}) {${0}}
```

`csm` <kbd>⇥</kbd> method (ES2015)

```javascript
${1:name}(${2}) {${0}}
```

`csma` <kbd>⇥</kbd> async method (ES2015)

```javascript
async ${1:name}(${2}) {${0}}
```

`gter` <kbd>⇥</kbd> getter (ES2015)

```javascript
get ${1:property}() {${0}}
```

`ster` <kbd>⇥</kbd> setter (ES2015)

```javascript
set ${1:property}(${2:value}) {${0}}
```

`gs` <kbd>⇥</kbd> getter and setter (ES2015)

 ```javascript
 get ${1:property}() {${0}}

 set ${1:property}(${2:value}) {}
 ```

### Types

`tof` <kbd>⇥</kbd> typeof

```javascript
typeof ${1:source} === ${0}
```

`iof` <kbd>⇥</kbd> instanceof

```javascript
${1:source} instanceof ${0:Class}
```

### Promises

`pr` <kbd>⇥</kbd> Promise (ES2015)

```javascript
new Promise(${0})
```

`prs` <kbd>⇥</kbd> Promise resolve (ES2015)

```javascript
Promise.resolve(${1})${0}
```

`prj` <kbd>⇥</kbd> Promise reject (ES2015)

```javascript
Promise.reject(${1})${0}
```

`pra` <kbd>⇥</kbd> Promise all (ES2015)

```javascript
Promise.all(${1})${0}
```

### ES2015 Modules

`exp` <kbd>⇥</kbd> export (ES2015)

```javascript
export ${0}
```

`expd` <kbd>⇥</kbd> export default (ES2015)

```javascript
export default ${0}
```

`expas` <kbd>⇥</kbd> export as (ES2015)

```javascript
export { ${1} as ${2} };${0}
```

`expf` <kbd>⇥</kbd> export from (ES2015)

```javascript
export ${2:name} from '${1}';${0}
```

`expaf` <kbd>⇥</kbd> export all from (ES2015)

```javascript
export *${2} from '${1}';${0}
```

`imp` <kbd>⇥</kbd> import module (ES2015)

```javascript
import ${2:name} from '${1}';${0}
```

`impf` <kbd>⇥</kbd> import file (ES2015)

```javascript
import '${1}';${0}
```

`impas` <kbd>⇥</kbd> import module as (ES2015)

```javascript
import ${2:*} as ${3:name} from '${1}';${0}
```

### Node.js

`cb` <kbd>⇥</kbd> Node.js style callback

```javascript
(err, ${1:response}) => {${0}}
```

`require` <kbd>⇥</kbd> require

```javascript
require(${1:path})${0}
```

`req` <kbd>⇥</kbd> require assignment

```javascript
const ${2:name} = require('${1}');${0}
```

`em` <kbd>⇥</kbd> exports.member

```javascript
exports.${1} = ${2};${0}
```

`me` <kbd>⇥</kbd> module.exports

```javascript
module.exports = ${1}${0}
```

`on` <kbd>⇥</kbd> event handler

```javascript
on('${1:event}', ${2:callback});${0}
```

### Console

`cl` <kbd>⇥</kbd> console.log

```javascript
console.log(${1})${0}
```

`ce` <kbd>⇥</kbd> console.error

```javascript
console.error(${1})${0}
```

`cw` <kbd>⇥</kbd> console.warn

```javascript
console.warn(${1})${0}
```

`cd` <kbd>⇥</kbd> console.dir

```javascript
console.dir(${1})${0}
```

`ct` <kbd>⇥</kbd> console.time

 ```javascript
 console.time('${1}')
 ${0}
  console.timeEnd('${1}')
 ```

### Timers

`sett` <kbd>⇥</kbd> setTimeout

```javascript
setTimeout(${2:callback}, ${1:delay})${0}
```

`setin` <kbd>⇥</kbd> setInterval

```javascript
setInterval(${2:callback}, ${1:delay})${0}
```

`setim` <kbd>⇥</kbd> setImmediate (node.js)

```javascript
setImmediate(${1:callback}${2})${0}
```

`nt` <kbd>⇥</kbd> process nextTick (node.js)

```javascript
process.nextTick(${1});${0}
```

### Miscellaneous

`us` <kbd>⇥</kbd> insert 'use strict' statement

```javascript
'use strict';
```

### TypeScript

`typ` <kbd>⇥</kbd> type (TypeScript)

```javascript
type ${1:name} = ${0}
```

`int` <kbd>⇥</kbd> interface (TypeScript)

```javascript
interface ${1:name} {${2}}${0}
```

`enu` <kbd>⇥</kbd> enum (TypeScript)

```javascript
enum ${1:name} {${2}}${0}
```

`mod` <kbd>⇥</kbd> module (TypeScript)

```javascript
module ${1:name} {${2}}${0}
```

`nam` <kbd>⇥</kbd> namespace (TypeScript)

```javascript
namespace ${1:name} {${2}}${0}
```

`pd` <kbd>⇥</kbd> parameter destructuring with type (TypeScript)

```javascript
${0:param} : ${1:type}
```
