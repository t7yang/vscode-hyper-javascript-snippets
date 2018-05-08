# Hyper JavaScript Snippets Changelog

# 1.3.0

* ADDED
  * `typ` for TypeScript `type`.
  * `dp` for destructuring parameter.
* MODIFIED
  * Add "ES2015" label for `la`, `ca`, `vda`, `lda`, `cda` in Declarations.

# 1.2.0

* MODIFIED
  * Remove newline in `gs`, `pctor`, and `proto`.
  * Use more percise term in `tof` and `iof` description.
  * Change label for only in Node.JS from "use only in node" to "Node.JS".
  * Change view for snippets in README from list to table.
* DEPRECATED
  * Replace `ol` to `slol` and remove `slol`.

## 1.1.1

* MODIFIED
  * Remove space between `function ()` in `f`.
  * Update README.

## 1.1.0

* ADDED
  * 3 new destructuring assigment for `var`, `let`, and `const`.
* MODIFIED
  * `var`, `let`, and `const` remove the end semicolon and adjust the cursor point.
  * Make `if else` and `else if` prefix shorter to `ifel` and `elif`.
  * Remove the `break` in the first `switch` case and `case` to let user determine `return` or `break` to use, but keeping the `default` `break` to ensure even if user forgot to handle it.
  * Adding a space between `${1}` and `:` in `switch`, `case`, and `${1}` and `;` in `for` to make sure it does not break auto close single/double quote and parentheses.
  * Remove unnecessary `${0}` in `import`.
  * Change `interface, module, namespaces` to `int, mod, nam` to avoid directly same name as TypeScript / JavaScript keyword.

## 1.0.4

* MODIFIED
  * Modified README.

## 1.0.3

* MODIFIED
  * Add placeholder to variable assignment for avoid syntax error.

## 1.0.2

* FIXED
  * Unintended going end of snippets.

## 1.0.1

* Update README.
* Add CHANGELOG.

## 1.0.0

* First release.
