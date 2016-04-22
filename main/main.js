function showLcdDigits(lcdDigits) {

    var integerNumber = prompt('please input the number');

    var numberDigits = getNumberDigits(integerNumber, lcdDigits);
    var numberDigitsText = printNumberDigits(numberDigits);

    console.log(numberDigitsText);
}


function getNumberDigits(integerNumber, lcdDigits) {

    var numberDigits = [];
    var stringNumber = integerNumber.toString();


    for (var i = 0; i < stringNumber.length; i++) {

        if (IsExit(parseInt(stringNumber.charAt(i)), lcdDigits)) {

            var digit = IsExit(parseInt(stringNumber.charAt(i)), lcdDigits);
            numberDigits.push(digit);
        }
    }

    return numberDigits;
}



function IsExit(number, lcdDigits) {

    for (var i = 0; i < lcdDigits.length; i++) {
        if (number === parseInt(lcdDigits[i].number)) {

            var digit = lcdDigits[i].digits;
            return digit;
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




