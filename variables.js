/*

*** Variable Hoisiting ***

**** Definition of Hoist ****

hoist /hoist/
  verb
    raise (something) by means of ropes and pulleys.
  noun
    an act of raising or lifting something. 

**** `var` Hoisiting in Javascript ****
When JavaScript is ready to begin compilation, no code is executed until variable declarations are processed. 
This means that any variable that is declared either in a function block or within the global scope will be moved or
"hoisted" to the top.


@example

console.log('x: ', x);
var x = 1;

// is understood by the compiler as:

var x;
console.log('x: ', x);
x = 1;


**** `var` ****
The scope of `var` is limited to the function in which it is defined. `var` declarations are hoisted and get attached to
the root (or window) object. var can be used if a variable needs to be defined on a specif scope (function or global)
and the initial value of that variable declaration is unknown. If 'var' is to be used it is good practice to define all
variable declarations at the top of the function to avoid unexpected results in variable values or definitions since, as
mentioned above, `var`s are hoisted.

**** `let` ****
like `var`, `let` can be declared without an initial value if that value is unknown at the time of declaration. However,
The difference with `let` is that it is limited to the block in which it is defined. Another difference with `var` is
that `let` does not create a property on the root of the document (the `window` in the case of a browser)

**** `const` ****
const allows you to create a read-only reference to an initial value. const can only be used to reference a variable
with an initial value. You can not re-assign a value to const but you can mutate the original data. You can use
const if you know data won't change.

Both let and const create block-scoped variable while var creates function-scoped variables.

*/