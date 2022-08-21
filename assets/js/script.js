var quizIntroPage = document.querySelector(".quiz-intro flex content-center p-4 h-screen"); 
var startBtn = document.getElementById("start-button");

var genreSelectPage = document.querySelector(".select-genre max-w-screen-lg mx-auto h-screen"); 

var questionsPage = document.querySelector(".question max-w-screen-lg h-screen"); 

var rockBtn = document.getElementById("#0"); 
var popBtn = document.getElementById("#1"); 
var hhBtn = document.getElementById("#2"); 
var rbBtn = document.getElementById("#3"); 

var questionsRock = ["Rock question 1", "Rock question 2", "Rock question 3", "Rock question 4"]
var questionsPop = ["Pop question 1", "Pop question 2", "Pop question 3", "Pop question 4"]
var questionsHipHop = ["HH question 1", "HH question 2", "HH question 3", "HH question 4"]
var questionsRB = ["RB question 1", "RB question 2", "RB question 3", "RB question 4"]
i=0

startBtn.addEventListener("click", showGenre);

function showGenre() {
    quizIntroPage.style.display = 'none';
    genreSelectPage.style.display = 'block'; 
    console.log(quizIntroPage) 
}

rockBtn.addEventListener("click", showQuestions);
popBtn.addEventListener("click", showQuestions);
hhBtn.addEventListener("click", showQuestions);
rbBtn.addEventListener("click", showQuestions);


function showQuestions () {
    genreSelectPage.style.display = 'none'; 
    questionsPage.style.display = 'block'; 
    console.log("PLEASE WORK")
    var questionsSelected = //???????? 

        // This means that the current question starts at the value i, which is 0, meaning the first place in the questions array
        var currentQuestion = questionsSelected[i]; 
        var h1El = document.querySelector("#song-prompt");
        var listEl = document.createElement("li");
        var ulEl = document.querySelector("ul");
        //This (below) clears the info inside the parent element, in this case the list items inside of the unordered list
        ulEl.innerHTML = ''; 
        var answerSelect = document.querySelectorAll(".button1"); 
    
        //this is saying that the text content for the h1El (the question) should access the question loop place and the string attached to that place. 
        h1El.textContent = questionsSelected[i].question
        for (let a = 0; a < questionsSelected[i].choices.length; a++) {
            // a only targets the choices
            var listEl = document.createElement("li");
            var buttonEl = document.createElement("button");
            buttonEl.classList.add("button1");
            buttonEl.textContent = questionsSelected[i].choices[a];
            listEl.appendChild(buttonEl);
            ulEl.appendChild(listEl);
            buttonEl.setAttribute("onclick", "transition()"); 
            }

}

function transition() {
    // i++ increments by 1, so one question after the other...
    i++
    showQuestions();
}





//FOR GENRE SELECTION. 
// var mockData = ["Rock", "Pop", "Hip Hop", "R&B", "Indie", "Country"] //should have the genre select array here 

// function randomGenreGenerator() {
//     //var genreDelete = [Math.floor(Math.random()*mockData.length)] // gets random item from array 
//     //save the info in the square brackets into variable [Math.floor(Math.random()*mockData.length)]
//     //pass random number into the mockData index 
//     //delete specific item from array. so once it populates a button it removes that info from the array. 
//     for (var i = 0; i < 4; i++)  {
//         console.log($(`#${i}`))
//         $(`#${i}`).text(mockData[Math.floor(Math.random()*mockData.length)])
//     }
// }


