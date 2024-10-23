//TODOs bana le
//TODO-1 : Changing in designs of cross and circle
//TODO-2 : Changing background
//TODO-3 : Declare Outcome of the game
//          ---> check winner
//          ---> Check if board/square is filled --> to kuch  mat kro --> boolean table of 3x3
//          ---> Declare winner/Draw
//TODO-4 : End Game
//TODO-5 : New Game



//Task-1: changing designs
//Task-2: changing background 
const body=document.querySelector('body');
const itemsList=document.querySelectorAll('.dropdown-item');
let image=document.querySelectorAll('img');
let currCross="1A";
let currCircle="1B";

itemsList.forEach(function(item){
  // console.log(classList);
  item.addEventListener("click",(e)=>{
    // console.log(item.classList.contains("theme1"));
    if(item.classList.contains("theme1")){
      
      body.style.backgroundImage="url('/bg-images/bg1.jpg')";
    }else if(item.classList.contains("theme2")){
      body.style.backgroundImage="url('/bg-images/bg2.jpg')";
    }else if(item.classList.contains("theme3")){
      body.style.backgroundImage="url('/bg-images/bg3.jpg')";
    }else if(item.classList.contains("theme4")){
      body.style.backgroundImage="url('/bg-images/bg4.jpg')";
    }else if(item.classList.contains("theme5")){
      body.style.backgroundImage="url('/bg-images/bg5.jpg')";
    }else{
      if(item.classList.contains("design1")){
        changeDesign("1A","1B");
      }else if(item.classList.contains("design2")){
        changeDesign("2A","2B");
      }else if(item.classList.contains("design3")){
        changeDesign("3A","3B");
      }else if(item.classList.contains("design4")){
        changeDesign("4A","4B");
      }else if(item.classList.contains("design5")){
        changeDesign("5A","5B");
      }else if(item.classList.contains("design6")){
        changeDesign("6A","6B");
      }else if(item.classList.contains("design7")){
        changeDesign("7A","7B");
      }else if(item.classList.contains("design8")){
        changeDesign("8A","8B");
      }
    }
    body.style.transition="background-image 2s";
    
  });
});


//Changing design of cross and circle
function changeDesign(cross,circle){
  image=document.querySelectorAll('img')
  currCross=cross;
  currCircle=circle;
  image.forEach((img)=>{
    if(img.classList.contains("cross")){
      img.src=`/images/${cross}.png`;
      cross.transition="2s";
    }else{
      img.src=`/images/${circle}.png`;
      circle.transition="2s";
    }
    
  });
}

//Task-3: filling the boxes on clicking and handling the error of accidental clicking on already filled box
let isCross=true;
let countFilledSquares=0;
const main=document.querySelector('.main');
const divs=main.querySelectorAll('.box');
const isFilled= new Array(9).fill(false);
console.log(divs);
divs.forEach((div,index)=>{
  
  div.addEventListener("click",(e)=>{
    if(isFilled[index]===true) return;
    isFilled[index]=true;
    countFilledSquares++;
    if(isCross){
     let img= addCrossAndCircles(currCross,e);
      img.classList="cross";
      if(checkWinner()){
        setTimeout(()=>{alert(`Player1 won the game`);location.reload();},1000); 
        };
    }
    else{
      let img= addCrossAndCircles(currCircle,e);
      img.classList="circle";
      if(checkWinner()){
        setTimeout(()=>{alert(`player2 won the game`);location.reload();},1000); 
        };
    }
    isCross=!isCross;
    if(countFilledSquares===9){
      setTimeout(()=>{alert(`Match Draw`);location.reload();},1000);
    }
  })
  
});

function addCrossAndCircles(curr,e){
  //  e.target.innerHTML="";
      const img=document.createElement('img');
      img.src=`/images/${curr}.png`;
      e.target.appendChild(img);
      return img
}


//Task-4: checking and predicting winner

//making winning combinations
const checkWins=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

function checkWinner(){
  for(let i=0;i<checkWins.length;i++){
    let [a,b,c]=checkWins[i];
    if(isFilled[a] && isFilled[b] && isFilled[c]){
      if(divs[a].querySelector('img').src===divs[b].querySelector('img').src && divs[b].querySelector('img').src===divs[c].querySelector('img').src){
        return true;
      }
    }
  }
  return false;
}

