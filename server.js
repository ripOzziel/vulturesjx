const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const port = 3001; // Puedes cambiar este puerto si lo necesitas

app.use(cors());
app.use(bodyParser.json());

app.post('/compile', (req, res) => {
    console.log('Request body:', req.body); // Verifica que el cuerpo de la solicitud contiene jasminCode
    const { jasminCode } = req.body;
    if (!jasminCode) {
        res.status(400).json({ error: 'No Jasmin code provided' });
        return;
    }

    console.log('Jasmin code received:', jasminCode);

    const filename = 'Hiram.j';

    saveJasminFile(filename, jasminCode);
    compileAndRunJasmin(filename, (output) => {
        res.status(200).json({ output });
    });
});

function saveJasminFile(filename, content) {
    const filePath = path.join(__dirname, filename);
    console.log('Saving Jasmin file to:', filePath);
    fs.writeFileSync(filePath, content);
}

function compileAndRunJasmin(filename, callback) {
    const jasminJarPath = path.join(__dirname, 'jasmin.jar');
    const filePath = path.join(__dirname, filename);

    exec(`java -jar ${jasminJarPath} ${filePath}`, (error, stdout, stderr) => {
        if (error || stderr) {
            console.error(`Error compilando el archivo .j: ${error ? error.message : stderr}`);
            callback(error ? error.message : stderr);
            return;
        }
        console.log(`Stdout: ${stdout}`);

        // Ejecutar el archivo compilado
        const className = path.basename(filename, '.j');
        exec(`java ${className}`, (error, stdout, stderr) => {
            if (error || stderr) {
                console.error(`Error ejecutando el archivo .class: ${error ? error.message : stderr}`);
                callback(error ? error.message : stderr);
                return;
            }
            console.log(`Output del programa: ${stdout}`);
            callback(stdout);
        });
    });
}

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});