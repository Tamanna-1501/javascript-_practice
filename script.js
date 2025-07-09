let boxes = document.querySelectorAll(".boxes");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new-btn");
let resetbtn = document.querySelector("#reset-btn");
let turn0 =true;
let count =0;
const winnings =[ 
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const resetgame = () => {
    turn0 = true;
    count =0;
    enableBoxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((boxes) => {
    boxes.addEventListener("click",() =>{
     if(turn0){
    boxes.innerText ="0";
    turn0=false;
     }
    else {
       boxes.innerText ="X";
       turn0=true;
    }
    boxes.disabled = true;
    count++;

    let isWinner = checkwinner();
    if(count=== 9 && !isWinner()){
        gamedraw();
    }

});
});
const gamedraw = () =>{
    msg.innerText =`game is draw`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes =() =>{
for(let box of boxes){
    box.disabled= true;
}
};

const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText ="";
    }
};

const  showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const checkwinner =() =>{
for(let arr of winnings){
    let pos1 =boxes[arr[0]].innerText;
     let pos2 =boxes[arr[1]].innerText;
      let pos3 =boxes[arr[2]].innerText;

      if(pos1!= "" && pos2!="" && pos3!=""){
      if(pos1===pos2 && pos2===pos3){
        console.log("winner",pos1);
        showwinner(pos1);
        return true;
      }
      }
}
};
newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);








