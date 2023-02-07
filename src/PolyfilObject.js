Object.myCreate = function (o) {
    function F() { }
    F.prototype = o;
    return new F();
};
Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
        resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
}

Object.keys = (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    // hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
    // dontEnums = [
    //     'toString',
    //     'toLocaleString',
    //     'valueOf',
    //     'hasOwnProperty',
    //     'isPrototypeOf',
    //     'propertyIsEnumerable',
    //     'constructor'
    // ],
    // dontEnumsLength = dontEnums.length;
    return function (obj) {
        // if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');
        var result = [];
        for (var prop in obj) {
            if (hasOwnProperty.call(obj, prop)) result.push(prop);
        }
        // if (hasDontEnumBug) {
        //     for (var i = 0; i < dontEnumsLength; i++) {
        //         if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
        //     }
        // }
        return result;
    };
})();


//MDN
if (typeof Object.create != 'function') {
    Object.create = (function () {
        var Temp = function () { };
        return function (prototype) {
            if (arguments.length > 1) {
                throw Error('Second argument not supported');
            }
            if (typeof prototype != 'object') {
                throw TypeError('Argument must be an object');
            }
            Temp.prototype = prototype;
            var result = new Temp();
            Temp.prototype = null;
            return result;
        };
    })();
}