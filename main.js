// import boatInventory and mongerInventory
const { boatInventory } = require("./fishingBoat.js")
const { mongerInventory } = require("./fishMonger.js")

/*
    Fishing Boat - This is the source of the fish. 
    The boat catches the fish and makes the fresh catch available to 
    purchasers.
    Fishmonger - The fishmonger purchases fresh fish off the boat, 
    and head chefs around the city visit every morning to get fish 
    for their daily menus.
    Fish Restaurant - The chef at fish restaurant purchases fresh 
    fish from the fishmonger every day. To keep her prices low, 
    she purchases lower cost food and combines them in tasty ways 
    that people might not expect.
*/

const { fishMenu } = require("./restaurant.js")

const menu = fishMenu(mongerInventory(boatInventory()), 5.00)
console.log(menu)