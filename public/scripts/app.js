'use strict';

var add = function add(a, b) {
    return a + b;
};

console.log(add(4, 4));

var user = {
    name: 'vishnu',
    cities: ['raipur', 'chennai', 'Little Rock'],

    message: function message() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.message());

//challenge

var multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 10,

    newArray: function newArray() {
        var _this2 = this;

        return this.numbers.map(function (x) {
            return _this2.multiplyBy * x;
        });
    }
};

console.log(multiplier.newArray());
