const operations = ['>', '<', '+', '-', '.', ',', '[', ']'];
const max_tape_length = 5000;
function brainfuckInterpreter(source = '') {
  let current = 0;
  let pointer = 0;
  const tape = [0];
  const loopStack = [];

  while (current < source.length) {
    const char = source[current];

    if (!operations.includes(char)) {
      current++;
      continue;
    };


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
        // todo: accept value from input, transfrom, and store
        break;

      case '[':
        if (loopStack[loopStack.length - 1] !== current) {
          loopStack.push(current);
        }

        if (tape[pointer] === 0) {
          while (current < source.length && source[current] !== ']') {
            current++;
          }
        } else {
          current++;
        }
        break;

      case ']':
        const loopStartIndex = loopStack.pop();
        if (loopStartIndex === void 0) {
          throw new Error('');
        }
        if (tape[pointer] === 0) {
          current++;
        } else {
          current = loopStartIndex
        }
        break;
    }

    if (char !== '[' && char !== ']') {
      current++;
    }
  }

  return tape;
}

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
`));

module.exports = {
  brainfuckInterpreter
};