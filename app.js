// console.log("js added")
//[] => js array
//{} =>js objects
const cardArray=[
    {
     name:'fries',
     img:'images/fries.png',
    },
    {
     name:'cheeseburger',
     img:'images/cheeseburger.png',
    },
    {
     name:'hotdog',
     img:'images/hotdog.png',
    },
    {
     name:'ice-cream',
     img:'images/ice-cream.png',
    },
    {
     name:'milkshake',
     img:'images/milkshake.png',
    },
    {
     name:'pizza',
     img:'images/pizza.png',
    },
    {
        name:'fries',
        img:'images/fries.png',
       },
       {
        name:'cheeseburger',
        img:'images/cheeseburger.png',
       },
       {
        name:'hotdog',
        img:'images/hotdog.png',
       },
       {
        name:'ice-cream',
        img:'images/ice-cream.png',
       },
       {
        name:'milkshake',
        img:'images/milkshake.png',
       },
       {
        name:'pizza',
        img:'images/pizza.png',
       },
]


//A shortcut to shuffle an array randomly
//we will need this to randomly shuffle all the cards
cardArray.sort(()=>0.5-Math.random())

// console.log(cardArray);

//querySelector finds the id of the div
const gridDisplay=document.querySelector('#grid')
// console.log(gridDisplay);

//we have declared an empty array and will push the cards in it
let cardChosen=[];

let cardChosenIds=[];

// now to check how many matches we have
const cardsWon=[];

const resultDisplay=document.querySelector('#result');

//here each time I am creating an img tag for the images to be placed in the site
function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        /*That means only if we trigger eventlistener then the function
        will be called*/
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

// This the function which will match two cards and give result
function checkMatch(){
    // console.log('matching/not matching');
   const cards= document.querySelectorAll('img');
   const optionOneId=cardChosenIds[0];
   const optiontwoId=cardChosenIds[1];
    if(optionOneId==optiontwoId){
        alert('You have clicked the same image');
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optiontwoId].setAttribute('src','images/blank.png');
    }
    if(cardChosen[0]===cardChosen[1]){
        alert('You have found a match');
        // this means if we get two similar cards we will make then blank
        cards[optionOneId].setAttribute('src','images/white.png');
        cards[optiontwoId].setAttribute('src','images/white.png');
        cards[optionOneId].removeEventListener('click',flipCard);
        cards[optiontwoId].removeEventListener('click',flipCard);
     

        cardsWon.push(cardChosen);
        
    }
    // if we dont get the match then the cards will be flipped
    else{
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optiontwoId].setAttribute('src','images/blank.png');
        alert('sorry try again');
    }
    resultDisplay.textContent=cardsWon.length;

    //when one round is over we will make the array empty
    cardChosen=[];
    cardChosenIds=[];
    if(cardsWon.length==cardArray.length/2){
       resultDisplay.innerHTML="Congratulations";
    }
}

function flipCard(){
   const cardId= this.getAttribute('data-id')
   // console.log('clicked',cardId);

//    We have used this to get the names of the card items
//    console.log(cardArray[cardId].name);

   cardChosen.push(cardArray[cardId].name);
   console.log(cardChosen);

cardChosenIds.push(cardId);
console.log(cardChosenIds);

   /* main purpose of this line is to get the images of the cards
   when we click on a specific card*/
   this.setAttribute('src',cardArray[cardId].img);
   if(cardChosen.length===2){
    setTimeout(checkMatch,200);
   }


}