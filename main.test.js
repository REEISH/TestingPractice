import { analyzeArray, caeserCipher, Calculator, capitalise, reverseString } from "./main.js"

test('capitalise test', () => {
    expect(capitalise("hello")).toBe("Hello");
    expect(capitalise("girl")).toBe("Girl");
})

test('reverse test', () => {
    expect(reverseString("AVNI")).toBe("INVA");
    expect(reverseString("ISHA")).toBe("AHSI");
})

test('calculator test', () => {
    calc = new Calculator();
    expect(calc.add(1, 2)).toBe(3);
    expect(calc.subtract(3, 1)).toBe(2);
    expect(calc.divide(4, 2)).toBe(2);
    expect(calc.divide(4, 3)).toBeCloseTo(1.33, 2);
    expect(calc.multiply(2, 3)).toBe(6);
})

test('caeser cipher test', () => {
    expect(caeserCipher('xyz', 3)).toBe('abc');
    expect(caeserCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caeserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('analyse array test', () => {
    const arr = [1, 2, 3, 4];
    expect(analyzeArray(arr)).toEqual({
        average: 2.50,
        min: 1,
        max: 4,
        length: 4
    });
})