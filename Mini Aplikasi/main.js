const fs = require("fs");
const process = require("process");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Aplikasi Simple Hitung Luas Segitiga");
console.log();

readline.question("Masukkan Alas : ", function (alas) {
    readline.question("Masukkan Tinggi : ", function (tinggi) {
        const luas = 1/2 * Number(alas) * Number(tinggi);
        writeHistory({ Alas: alas, Tinggi: tinggi, Luas: luas });
        readline.close();
    });
});

function writeHistory(data) {
    fs.readFile("./coba.json", "utf-8", function (err, history) {
        if(err) {
            console.log(err.message);
            process.exit(1);
        }

        const oldHistory = JSON.parse(history);
        oldHistory.push(data);

        fs.writeFileSync("./coba.json", JSON.stringify(oldHistory));
        console.log();
        console.log("Aplikasi Berhasil");
    });
}