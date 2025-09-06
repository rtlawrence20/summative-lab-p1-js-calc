// Create an object that holds calculator and methods that will be used

/**
 * This is a calculator capable of basic mathematical operations with two operands
 * @property {Array} calcHistory - history of previous calculations
 * @method add(a,b) - adds a to b
 * @method sub(a,b) - subtracts b from a
 * @method mul(a,b) - multiplies a and b
 * @method div(a,b) - divides a by b for b != 0
 */
export const Calculator = {
    calcHistory: [],

    // private helper operand validation
    _validNumbers(a,b){
        //check value of 'a' isNumber. If not, log to user that input is invalid
        let conditionNaN = (tempVar) => 
            typeof tempVar !== 'number' || !Number.isFinite(tempVar);

        if (conditionNaN(a)) {
            console.log(`Value of operand a:[${a}] is not valid input`);
            return false;
        }
        //check value of 'b' isNumber. If not, log to user that input is invalid
        else if (conditionNaN(b)) {
            console.log(`Value of operand b:[${b}] is not valid input`);
            return false;
        }
        else{
            return true;
        }
    },

    recHistory(a, b, operator, result) {
        this.calcHistory.push(`${a} ${operator} ${b} = ${result}`);
    },

    showHistory() {
        console.log(   "\n_____________________________________");
        console.log("\n📟     Calculator history:       📟 \n");
        if (this.calcHistory.length === 0) {
            console.log("      No calculations stored yet.    ");
        } 
        else {
            Calculator.calcHistory.forEach((element, index) => {         
                console.log(`|       ${element}`);
            });
        }
        console.log("—————————————————————————————————————\n");
    },

    add(a,b) {
        if (this._validNumbers(a,b)) {
            const result = a + b;
            this.recHistory(a, b, '+', result);
            return result;
        }
        return;
    },

    sub(a,b) {
        if (this._validNumbers(a,b)) {
            const result = a - b;
            this.recHistory(a, b, '-', result);
            return result;
        }
        return;
    },

    mul(a,b) {
        if (this._validNumbers(a,b)) {
            const result = a * b;
            this.recHistory(a, b, '*', result);
            return result;
        }
        return;
    },

    div(a,b) {
        if (this._validNumbers(a,b)) {
            //special case for div b can't be 0
            if (b === 0) {
                console.log(`The value of operand b ${[b]} cannot be 0`)
                return null;
            }
            const result = a / b;
            this.recHistory(a, b, '/', result);
            return result;
        }
        return;
    }
};