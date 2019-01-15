$('document').ready(function() {
    
    // Trivia objects
    let triviaObjects = [ 
        {
            question: 'Which country is the greatest producer of coffee?',
            answer: 'Brazil',
            options: ['Brazil', 'Indonesia', 'Costa Rica', 'The U.S.'],
            image: 'https://insights.jumoreglobal.com/wp-content/uploads/2018/09/brazil-coffee.png'
        },
        {
            question: 'What is an Americano?',
            answer: 'Espresso diluted with water',
            options: ['Espresso diluted with water','Espresso with a splash of cream','Two shots of espresso','Weak coffee'],
            image: 'https://www.simplyhealthyfamily.org/wp-content/uploads/2018/11/how-to-make-an-americano-coffee-3.jpg'
        },
        {
            question: 'A cappuccino is an espresso-based drink. What is the ratio of its components?',
            answer: '1/3 espresso : 1/3 steamed milk : 1/3 foam',
            options: ['1/3 espresso : 1/3 steamed milk : 1/3 foam', '1/2 espresso : 1/4 steamed milk : 1/4 foam', '1/3 espresso : 1/3 water : 1/3 cream', '1/2 espresso : 1/2 foam'],
            image: 'https://i.imgur.com/7BwsUK4.jpg?2'
        },
        {
            question: 'What is a mocha?',
            answer: 'A latte flavored with chocolate',
            options: ['A latte flavored with chocolate', 'Hot chocolate', 'Coffee with a splash of chocolate milk', 'Chocolate flavored espresso'],
            image: 'https://www.drippedcoffee.com/wp-content/uploads/2017/07/Mocha.jpg'
        },
        {
            question: 'What is an espresso macchiato?',
            answer: 'Espresso marked with a spot of foamed milk',
            options: ['Espresso marked with a spot of foamed milk', 'A single shot of espresso', 'A shot of espresso pulled for 30 seconds', 'A shot of espresso flavored with caramel'],
            image: 'https://i.pinimg.com/originals/cd/84/70/cd84706c21e58d1c28d64222ab377077.jpg'
        },
        {
            question: 'What is a red eye?',
            answer: 'Drip coffee with a shot of espresso',
            options: ['Drip coffee with a shot of espresso', 'Drip coffee with two shots of espresso', 'two shots of espresso topped off with water', 'A latte made with decaf espresso'],
            image: 'http://wkutalisman.com/wp-content/uploads/2016/09/redblack-1024x961.jpg'
        },
        {
            question: 'How much caffeine is in coffee?',
            answer: 'About 95 mg per one 8 fl oz cup',
            options: ['About 95 mg per one 8 fl oz cup', '400 mg per 8 fl oz', 'Roughly 1 gram per cup', 'About 10 mg per 8 fl oz cup'],
            image: 'http://www.ncausa.org/portals/56/Images/CoffeeHealth/coffee-caffeine-mitchell.png'
        },
        {
            question: 'What is a key difference between light roasts and darker roasts?',
            answer: 'Light roasts contain more caffeine than dark roasts',
            options: ['Light roasts contain more caffeine than dark roasts', 'Light roasts are roasted in the sun, while dark roasts are roasted without light', 'The raw coffee beans are different colors', 'They are different varieties/subspecies'],
            image: 'https://cdn-img.health.com/sites/default/files/styles/large_16_9/public/styles/main/public/gettyimages-151993684.jpg?itok=QejNB9K2'
        },
        {
            question: 'What is the relationship between coffee and Coffea?',
            answer: 'Coffea is a genus of plants from which coffee beans originate',
            options: ['Coffea is a genus of plants from which coffee beans originate', 'Coffea refers to the flowers of the coffee plant', 'Coffee plants are grown in Africa, while Coffea plants are gown in South America', 'They are unrelated'],
            image: 'https://cdn2.vectorstock.com/i/1000x1000/85/01/coffee-tree-vector-648501.jpg'
        },
        {
            question: 'A coffee bean is actually...',
            answer: 'The seed of a fruit',
            options: ['The seed of a fruit', 'Just a bean', 'A nut similar to hazelnuts', 'A type of fruit'],
            image: 'https://www.westrockcoffee.com/wp-content/uploads/2016/10/Anatomy-Of-A-Coffee-Bean-Blog-Image-V3-830x1024.jpg'
        },
        {
            question: 'Why is coffee roasted?',
            answer: 'To provide them with flavor and aroma',
            options: ['To provide them with flavor and aroma', 'To activate the caffeine', 'To make them safe to consume', 'To burn off the excess caffeine'],
            image: 'https://camanoislandcoffee.com/wp-content/uploads/2015/12/Art-of-Roasting-Coffee.jpg'
        },
        {
            question: 'What is an affogato?',
            answer: 'A scoop of vanilla ice cream topped with a shot of espresso',
            options: ['A scoop of vanilla ice cream or gelato topped with a shot of espresso', 'A cappuccino over ice', 'A milkshake made with chocolate syrup, espresso, and gelato', 'Coffee-flavored gelato'],
            image: 'http://www.the350degreeoven.com/wp-content/uploads/2015/08/DSC_0173-copy.jpg'
        },
        {
            question: 'What is the difference between a cappuccino and a latte?',
            answer: 'Cappuccinos have much more foam, while lattes are milkier',
            options: ['Cappuccinos have much more foam, while lattes are milkier', 'Nothing - both names refer to the same drink', 'A cappuccino is made with cream, while a latte is made with milk', 'A latte is topped with foam, while a cappuccino is not'],
            image: 'https://i.pinimg.com/originals/cb/78/ea/cb78ea22aae7f98ca1bc73f28f6471ca.jpg'
        },
    ];

    // Variables
    let questionIndex = 0;
    
    let numOfRightGuesses = 0;
    let numOfWrongGuesses = 0;
    let numOfTimesRunOut = 0;

    const questionTime = 3;
    const delay = 5;

    // G A M E P L A Y

    // When Play button is clicked, game loads
    $('#playButton').on('click', nextQuestion);

    // Click event handler
    $('.option-button').click(function() {
        let userChoice = $(this).text();
        let correctAnswer = triviaObjects[questionIndex].answer;
        
        // Duplication can be prevented here in the future (aka refactoring!)

        // If answer is correct...
        if (userChoice === correctAnswer) {
            // Display message and relevant image
            $('#rightAnswer').css({visibility: 'visible'});
            $('.objImage').attr('src', triviaObjects[questionIndex].image);
            numOfRightGuesses++;
            questionIndex++;
            // Delay question here
            const delayQuestion = setTimeout(function() {
                nextQuestion();
            }, delay * 1000);
            
            // If answer is incorrect...
        } else {
            // Display message and relevant image and reveal correct answer
            $('#wrongAnswer').css({visibility: 'visible'});
            $('.objImage').attr('src', triviaObjects[questionIndex].image);
            $('#showCorrect').text(correctAnswer);
            numOfWrongGuesses++;
            questionIndex++;
            // Delay question here
            setTimeout(function(){
                nextQuestion();
            }, delay * 1000);
        }
    });
        
    // Load question
    function nextQuestion() {
        if (questionIndex >= triviaObjects.length) {
            gameOver();
        } else {
            console.log(`Moving to question ${questionIndex}`);
            
            // Reset countdown timer,
            startTimer();
            
            // Hide start screen
            $('.intro-screen').css({visibility: 'hidden'});
            
            // Hide right/wrong message and image
            $('#rightAnswer').css({visibility: 'hidden'});
            $('#wrongAnswer').css({visibility: 'hidden'});

            // Display question and choices
            $('#question').text(triviaObjects[questionIndex].question);
            $('#option0').text(triviaObjects[questionIndex].options[0]);
            $('#option1').text(triviaObjects[questionIndex].options[1]);
            $('#option2').text(triviaObjects[questionIndex].options[2]);
            $('#option3').text(triviaObjects[questionIndex].options[3]);
        }
    }

    // Timer
    let timeRemaining;
    let lastTimer;
    function startTimer() {
        if (lastTimer) {
            clearInterval(lastTimer);
        }
        timeRemaining = questionTime; 
        $('#countdown').text(timeRemaining + ' s');
        
        // After 1 s, this decrements the time remaining
        lastTimer = setInterval(function() { 
            timeRemaining--;
            $('#countdown').text(timeRemaining + ' s');

            // If out of time...
            if (timeRemaining <= 0) {

                // Display message and relevant image and reveal correct answer
                $('.objImage').attr('src', triviaObjects[questionIndex].image);
                $('#timeIsUp').css({visibility: 'visible'});
                $('#showCorrect').text(triviaObjects[questionIndex].answer);
                numOfTimesRunOut++;
                questionIndex++;

                clearInterval(lastTimer);
                // Delay question here
                const delayQuestion = setTimeout(function() {
                    nextQuestion();
                    clearTimeout(delayQuestion);
                    $('#timeIsUp').css({visibility: 'hidden'});
                }, delay * 1000);
            } 
            // else if (timeRemaining === 0) {
            //     numOfWrongGuesses++;
            //     questionIndex++;
            //     nextQuestion();
            // }
        }, 1000);
    }

    // After each question, check if the game is over
    // If the game is over...
    function gameOver() {
        //  Show scores
        $('#gameOverPosition').css({visibility: 'visible'});
        $('#gameOverScreen').css({visibility: 'visible'});
        $('#right').text('Number of Questions Right: ' + numOfRightGuesses);
        $('#wrong').text('Number of Questions Wrong: ' + numOfWrongGuesses);
        $('#timeRanOut').text('Times you ran out of time: ' + numOfTimesRunOut);   
        console.log('Youve answered all of the questions. Lets see how you did!');
        
        // Reset the game without reloading the page
        resetGame();
    }

    // If the player clicks "play again" button, reset all values
    function resetGame() {
        let questionIndex = 0;
        let numOfRightGuesses = 0;
        let numOfWrongGuesses = 0;
        let numOfTimesRunOut = 0;
        const questionTime = 15;
        const delay = 5;
        $('#playAgain').on('click', nextQuestion);
    }

    // Check visibility of certain objects and set to either hidden or visible
    // function changeVisibility() {
    //     if (visibility != hidden) {
    //         // All elements that change visibility include:
    //         $('#rightAnswer').css({visibility: 'hidden'});
    //         $('#wrongAnswer').css({visibility: 'hidden'});
    //         $('.intro-screen').css({visibility: 'hidden'});
    //         $('#gameOverPosition').css({visibility: 'hidden'});
    //         $('#gameOverScreen').css({visibility: 'hidden'});
    //     } else {
    //         // All elements that change visibility include:
    //         $('#rightAnswer').css({visibility: 'visible'});
    //         $('#wrongAnswer').css({visibility: 'visible'});
    //         $('.intro-screen').css({visibility: 'visible'});
    //         $('#gameOverPosition').css({visibility: 'visible'});
    //         $('#gameOverScreen').css({visibility: 'visible'});
    //     }
    // }

// End ready
});