const aob =
    [
        { framework: 'React.JS', website: 'Paypal' },
        { framework: 'React.JS', website: 'Tesla' },
        { framework: 'Angular', website: 'Google' },
        { framework: 'Vue.JS', website: 'Vue' },
        { framework: 'JavaScript', website: 'Google' },
    ]


const count = (arr, str) => {
    let map = {};
    let result = [];

    for (let el of arr) {
        map[el[str]] = map[el[str]] + 1 || 1;
    }

    for (let obj in map) {
        let newObj = {};
        newObj[str] = obj;
        newObj.count = map[obj];
        result.push(newObj)
    }

    return result;
}
console.log(count(aob, 'framework'));
console.log(count(aob, 'website'));


const obj = {
    a: 1,
    b: this.a + 1,
    c: () => this.a + 1,
    d() {
        return this.a + 1
    },
    e() {
        return (() => this.a + 1)()
    }
}
console.log(obj.b) // NaN
console.log(obj.c()) // NaN
console.log(obj.d()) // 2
console.log(obj.e()) // 2