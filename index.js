const readlineSync = require('readline-sync');

const max_tape_length = 5000;
const max_step = Math.pow(2, 16);
function brainfuckInterpreter(source = '') {
  let current = 0;
  let pointer = 0;
  const tape = [0];
  const loopStack = [];
  let step = 1;

  while (current < source.length) {
    step++;
    if (step > max_step) {
      throw new Error('Program execution is too long, may fall into an infinite loop, please check the source code');
    }

    const char = source[current];

    switch (char) {
      case '>':
        pointer++;
        if (pointer > max_tape_length) {
          throw new Error('Tape\'s length exceed limit.');
        }
        if (tape[pointer] === void 0) {
          tape[pointer] = 0;
        }
        break;

      case '<':
        pointer--;
        if (pointer < 0) {
          throw new Error('Tape\'s length exceed limit.');
        }
        break;

      case '+':
        tape[pointer]++;
        break;

      case '-':
        tape[pointer]--;
        break;

      case '.':
        console.log('output:: ', String.fromCharCode(tape[pointer]));
        break;

      case ',':
        const input = readlineSync.question('input:: ');
        if (typeof input === 'string') {
          tape[pointer] = input[0].codePointAt();
        }
        break;

      case '[':
        if (loopStack[loopStack.length - 1] !== current) {
          loopStack.push(current);
        }

        if (tape[pointer] === 0) {
          while (current < source.length && source[current] !== ']') {
            current++;
          }
          continue;
        }
        break;

      case ']':
        const loopStartIndex = loopStack.pop();
        if (loopStartIndex === void 0) {
          throw new Error('Loop syntax error');
        }
        if (tape[pointer] !== 0) {
          current = loopStartIndex;
          continue;
        }
        break;
    }

    current++;
  }

  return tape;
}

module.exports = {
  brainfuckInterpreter
};