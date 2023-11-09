// create prompt to take froyo flavors
let myOrder = prompt(`Please enter your order.`);
// create an array for the order info that will store as strings 
 const myArray = myOrder.split(", ");
 // creat a loop to itterate through the order
 // 
 let myFlavors = {

 }
  for(i=0; i < myArray.length; i++){
    const flavor = myArray[i]
    if(flavor in myFlavors){
        myFlavors[flavor]++
    } else {
     myFlavors[flavor] = 1}
  } 
  console.log(myFlavors);
  
const numVanilla = `vanilla`
const numStrawberry = `strawberrry`
const numCoffee = `coffee`
  

//     //}
// console.log (myFlavors);
// const flavors = {
//     vanilla: 0,
//     strawberry: 0,
//     coffee: 0, 
// }
// for(const key in flavors){
//     console.log(key);
//     console.log(flavors[key]);
// }
// console.log(flavors.vanilla);

// flavors[numVanilla] = 5;
// console.log(flavors.vanilla);


// //