// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (Ruth) {
    cats.push(Ruth)
    return cats;
}

function destructivelyPrependCat (JoJo) {
    cats.unshift(JoJo)
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
  }
  
  function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
  }
  
  function appendCat(Ellie){
    let newCats= [...cats,Ellie];
    return newCats;
  }
  
  function prependCat(Dash){
    let moreNewCats=[Dash, ...cats];
    return moreNewCats
  }
  
  function removeFirstCat(){
    var cats2= cats.slice(1)
    return cats2
  }

  function removeLastCat(){
    let cats3= cats.slice(0,cats.length-1);
    return cats3;
  }
