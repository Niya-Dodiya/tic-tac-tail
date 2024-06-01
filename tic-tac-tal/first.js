// access the boxes

let boxes = document.querySelectorAll("#box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msg = document.querySelector(".msg-con ");
let pr = document.querySelector("#msg");


// konse wale player ki tone hain
// x,o ki turn is alternate tuns

let turnO =  true; //player X ,O
// 2d arrays
//let arr=[["apple","banana"],["patato","mashroom","carrot"],["burger","pizza","pasta"]]

//let winptn = [["0,1,2","3,4,5","6,7,8"],["0,3,6","1,4,7","2,5,8"],["0,4,8","2,4,6"]];
let winptn = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [0,4,8],
    [2,4,6],
    [2,5,8]
];

// add event lisner
//node.event

boxes.forEach((box) => {
box.addEventListener("click", () => {
    //box.innerText = "X";
    //if(turnO === true)
    if(turnO){//player o
        box.innerText = "O";
        turnO = false;
    }
    else{//playrer x
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
// craete function
    checkwinner();
});
});
//dont make any types of changes
const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;

    }
}

const enableleboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showwinner = (win) => {
    pr.innerText = `Congratulations,Winner is ${win}`;
    msg.classList.remove("hide");
   disableboxes();
}

const checkwinner = () => {
    for(let ptn of winptn){
        // console.log(ptn[0],ptn[1],ptn[2]);
        // console.log(
        //     boxes[ptn[0]].innerText,
        //     boxes[ptn[1]].innerText,
        //     boxes[ptn[2]].innerText
        // );
        let ps0 =boxes[ptn[0]].innerText;
        let ps1 =boxes[ptn[1]].innerText;
        let ps2 =boxes[ptn[2]].innerText;
     
        if(ps0 != "" && ps1 != "" && ps2 !=""){
            if(ps0 === ps1 && ps1 === ps2){
                showwinner(ps1);
            }


        }

    }
}

const resetgame = () => {
    let turnO = true;
     enableleboxes();
     msg.classList.add("hide");
}

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);