$('document').ready() {

    // Trivia objects

    let triviaObjects = [ 
        question1 = {
            question: 'Which country is the greatest producer of coffee?',
            answer: 'Brazil',
            options: ['Brazil', 'Indonesia', 'Costa Rica', 'The U.S.']
        },
        
        question2 = {
            question: 'What is an Americano?',
            answer: 'Espresso diluted with water',
            options: ['Espresso diluted with water','Espresso with a splash of cream','Two shots of espresso','Weak coffee']
        },
        
        question3 = {
            question: 'A latte is an espresso-based drink. What is the ratio of components?',
            answer: '',
            options: ['', '', '', '']
        },
        
        question4 = {
            question: 'What is a mocha?',
            answer: 'A latte flavored with chocolate',
            options: ['A latte flavored with chocolate', 'Hot chocolate', 'Coffee with a splash of chocolate milk', 'Chocolate flavored espresso']
        },

        question5 = {
            question: 'What is a macchiato?',
            answer: '',
            options: ['', '', '', '']
        },
        
        question6 = {
            question: 'What is a red eye?',
            answer: '',
            options: ['', '', '', '']
        },

        question7 = {
            question: 'What is the difference between Arabica and Robusta?',
            answer: '',
            options: ['', '', '', '']
        },

        question8 = {
            question: 'How was coffee initially discovered?',
            answer: '',
            options: ['', '', '', '']
        },

        question9 = {
            question: 'How much caffeine is in coffee?',
            answer: '',
            options: ['', '', '', '']
        },

        question10 = {
            question: 'What is a key difference between light roasts and darker roasts?',
            answer: 'Light roast tends to contain more caffeine than dark roast',
            options: ['Light roast tends to contain more caffeine than dark roast', '', '', '']
        },

        question11 = {
            question: 'What is the relationship between coffee and Coffea?',
            answer: 'Coffea is a genus of plants from which coffee beans originate',
            options: ['Coffea is a genus of plants from which coffee beans originate', '', '', '']
        },

        question12 = {
            question: 'A coffee bean is actually...',
            answer: 'The seed of a fruit',
            options: ['The seed of a fruit', 'Just a bean', 'A nut similar to hazelnuts', 'A type of fruit']
        },

        question13 = {
            question: 'Why is coffee roasted?',
            answer: 'Raw coffee beans are tasteless. Roasting turns the carbs and fats in the beans into oils that smell like the coffee we know and love.',
            options: ['Raw coffee beans are tasteless. Roasting turns the carbs and fats in the beans into oils that smell like the coffee we know and love.', '', '', '']
        }
    ];

    // VARIABLE DECLARATIONS
    // Number of correct and incorrect guesses
    let numOfRightGuesses = 0;
    let numOfWrongGuesses = 0;

    // Keep track of the number of time the timer reached 0
    let numOfTimesRunOut = 0;

    // keep track of question that the game is on
    let currentQuestion = '';

    // SETTING UP THE GAME
    // When Play button is clicked, game starts: display timer, current question, and potential answers
    $('#playButton').click(reset());

    // Reset function: make start screen hidden, set all scores to 0, reset countdown timer, 
    function reset() {
        $('.start-screen').fadeOut(); // Can also try hide
        $('#playButton').click(countdownTimer);
        // $('').show() Show the question and answers...Not sure this is necessary
    }

    // TIMER
    // Make the countdown timer (30 seconds to answer each questions)
    countdownTimer = setTimeout(countdown, 30000);

    // Display the timer in the DOM
    $('p.timer').click(countdownTimer);

    // Reset the timer when it reaches zero OR when an answer has been selected
    clearTimeout(countdownTimer);


    // QUESTION AND ANSWERS
    // On click, move to next question TODO: Does the function 'nextQuestion' need to be in quotes?
    $('.optionButton').click(nextQuestion);


    // TODO: If the player selects the correct answer, show a screen congratulating them for choosing the right option. 
        
        // TODO: After a few seconds, display the next question (without user input)

    // If the player runs out of time, tell the player that time is up and display the correct answer
    if (countdownTimer === 0) {
        
        // TODO: Wait a few seconds, then show the next question.
    }

    // TODO: If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer.

        // TODO: Wait a few seconds, then show the next question.

    // TODO: On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

    // function nextQuestion() {
    //     if () {

    //     }
    // }
}