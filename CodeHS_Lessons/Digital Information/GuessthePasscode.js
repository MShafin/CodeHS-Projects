/*
 * Write a program that guesses every possible 4 digit passcode
 * combinations until the correct passcode is guessed.
 *
 * The passcode is randomly generated and stored in the variable
 * secretPasscode.
 *
 * Print out how many guesses it took to guess the correct passcode.
 */
 
function start() {
    var secretPasscode = generateRandomPasscode();
    println(secretPasscode);
    isCorrect(secretPasscode);
}


// Checks whether the given guess passcode is the correct passcode
function isCorrect(guessCode, correctCode) {
    return guessCode == correctCode;
    println("Correct Guess");
}

// Generates a random 4 digit passcode and returns it as a String
function generateRandomPasscode() {
    var randomPasscode = "";
    for(var i = 0; i < 4; i++) {
        var randomDigit = Randomizer.nextInt(0, 9);
        randomPasscode += randomDigit;
    }
    return randomPasscode;
}