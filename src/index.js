module.exports = function toReadable(number) {
    const arrNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
        'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];

    const arrTenths = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
        'eighty', 'ninety']

    if (number < 20) {
        return arrNumbers[number];
    }

    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return arrTenths[number / 10];
        } else {
            return arrTenths[Math.floor(number / 10)] + ' ' + arrNumbers[number % 10];
        }
    }

    if (number > 99) {
        if (number % 100 === 0) {
            return arrNumbers[number / 100] + ' ' + 'hundred';
        } else if (number % 10 === 0) {
            return arrNumbers[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + arrTenths[(Math.floor(number / 10)) % 10];
        }
        else if (number % 100 < 20) {
            return arrNumbers[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + arrNumbers[number % 100];
        } else {
            return arrNumbers[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' +
                arrTenths[(Math.floor(number / 10)) % 10] + ' ' + arrNumbers[number % 10]
        }

    }
}