
/*
student version with NO assertion tests or refactoring implemented
*/
const max = 1000;   // Set upper bounds
const min = 0;      // Set lower bounds
let check4prime;    // global object
let primeBucket = new Array(max + 1);

class Check4Prime {
    /*
    Calculates prime numbers and put true or false in an array
    */

    initiateBucket(){
        for (let i = 2; i <= max; i++) {
            primeBucket[i] = true;
        }
        for (let i = 1; i <= max; i++) {
            if (i % 2 === 0 || i < 3) {
                primeBucket[i] = i === 2;
            } else {
                const sqrt = Math.floor(Math.sqrt(i));
                for (let j = 3; j <= sqrt; j += 2) {
                    if (i % j === 0) {
                        primeBucket[i] = false;
                    }
                }
            }
        }
    }

    primeCheck(num) {
        // Check input against prime array
        if (primeBucket[num] == true) {
            return true;
        }
        else {
            return false;
        }
    }

    /*
    Method to validate input
    */
    checkArgs() {
        // Check arguments for correct number of parameters if not throw new Error();
        if (arguments.length != 1) {
            throw new Error("Incorrect number of arguments");
        }
        else 
        {
            // If undefined throw new Error();
            if (arguments[0] == undefined) {
                throw new Error("Undefined input");
            }

            // If zero/empty throw new Error();
            if (arguments[0] == 0 || arguments[0] == "") {
                throw new Error("Zero/empty input");
            }
        
            if (!isNaN(arguments[0])) {
                throw new Error("Not a number");
            }

            if (!num.isInteger(arguments[0])) {
                throw new Error("Not an integer");
            }

            // If less than lower bounds throw new Error();
            if (arguments[0] < min) {
                throw new Error("Less than lower bounds");
            }

            // If greater than upper bounds throw new Error();
            if (arguments[0] > max) {
                throw new Error("Greater than upper bounds");
            }
        }
    }
} 


function checkTest()
{
    check4prime = new Check4Prime();
    check4prime.initiateBucket();
    // run various automated tests
    test_Check4Prime_known_true();
    test_Check4Prime_known_false();
    test_Check4Prime_checkArgs_neg_input();
    test_Check4Prime_checkArgs_above_upper_bound();
    test_Check4Prime_checkArgs_char_input();
    test_Check4Prime_checkArgs_2_inputs();
    test_Check4Prime_checkArgs_zero_input();
    test_Check4Prime_checkArgs_undefined_input();
    test_Check4Prime_checkArgs_non_integer_input();
}

function check(num)
{
    check4prime = new Check4Prime();

    try {
        // check4prime.checkArgs(num);
        check4prime.primeCheck(num);
        // either use this assertion or the alert box for output
        //assert(check4prime.primeCheck(num), description)
        alert(`Is number ${num} a prime? ${check4prime.primeCheck(num)}`)
    }
    catch (err) {
        let description = `Input/number: ${num}. Error in checkArgs()`;
        assert(check4prime.primeCheck(num), description);
    }
}


/*
append test result in list on web page 
*/
function assert(outcome, description) {
    let output = document.querySelector('#output'); 
    let li = document.createElement('li'); 
    li.className = outcome ? 'pass' : 'fail'; 
    li.appendChild(document.createTextNode(description)); 
    output.appendChild(li); 
}

// Test case 1, check known true primes
function test_Check4Prime_known_true() {
    const checkList = [3,17,29,997];

    for(let i = 0; i < checkList.length; i++) {
        assert(check4prime.primeCheck(checkList[i]), `Test for known true primes with: ${checkList[i]}`);
    }
}

// Test case 2, check known false primes
function test_Check4Prime_known_false(){
    const checkList = [0,4,27,49];

    for (let i = 0; i < checkList.length; i++) {
        if(check4prime.primeCheck(checkList[i]) == false){ 
            assert(true, `Test for known false primes with: ${checkList[i]}`);
        }else{
            assert(false, `Test for known false primes with: ${checkList[i]}`);
        }
    }
}

// Test case 3, check negative input
function test_Check4Prime_checkArgs_neg_input() {
    try {
        var result = check4prime.checkArgs(-1);
        assert(result, 'Test for negative input: -1');
    }catch(err){
        assert(true, 'Test for negative input: -1');
    }
}

// Test case 4, check for upper bound limit
function test_Check4Prime_checkArgs_above_upper_bound() {
    try {
        var result = check4prime.checkArgs(10001);
        assert(result, 'Test for above upper bound limit: 10001');
    }
    catch (err){
        assert(true, 'Test for above upper bound limit: 10001');
    }
}

// Test case 5, check for char input
function test_Check4Prime_checkArgs_char_input() {
    try{
        var result = check4prime.checkArgs('r');
        assert(result, 'Test for char input: r');
    }catch(err){
        assert(true, 'Test for char input: r');
    }
}

// Test case 6, check for more than one input
function test_Check4Prime_checkArgs_2_inputs() {
    try{
        var result = check4prime.checkArgs(5,99);
        assert(result, 'Test for more than one input: 5, 99');
    }catch(err){
        assert(true, 'Test for more than one input: 5, 99');
    }
}

// Test case 7, check for zero/empty input
function test_Check4Prime_checkArgs_zero_input() {
    try{
        var result = check4prime.checkArgs(0);
        assert(result, 'Test for zero input: 0');
    }catch(err){
        assert(true, 'Test for zero input: 0');
    }
}

// Test case 8, check for undefined input
function test_Check4Prime_checkArgs_undefined_input() {
    try{
        var result = check4prime.checkArgs(undefined);
        assert(result, 'Test for undefined input: undefined');
    }catch(err){
        assert(true, 'Test for undefined input: undefined');
    }
}

// Test case 9, check for non-integer input
function test_Check4Prime_checkArgs_non_integer_input() {
    try{
        var result = check4prime.checkArgs(17.5);
        assert(result, 'Test for non-integer input: 17.5');
    } catch(err){
        assert(true, 'Test for non-integer input: 17.5');
    }
}