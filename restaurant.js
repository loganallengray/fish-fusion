/*
    GOAL: buy fish, make menu

    define boughtfish array
    chef buys fish from fishmonger, specifies a budget per fish
    iterate through fishmonger's fish array
    if fish meets budget, buy half of the fishmonger's stock
    push the bought fish into array

    The chef then creates 3 different meals per fish - a soup, 
    a grilled dinner, and sandwich. 
    For example, if tuna was bought, the following meals will 
    be on the menu:
        Tuna Soup
        Tuna Sandwich
        Grilled Tuna

    Define empty menu string (except the header)
    Iterate through boughtfish array, then format the data in HTML, 
    in the template of a menu.
    Use backticks, proper HTML tags, \n newlines, \t horizontal
    tabs.

    Your HTML structure must match the example below. Use the same 
    elements and the same class names.
        <h1>Menu</h1>
        <article class="menu">
            <h2>Tuna</h2>
            <section class="menu__item">Tuna Soup</section>
            <section class="menu__item">Tuna Sandwich</section>
            <section class="menu__item">Grilled Tuna</section>
        </article>

    Return menu string.
*/

// define fishmenu function, with the fishmonger and budget parameters
const fishMenu = (mongerInv, chefBudget) => {
    // empty menu string defined
    let menu = '<h1>Menu</h1>\n';
    // empty bought fish array defined
    const boughtFish = [];

    // iterate through monger's inventory
    for (const fish of mongerInv) {
        //filter out fish out of budget
        if (fish.price <= chefBudget) {
            // buy half of the stock
            fish.amount /= 2;
            // put the bought fish into an array
            boughtFish.push(fish);
        }
    }

    // use backticks to make menu in HTML form
    for (const fish of boughtFish) {
        menu += `<article class="menu">\n\t<h2>${fish.species}</h2>\t<section class="menu__item">${fish.species} Soup</section>\n\t<section class="menu__item">${fish.species} Sandwich</section>\n\t<section class="menu__item">Grilled ${fish.species}</section>\n</article>\n`;
    }

    // return the menu string
    return menu;
}

// export menu
module.exports = { fishMenu };