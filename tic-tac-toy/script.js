let boxes =document.querySelectorAll(".box");
let resetbtn= document.querySelectorAll("#reset-tbn");
let turnO = true; // player X, player O
const winpattern=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [1,5,9],
    [3,5,7]
];
 
boxes.forEach((box) =>{
    box.addEventListener ("click",()=>{
        console.log("box was clicked.");

        if(turnO){  // palyer O
            box.innerText="O";
            turnO=false;


        }else{
            box.innerText="X";
            turnO=true;

        }
        box.disabled=true;
    })
   
})

const checkwinner=()=>{
    for ( let pattern of winpattern){
        console.log(pattern);
    }
}