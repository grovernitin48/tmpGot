const memoize = () => {
    const results = {};
    return (...args) => {
        const argsKey = JSON.stringify(args);
        if (!results[argsKey]) {
            results[argsKey] = func(...args)
        }
        return results[argsKey];
    };
};

const multiply = memoize((num1, num2) => {
    let total = 0;
    for (let i = 0; i < num1; i++) {
        for (let j = 0; j < num1; j++) {
            total += 1
        }
    }

    return total * num2;
});

console.log(multiply(500, 500));