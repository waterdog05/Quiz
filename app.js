function populate() {
    if(quiz.isEnded()) {  //결과
        localStorage.setItem('score', quiz.score);  //ending으로 점수 보냄
        location.href="ending.html?"
    }
    else {
        //문제
        let element = document.getElementById("quest");
        element.innerHTML = quiz.getQuestionIndex().text;
        let image = document.getElementById("question");
        image.innerHTML = quiz.getQuestionIndex().img;

        //보기
        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            let element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {  //선택
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {  //문제 번호
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerHTML = currentQuestionNumber + "/" + quiz.questions.length;
    document.getElementById("progBar").value = currentQuestionNumber;
    console.log(currentQuestionNumber);
};

//10 문제 생성
//문제 사진은 /img/이미지.txt 참고, 더 좋은거 있으면 문제 바꿔도 됨
let questions = [
    //new Question("문제 텍스트","<br> <img id='img' src='img/이미지.jpg'/> </br>", ["보기1", "보기2", "보기3", "보기4"], "정답(보기 중 하나)")
    new Question("부산 중심부에 있는 공원으로 부산타워가 유명한 사진속 장소는?", "<br> <img id='img' src='img/q0.jpg'/> </br>", ["부산시민공원", "UN기념공원", "용두산공원", "어린이대공원"], "용두산공원"),
    new Question("수영구 남천동에서 해운대구 우동을 잇는 부산의 대표적인 현수교는?", "<br> <img id='img' src='img/q1.jpg'/> </br>", ["영도대교", "광안대교", "마포대교", "거가대교"], "광안대교"),
    new Question("신라시대 최치원의 호를 딴 부산지역에 위치한 이 해수욕장의 이름은? ", "<br> <img id='img' src='img/q2.jpg'/> </br>", ["송정해수욕장", "해운대해수욕장","다대포해수욕장", "광안리해수욕장"], "해운대해수욕장"),
    new Question("한국 전쟁 당시 밀가루로 면을 만들었던 것에서 시작된 이 음식은?", "<br> <img id='img' src='img/q3.jpg'/> </br>", ["밀면", "냉면", "칼국수", "막국수"], "밀면"),
    new Question("쪽파 위에 해산물을 얹고 반죽을 지진 후, 달걀로 마무리하는 이 전은?", "<br> <img id='img' src='img/q4.jpg'/> </br>", ["정구지찌짐", "녹두전", "김치찌짐", "동래파전"], "동래파전"),
    new Question("사골 육수에 편육과 밥을 넣어 먹는 대표적인 부산음식은?", "<br> <img id='img' src='img/q5.jpg'/> </br>", ["소머리국밥", "돼지국밥", "설렁탕", "콩나물국밥"], "돼지국밥"),
    new Question("대한민국 최대의 비경쟁 영화제로 BIFF라고도 불리는 이 행사는?", "<br> <img id='img' src='img/q6.jpg'/> </br>", ["전주국제영화제", "미장센단편영화제", "제천국제음악영화제", "부산국제영화제"], "부산국제영화제"),
    new Question("한반도 남동쪽에 위치한 강으로 남한에서는 가장 긴 이 강은?", "<br> <img id='img' src='img/q7.jpg'/> </br>", ["낙동강", "섬진강", "태화강", "압록강"], "낙동강"),
    new Question("갈매기를 형상화한 부산시 소통 캐릭터의 이름은?", "<br> <img id='img' src='img/q8.jpg'/> </br>", ["부비", "북이", "부키", "부기"], "부기"),
    new Question("10월에 광안리해수욕장과 광안대교에서 개최되는 멀티미디어를 이용한 축제는?", "<br> <img id='img' src='img/q9.jpg'/> </br>", ["부산바다축제", "북극곰수영대회", "부산불꽃축제", "오륙도축제"], "부산불꽃축제"),
    new Question("다음 중 교량에 관한 설명으로 옳지 않은 것은?", "<br> <img id='img' src='img/q10.jpg'/> </br>", ["교량의 역사는 인류문명의 역사만큼이나 오래되었다", "시내나 강을 사람이나 차량이 건널 수 있게 만든 다리를 총칭하는 용어다", "슬래브나 거더의 상부구조와 교대, 교각으로 이루어진 하부구조, 그리고 벽과 교량받침 등의 부대시설로 구성된다", "기술력의 발전으로 인해 교량이 획일화 되는 현상이 발생하여 더 이상 새로운 형태의 교량을 제작하는 것은 불가능하다"], "기술력의 발전으로 인해 교량이 획일화 되는 현상이 발생하여 더 이상 새로운 형태의 교량을 제작하는 것은 불가능하다"),
    new Question(" ooo는 탑에서 비스듬하게 친 케이블로 거더교의 하중을 지지하는 교향의 양식이다. 케이블을 사용하기 때문에 케이블교로 분류되며 폭이 넓은 강이나 깊은 계곡 등 비교적 짧은 경간에 적합한 형식이다. 외관상 아름다우나 내풍성이 약하다는 단점이 있다. ooo에 들어갈 교량의 종류로 옳은 것은?", "<br> <img id='img' src='img/q11.jpg'/> </br>", ["사장교", "아치교", "트러스교", "현수교"], "사장교"),
    new Question("다음은 현수교에 대한 설명들이다. 옳은 것은?", "<br> <img id='img' src='img/q12.jpg'/> </br>", ["케이블이 있는 교량은 모두 현수교로 분류한다", "케이블이 있지만 케이블이 아닌 주탑이 다리의 모든 하중을 버티는 형식이다", "주탑이 높을수록 케이블이 받는 하중이 작아져 다리의 경간이 같을 때 주탑을 높이면 케이블의 단면을 줄일 수 있다", "한국의 광안대교, 영종대교, 부산항대교와 미국의 금문교가 현수교의 예시에 속한다"], "주탑이 높을수록 케이블이 받는 하중이 작아져 다리의 경간이 같을 때 주탑을 높이면 케이블의 단면을 줄일 수 있다"),
    new Question("다음은 부산에 있는 교량들이다. 교량의 이름과 그 종류가 옳게 짝지어진 것은?", "<br> <img id='img' src='img/q13.jpg'/> </br>", ["남항대교-케이블교", "영도대교-가동교", "거가대교-트러스교", "부산대교-사장교"], "영도대교-가동교"),
    new Question(" 교량에는 양쪽에서 물체를 누르는 압축력, 양쪽에서 물체를 당기는 인장력 등 다양한 힘이 작용한다. 압축력과 인장력에 의해 보가 휘는 휨모멘트가 작용하며 이로 인해 보가 휘어지면 사고로 이어질 수 있기 때문에 교량을 설계할 때에는 압축과 인장력을 적절히 조정해야 한다. 거더교의 경우, 보의 양끝에 압축력이 작용하며 이로 인해 보의 윗부분이 짧아진다. 반대로 보의 아랫부분은 인장력의 영향으로 그 길이가 늘어난다. 이 힘을 상쇄하기 위해 거더교는 강철빔(steel beam)을 이용한다. 빔을 설치하면 교량에 작용하는 인장력을 소멸시킬 수 있기 때문이다. 또한, 빔에 트러스를 추가하면 빔의 강도를 더해줘 압축력과 인장력을 더 많이 감소시킬 수 있다. 그러나 보의 길이가 길어질수록 트러스 또한 커져 그 무게가 증가하므로 트러스교는 그 길이에 한계가 존재한다.<br><br>윗글에 대한 이해로 적절하지 않은 것은?", "", ["거더교가 출연한 시기가 트러스교가 출연한 시기보다 앞선다는 것을 추론할 수 있다", "거더교에 과도한 압축력과 인장력이 작용할 경우 보의 윗부분은 찌그러지고 아랫부분은 끊어질 것이다", "트러스의 크기에 따른 외력 감소 정도는 트러스의 크기와 무관하게 일정하기 때문에 보의 길이가 길어지는 것에 한계가 있다", "두 교각에 보가 올려진 구조의 교량이라면 휨모멘트가 가장 큰 지점은 보의 중앙이다"], "트러스의 크기에 따른 외력 감소 정도는 트러스의 크기와 무관하게 일정하기 때문에 보의 길이가 길어지는 것에 한계가 있다")
];

let quiz = new Quiz(questions);

populate();
