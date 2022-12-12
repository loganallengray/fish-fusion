/*
    define and export mongerInventory function

    Each day, the fishmonger buys exactly 10 of each inexpensive 
    (see below) fish caught by the fishing boat. 
    If any of the fishing boat's fish quantity is less than 10, 
    the fish monger does not buy it.

    The fishmonger does not buy any fish from the boat that is priced 
    higher than $7.50 per fish.

    The fishmonger lets the chef of a restuarant specify what their 
    maximum budget is per fish. For example, a chef can tell the 
    monger that she can only spend $5.00 per fish. The function 
    should then return only fish that cost $5.00 or less.
    
    Each fish object provided by the fish monger should have a quantity of 
    10 instead of the original quantity from the fishing boat.
*/
   
/* 
    define fishmonger function with a parameter for the boatInventory 
    and chef's budget.
    define empty fishmonger array to store the fish he buys.
    loop through the fish array of fish objects.
    check the price and quantity of each fish.
    push the fish with the correct price (no higher than $7.50) and 
    quantity (at least 10) to the bought fish array.
    set the quantity property to 10 for each bought object.
    return bought fish array
*/

// define buying fish task, boat inventory parameter defined
mongerInventory = (boatInv) => {
    // define empty bought fish array
    const boughtFish = [];

    // iterate through boat's inventory of fish
    for (const fish of boatInv) {
        // check if price is below or at most $7.50 and has at least 10
        if (fish.price <= 7.50 && fish.amount >= 10) {
            // set the amount the fish monger buys
            fish.amount = 10;
            // push the fish into bought fish array
            boughtFish.push(fish);
        }
    }

    // return the bought fish array
    return boughtFish;
}

//export mongerInventory
module.exports = { mongerInventory };