let sportsOne:string[]=['swimming','golf','tennis','hocky'];
/*
for(let i=0;i<sportsOne.length;i++){
    console.log('sports:'+sportsOne[i]);
}
*/
for(let sport of sportsOne){
    if(sport == "golf"){
        console.log("my favorite sport is "+ sport);
    }
    else{
        console.log("the sport "+ sport);
    }
}
let sportTwo:string[]=['tennis','ragby','basketball'];
sportTwo.push('football');





