# Hyper JavaScript Snippets Changelog

## 2.3.0
Two subjects for this update -- "Less is more" and "expression first".

- Dprecated
  - Remove all snippets relate to generator function due to they can simply replace by normal function snippet plus a `*` (use prettier to auto format position of asterisk).
- Update
  - Remove the curly braces in some of the snippets including `if*`, `for*`, and `while` statement (expression first, add curly braces if you need).
  - Adjust the tab stop order for `try*` snippets, remove error argument (optional error binding, ES2019) to make it optional (still tab stop there).
  - replace `enum` to `enu`.

## 2.2.0
- Feature
  - Add `expaf` for export all from
  - Add `cd` and `cdl` for `console.dir`

## 2.1.0
- Update
  - Remove placeholder in `tof` for better intellisense support.
- Feature
  - Add `ct` for `console.time` (have fun for test time consumption).

## 2.0.4
- Update
  - Remove go to end tab stop in all destructure related snippets due tab stop unsupport intellisense.
    - Intellisense not available on source but at least on destructuring.
    - Not the best but press [end] is a manual alternative.

## 2.0.3
- Update
  - Replace `nexttick` to `nt`.
- Fixed
  - Make readme up to date.

## 2.0.2
- Update
  - Review all snippets and make cursor end in right position.
  - Fix inconsistent `ol` between README and snippet.

## 2.0.1
- Update
  - Remove go to end tab stop for all `function` relative snippets.
  - Update README to explain "no intellisense" issue.

## 2.0.0
A big change here, so I decide to make a version upgrade to 2.0.0. I take out many of snippets than may hava a low use rate, should not use, and object methods. If this really bother you, I feel sorry 😢

- Deprecated
  - `forarry` and `rforarr` - array method like `forEach`, `map`, `filter`, and `reduce` are recommended.
  - `bind`, `apply`, and `call` for function - they are function method with nice intellisense by VSCode.
  - `kv`, `oa`, `oc` for object - same as above.
  - `th`, `cat`, `fin` for promise - same as above.
  - `pctor` and `proto` for prototype - use ES2015 `class` instead.
- Update
  - `vda`, `lda`, and `cda` become `vad`, `lad`, and `cad` - consist to how function prefix work which like a namespace.
  - `import` become `impf` for import - namespace like; not like export, if import without name, it surely for a file path.
  - `p` become `pr` for promise - namespace like.
  - `c`, `cex`, `cm`, and `acm` become `cs`, `cse`, `csm`, and `csma` - namespace like.
  - `ternary` become `ter` for ternary - make it shorter.
  - Rewrite README.md, make it more short and clear.
- Feature
  - `prs`, `prj`, and `pra` for promise - static method `resolve`, `reject`, and `all` for Promise.

## 1.4.0
- Deprecated
  - Remove all test snippets, due its should not cover in this extension.
- Update
  - Combine `impas` and `impall` and remove `impall` and Fixed intellisense broken cause by syntax error.
  - `dp` (destructuring parameter) to `td` (type destructuring), which a big mistake.
  - remove prefill `{}` for destructuring assignment (`vda`, `lda`, `cda`) as well as type destructuring (`td`), cause both array and object support destructuring.

## 1.3.2
- Update
  - TypeScript type default right side as empty rather than object.
  - All `import`, `export`, and `require` with path now default with single quote and end semicolon (no more path intellisense issue).

## 1.3.1
- Update
  - `trycatch` rename to `tc`.
- Fixed
  - Remove `trycatch` and `tcf` redundant `(${1})`.

## 1.3.0
- Feature
  - `typ` for TypeScript `type`.
  - `dp` for destructuring parameter.
- Update
  - Add "ES2015" label for `la`, `ca`, `vda`, `lda`, `cda` in Declarations.

## 1.2.0
- Update
  - Remove newline in `gs`, `pctor`, and `proto`.
  - Use more percise term in `tof` and `iof` description.
  - Change label for only in Node.JS from "use only in node" to "Node.JS".
  - Change view for snippets in README from list to table.
- Deprecated
  - Replace `ol` to `slol` and remove `slol`.

## 1.1.1
- Update
  - Remove space between `function ()` in `f`.
  - Update README.

## 1.1.0
- Feature
  - 3 new destructuring assigment for `var`, `let`, and `const`.
- Update
  - `var`, `let`, and `const` remove the end semicolon and adjust the cursor point.
  - Make `if else` and `else if` prefix shorter to `ifel` and `elif`.
  - Remove the `break` in the first `switch` case and `case` to let user determine `return` or `break` to use, but keeping the `default` `break` to ensure even if user forgot to handle it.
  - Adding a space between `${1}` and `:` in `switch`, `case`, and `${1}` and `;` in `for` to make sure it does not break auto close single/double quote and parentheses.
  - Remove unnecessary `${0}` in `import`.
  - Change `interface, module, namespaces` to `int, mod, nam` to avoid directly same name as TypeScript / JavaScript keyword.

## 1.0.4
- Update
  - Update README.

## 1.0.3
- Update
  - Add placeholder to variable assignment for avoid syntax error.

## 1.0.2
- Fixed
  - Unintended going end of snippets.

## 1.0.1
- Update README.
- Add CHANGELOG.

## 1.0.0
- First release.
