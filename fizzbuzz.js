// This is our main function
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        let str = "";
        if (i%3 == 0) {
            str = str + "Fizz";
        }
        if (i%5 == 0) {
            str = str + "Buzz";
        }
        if (i%7 == 0) {
            str = str + "Bang"
        }

        if (!str) {
            console.log(i);
        } else {
            console.log(str);
        }
    }

}

fizzbuzz();
