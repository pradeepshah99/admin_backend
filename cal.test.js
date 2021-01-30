const calculator = require("./cal")

test('adds 1 + 2 to equal 3', () => {
    const a = 1;
    const b = 2;

    expect(calculator.add(a, b)).toBe(3);
});

// this is the test case for the add program

test('minus 3-2 to equal 1', () => {
    const a = 3;
    const b = 2;
   
    expect(calculator.sub(a, b)).toBe(1);
});

test('multiply 3*2 to equal 6', () => {
    const a = 3;
    const b = 2;

    expect(calculator.mul(a, b)).toBe(6);
});

test('Divide 32/2 to equal 16', () => {
    const a = 32;
    const b = 2;

    expect(calculator.div(a, b)).toBe(16);
});

// this is the test using jest

