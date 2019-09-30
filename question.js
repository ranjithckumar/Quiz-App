let timer = ()=>{
    console.log("here")
   let timer2 = "3:01";
   let interval = setInterval(() =>{

   let timer = timer2.split(':');
   //by parsing integer, I avoid all extra string processing
   let minutes = parseInt(timer[0], 10);
   let seconds = parseInt(timer[1], 10);
   --seconds;
   minutes = (seconds < 0) ? --minutes : minutes;
   if (minutes < 0) clearInterval(interval);
   seconds = (seconds < 0) ? 59 : seconds;
   seconds = (seconds < 10) ? '0' + seconds : seconds;
   //minutes = (minutes < 10) ?  minutes : minutes;
   $('#time').html(minutes + ':' + seconds);
   timer2 = minutes + ':' + seconds;
   if(minutes===0&&seconds==="00")
   location.href="section.html";
}, 1000);
}

let answerArray = [];
let selectedOptions = [];
let questions;
let query = window.location.search.substring(1,);

if(query === 'html')
{
questions = JSON.parse( localStorage.getItem("htmlArray"));
}
else if(query === 'css')
{
    questions = JSON.parse(localStorage.getItem("cssArray"));
}
else
 {
   questions = JSON.parse(localStorage.getItem("jsArray"));
 }
console.log(questions);

$(document).ready(()=>{

$('#img-forward').click(()=>{
 });
 $('#img-forward').click();
 timer();
})


let questionNumber = 0;
$("#img-forward").click(()=>{
        // console.log(localStorage.hasOwnProperty(questionNumber));
       
       if(questionNumber < 10)
       {
        $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
        action('add');
       if(selectedOptions[questionNumber-1]!=undefined) 
       $("#option"+selectedOptions[questionNumber-1]).css('background-color','#78909C');
       }
})


$("#img-backward").click(()=>{
    if(questionNumber > 1)
    {
        $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
        action('sub');
       if(selectedOptions[questionNumber-1]!=undefined)
        $("#option"+selectedOptions[questionNumber-1]).css('background-color','#78909C') ;
      
       
    }
})

let action =((option)=>{
 option==='add'?questionNumber++:questionNumber--;
if(questionNumber>=1 && questionNumber <= 10)
{
    key = Object.keys(questions[questionNumber-1])[1];
    $("#num").text(questionNumber);
    $("#question").text(questions[questionNumber-1][key].question);
    $("#opt1").text(questions[questionNumber-1][key]["options"][0]);
    $("#opt2").text(questions[questionNumber-1][key]["options"][1]);
    $("#opt3").text(questions[questionNumber-1][key]["options"][2]);
    $("#opt4").text(questions[questionNumber-1][key]["options"][3]);
}
})

 $("#option1").click(function(){
  selector(1);
  $("#option2, #option3, #option4").css('background-color','#CFD8DC');
 })

 $("#option2").click(function(){
    selector(2);
    $("#option1, #option3, #option4").css('background-color','#CFD8DC');
   })

   $("#option3").click(function(){
    selector(3);
    $("#option1, #option2, #option4").css('background-color','#CFD8DC');
   })

   $("#option4").click(function(){
    selector(4);
    $("#option1, #option2, #option3").css('background-color','#CFD8DC');
   })

let selector = ((option)=>{
    answerArray[questionNumber-1] = $("#opt"+option).text();
    selectedOptions[questionNumber-1]=option;
    $("#option"+option).css('background-color','#78909C');
})


   $("#submitButton").click(function(){
       location.href = 'result.html'
   })

   $("#sectionButton").click(function(){
       location.href = 'section.html'
   })
 