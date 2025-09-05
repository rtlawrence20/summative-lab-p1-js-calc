import { Calculator } from "./calc.js";
import { createInterface } from "readline";

// Create readline interface
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper to prompt user input
function prompt(question) {
    return new Promise((resolve) => {
        rl.question(question, (input) => resolve(input));
    });
}

async function runCalculator() {
    let running = true;
    //print calculator menu to screen
    console.log(   "\n_____________________________________");
    console.log("| 📟       Calculator Menu:       📟 |\n"+
                "| 1. Add        |      4. Divide     |\n" +
                "| 2. Subtract   |      5. History    |\n" +
                "| 3. Multiply   |      6. Exit       |");
    console.log("—————————————————————————————————————\n");
    // Start calculator loop
    while (running) {
        const choice = await prompt("Input a number 1-6 corresponding to the list above:\n");
        // Calculation option will require further user input of two operands
        const furtherInputReq = ['1', '2', '3', '4'];
        if (furtherInputReq.includes(choice)) {
            const a = parseFloat(await prompt("Input first number: "));
            const b = parseFloat(await prompt("Input second number: "));

            //Check for valid input
            if (isNaN(a) || isNaN(b)) {
                console.log("Invalid input. Please ensure valid numbers.");
                continue;
            }

            //Now with all required and valid input, determine what the calculator should do
            let result;
            switch (choice) {
                case '1':
                    result = Calculator.add(a, b);
                    console.log(`Result: ${a} + ${b} = ${result}\n`);
                    break;
                case '2':
                    result = Calculator.sub(a, b);
                    console.log(`Result: ${a} - ${b} = ${result}\n`);
                    break;
                case '3':
                    result = Calculator.mul(a, b);
                    console.log(`Result: ${a} * ${b} = ${result}\n`);
                    break;
                case '4':
                    result = Calculator.div(a, b);
                    console.log(`Result: ${a} / ${b} = ${result}\n`);
                    break;
            }
        } 
        else if (choice === '5') {
            console.log(   "\n_____________________________________");
            console.log("\n📟     Calculator history:       📟 \n");
            Calculator.calcHistory.forEach((element, index) => {
                console.log(`|      ${index+1}:      value: ${element}   `);
            });
            console.log("—————————————————————————————————————\n");
            //console.log(`History of calculations: ${Calculator.calcHistory}`);
        } 
        else if (choice === '6') {
            running = false;
            console.log("Thank you, bye.");
        } 
        else {
            console.log("Invalid option. Please try again.");
        }
    }
    rl.close();
}

runCalculator();