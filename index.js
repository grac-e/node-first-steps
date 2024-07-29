//npm init es6
//create an index.js file
//export the greet function from greet.js
//import the greet function in index.js
import {greet} from './greet.js';
import {yo} from './yo.js';
import chalk from 'chalk';
import figlet from 'figlet';
import cowsay from 'cowsay';

// let name = "Grace";
// console.log(greet(name));

//install chalk like : npm install --save chalk

const styledMessage = chalk.bgBlack.whiteBright(greet('Xola'));
console.log(styledMessage)


console.log(greet('Grace'));
console.log(yo('Gracie'))

console.log(chalk.bgBlack.white(cowsay.say({
    text: "Grace is sick!"
})))

// var figlet = require("figlet");

figlet("Hello Grace!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

figlet.text(
    "Boo!",
    {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );
