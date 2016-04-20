describe(' integration test', function () {

    var lcdDigits = [{digits: ['._.', '|.|', '|_|'], number: 0},
        {digits: ['...', '..|', '..|'], number: 1},
        {digits: ['._.', '._|', '|_.'], number: 2},
        {digits: ['._.', '._|', '._|'], number: 3},
        {digits: ['...', '|_|', '..|'], number: 4},
        {digits: ['._.', '|_.', '._|'], number: 5},
        {digits: ['._.', '|_.', '|_|'], number: 6},
        {digits: ['._.', '..|', '..|'], number: 7},
        {digits: ['._.', '|_|', '|_|'], number: 8},
        {digits: ['._.', '|_|', '..|'], number: 9}];

    it('should print correct  number digits', function () {

        spyOn(console, 'log');

        var testNumberDigitsText =
            '._.' + '...' + '._.' + '\n' + '|_|' + '..|' + '|.|' + '\n'
        '..|' + '..|' + '|_|';

        var numberDigitsText = showLcdDigits(lcdDigits);

        expect(numberDigitsText).toEqual(testNumberDigitsText);

    });
});


describe('unit test', function () {

    describe('getNumberDigits', function () {

        var lcdDigits = [
            {digits: ['._.', '|.|', '|_|'], number: 0},
            {digits: ['...', '..|', '..|'], number: 1},
            {digits: ['._.', '._|', '|_.'], number: 2},
            {digits: ['._.', '._|', '._|'], number: 3},
            {digits: ['...', '|_|', '..|'], number: 4},
            {digits: ['._.', '|_.', '._|'], number: 5},
            {digits: ['._.', '|_.', '|_|'], number: 6},
            {digits: ['._.', '..|', '..|'], number: 7},
            {digits: ['._.', '|_|', '|_|'], number: 8},
            {digits: ['._.', '|_|', '..|'], number: 9}];

        it('should print correct numberDigits', function () {

            var testNumberDigits = [
                {numberDigit: ['._.', '|_|', '..|']},
                {numberDigit: ['...', '..|', '..|']},
                {numberDigit: ['._.', '|.|', '|_|']}];

            var numberDigits = getNumberDigits( lcdDigits);
            ecpect(numberDigits).toEqual(testNumberDigits);

        });
    });


    describe('printNumberDigits', function () {

        var numberDigits = [
            {numberDigit: ['._.', '|_|', '..|']},
            {numberDigit: ['...', '..|', '..|']},
            {numberDigit: ['._.', '|.|', '|_|']}];

        it('should print correct NumberDigitsText', function () {

            var testNumberDigitsText = '._.' + '...' + '._.' + '\n' + '|_|' + '..|' + '|.|' + '\n';
            '..|' + '..|' + '|_|';
            var numberDigitsText = printNumberDigits(numberDigits);

            expect(numberDigitsText).toEqual(testNumberDigitsText);

        });

    });
});
