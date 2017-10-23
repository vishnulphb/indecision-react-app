'use strict';

var getFirstName = function getFirstName(x) {
    return console.log('FirstName', x.split(' ')[0]);
};

var getLastName = function getLastName(x) {
    return console.log('LastName', x.split(' ')[1]);
};

getFirstName("Vishnu Pillai");
getLastName("Vishnu Pillai");
