
var index = 0;
var correct = 0;
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const counter = document.getElementById("counter");


let TIMER;
let count = 20;
const questionTime = 20; 
start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
	TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
	
}


function init(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = init("test");
	if(index >= questions.length){
		test.innerHTML = "<h2>Your score is "+correct+" of "+questions.length+" .</h2>";
		init("renderQuestions").innerHTML = "All Done!";
		index = 0;
		correct = 0;
		
		return false;
		
	}
	init("renderQuestions").innerHTML = "Question "+(index+1)+" of "+questions.length;
	question = questions[index][0];
	chA = questions[index][1];
	chB = questions[index][2];
	chC = questions[index][3];
	chD = questions[index][4];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        
		count--;
		
    }else{
		count = 0;
		
    }
}



function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;

		}
	}
	if(choice == questions[index][5]){
		correct++;
		alert('Corrct')
	}else{
		alert('Wrong');
	
	}
	
	
	index++;
	renderQuestion();
}





window.addEventListener("load", renderQuestion, false);



