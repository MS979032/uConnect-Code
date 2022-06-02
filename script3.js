var Quest = new Array(4); 

function populate() { 
  for(var i=0; i<4; i++) { Quest[i]=0; } 
} 

function total() { 
  myScore=0; 
  for (var i=0; i<4; i++) { myScore=myScore+Quest[i]; } 
  analyzer(myScore); 
} 

myContents = new Array(); 
  myContents[0] = "You are an extravert"   + ""; 
  myContents[1] = "50% extravert"  + ""; 
  myContents[2] = "You are an introvert" + "";

function saver(q, points) { 
  q=q-1; 
  Quest[q]=points 
} 


function analyzer (myScore) {
  if (myScore < 4) {
    myContentsPtr = 0;
  } else if (myScore > 4) {
    myContentsPtr = 2;
  } else {
    myContentsPtr = 1;
  }
  myDisplay(myContents[myContentsPtr]) 
}  

function myDisplay(myContents) {  
document.getElementById("resultThree").innerHTML = (myContents);
  window.localStorage.setItem("result3", myContents);
} 

