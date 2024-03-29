const text = document.querySelector('.text');
const textInput = document.querySelector('#textInput');
const btn = document.querySelector('.btn');
const score = document.querySelector('.score');

let startTime;
let endTime;

const myfun=() => {
    let wordlength= textInput.value.split(" ").length;
    let time = new Date();
    endTime = time.getTime();
    let completeTime = Math.floor((endTime-startTime)/1000);
    let speed = Math.floor((wordlength/completeTime)*60);
    score.innerHTML='  You write  ' +wordlength+ '  word in  ' +completeTime+ ' seconds: Your Typing speed is  ' +speed+ "  word/min"
}

btn.addEventListener("click", function(){
    if(btn.innerText=="Start"){
        let time = new Date();
          startTime = time.getTime();
        btn.innerText="Done";
        textInput.disabled=false;
        textInput.style.backgroundColor= "white";
        text.innerHTML=data[randomtext];
    }
    else if(btn.innerText=="Done"){
        btn.innerText="Start";
        textInput.disabled=true;
        textInput.style.backgroundColor= "rgb(141, 202, 141)";
        myfun();
    }
})

let data=[ "If This smart tool is a virtual friend of yours that can talk to you in multidimensional thinking. It will provide you with thoughts concepts",
"Our text generator is based on the most intelligent, smart, and advanced algorithm that formulates unique and unfathomably clear, structured, and meaningful.",
"We understand how difficult it is to come up with new ideas when you are in writer’s block. So, Randomready is here to help you with your ideas resurface."
]
 let randomnum = Math.random()*data.length;
 let randomtext = Math.floor(randomnum);
 