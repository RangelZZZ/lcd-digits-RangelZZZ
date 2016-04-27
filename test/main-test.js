describe(' integration testing', function () {

    var lcdDigits = loadLcdDigits();

    it('should print correct  number digits when input has three numbers', function () {

        var firstNumber = 910;

        spyOn(console, 'log');

        showLcdDigits(firstNumber, lcdDigits);

        var testNumberDigitsText = '\n' + '._. ... ._. ' + '\n' + '|_| ..| |.| ' + '\n' + '..| ..| |_| ' + '\n';
        expect(console.log).toHaveBeenCalledWith(testNumberDigitsText);

    });

    it('should print correct  number digits when input has two numbers', function () {

        var secondNumber = 65;

        spyOn(console, 'log');

        showLcdDigits(secondNumber, lcdDigits);

        var testNumberDigitsText = '\n' + '._. ._. ' + '\n' + '|_. |_. ' + '\n' + '|_| ._| ' + '\n';
        expect(console.log).toHaveBeenCalledWith(testNumberDigitsText);

    });

    it('should print correct  number digits when input has only one  numbers', function () {

        var thirdNumber = 1;

        spyOn(console, 'log');

        showLcdDigits(thirdNumber, lcdDigits);

        var testNumberDigitsText = '\n' + '... ' + '\n' + '..| ' + '\n' + '..| ' + '\n';
        expect(console.log).toHaveBeenCalledWith(testNumberDigitsText);

    });

});


describe('unit testing', function () {

    describe('getNumberDigits', function () {

        var lcdDigits = loadLcdDigits();

        it('should print correct numberDigits when input has three numbers ', function () {

            var firstInteger = 910;
            var testNumberDigits = [
                ['._.', '|_|', '..|'],
                ['...', '..|', '..|'],
                ['._.', '|.|', '|_|']];

            var numberDigits = getNumberDigits(firstInteger, lcdDigits);

            expect(numberDigits).toEqual(testNumberDigits);

        });

        it('should print correct numberDigits when input has two numbers', function () {

            var secondInteger = 65;
            var testNumberdigits = [
                ['._.', '|_.', '|_|'],
                ['._.', '|_.', '._|']];

            var numberDigits = getNumberDigits(secondInteger, lcdDigits);

            expect(numberDigits).toEqual(testNumberdigits);

        });

        it('should print correct numberDigits when input has only one number', function () {

            var thirdInteger = 1;
            var testNumberdigits = [['...', '..|', '..|']];
            var numberDigits = getNumberDigits(thirdInteger, lcdDigits);

            expect(numberDigits).toEqual(testNumberdigits);

        });

    });

    describe('printNumberDigits', function () {

        it('should print correct NumberDigitsText when input has three numers', function () {

            var firstNumberDigits = [['._.', '|_|', '..|'],
                ['...', '..|', '..|'],
                ['._.', '|.|', '|_|']];
            var testNumberDigitsText = '\n' + '._. ... ._. ' + '\n' + '|_| ..| |.| ' + '\n' + '..| ..| |_| ' + '\n';
            var numberDigitsText = printNumberDigits(firstNumberDigits);

            expect(numberDigitsText).toEqual(testNumberDigitsText);

        });

        it('should print correct NumberDigitsText when input has two numbers', function () {

            var secondNumberDigits = [['._.', '|_.', '|_|'],
                                      ['._.', '|_.', '._|']];
            var testNumberDigitsText = '\n' + '._. ._. ' + '\n' + '|_. |_. ' + '\n' + '|_| ._| ' + '\n';
            var numberDigitsText = printNumberDigits(secondNumberDigits);

            expect(numberDigitsText).toEqual(testNumberDigitsText);

        });

        it('should print correct NumberDigitsText when input has only one numbers',function(){

            var thirdNumberDigits = [['...', '..|', '..|']];
            var testNumberDigitsText = '\n' + '... ' + '\n' + '..| ' + '\n' + '..| ' + '\n';
            var numberDigitsText = printNumberDigits(thirdNumberDigits);

            expect(numberDigitsText).toEqual(testNumberDigitsText);
        });
    });
});

