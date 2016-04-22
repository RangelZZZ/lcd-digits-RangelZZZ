describe(' integration testing', function () {

    var lcdDigits = loadLcdDigits();

    it('should print correct  number digits', function () {

        spyOn(console, 'log');

        showLcdDigits(lcdDigits);

        var testNumberDigitsText = '\n' + '._.' + ' ' + '...' + ' ' + '._.' + ' ' + '\n' + '|_|' + ' ' + '..|' + ' ' + '|.|'
            + ' ' + '\n' + '..|' + ' ' + '..|' + ' ' + '|_|' + ' ' + '\n';
        expect(console.log).toHaveBeenCalledWith(testNumberDigitsText);

    });
});


describe('unit testing', function () {

    describe('getNumberDigits', function () {

        var lcdDigits =loadLcdDigits();
        var firstInteger = 910;
        var secondInteger = 65;
        var ThirdInteger = 4;

        it('should print correct numberDigits when the integer has three numbers ', function () {

            var testNumberDigits = [
                 ['._.', '|_|', '..|'],
                 ['...', '..|', '..|'],
                 ['._.', '|.|', '|_|']];
            var numberDigits = getNumberDigits(firstInteger, lcdDigits);

            expect(numberDigits).toEqual(testNumberDigits);

        });

        it('should print correct numberDigits when the integer has two numbers', function () {

            var testNumberDigits = [
                 ['._.', '|_.', '|_|'],
                 ['._.', '|_.', '._|']];
            var numberDigits = getNumberDigits(secondInteger, lcdDigits);

            expect(numberDigits).toEqual(testNumberDigits);
        });


        it('should print correct numberDigits when the integet has one numbers', function () {

            var testNumberDigits = [['._.', '._|', '._|']];
            var numberDigits = getNumberDigits(ThirdInteger, lcdDigits);

            expect(numberDigits).toEqual(testNumberDigits);
        });

    });


    describe('printNumberDigits', function () {

        var firstNumberDigits =
            [ ['._.', '|_|', '..|'],
            ['...', '..|', '..|'],
            ['._.', '|.|', '|_|']];

        var secondNumberDigits = [
             ['._.', '|_.', '|_|'],
             ['._.', '|_.', '._|']];

        var thirdNumberDigits = [ ['._.', '._|', '._|']];

        it('should print correct NumberDigitsText when we need print three numbers ', function () {

            var testNumberDigitsText = '\n' + '._.' + ' ' + '...' + ' ' + '._.' + ' ' + '\n' + '|_|' + ' ' + '..|' + ' ' + '|.|'
                + ' ' + '\n' + '..|' + ' ' + '..|' + ' ' + '|_|' + ' ' + '\n';
            var numberDigitsText = printNumberDigits(firstNumberDigits);

            expect(numberDigitsText).toEqual(testNumberDigitsText);

        });

        it('should print correct NumberDigitsText when we need print two numbers ', function () {

            var testNumberDigitsText = '\n' + '._.' + ' ' + '._.' +' '+ '\n' + '|_.' + ' ' + '|_.' +' ' +'\n' + '|_|' + ' ' + '._|' + ' ' + '\n';
            var numberDigitsText = printNumberDigits(secondNumberDigits);

            expect(numberDigitsText).toEqual(testNumberDigitsText);

        });


        it('should print correct NumberDigits when we need print one numbers', function () {

            var testNumberDigitsText = '._.' + ' ' +'\n' + '._|'+ ' ' + '\n' + '._|' + ' ' + '\n';
            var numberDigitsText = printNumberDigits(thirdNumberDigits);

            expect(numberDigitsText).toEqual(testNumberDigitsText);

        });

    });

});

