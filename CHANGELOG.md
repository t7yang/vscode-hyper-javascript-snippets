# Hyper JavaScript Snippets Changelog

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [3.4.0] - 2022-10-17

### Added

- added many `console` APIs
- introduced `cl` namespace for `console`, but `cl` itself remain for `console.log`

## [3.3.0] - 2022-06-12

### Added

- `im`: import
- `imm`: import.meta
- `imu`: import.meta.url
- `imd`: import module dynamically

### Changed

- rename `impf` to `imf` (import file)
- new tab stop for `imp` (import module) and `imas` (import module as) for import assert

## [3.2.2] - 2021-12-19

### Changed

- add `hyper: ` prefix to description to help user distinguish when turning on/off snippet
- let user choose equality operator in `tof`

## [3.2.1] - 2021-04-21

### Fixed

- Restore `$3` tab stop in `sw`.

## [3.2.0] - 2021-03-31

### Added

- Provide new `ar`, `ara`, `ag`, `aga` arrow function snippets.
  - `ar` and `ara` with a return type tab stop.
  - `ag` and `aga` with generic type and return type tab stop.

### Changed

- Shorter pran to prn (Promise.any).

## [3.1.0] - 2021-03-31

### Changed

- Add back parentheses to function snippets.

## [3.0.0] - 2021-03-22

### Added

- Added `Promise.{allSettled,any}`.

### Changed

- Remove newline for `switch` and `case`.
- Rename `case` to `cas`, avoid meaningful.
- Rename `ctor` to `cst`, avoid conflict to built-in.
- Rename `require` to `re` avoid meaningful.
- Remove `()` for every function snippets to enhance capatibility.
  - This can make declare generator function, type generic type, return type easier.
  - With side effect, merge anonymous function and named function snippets.

## [2.5.0] - 2020-11-30

### Changed

- TypeScript snippets is now show in TypeScript file type `typescript` and `typescriptreact` only.

### Added

- `prt` for create Promise type, like `Promise<T>` (TypeScript).
- `enc` for create `const enum` (TypeScript).

## [2.4.0] - 2020-09-16

### Added

- Add snippet for `for await of` as `foa`.

### Removed

- Remove all labeled console snippets, cause this can be simply console within a object, e.g. `console.log({ name })`.

## [2.3.1] - 2020-03-02

Keep making prefix shorter

### Changed

- `else` to `el`, `switch` to `sw`, `for` to `fo`, `forin` to `foi`, `forof` to `fof`, `while` to `wh`.

## [2.3.0] - 2019-12-06

Two subjects for this update -- "Less is more" and "expression first".

### Removed

- Remove all snippets relate to generator function due to they can simply replace by normal function snippet plus a `*` (use prettier to auto format position of asterisk).

### Changed

- Remove the curly braces in some of the snippets including `if*`, `for*`, and `while` statement (expression first, add curly braces if you need).
- Adjust the tab stop order for `try*` snippets, remove error argument (optional error binding, ES2019) to make it optional (still tab stop there).
- replace `enum` to `enu`.

## [2.2.0] - 2019-08-15

### Added

- Add `expaf` for export all from
- Add `cd` and `cdl` for `console.dir`

## [2.1.0] - 2019-05-05

### Changed

- Remove placeholder in `tof` for better intellisense support.

### Added

- Add `ct` for `console.time` (have fun for test time consumption).

## [2.0.4] - 2019-03-27

### Changed

- Remove go to end tab stop in all destructure related snippets due tab stop unsupport intellisense.
  - Intellisense not available on source but at least on destructuring.
  - Not the best but press [end] is a manual alternative.

## [2.0.3] - 2019-02-21

### Changed

- Replace `nexttick` to `nt`.

### Fixed

- Make readme up to date.

## [2.0.2] - 2018-10-05

### Changed

- Review all snippets and make cursor end in right position.
- Fix inconsistent `ol` between README and snippet.

## [2.0.1] - 2018-10-03

### Changed

- Remove go to end tab stop for all `function` relative snippets.
- Update README to explain "no intellisense" issue.

