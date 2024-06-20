const ques1 = document.getElementById("question1");
const ans1 = document.getElementById("answer1");
const ques2 = document.getElementById("question2");
const ans2 = document.getElementById("answer2");
const ques3 = document.getElementById("question3");
const ans3 = document.getElementById("answer3");
const ques4 = document.getElementById("question4");
const ans4 = document.getElementById("answer4");
const ques5 = document.getElementById("question5");
const ans5 = document.getElementById("answer5");
const ques6 = document.getElementById("question6");
const ans6 = document.getElementById("answer6");

let firstclick = false;
let secondclick = false;
let thirdclick = false;
let fourthclick = false;
let fifthclick = false;
let sixthclick = false;

ques1.addEventListener("click",function(){
    const addicon = document.getElementById("addicon1");
    const crossicon = document.getElementById("crossicon1");
    if(firstclick === false){
        addicon.style.visibility = "hidden";
        crossicon.style.visibility = "visible";
        ans1.style.display = "block";
        firstclick = true;
    }
    else if(firstclick === true){
        addicon.style.visibility = "visible";
        crossicon.style.visibility = "hidden";
        ans1.style.display = "none";
        firstclick = false;
    }
})
ques2.addEventListener("click",function(){
    const addicon = document.getElementById("addicon2");
    const crossicon = document.getElementById("crossicon2");
    if(secondclick === false){
        addicon.style.visibility = "hidden";
        crossicon.style.visibility = "visible";
        ans2.style.display = "block";
        secondclick = true;
    }
    else if(secondclick === true){
        addicon.style.visibility = "visible";
        crossicon.style.visibility = "hidden";
        ans2.style.display = "none";
        secondclick = false;
    }
})
ques3.addEventListener("click",function(){
    const addicon = document.getElementById("addicon3");
    const crossicon = document.getElementById("crossicon3");
    if(thirdclick === false){
        addicon.style.visibility = "hidden";
        crossicon.style.visibility = "visible";
        ans3.style.display = "block";
        thirdclick = true;
    }
    else if(thirdclick === true){
        addicon.style.visibility = "visible";
        crossicon.style.visibility = "hidden";
        ans3.style.display = "none";
        thirdclick = false;
    }
})
ques4.addEventListener("click",function(){
    const addicon = document.getElementById("addicon4");
    const crossicon = document.getElementById("crossicon4");
    if(fourthclick === false){
        addicon.style.visibility = "hidden";
        crossicon.style.visibility = "visible";
        ans4.style.display = "block";
        fourthclick = true;
    }
    else if(fourthclick === true){
        addicon.style.visibility = "visible";
        crossicon.style.visibility = "hidden";
        ans4.style.display = "none";
        fourthclick = false;
    }
})
ques5.addEventListener("click",function(){
    const addicon = document.getElementById("addicon5");
    const crossicon = document.getElementById("crossicon5");
    if(fifthclick=== false){
        addicon.style.visibility = "hidden";
        crossicon.style.visibility = "visible";
        ans5.style.display = "block";
        fifthclick= true;
    }
    else if(fifthclick=== true){
        addicon.style.visibility = "visible";
        crossicon.style.visibility = "hidden";
        ans5.style.display = "none";
        fifthclick= false;
    }
})
ques6.addEventListener("click",function(){
    const addicon = document.getElementById("addicon6");
    const crossicon = document.getElementById("crossicon6");
    if(sixthclick === false){
        addicon.style.visibility = "hidden";
        crossicon.style.visibility = "visible";
        ans6.style.display = "block";
        sixthclick = true;
    }
    else if(sixthclick === true){
        addicon.style.visibility = "visible";
        crossicon.style.visibility = "hidden";
        ans6.style.display = "none";
        sixthclick = false;
    }
})