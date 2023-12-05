function calculate() {
    var inputNumber = document.getElementById('numberInput').value;
    var resultElement = document.getElementById('result');

    // Example table for demonstration
    var table = {
        161527556: 'Rodrigo Pereira',
        140903795: 'Jose Gutierrez',
        3: 'Answer C'
        // Add more entries as needed
    };

    // Check if inputNumber exists in the table
    if (table[inputNumber]) {
        resultElement.innerText = 'Hola ' + table[inputNumber] + ', tenemos las siguientes sugerencias para ti:';
    } else {
        resultElement.innerText = 'Hola, ' + inputNumber + ' lamentablemente no te conocemos, agenda una consulta para poder cuidarte mejor';
    }
}
