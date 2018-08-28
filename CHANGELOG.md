# Hyper JavaScript Snippets Changelog

## 2.0.0

A big change here, so I decide to make a version upgrade to 2.0.0. I take out many of snippets than may hava a low use rate, should not use, and object methods. If this really bother you, I feel sorry 😢

- Deprecated
  - `forarry` and `rforarr` - array method like `forEach`, `map`, `filter`, and `reduce` are recommended.
  - `bind`, `apply`, and `call` for function - they are function method with nice intellisense by VSCode.
  - `kv`, `oa`, `oc` for object - same as above.
  - `th`, `cat`, `fin` for promise - same as above.
  - `pctor` and `proto` for prototype - use ES2015 `class` instead.
- Modified
  - `vda`, `lda`, and `cda` become `vad`, `lad`, and `cad` - consist to how function prefix work which like a namespace.
  - `import` become `impf` for import - namespace like; not like export, if import without name, it surely for a file path.
  - `p` become `pr` for promise - namespace like.
  - `c`, `cex`, `cm`, and `acm` become `cs`, `cse`, `csm`, and `csma` - namespace like.
  - `ternary` become `ter` for ternary - make it shorter.
  - Rewrite README.md, make it more short and clear.
- Added
  - `prs`, `prj`, and `pra` for promise - static method `resolve`, `reject`, and `all` for Promise.

## 1.4.0

- Deprecated
  - Remove all test snippets, due its should not cover in this extension.
- Modified
  - Combine `impas` and `impall` and remove `impall` and Fixed intellisense broken cause by syntax error.
  - `dp` (destructuring parameter) to `td` (type destructuring), which a big mistake.
  - remove prefill `{}` for destructuring assignment (`vda`, `lda`, `cda`) as well as type destructuring (`td`), cause both array and object support destructuring.

## 1.3.2

- Modified
  - TypeScript type default right side as empty rather than object.
  - All `import`, `export`, and `require` with path now default with single quote and end semicolon (no more path intellisense issue).

## 1.3.1

- Modified
  - `trycatch` rename to `tc`.
- Fixed
  - Remove `trycatch` and `tcf` redundant `(${1})`.

## 1.3.0

- Added
  - `typ` for TypeScript `type`.
  - `dp` for destructuring parameter.
- Modified
  - Add "ES2015" label for `la`, `ca`, `vda`, `lda`, `cda` in Declarations.

## 1.2.0

- Modified
  - Remove newline in `gs`, `pctor`, and `proto`.
  - Use more percise term in `tof` and `iof` description.
  - Change label for only in Node.JS from "use only in node" to "Node.JS".
  - Change view for snippets in README from list to table.
- Deprecated
  - Replace `ol` to `slol` and remove `slol`.

## 1.1.1

- Modified
  - Remove space between `function ()` in `f`.
  - Update README.

## 1.1.0

- Added
  - 3 new destructuring assigment for `var`, `let`, and `const`.
- Modified
  - `var`, `let`, and `const` remove the end semicolon and adjust the cursor point.
  - Make `if else` and `else if` prefix shorter to `ifel` and `elif`.
  - Remove the `break` in the first `switch` case and `case` to let user determine `return` or `break` to use, but keeping the `default` `break` to ensure even if user forgot to handle it.
  - Adding a space between `${1}` and `:` in `switch`, `case`, and `${1}` and `;` in `for` to make sure it does not break auto close single/double quote and parentheses.
  - Remove unnecessary `${0}` in `import`.
  - Change `interface, module, namespaces` to `int, mod, nam` to avoid directly same name as TypeScript / JavaScript keyword.

## 1.0.4

- Modified
  - Modified README.

## 1.0.3

- Modified
  - Add placeholder to variable assignment for avoid syntax error.

## 1.0.2

- Fixed
  - Unintended going end of snippets.

## 1.0.1

- Update README.
- Add CHANGELOG.

## 1.0.0

- First release.
