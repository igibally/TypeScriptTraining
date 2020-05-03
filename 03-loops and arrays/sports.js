var sportsOne = ['swimming', 'golf', 'tennis', 'hocky'];
/*
for(let i=0;i<sportsOne.length;i++){
    console.log('sports:'+sportsOne[i]);
}
*/
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var sport = sportsOne_1[_i];
    if (sport == "golf") {
        console.log("my favorite sport is" + sport);
    }
    else {
        console.log("the sport " + sport);
    }
}
