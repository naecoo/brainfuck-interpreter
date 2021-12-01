const assert = require('assert');
const { brainfuckInterpreter } = require('../index');

assert.deepEqual(brainfuckInterpreter(''), [0]);

assert.deepEqual(brainfuckInterpreter('+++'), [3]);

assert.deepEqual(brainfuckInterpreter('+++--'), [1]);

assert.deepEqual(brainfuckInterpreter('---'), [-3]);

assert.deepEqual(brainfuckInterpreter('+>+>+'), [1, 1, 1]);

assert.deepEqual(brainfuckInterpreter('+>>+++'), [1, 0, 3]);

assert.deepEqual(brainfuckInterpreter('+><+>>+'), [2, 0, 1]);

assert.deepEqual(brainfuckInterpreter('>>><<+>>++'), [0, 1, 0, 2]);

assert.deepEqual(brainfuckInterpreter('+++[>+<-]'), [0, 3]);

assert.deepEqual(brainfuckInterpreter('+++[>+[>+<-]<-]'), [0, 0, 3]);
