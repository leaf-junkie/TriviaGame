// Trivia objects

let triviaObjects = [ 
    question1 = {
        question: 'Which country is the greatest producer of coffee?',
        answer: 'Brazil',
        options: ['Brazil', 'Indonesia', 'Costa Rica','The U.S.']
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

// Declare your variables
let numOfRightGuesses = 0;
let numOfWrongGuesses = 0;
let = 0;
let userAnswers = [];

// Display a START screen with a button to begin

// Upon start, display timer, question, and potential answers
$('#playButton').click(countdownTimer);


// TIMER
    // Make the countdown timer (30 seconds to answer each questions)
    countdownTimer = setTimeout(countdown, 30000);

    // Display the timer in the DOM
    $('p.timer').click(countdownTimer);

    // Reset the timer when it reaches zero OR when an answer has been selected
    clearTimeout(countdownTimer)

// QUESTION AND ANSWERS
    // Make questions clickable
    // On click, move to next question

// Display GAME OVER screen after final question. Provide option to play again