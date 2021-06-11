const { promisify } = require("util");
const exec = promisify(require("child_process").exec);

// if (process.argv.length > 2) {
//     const ipArr = process.argv.splice(2);

//     Promise.all(
//         ipArr.map(async (ip) => {
//             // check if ip is valid
//             const ipRegEx = /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}/;
//             if (ipRegEx.test(ip)) {
//                 console.log("Valid ip:", ip);
//                 const { stderr, stdout } = await exec(`ping ${ip}`);
//                 if (!stderr) {
//                     console.log(stdout);
//                 } else {
//                     console.log(stderr);
//                 }
//             } else {
//                 console.log("Not valid ip:", ip);
//             }
//         })
//     );
// }

const openApp = () => {
    if (process.argv.length > 2) {
        const app = process.argv[2];
        switch (app) {
          case "Kalkulator":
            exec("calc.exe").then((stdout, stderr) => {
              console.log(stdout);
            });
            break;
          case "Paint":
            exec("mspaint.exe").then((stdout, stderr) => {
              console.log(stdout);
            });
            break;
          default:
            console.log("Invalid app name.");
        }
    }
}

module.exports = {
    openApp,
};