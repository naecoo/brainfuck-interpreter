const assert = require('assert');
const { brainfuckInterpreter } = require('./index');

console.log(brainfuckInterpreter(`
+++++ +++++
[
  > +++++ ++  
  > +++++ +++++   
  > +++
  > +
  <<<< - 
]
> ++ .
> + . 
+++++ ++ .
.
+++ .
> ++ .
<< +++++ +++++ +++++ .
> .
+++.
------.
--------.
`));