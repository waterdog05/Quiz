<<<<<<< HEAD
//app.js에서 quiz.score 받아오기
if (localStorage.getItem('score')) {
    let gameScore = localStorage.getItem('score');  //점수
    console.log(gameScore);

    //점수따라 출력 다르게 하기
    if (gameScore == 0) {
        document.getElementById("scoreTest").innerHTML = "<p id='score'> 점수 : " + gameScore + "점 <br><br>저런...</p>";
    } else if ((0<gameScore) && (gameScore<=5)) {
        document.getElementById("scoreTest").innerHTML = "<p id='score'> 점수 : " + gameScore + "점 <br><br>부산에 관심을 더 가져봅시다</p>";
    } else if ((5<gameScore) && (gameScore<=9)) {
        document.getElementById("scoreTest").innerHTML = "<p id='score'> 점수 : " + gameScore + "점 <br><br>어느정도 아는 수준</p>";
    } else if ((9<gameScore) && (gameScore<=14)) {
        document.getElementById("scoreTest").innerHTML = "<p id='score'> 점수 : " + gameScore + "점 <br><br>부잘알!!</p>";
    } else if (gameScore == 15) {
        document.getElementById("scoreTest").innerHTML = "<p id='score'> 점수 : " + gameScore + "점 <br><br>와우 만점!!!</p>";
    }
}
=======
//app.js에서 quiz.score 받아오기
if (localStorage.getItem('score')) {
    let gameScore = localStorage.getItem('score');  //점수
    console.log(gameScore);

    //점수따라 출력 다르게 하기
    if (gameScore == 0) {
        document.getElementById("scoreTest").innerHTML = "<p id='score'> 점수 : " + gameScore + "점 <br><br>저런...</p>";
    } else if ((0<gameScore) && (gameScore<=3)) {
        document.getElementById("scoreTest").innerHTML = "<p id='score'> 점수 : " + gameScore + "점 <br><br>부산에 관심을 더 가져봅시다</p>";
    } else if ((3<gameScore) && (gameScore<=6)) {
        document.getElementById("scoreTest").innerHTML = "<p id='score'> 점수 : " + gameScore + "점 <br><br>어느정도 아는 수준</p>";
    } else if ((6<gameScore) && (gameScore<=9)) {
        document.getElementById("scoreTest").innerHTML = "<p id='score'> 점수 : " + gameScore + "점 <br><br>부잘알!!</p>";
    } else if (gameScore == 10) {
        document.getElementById("scoreTest").innerHTML = "<p id='score'> 점수 : " + gameScore + "점 <br><br>와우 만점!!!</p>";
    }
}
>>>>>>> 34d0f7dfcd0ef821a1ac7c1904c735fff67477cd
