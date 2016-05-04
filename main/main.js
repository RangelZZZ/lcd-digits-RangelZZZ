function showLcdDigits(integer) {

    var numberDigits = getNumberDigits(integer);
    var numberDigitsText = printNumberDigits(numberDigits);

    console.log(numberDigitsText);
}


function getNumberDigits(integer){


    var numberDigits = [];
    var stringNumber = integer.toString();
    var lcdDigits = loadLcdDigits();
    for (var i = 0; i < stringNumber.length; i++) {
        if (isExit(parseInt(stringNumber.charAt(i)), lcdDigits)) {
            var digit = isExit(parseInt(stringNumber.charAt(i)), lcdDigits);
            numberDigits.push(digit);
        }
    }
    return numberDigits;
}


function isExit(number, lcdDigits) {

    for (var i = 0; i < lcdDigits.length; i++) {
        if (number === parseInt(lcdDigits[i].number)) {
            return lcdDigits[i].digits;
        }
    }
}


function printNumberDigits(numberDigits) {

    var numberDigistsText = '\n';

    for (var j = 0; j < 3; j++) {
        for (var i = 0; i < numberDigits.length; i++) {
            numberDigistsText += numberDigits[i][j] + ' ';
        }
        numberDigistsText += '\n';
    }
    return numberDigistsText;
}




