// part 1
// growing plants

//variables
// const areaOfSpace = 3.14159 * 25;
// const minSpaceReq = areaOfSpace / 0.8;
// const plantsAbegin = 20;

// //number of plants per week
// let week1 = plantsAbegin * 2; //40
// let week2 = week1 * 2; // 80
// let week3 = week2 * 2; // 160
// let week4 = week3 * 2; // 320

// //week 1
// if (week1 > 0.8 * minSpaceReq){ // 40 < 62.83
//     console.log("this week the plants should be pruned")
//  } else if (week1 >= 0.5 * minSpaceReq) { // 
//     console.log("this week plants should be monitored")
//  } else {
//     console.log("this week plants should be planted")
//  }
// //week 
//  if (week2 > 0.8 * minSpaceReq){ //80%
//     console.log("this week the plants should be pruned")
//  } else if (week1 >= 0.5 * minSpaceReq) {
//     console.log("this week plants should be monitored")
//  } else {
//     console.log("this week plants should be planted")
//  }

//  //week 3
//  if (week3 > 0.8 * minSpaceReq){ //80%
//     console.log("this week the plants should be pruned")
//  } else if (week1 >= 0.5 * minSpaceReq) {
//     console.log("this week plants should be monitored")
//  } else {
//     console.log("this week plants should be planted")
//  }
// // week 4
//  if (week4 > 0.8 * minSpaceReq){ //80%
//     console.log("this week the plants should be pruned")
//  } else if (week1 >= 0.5 * minSpaceReq) {
//     console.log("this week plants should be monitored")
//  } else {
//     console.log("this week plants should be planted")
//  }


// part 2
const areaOfSpace = 3.14159 * 25;
const minSpaceReq = areaOfSpace / 0.8;
const plantsAbegin = 100;
const week10 = 100 * 2**10 //100 plants doubled for the duration of 10 weeks

// 10 weeks no pruning
 if (week10 > 0.8 * minSpaceReq){ //80%
    console.log("this week the plants should be pruned")
 } else if (week1 >= 0.5 * minSpaceReq) {
    console.log("this week plants should be monitored")
 } else {
    console.log("this week plants should be planted")
 }
 //what should radius be?
 // area = radius^2 * pi
 //