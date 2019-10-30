const STORE = [
    {
        id: cuid(),
        question: 'How many times did spaceX try to reach orbit and failed before succeeding their first time?',
        answer1: '0; they succeeding their first time.',
        answer2: 'They succeeded their seconed time.',
        answer3: '3; they succeeded their fourth time.',
        answer4: '5; they succeeded their sixth time.',
        correct: '3; they succeeded their fourth time.'
    },

    {
        id: cuid(),
        question: 'Which of these projects are part of spaceX?',
        answer1: 'project titan',
        answer2: 'project starlink',
        answer3: 'project Planetary Defense',
        answer4: 'project LightSail',
        correct: 'project starlink'
    },

    {
        id: cuid(),
        question: 'Which of these is a spaceX rocket?',
        answer1: 'Falcon Heavy',
        answer2: 'Taurus',
        answer3: 'Athena',
        answer4: 'Pegasus',
        correct: 'Falcon Heavy'
    },

    {
        id: cuid(),
        question: 'When was SpaceX founded?',
        answer1: 'In the 1950\'s',
        answer2: 'In 1999',
        answer3: 'In 2002',
        answer4: 'In 2010',
        correct: 'In 2002'
    },


    {
        id: cuid(),
        question: 'When was the first time SpaceX launched a satellite to geostationary orbit?',
        correct: 'In December 2013.',
        answer2: 'In March 2011.',
        answer3: 'In November 2010.',
        answer4: 'In June 2009',
        correct: 'In December 2013.'
    }
]

let i = 0;


function renderStartWindow() {
    console.log(`'renderStartWindow' ran`);
    /*
    this function will display the first window users will see when landing on the page.
    it will include a title and a start button.
    
    find the h1 tag and insert the title;
    find the button element with class="start-button" and insert 'Start quiz';
    */
    ('.start-title').text('Test your knowledge about SpaceX');
    ('.start-button-div').append('<button class="start-button">Start quiz</button>');
};


function keepTrack(){
    /*this function will keep track of how many qustions were displayed
    
    each time this function is called the value of 'i' wil be increased by one.*/
    i++
    //console.log(i);
};

function returnCode(){
    /*this function will return the code needed for the first window
    
    */
   return `<fieldset class="fieldset">
   <legend class="question">{}</legend>
   <input type="radio" name="SpaceX" id="ans-1" value="0">
   <label for="ans-1">{}</label>
   <br>
   <input type="radio" name="SpaceX" id="ans-2" value="1">
   <label for="ans-2">{}</label>
   <br>
   <input type="radio" name="SpaceX" id="ans-3" value="2">
   <label for="ans-3">{}</label>
   <br>
   <input type="radio" name="SpaceX" id="ans-4" value="3">
   <label for="ans-4">{}</label>
</fieldset>


<div class="submit-button">
   <button type="submit" class="submit"></button>
</div>`;
}
function handleQuestionAnsRendering() {
    console.log(`'handleQuestionsansRendering' ran`);
    /*
    this function will dispay one question at a time with its answers
    the first question and its answers will be displayed when the user clicks the start button
    then each following question and asnwers will be displyed when the user clickes next
    but the user will only see the next button after clicking submit
    **important** when the user clicks submit the submit button needs to be cleared from the display
    
    find the form element and when the user clicks 'start quiz' insert the question, aswers, and submit button*/
};

function handleCorrect() {
    console.log(`'handleCorrect' ran`);
    /* this function should display the response for a correct answer
    to do so, this function will compare the answer clicked on and submitted with the correct answer*/
};

function handleWrong() {
    console.log(`'handleWrong' ran`);
    /* this function should display the response for a wrong answer
    to do so, this function will compare the answer clicked on and submitted with the correct answer */
};

function handleNumRemaing() {
    console.log(`'handleNumRemaing' ran`);
    /* this function will let the user know how many question still remain*/
};

function handleNumCorrect() {
    console.log(`'handleNumCorrect' ran`);
    /* the function will tell the user how may questions they go correct so far*/
};

function handleFinishWindow() {
    console.log(`'handleFinishWindow' ran`);
    /* after the last question was submitted, when the user clicks next, this function will display
    the final window which includes the final score and a button to retake the quiz */
};

function handleQuizApp() {
    renderStartWindow();
    handleQuestionAnsRendering();
    handleNumRemaing();
    handleNumCorrect();
    handleCorrect();
    handleWrong();
    handleFinishWindow();
}

(handleQuizApp);