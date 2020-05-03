var reviews = [10, 20, 30, 40, 4.5];
var totalNumber = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    totalNumber += reviews[i];
}
var avarage = totalNumber / reviews.length;
