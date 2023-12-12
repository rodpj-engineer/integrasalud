function calculate() {
    var inputNumber = document.getElementById('numberInput').value;
    var resultElement = document.getElementById('result');
    var resultInfoElement = document.getElementById('resultInfo');

    // Fetch the CSV file
    fetch('BBDDBupaIntegraSalud.csv')  // CSV File with ruts bupas
        .then(response => response.text())
        .then(data => {
            // Parse the CSV data
            var rows = data.split('\n');
            var table = {};

            // Populate the table from CSV
            rows.forEach(row => {
                var columns = row.split(',');
                var entry = {
                    name: columns[1],
                    age: columns[2],
                    sex: columns[3],
                    lastVisit: columns[4],
                    group: columns[5],
                    days: columns[6]
                };
                table[columns[0]] = entry;
            });

            // Check if inputNumber exists in the table
            if (table[inputNumber]) {
                var resultEntry = table[inputNumber];
                resultElement.innerText = 'Result: ' + resultEntry.name + ' (' + resultEntry.age + ' years old, ' + resultEntry.sex + ')';
                resultInfoElement.innerText = 'Last Visit: ' + resultEntry.lastVisit + ', Group: ' + resultEntry.group + ', Days: ' + resultEntry.days;

                //resultElement.innerText = 'Hola ' + table[inputNumber] + ', tenemos las siguientes sugerencias para ti: \n \n XXXX \n \n Agenda ahora aquí! \n https://www.integramedica.cl/integramedica/tu-salud-al-dia-2';
                
            } else {
                resultElement.innerText = 'Hola, ' + inputNumber + ' lamentablemente no te conocemos, agenda una consulta para poder cuidarte mejor: \n \n AGENDA AQUÍ:\n https://www.integramedica.cl/integramedica/tu-salud-al-dia-2';
                resultInfoElement.innerText = '';
            }
        })
        .catch(error => console.error('Error fetching CSV file:', error));
}

function clearInput() {
    document.getElementById('numberInput').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('resultInfo').innerText = '';
}
