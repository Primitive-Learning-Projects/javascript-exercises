const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else {
        return (Math.abs(num2 - num1) + 1) * (num1 + num2) / 2;
    };
};

// Do not edit below this line
module.exports = sumAll;
