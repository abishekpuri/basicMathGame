
var knowledge_counter = 0;
var level = 1;
var additionAnswer = 0;
window.onload = function knowledge_update(){
document.getElementById('Knowledge').innerHTML="Knowledge Level : "+knowledge_counter;
}
function knowledge_update(){
document.getElementById('Knowledge').innerHTML="Knowledge Level : "+knowledge_counter;
}	
function changer() {
	
	images = ['Addition.gif','Multiplication.gif',]
	title = ['Addition','Multiplication']
	required_knowledge = [0,10]
	position = parseInt(required_knowledge.indexOf(knowledge_counter))
	if(position!=-1){
		document.getElementById('MathProgressImg').src = images[position];
		document.getElementById('MathProgressTitle').innerHTML = title[position];
		document.getElementById('progressbar').max = required_knowledge[position+1];
		level +=1;
	}
	}
function increaseKnowledge(){
	knowledge_counter +=1;
	knowledge_update();
	document.getElementById('progressbar').value=knowledge_counter;
	changer();

}
function additionQuestion(){
number1 = Math.floor(Math.random()*100);
number2 = Math.floor(Math.random()*100);
/*Finish the onclick part and think about either a) adding new answer checking function or b)writing code into onclick */
question = number1+" + "+number2+" = "+"<input type='text' id='additionAnswer'/><input type='submit' onclick=''";
document.getElementById('addition').innerHTML = question;
additionAnswer = number1 + number2;
}

