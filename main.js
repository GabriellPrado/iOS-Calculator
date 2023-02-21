$('.key').click(function() {
    let value = $(this).attr('data-value');
    let num = $('#result').text();
    let lastChar = num[num.length - 1];
    const operators = ["%", "/", "*", "-", "+", "."];

    if (value == "c") {
        $('#result').text('0');

    } else if (value == "ce") {
        $('#result').text(num.length == 1 ? '0' :  num.substring(0, num.length - 1));

    } else if (value == "calcular") {
        $('#result').text(eval(num));

    } else if (operators.includes(value)) {
        if (operators.includes(lastChar)) {
            $('#result').text(num.substring(0, num.length - 1) + value);    
        } else {
            $('#result').text(num + value);
        }

    } else {
        $('#result').text(num == '0' ? value : num + value);
    }

    calculatorFontSize()
});

function calculatorFontSize() {
    let fontSize = ($('#result').text().length < 7) ? '60px' : ($('#result').text().length == 7) ? '44px' : '32px';
    $('#result').css('font-size', fontSize);
}