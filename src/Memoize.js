const memoize = (func) => {
    const results = {};
    return (...args) => {
        const argsKey = JSON.stringify(args);
        if (!results[argsKey]) {
            results[argsKey] = func(...args)
        }
        return results[argsKey];
    };
};

const multiply = memoize((num1, num2, num3) => {
    return num1 * num2 * num3;
});

console.log(multiply(5, 5, 5));




class LRU {
    constructor (max = 10) {
        this.max = max;
        this.cache = new Map();
    }
    get(key) {
        //   console.log(Array.from(this.cache.values()));
        let item = this.cache.get(key);
        if (item) {
            this.cache.delete(key);
            this.cache.set(key, item);
        }
        return item;
    }
    set(key, val) {
        if (this.cache.has(key)) this.cache.delete(key);
        else if (this.cache.size == this.max) this.cache.delete(this.first());
        this.cache.set(key, val);
    }
    first() {
        return this.cache.keys().next().value;
    }
}

function memoize(fn, resolver = (...args) => JSON.stringify(args)) {
    const cache = new LRU(3);
    const memoized = (...args) => {
        const key = resolver(...args);
        if (cache.get(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
    return memoized;
}

const multipl = memoize((num1, num2, num3) => {
    return num1 * num2 * num3;
}, (arg1, arg2, arg3) => [arg1, JSON.stringify(arg2)]);

console.log(multiply(5, 5, 5));
console.log(multiply(1, 5, 5));
console.log(multiply(1, 5, 5));
console.log(multiply(5, 4, 5));
console.log(multiply(5, 4, 5));
console.log(multiply(5, 5, 5));

function assign(obj, keyPath, value) {
    lastKeyIndex = keyPath.length - 1;
    for (var i = 0; i < lastKeyIndex; ++i) {
        key = keyPath[i];
        if (!(key in obj)) {
            obj[key] = {}
        }
        obj = obj[key];
    }
    obj[keyPath[lastKeyIndex]] = value;
}

assign(res, [1, 1, 3], '1');








