$('document').ready(function() {

    // Trivia objects

    let triviaObjects = [ 
        question1 = {
            question: 'Which country is the greatest producer of coffee?',
            answer: 'Brazil',
            options: ['Brazil', 'Indonesia', 'Costa Rica', 'The U.S.'],
            img: ''
        },
        
        question2 = {
            question: 'What is an Americano?',
            answer: 'Espresso diluted with water',
            options: ['Espresso diluted with water','Espresso with a splash of cream','Two shots of espresso','Weak coffee'],
            img: ''
        },
        
        question3 = {
            question: 'A latte is an espresso-based drink. What is the ratio of components?',
            answer: '',
            options: ['', '', '', ''],
            img: ''
        },
        
        question4 = {
            question: 'What is a mocha?',
            answer: 'A latte flavored with chocolate',
            options: ['A latte flavored with chocolate', 'Hot chocolate', 'Coffee with a splash of chocolate milk', 'Chocolate flavored espresso'],
            img: ''
        },

        question5 = {
            question: 'What is an espresso macchiato?',
            answer: 'espresso marked with a dallop of foam ',
            options: ['', '', '', ''],
            img: ''
        },
        
        question6 = {
            question: 'What is a red eye?',
            answer: '',
            options: ['', '', '', ''],
            img: ''
        },

        question7 = {
            question: 'What is the difference between Arabica and Robusta?',
            answer: '',
            options: ['', '', '', ''],
            img: ''
        },

        question8 = {
            question: 'How was coffee initially discovered?',
            answer: '',
            options: ['', '', '', ''],
            img: ''
        },

        question9 = {
            question: 'How much caffeine is in coffee?',
            answer: '',
            options: ['', '', '', ''],
            img: ''
        },

        question10 = {
            question: 'What is a key difference between light roasts and darker roasts?',
            answer: 'Light roast tends to contain more caffeine than dark roast',
            options: ['Light roast tends to contain more caffeine than dark roast', '', '', ''],
            img: ''
        },

        question11 = {
            question: 'What is the relationship between coffee and Coffea?',
            answer: 'Coffea is a genus of plants from which coffee beans originate',
            options: ['Coffea is a genus of plants from which coffee beans originate', '', '', ''],
            img: ''
        },

        question12 = {
            question: 'A coffee bean is actually...',
            answer: 'The seed of a fruit',
            options: ['The seed of a fruit', 'Just a bean', 'A nut similar to hazelnuts', 'A type of fruit'],
            img: ''
        },

        question13 = {
            question: 'Why is coffee roasted?',
            answer: 'Raw coffee beans are tasteless. Roasting turns the carbs and fats in the beans into oils that smell like the coffee we know and love.',
            options: ['Raw coffee beans are tasteless. Roasting turns the carbs and fats in the beans into oils that smell like the coffee we know and love.', '', '', ''],
            img: ''
        }
    ];

    // VARIABLE DECLARATIONS
    let arrayOfQuestions = [triviaObjects.question1,triviaObjects.question2, triviaObjects.question3, triviaObjects.question4, triviaObjects.question5, triviaObjects.question6, triviaObjects.question7,triviaObjects.question8, triviaObjects.question9,triviaObjects.question10,triviaObjects.question11, triviaObjects.question12,triviaObjects.question13];
    
    let numOfRightGuesses = 0;
    let numOfWrongGuesses = 0;
    let numOfTimesRunOut = 0;

    // SETTING UP THE GAME
    // When Play button is clicked, game starts: display timer, current question, and potential answers
    $('#playButton').on('click', reset());

    // Reset function: make start screen hidden, set all scores to 0, reset countdown timer, 
    function reset() {
        $('.start-screen').css({visibility: 'hidden'}); // Can also try hide
        $('#playButton').on('click', countdownTimer);
        // $('').show() Show the question and answers...Not sure this is necessary
    }

    // TIMER
    countdownTimer = setTimeout(countdown, 15000);

    // Display the timer in the DOM
    $('p.timer').on('click', countdownTimer);

    // Reset the timer when it reaches zero
    if (countdown >= 15000) {
        clearTimeout(countdownTimer);
        $('.countdown').clearTimeout(countdownTimer);
    }

    // QUESTION AND ANSWERS
    // Reset the timer when an answer has been selected
    // If an answer has been clicked, display if answer is right or wrong
    if (x) {
        $('.countdown').clearTimeout(countdownTimer);
    }

    // On click, move to next question TODO: Does the function 'nextQuestion' need to be in quotes?
    $('.optionButton').on('click', nextQuestion);


    // TODO: Randomize order of questions
    function randomizeOptions() {
        const = [, , , ];
    }

    // If the player selects the correct answer, show a screen congratulating them for choosing the right option. 
    if (selectedAnswer === correctAnswer) {
        $('right').css({visibility: 'visible'});
        delayQuestion();
    } else if (selectedAnswer !== correctAnswer) {
        // If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer.
            $('wrong').css({visibility: 'visible'});
            $('showCorrect').text(correctAnswer);
            delayQuestion();
        }

    }
    
    // If the player runs out of time, tell the player that time is up and display the correct answer
    if (countdownTimer === 0) {
        $('outOfTime').css({visibility: 'visible'});
        // Wait a few seconds, then show the next question.
        const delay = setTimeout(delay, 2000);
        nextQuestion();
    }

        // function nextQuestion() {
    //     if () {

    //     }
    // }

    // TODO: On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

    
}); //end ready