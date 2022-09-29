const arr = '12+3*2'; //18
const testArr = ['3', '2', '*', '12', '+'];
const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '^': (a, b) => Math.pow(a, b),
  '(': true,
  ')': true,
};

function infixToPostfix(infixString) {
  const postFixArr = [];
  let temp = '';
  let stack = [];
  for (let i = 0; i < infixString.length; i++) {
    if (operators[infixString[i]]) {
      postFixArr.push(temp);
      if (
        infixString[i] === '*' ||
        infixString[i] === '/' ||
        infixString[i] === '^'
      ) {
        stack.push(infixString[i]);
      } else {
      }
      temp = '';
    } else {
      temp = temp + infixString[i];
    }
  }
}
const newArr = infixToPostfix(arr);

function calculatePostfix(postfixArr) {
  const stack = [];

  for (let item of postfixArr) {
    if (operators[item]) {
      const op1 = stack.pop();
      const op2 = stack.pop();
      stack.push(operators[item](op1, op2));
    } else {
      stack.push(+item);
    }
    console.log(stack);
  }
  return stack.pop();
}
console.log(calculatePostfix(testArr));
