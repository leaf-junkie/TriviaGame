$('document').ready(function() {
    // Trivia objects
    let triviaObjects = [ 
        {
            question: 'Which country is the greatest producer of coffee?',
            answer: 'Brazil',
            options: ['Brazil', 'Indonesia', 'Costa Rica', 'The U.S.'],
            img: 'https://insights.jumoreglobal.com/wp-content/uploads/2018/09/brazil-coffee.png'
        },
        {
            question: 'What is an Americano?',
            answer: 'Espresso diluted with water',
            options: ['Espresso diluted with water','Espresso with a splash of cream','Two shots of espresso','Weak coffee'],
            img: 'https://www.simplyhealthyfamily.org/wp-content/uploads/2018/11/how-to-make-an-americano-coffee-3.jpg'
        },
        {
            question: 'A cappuccino is an espresso-based drink. What is the ratio of its components?',
            answer: '1/3 espresso : 1/3 steamed milk : 1/3 foam',
            options: ['1/3 espresso : 1/3 steamed milk : 1/3 foam', '1/2 espresso : 1/4 steamed milk : 1/4 foam', '1/3 espresso : 1/3 water : 1/3 cream', '1/2 espresso : 1/2 foam'],
            img: 'https://i.imgur.com/7BwsUK4.jpg?2'
        },
        {
            question: 'What is a mocha?',
            answer: 'A latte flavored with chocolate',
            options: ['A latte flavored with chocolate', 'Hot chocolate', 'Coffee with a splash of chocolate milk', 'Chocolate flavored espresso'],
            img: 'https://www.drippedcoffee.com/wp-content/uploads/2017/07/Mocha.jpg'
        },
        {
            question: 'What is an espresso macchiato?',
            answer: 'Espresso marked with a spot of foamed milk',
            options: ['Espresso marked with a spot of foamed milk', 'A single shot of espresso', 'A shot of espresso pulled for 30 seconds', 'A shot of espresso flavored with caramel'],
            img: 'https://i.pinimg.com/originals/cd/84/70/cd84706c21e58d1c28d64222ab377077.jpg'
        },
        {
            question: 'What is a red eye?',
            answer: 'Drip coffee with a shot of espresso',
            options: ['Drip coffee with a shot of espresso', 'Drip coffee with two shots of espresso', 'two shots of espresso topped off with water', 'A latte made with decaf espresso'],
            img: 'http://wkutalisman.com/wp-content/uploads/2016/09/redblack-1024x961.jpg'
        },
        {
            question: 'How much caffeine is in coffee?',
            answer: 'About 95 mg per one 8 fl oz cup',
            options: ['About 95 mg per one 8 fl oz cup', '400 mg per 8 fl oz', 'Roughly 1 gram per cup', 'About 10 mg per 8 fl oz cup'],
            img: 'http://www.ncausa.org/portals/56/Images/CoffeeHealth/coffee-caffeine-mitchell.png'
        },
        {
            question: 'What is a key difference between light roasts and darker roasts?',
            answer: 'Light roasts contain more caffeine than dark roasts',
            options: ['Light roasts contain more caffeine than dark roasts', 'Light roasts are roasted in the sun, while dark roasts are roasted without light', 'The raw coffee beans are different colors', 'They are different varieties/subspecies'],
            img: 'https://cdn-img.health.com/sites/default/files/styles/large_16_9/public/styles/main/public/gettyimages-151993684.jpg?itok=QejNB9K2'
        },
        {
            question: 'What is the relationship between coffee and Coffea?',
            answer: 'Coffea is a genus of plants from which coffee beans originate',
            options: ['Coffea is a genus of plants from which coffee beans originate', 'Coffea refers to the flowers of the coffee plant', 'Coffee plants are grown in Africa, while Coffea plants are gown in South America', 'They are unrelated'],
            img: 'https://cdn2.vectorstock.com/i/1000x1000/85/01/coffee-tree-vector-648501.jpg'
        },
        {
            question: 'A coffee bean is actually...',
            answer: 'The seed of a fruit',
            options: ['The seed of a fruit', 'Just a bean', 'A nut similar to hazelnuts', 'A type of fruit'],
            img: 'https://www.westrockcoffee.com/wp-content/uploads/2016/10/Anatomy-Of-A-Coffee-Bean-Blog-Image-V3-830x1024.jpg'
        },
        {
            question: 'Why is coffee roasted?',
            answer: 'To provide them with flavor and aroma',
            options: ['To provide them with flavor and aroma', 'To activate the caffeine', 'To make them safe to consume', 'To burn off the excess caffeine'],
            img: 'https://camanoislandcoffee.com/wp-content/uploads/2015/12/Art-of-Roasting-Coffee.jpg'
        },
        {
            question: 'What is an affogato?',
            answer: 'A scoop of vanilla ice cream topped with a shot of espresso',
            options: ['A scoop of vanilla ice cream or gelato topped with a shot of espresso', 'A cappuccino over ice', 'A milkshake made with chocolate syrup, espresso, and gelato', 'Coffee-flavored gelato'],
            img: 'http://www.the350degreeoven.com/wp-content/uploads/2015/08/DSC_0173-copy.jpg'
        },
        {
            question: 'What is the difference between a cappuccino and a latte?',
            answer: 'Cappuccinos have much more foam, while lattes are milkier',
            options: ['Cappuccinos have much more foam, while lattes are milkier', 'Nothing - both names refer to the same drink', 'A cappuccino is made with cream, while a latte is made with milk', 'A latte is topped with foam, while a cappuccino is not'],
            img: 'https://i.pinimg.com/originals/cb/78/ea/cb78ea22aae7f98ca1bc73f28f6471ca.jpg'
        },
    ];

    let arrayOfAskedQuestions = [''];

    let questionIndex = 0;
    
    let numOfRightGuesses = 0;
    let numOfWrongGuesses = 0;
    let numOfTimesRunOut = 0;

    // When Play button is clicked, game starts: display timer, current question, and potential answers
    $('#playButton').on('click', reset);

    $('.option-button').click(function(event) {
        console.log($(this).val());
    });

    function countdown() {

    }

    let tickTock = setTimeout(countdown, 15000);

    // Reset function
    function reset() {
        // Hide start screen
        $('.start-screen').css({visibility: 'hidden'});
        // Reset countdown timer,
        // setTimeout(countdown, 15000);
        // Display question and choices
        $('#question').text(triviaObjects[questionIndex].question);
        $('#option0').text();
        $('#option1').text();
        $('#option2').text();
        $('#option3').text();
        // Display question and answers
    }

    // Display the timer in the DOM
    $('p.timer').on('click', tickTock);

    // Reset the timer when it reaches zero
    if (countdown >= 15000) {
        clearTimeout(tickTock);
        $('.countdown').clearTimeout(tickTock);
    }    

    // Interpret user input
    let correctAnswer = triviaObjects.this(options[0]);

    if (userChoice === correctAnswer) {
        $('.countdown').clearTimeout(tickTock); // reset timer
        //TODO: create div where this will be shown
        $('right').css({visibility: 'visible'});
        numOfRightGuesses === numOfRightGuesses + 1;
        delayQuestion();
    } else {
        $('.countdown').clearTimeout(tickTock); // reset timer
        //TODO: create div where this will be shown
        $('wrong').css({visibility: 'visible'});
        $('showCorrect').text(correctAnswer);
        numOfWrongGuesses === numOfWrongGuesses + 1;
        delayQuestion();
    }            
    
    // If the player runs out of time, tell the player that time is up and display the correct answer
    if (tickTock === 0) {
        $('outOfTime').css({visibility: 'visible'});
        numOfTimesRunOut === numOfTimesRunOut + 1;
        const delay = setTimeout(delayQuestion, 2000);
        nextQuestion();
    }
    
    // TODO: On click, move to next question
    function nextQuestion() {
        $('.optionButton').on('click', triviaObjects.question[i](options[i]));
    }

    // TODO: On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
    function showScores() {
        let questionTracker = arrayOfAskedQuestions.length;

        if (questionTracker >= arrayOfQuestions.length) {
            $('.countdown').clearTimeout(tickTock); // reset timer
            $('.end-screen').css({visibility: 'visible'});
            $('.end-screen-right').text('Right: ' + numOfRightGuesses);
            $('.end-screen-wrong').text('Wrong: ' + numOfWrongGuesses);
            $('.end-screen-timeout').text('Ran out of time: ' + numOfTimesRunOut);
        }
    }
    
}); //end ready