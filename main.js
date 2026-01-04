export function capitalise(string) {
    return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
    return string.split('').reverse().join('');
}

export function Calculator() {
    this.add = (a, b) => {
        return a + b;
    }

    this.subtract = (a, b) => {
        return a - b;
    }

    this.multiply = (a, b) => {
        return a * b;
    }

    this.divide = (a, b) => {
        if (b == 0) console.log("ERROR");
        return a / b;
    }
}

export function caeserCipher(string, shift) {
    let result = [];
    let a = 'a'.charCodeAt(0);
    let A = 'A'.charCodeAt(0);
    for (let i = 0; i < string.length; i++) {
        if ((A <= string[i].charCodeAt(0) && string[i].charCodeAt(0) <= A + 25) || (a <= string[i].charCodeAt(0) && string[i].charCodeAt(0) <= a + 25)) {
            if (string[i] === string[i].toUpperCase()) {
                result.push(String.fromCharCode(A + (string[i].charCodeAt(0) - A + shift) % 26));
            }
            else
                result.push(String.fromCharCode(a + (string[i].charCodeAt(0) - a + shift) % 26));
        }
        else {
            result.push(string[i]);
        }
    }
    let res = result.join('');
    return res;
}

export function analyzeArray(array) {
    return {
        average: array.reduce((acc, v) => acc + v, 0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    };
}