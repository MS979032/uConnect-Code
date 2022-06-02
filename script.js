var Quest = new Array(4); 
var pageNumber = window.localStorage.getItem("pageNumber")
nextPage = nextPage ? nextPage : 0
var count = 0
pageNumber = parseInt(pageNumber)
function populate() { 
  for(var i=0; i<4; i++) { Quest[i]=0; } 
} 

function nextPage() {
  pageNumber = parseInt(pageNumber) + 1;
  window.localStorage.setItem("pageNumber", pageNumber);
  console.log("pageNumber = " + pageNumber)
  
;
    var btn = document.getElementById("btn");
    // var disp = document.getElementById("display");
      // disp.innerHTML = count;
    

    if (pageNumber > 3) {
      window.location.replace("results.html");
    } else {
      window.location.replace("test.html");
    }
}

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("quizQuestion1").innerHTML = (myQuestions[pageNumber * 4 + 0]);
  document.getElementById("quizQuestion2").innerHTML = (myQuestions[pageNumber * 4 + 1]);
    document.getElementById("quizQuestion3").innerHTML = (myQuestions[pageNumber * 4 + 2]);
    document.getElementById("quizQuestion4").innerHTML = (myQuestions[pageNumber * 4 + 3]);
});

function total() { 
  myScore=0; 
  for (var i=0; i<4; i++) { myScore=myScore+Quest[i]; } 
  analyzer(myScore); 
} 

function startQuiz() {
  window.localStorage.setItem("pageNumber",0)
}
myContents = new Array(); 
  myContents[0] = "You are an extravert"   + ""; 
  myContents[1] = "50% extravert"  + ""; 
  myContents[2] = "You are an introvert" + "";
  myContents[3] = "You are a sensor"   + "";
  myContents[4] = "50% sensor"  + ""; 
  myContents[5] = "You are an intuitive" + "";
  myContents[6] = "You are a thinker"   + "";
  myContents[7] = "50% thinker"  + ""; 
  myContents[8] = "You are a feeler" + "";
  myContents[9] = "You are a judger"   + "";
  myContents[10] = "50% judger"  + ""; 
  myContents[11] = "You are a perceiver" + "";
// myContents = new Array(); 

myQuestions = new Array();
  myQuestions[0] = "1. You would rather spend your free time with someone that staying alone"   + ""; 
  myQuestions[1] = "2. You enjoy socializing with people you don't know"  + ""; 
  myQuestions[2] = "3. The more the people, the more energy you have" + "";
  myQuestions[3] = "4. Participating in a lively discussion"   + "";
  myQuestions[4] = "5. You are a detail oriented individual"  + ""; 
  myQuestions[5] = "6. You believe in your eyes more than your intuition" + "";
  myQuestions[6] = "7. You solve problems by working through facts until you understand the problem"   + "";
  myQuestions[7] = "8. You trust experience first and trust words and symbols less"  + ""; 
  myQuestions[8] = "9. You make decisions with your head and want to be fair" + "";
  myQuestions[9] = "10. You enjoy technical and scientific fields where logic is important"   + "";
  myQuestions[10] = "11. You notice inconsistencies t"  + ""; 
  myQuestions[11] = "12. You believe telling the truth is more important than being tactful t" + "";
  myQuestions[12] = "13. You like to get my work done before playing" + "";
  myQuestions[13] = "14. You like to have things decided"   + "";
  myQuestions[14] = "15. You like to make lists of things to do j"  + ""; 
  myQuestions[15] = "16. You plan work to avoid rushing just before a deadline j" + "";

function saver(q, points) { 
  q=q-1; 
  Quest[q]=points 
} 

function analyzer (myScore) {
  if (myScore < 4) {
    myContentsPtr = pageNumber * 3 + 0;
  } else if (myScore > 4) {
    myContentsPtr = pageNumber * 3 + 2;
  } else {
    myContentsPtr = pageNumber * 3 + 1;
  }
  myDisplay(myContents[myContentsPtr]) 
}  

function myDisplay(myContents) {  
  document.getElementById("result").innerHTML = (myContents);
  window.localStorage.setItem("result" + pageNumber, myContents);
} 