## [2.0.0] - 2018-08-29

A big change here, so I decide to make a version upgrade to 2.0.0. I take out many of snippets than may hava a low use rate, should not use, and object methods. If this really bother you, I feel sorry 😢

### Removed

- `forarry` and `rforarr` - array method like `forEach`, `map`, `filter`, and `reduce` are recommended.
- `bind`, `apply`, and `call` for function - they are function method with nice intellisense by VSCode.
- `kv`, `oa`, `oc` for object - same as above.
- `th`, `cat`, `fin` for promise - same as above.
- `pctor` and `proto` for prototype - use ES2015 `class` instead.

### Changed

- `vda`, `lda`, and `cda` become `vad`, `lad`, and `cad` - consist to how function prefix work which like a namespace.
- `import` become `impf` for import - namespace like; not like export, if import without name, it surely for a file path.
- `p` become `pr` for promise - namespace like.
- `c`, `cex`, `cm`, and `acm` become `cs`, `cse`, `csm`, and `csma` - namespace like.
- `ternary` become `ter` for ternary - make it shorter.
- Rewrite README.md, make it more short and clear.

### Added

- `prs`, `prj`, and `pra` for promise - static method `resolve`, `reject`, and `all` for Promise.

## [1.4.0] - 2018-07-06

### Removed

- Remove all test snippets, due its should not cover in this extension.

### Changed

- Combine `impas` and `impall` and remove `impall` and Fixed intellisense broken cause by syntax error.
- `dp` (destructuring parameter) to `td` (type destructuring), which a big mistake.
- remove prefill `{}` for destructuring assignment (`vda`, `lda`, `cda`) as well as type destructuring (`td`), cause both array and object support destructuring.

## [1.3.2] - 2018-05-29

### Changed

- TypeScript type default right side as empty rather than object.
- All `import`, `export`, and `require` with path now default with single quote and end semicolon (no more path intellisense issue).

## [1.3.1] - 2018-05-22

### Changed

- `trycatch` rename to `tc`.

### Fixed

- Remove `trycatch` and `tcf` redundant `(${1})`.

## [1.3.0] - 2018-05-08

### Added

- `typ` for TypeScript `type`.
- `dp` for destructuring parameter.

### Changed

- Add "ES2015" label for `la`, `ca`, `vda`, `lda`, `cda` in Declarations.

## [1.2.0] - 2018-04-30

### Changed

- Remove newline in `gs`, `pctor`, and `proto`.
- Use more percise term in `tof` and `iof` description.
- Change label for only in Node.JS from "use only in node" to "Node.JS".
- Change view for snippets in README from list to table.

### Removed

- Replace `ol` to `slol` and remove `slol`.

## [1.1.1] - 2018-04-10

### Changed

- Remove space between `function ()` in `f`.
- Update README.

## [1.1.0] - 2018-04-08

### Added

- 3 new destructuring assigment for `var`, `let`, and `const`.

### Changed

- `var`, `let`, and `const` remove the end semicolon and adjust the cursor point.
- Make `if else` and `else if` prefix shorter to `ifel` and `elif`.
- Remove the `break` in the first `switch` case and `case` to let user determine `return` or `break` to use, but keeping the `default` `break` to ensure even if user forgot to handle it.
- Adding a space between `${1}` and `:` in `switch`, `case`, and `${1}` and `;` in `for` to make sure it does not break auto close single/double quote and parentheses.
- Remove unnecessary `${0}` in `import`.
- Change `interface, module, namespaces` to `int, mod, nam` to avoid directly same name as TypeScript / JavaScript keyword.

## [1.0.4] - 2018-03-14

### Changed

- Update README.

## [1.0.3] - 2018-03-14

### Changed

- Add placeholder to variable assignment for avoid syntax error.

## [1.0.2] - 2018-03-11

### Fixed

- Unintended going end of snippets.

## [1.0.1] - 2018-03-11

### Changed

- Update README.

### Added

- Add CHANGELOG.

## [1.0.0] - 2018-03-10

### Added

- First release.
