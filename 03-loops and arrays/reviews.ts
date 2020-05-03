let reviews:number[]= [10,20,30,40,4.5];

let totalNumber=0;
for(let i=0;i<reviews.length;i++){
    console.log(reviews[i]);
    totalNumber+=reviews[i];
}
let avarage= totalNumber / reviews.length;


