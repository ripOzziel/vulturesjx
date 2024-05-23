// pages/api/compile.js

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

export default (req, res) => {
    const { jasminCode } = req.body;
    const filename = 'Hiram.j';

    saveJasminFile(filename, jasminCode);
    compileAndRunJasmin(filename, (output) => {
        res.status(200).json({ output });
    });
};

function saveJasminFile(filename, content) {
    const filePath = path.join(process.cwd(), filename);
    fs.writeFileSync(filePath, content);
}

function compileAndRunJasmin(filename, callback) {
    const jasminJarPath = path.join(process.cwd(), 'jasmin.jar');
    const filePath = path.join(process.cwd(), filename);

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
