//ARRAY of questions
const quizData=
[
    {
        question:
        " Automatic type conversion is possible in which of the possible cases?",
        options:
        ["byte to int","int to long","long to int","short to int"],
        correct:1,
    } ,
    {
        question:
        " When an array is passed to a method, what does the method receive?",
        options:
        ["The reference of the array","A copy of the array","length of the array","Copy of the first element"],
        correct:0,
    
    },
    {
        question:
        " Which of the following is not a storage class specifier in C?",
        options:
        ["auto","register","static","volatile"],
        correct:3,

    },
    {
        question:
        "To start Python from the command prompt, use the command ____",
        options:
        ["execute python","go python", "python", "run python"],
        correct:2,

    },
    {
        question:
        " Which module in Python supports regular expressions?",
        options:
        ["re","regex","pyregex","none of the above"],
        correct:0,
    }
]
const  quiz=document.querySelector('#quiz');
const answerElm=document.querySelectorAll(".answer");
const[questionElm,option_1,option_2,option_3,option_4]=document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4");

const submitBtn=document.querySelector("#submit"); 

let currentQuiz=0;
let score=0;
//------
//loading quiz questions
const loadQuiz=()=>{
    const{ question,options}=quizData[currentQuiz];
    
    questionElm.innerText=`${currentQuiz+1}: ${question}`;
    //options.forEach((curOption,index)=>)
    options.forEach(
        ( curOption,index)=>(window[`option_${index+1}`].innerText=curOption)
    );   
};
loadQuiz();


//------
//Get the selected answer function on button click
const getSelectedOption= ()=>//getting the index of the option clicked
{
    let ans_index;
    answerElm.forEach(( curOption,index)=>
        {
            if(curOption.checked)//we get the value that the user has selected
            {
                ans_index=index;
            }
        });
        return ans_index;
};
//we can also do using
//let ansElement=Array.from(answerElm);
//return ansElement.findIndex((curElm)=>curElm.checked);

const deselectingAnswers=()=>{
    return answerElm.forEach((curElem)=> curElem.checked=false);
};

submitBtn.addEventListener('click',()=>
{
    const selectedOptionIndex=getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex===quizData[currentQuiz].correct)
    {
        score=score+1;
    }
    
    currentQuiz++;
    if(currentQuiz<quizData.length)
    {
        //deselecting the previous option
        deselectingAnswers();
        loadQuiz();
    }
    else
    {
        quiz.innerHTML=`
        <div class="result">
        <h2> your score:${score}/${quizData.length} correct answers</h2>
        <p2>CONGRATULATIONS !!</p2>
        <hr>
        <button clss="reload-button" onclick="location.reload()">Play Again </button>
        </div>`;
    }
});

  