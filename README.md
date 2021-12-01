## A tiny Brainfuck interpreter 

### About Brainfuck
[Brainfuck](https://en.wikipedia.org/wiki/Brainfuck) is a minimal computer language with a syntax consisting of only eight symbols that make up all operations. Still, Brainfuck is a turing-complete programming language.


### Install
```bash
npm install tiny-brainfuck-interpreter
```

### Usage
```javascript
const { brainfuckInterpreter } = require('tiny-brainfuck-interpreter');

const tape = brainfuckInterpreter('++++++[>++++++<-]>.');
// output::  $
console.log(tape);
// [0, 36]

```


or just using 'npx'
```bash
npx tiny-brainfuck-interpreter '++++++[>++++++<-]>.'

// output::  $
// [0, 36]
```