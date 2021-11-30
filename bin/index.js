#!/usr/bin/env node

const { brainfuckInterpreter } = require('../');

const source = process.argv.slice(2)[0];

if (typeof source !== 'string') {
  process.exit(0)
}

const result = brainfuckInterpreter(source);
console.log('tape: ', result);