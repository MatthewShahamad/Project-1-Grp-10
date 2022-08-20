var quizIntroPage = document.querySelector(".quiz-intro flex content-center p-4 h-screen"); 
var startBtn = document.getElementById("#start-button");
var genreSelectPage = document.querySelector(".select-genre max-w-screen-lg mx-auto h-screen"); 
var questions = document.querySelector(".grid grid-cols-2 gap-6 mx-auto"); 

    startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    quizIntroPage.style.display = 'none';
    genreSelectPage.style.display = 'block'; 
    console.log("hello")
}

function 



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


