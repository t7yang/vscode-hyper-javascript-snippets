# Hyper JavaScript Snippets (Visual Studio Code)

## Introduction
This Visual Studio Code snippet extension is for JavaScript and TypeScript. Snippets mostly extended from [JavaScript Snippets](https://github.com/nathanchapman/vscode-javascript-snippets) but masively modified to make it more user friendly.

## Install and Setting
Install from VSCode Extension Marketplace [Hyper JavaScript Snippets]().

Set `"editor.snippetSuggestions": "top"` to make VSCode show snippets on top of the suggestions.

## Snippets
Snippets are design in several different user friendly aspects with other snippet extensions, you may notice that most of the snippets without semicolon and placeholder for instructment.

### The Reason Why
Below explain the reason why these snippets have difference design perspective.

#### Rule 1: Cursor to the end
Most of the snippets are moving cursor to the end of snippet.

#### Rule 2: Mostly no semicolon
Most of the snippets without the end of semicolon, except those snippets who confirm end with semicolon without syntax error. Not because of "Standard JS Style" (actually it is not standard). Another benefit of remove the semicolon is it work nice with point-free-style.

You can determine when to add semicolon, because of "Rule 1", or if you using formater like [Prettier](https://prettier.io/), you will never bother with semicolon issue.

#### Rule 3: Mostly no newline
Most of the snippets add the newline only if it is necessary, you determine code should write in one line or multiple line. Besides, add a newline is just about a click.

#### Rule 4: Placeholder only if needed
Not appropriate placeholder may make you do more work to delete it, even break intellisense. The placeholder only add if it does not break anything or intellisense break without it.

#### Known issues
* Most of the snippets about `import`, `require`, and `export` without `''` at the path place. This because of most of path intellisense extensions do not work properly if there is a existed `''`.

### Declarations
#### `va ⇥` var assignment
```javascript
var ${1} = ${2};${0}
```

#### `la ⇥` let assignment
```javascript
let ${1} = ${2};${0}
```

#### `ca ⇥` const assignment
```javascript
const ${1} = ${2};${0}
```

### Conditional
#### `if ⇥` if statement
```javascript
if (${1}) {${0}}
```

#### `else ⇥` else statement
```javascript
else {${0}}
```

#### `ifelse ⇥` if/else statement
```javascript
if (${1}) {${2}} else {${0}}
```

#### `elseif ⇥` else if statement
```javascript
else if (${1}) {${0}}
```

#### `ternary ⇥` ternary operator
```javascript
${1} ? ${2} : ${3}
```

#### `switch ⇥` switch case
```javascript
switch (${1}) {
	case ${2}:
		$0
		break;
	default:
		break;
}
```

#### `case ⇥` switch's case
```javascript
case ${1}:
	${2}
	${0:break};
```

### Iteration
#### `for ⇥` for loop
```javascript
for (${1}; ${2}; ${3}) {
	${0}
}
```

#### `forarr ⇥` for loop array
```javascript
for (let ${1} = 0, ${2} = ${3}.length; ${1} < ${2}; ${1}++) {
	${0}
}
```

#### `rforarr ⇥` reverse for loop array
```javascript
for (let ${1} = ${2}.length - 1; ${1} >= 0; ${1}--) {
	${0}
}
```

#### `forin ⇥` for in loop
```javascript
for (const ${1} in ${2}) {
	if (${2}.hasOwnProperty(${1})) {
		${0}
	}
}
```

},
#### `forof ⇥` for of loop (ES2015)
```javascript
for (const ${1} of ${2}) {
	${0}
}
```

#### `while ⇥` while loop
```javascript
while (${1}) {${0}}
```

#### `trycatch ⇥` try/catch
```javascript
try {${0}} catch (error) (${1}) {${2}}
```

#### `tryfin ⇥` try/finally
```javascript
try {${0}} finally {${1}}
```

#### `tcf ⇥` try/catch/finally
```javascript
try {${0}} catch (${1}) {${2}} finally {${3}}
```

### Functions
#### `f ⇥` anonymous function
```javascript
function (${1}) {${2}}${0}
```

#### `fn ⇥` named function
```javascript
function ${1}(${2}) {${3}}${0}
```

#### `af ⇥` arrow function (ES2015)
```javascript
(${1}) => ${2}
```

#### `fa ⇥` async anonymous function
```javascript
async function (${1}) {${2}}${0}
```

#### `fna ⇥` async named function
```javascript
async function ${1}(${2}) {${3}}${0}
```

#### `afa ⇥` async arrow function (ES2015)
```javascript
async (${1}) => ${2}
```

#### `iife ⇥` immediately-invoked function expression (IIFE)
```javascript
(${2})(${1})${0}
```

#### `fapply ⇥` function apply
```javascript
${1}.apply(${2:this})${0}
```

#### `fcall ⇥` function call
```javascript
${1}.call(${2:this})${0}
```

#### `fbind ⇥` function bind
```javascript
${1}.bind(${2:this})${0}
```

#### `gf ⇥` anonymous generator function (ES2015)
```javascript
function* (${1}) {${0}}
```

#### `gfa ⇥` async generator function (ES2018)
```javascript
async function* (${1}) {${0}}
```

#### `gfn ⇥` named generator function (ES2015)
```javascript
function* ${1}(${2}) {${0}}
```

#### `gfna ⇥` async named generator function (ES2018)
```javascript
async function* ${1}(${2}) {${0}}
```

### Iterables
#### `seq ⇥` sequence of 0..n
```javascript
[...Array(${1:length}).keys()]${0}
```

### Objects
#### `ol ⇥` object literal
```javascript
{
	kv${0}
}
```

#### `slol ⇥` same-line object literal
```javascript
{ kv${0} }
```

#### `kv ⇥` key/value pair
```javascript
${1}: ${2},
```

#### `oa ⇥` Object.assign
```javascript
Object.assign(${1:dest}, ${2:source})
```

#### `oc ⇥` Object.assign copy (shallow clone)
```javascript
Object.assign({}, ${1:original}, ${2:source})
```

### Classes
#### `c ⇥` class (ES2015)
```javascript
class ${1:name} {
	${0}
}
```

#### `cex ⇥` class extends (ES2015)
```javascript
class ${1:name} extends ${2:base} {
	${0}
}
```

#### `ctor ⇥` class constructor (ES2015)
```javascript
constructor(${1}) {${0}}
```

#### `cm ⇥` method (ES2015)
```javascript
${1:name}(${2}) {${0}}
```

#### `acm ⇥` async method (ES2015)
```javascript
async ${1:name}(${2}) {${0}}
```

#### `gter ⇥` getter (ES2015)
```javascript
get ${1:property}() {${0}}
```

#### `ster ⇥` setter (ES2015)
```javascript
set ${1:property}(${2:value}) {${0}}
```

#### `gs ⇥` getter and setter (ES2015)
```javascript
get ${1:property}() {
	${0}
}

set ${1:property}(${2:value}) {

}
```

#### `pctor ⇥` prototypal constructor
```javascript
var ${1:Class} = function(${2}) {
	${0}
};
```

#### `proto ⇥` prototype method
```javascript
${1:Class}.prototype.${2:method} = function(${3}) {
	${0}
};
```

### Types
#### `tof ⇥` typeof
```javascript
typeof ${1:source} === '${2:undefined}'
```

#### `iof ⇥` instanceof
```javascript
${1:source} instanceof ${2:Object}
```

### Promises
#### `p ⇥` Promise (ES2015)
```javascript
new Promise(${0})
```

#### `pth ⇥` Promise.then
```javascript
${1:promise}.then(${2})${0}
```

#### `pcat ⇥` Promise.catch
```javascript
${1:promise}.catch(${2})${0}
```

#### `pfin ⇥` Promise.finally
```javascript
${1:promise}.finally(${2})${0}
```

### ES2015 Modules
#### `exp ⇥` export (ES2015)
```javascript
export ${1}${0}
```

#### `expd ⇥` export default (ES2015)
```javascript
export default ${1}${0}
```

#### `expas ⇥` export as (ES2015)
```javascript
export { ${1} as ${2} };${0}
```

#### `expf ⇥` export from (ES2015)
```javascript
export ${2:name} from ${1}${0}
```

#### `import ⇥` import (ES2015)
```javascript
import ${1}${0}
```

#### `imp ⇥` import module (ES2015)
```javascript
import ${2:name} from ${1}${0}
```

#### `impas ⇥` import module as (ES2015)
```javascript
import ${2} as ${3} from ${1}${0}
```

#### `impall ⇥` import module all as (ES2015)
```javascript
import * as ${2} from ${1}${0}
```

### Node.js
#### `cb ⇥` Node.js style callback
```javascript
(err, ${1:response}) => {${0}}
```

#### `require ⇥` require
```javascript
require(${1:path})${0}
```

#### `req ⇥` require assignment
```javascript
const ${2:name} = require(${1});${0}
```

#### `em ⇥` exports.member
```javascript
exports.${1} = ${2};${0}
```

#### `me ⇥` module.exports
```javascript
module.exports = ${1}${0}
```

#### `on ⇥` event handler
```javascript
on('${1:event}', ${2:callback});${0}
```

### BDD Testing (Mocha, Jasmine, etc.)
#### `desc ⇥` describe
```javascript
describe('${1:description}', ${2:callback});${0}
```

#### `cont ⇥` context
```javascript
context('${1:description}', ${2:callback});${0}
```

#### `it ⇥` it
```javascript
it('${1:description}', ${2:callback});${0}
```

#### `its ⇥` it synchronous
```javascript
it('${1:description}', ${2:callback});${0}
```

#### `ita ⇥` it asynchronous
```javascript
it('${1:description}', (done) => {
	${2}
	done();
});${0}
```

#### `bf ⇥` before test suite
```javascript
before(${1:callback});${0}
```

#### `bfe ⇥` before each test
```javascript
beforeEach(${1:callback});${0}
```

#### `aft ⇥` after test suite
```javascript
after(${1:callback});${0}
```

#### `afe ⇥` after each test
```javascript
afterEach(${1:callback});${0}
```

### Console
#### `cl ⇥` console.log
```javascript
console.log(${1})${0}
```

#### `ce ⇥` console.error
```javascript
console.error(${1})${0}
```

#### `cw ⇥` console.warn
```javascript
console.warn(${1})${0}
```

#### `cll ⇥` console.log labeled
```javascript
console.log('${1}', ${1})${0}
```

#### `cel ⇥` console.error labeled
```javascript
console.error('${1}', ${1})${0}
```

#### `cwl ⇥` console.warn labeled
```javascript
console.warn('${1}', ${1})${0}
```

### Timers
#### `sett ⇥` setTimeout
```javascript
setTimeout(${2:callback}, ${1:delay})${0}
```

#### `setin ⇥` setInterval
```javascript
setInterval(${2:callback}, ${1:delay})${0}
```

#### `setim ⇥` setImmediate (use only in node)
```javascript
setImmediate(${1:callback}${2})${0}
```

#### `nexttick ⇥` process nextTick (use only in node)
```javascript
process.nextTick(${1});${0}
```

### Miscellaneous
#### `us ⇥` insert 'use strict' statement
```javascript
'use strict';
```

### TypeScript
#### `interface ⇥` interface (TypeScript)
```javascript
interface ${1:name} {${2}}${0}
```

#### `enum ⇥` enum (TypeScript)
```javascript
enum ${1:name} {${2}}${0}
```

#### `module ⇥` module (TypeScript)
```javascript
module ${1:name} {${2}}${0}
```

#### `namespace ⇥` namespace (TypeScript)
```javascript
namespace ${1:name} {${2}}${0}
```
