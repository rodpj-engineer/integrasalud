function calculate() {
    //var inputString = document.getElementById('inputString').value;
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
                    rut: columns[0],
                    name: columns[1],
                    age: columns[2],
                    sex: columns[3],
                    lastVisit: columns[4],
                    group: columns[5],
                    days: columns[6]
                };

                table[entry.rut] = entry;
            });

            // Check if inputNumber exists in the table
            if (table[inputNumber]) {
            //if (table[inputString]) {
                var resultEntry = table[inputNumber];
                // var resultEntry = table[inputString];
                resultInfoElement.innerText = 'Hola ' + resultEntry.name + ' , te conozco! \n Eres ' + resultEntry.sex + ' tienes ' + resultEntry.age + ' años, \n Nos visitaste hace ' + resultEntry.days + ' días, el '+ resultEntry.lastVisit + '\n Te sugerimos realizarte ' + resultEntry.group + ', agenda con un precio especial ahora:';
                resultElement.innerHTML = '<a href="https://www.integramedica.cl/integramedica/tu-salud-al-dia-2">AGENDA AHORA AQUÍ</a>\n ';

                //resultElement.innerText = 'Hola ' + table[inputNumber] + ', tenemos las siguientes sugerencias para ti: \n \n XXXX \n \n Agenda ahora aquí! \n https://www.integramedica.cl/integramedica/tu-salud-al-dia-2';
                
            } else {
                resultElement.innerText = 'Hola, ' + inputNumber + ' lamentablemente no te conocemos, agenda una consulta para poder cuidarte mejor: \n ';
                resultElement.innerHTML = '<a href="https://www.integramedica.cl/integramedica/tu-salud-al-dia-2">AGENDA AQUÍ</a>\n ';
                resultInfoElement.innerText = 'Hola, ' + inputNumber + ' lamentablemente no te conocemos, agenda una consulta para poder cuidarte mejor: \n ';
            }
        })
        .catch(error => console.error('Error fetching CSV file:', error));
}

function clearInput() {
    //document.getElementById('inputString').value = '';
    document.getElementById('numberInput').value = '';
   // document.getElementById('result').innerText = '';
    document.getElementById('result').innerHTML = ''; 
    document.getElementById('resultInfo').innerText = '';
    //document.getElementById('resultInfo2').innerText = '';
}
