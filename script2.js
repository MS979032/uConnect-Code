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
  myContents[0] = "You are a sensor"   + "";
  myContents[1] = "50% sensor"  + ""; 
  myContents[2] = "You are an intuitive" + "";

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
  document.getElementById("resultTwo").innerHTML = (myContents);
  window.localStorage.setItem("result2" + pageNumber, myContents);
} 