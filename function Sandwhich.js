let bread1 = prompt("Which bread woukd you like to have:  ");
let veg1 = prompt("What are your favourite veggies: ");
let sauce1 = prompt("Which sauce would you like to have: ");

function makeSandwhich(bread, veg, sauce){
    let sandwhich = bread + " bread " + veg + " " + sauce + " sandwhich is ready";   
    return sandwhich;
}

let vegSandwhich = makeSandwhich(bread1, veg1, sauce1);
console.log(vegSandwhich)