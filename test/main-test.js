describe(' integration testing', function () {

    var lcdDigits = loadLcdDigits();
    var firstnumber= 910;

    it('should print correct  number digits', function () {

        spyOn(console, 'log');

        showLcdDigits(firstnumber,lcdDigits);

        var testNumberDigitsText = '\n' + '._.' + ' ' + '...' + ' ' + '._.' + ' ' + '\n' + '|_|' + ' ' + '..|' + ' ' + '|.|'
            + ' ' + '\n' + '..|' + ' ' + '..|' + ' ' + '|_|' + ' ' + '\n';
        expect(console.log).toHaveBeenCalledWith(testNumberDigitsText);

    });
});


describe('unit testing', function () {

    describe('getNumberDigits', function () {

        var lcdDigits = loadLcdDigits();
        var firstInteger = 910;

        it('should print correct numberDigits  ', function () {

            var testNumberDigits = [
                ['._.', '|_|', '..|'],
                ['...', '..|', '..|'],
                ['._.', '|.|', '|_|']];

            var numberDigits = getNumberDigits(firstInteger, lcdDigits);

            expect(numberDigits).toEqual(testNumberDigits);

        });


    });


    describe('printNumberDigits', function () {

        var firstNumberDigits =
            [['._.', '|_|', '..|'],
                ['...', '..|', '..|'],
                ['._.', '|.|', '|_|']];


        it('should print correct NumberDigitsText ', function () {

            var testNumberDigitsText = '\n' + '._.' + ' ' + '...' + ' ' + '._.' + ' ' + '\n' + '|_|' + ' ' + '..|' + ' ' + '|.|' + ' ' + '\n' + '..|' + ' ' + '..|' + ' ' + '|_|' + ' ' + '\n';
            var numberDigitsText = printNumberDigits(firstNumberDigits);

            expect(numberDigitsText).toEqual(testNumberDigitsText);

        });

    });
});

