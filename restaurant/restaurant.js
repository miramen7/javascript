var menu = [
    {   
        "name": "ketoprak",
        "ingredients": ["tahu", "bihun", "bawang", "garam", "kacang", "air"],
        "price": 15000
    },
    {   
        "name": "pecel ayam",
        "ingredients": ["ayam", "nasi", "sambal", "lalap"],
        "price": 25000
    },
    {   
        "name": "sop buntut",
        "ingredients": ["buntut", "garam", "air", "bawang"],
        "price": 30000
    },
    {   
        "name": "mie aceh",
        "ingredients": ["mie kuning", "kuah gulai", "kerupuk", "timun", "kacang", "bawang"],
        "price": 22000
    },
]

function item(name, prop = "empty") {
    for (i = 0; i < menu.length; i++) {
        if (name == menu[i].name) {
            switch (prop) {
                case 'ingredients':
                    return console.log(menu[i].ingredients);
                    break;
                case 'price':
                    return console.log(menu[i].price);
                    break;
                case 'empty':
                case '':
                    return console.log(menu[i]);
                default:
                    return console.log("No such property");
            }
        }
    } 
    return console.log("No such menu");
}

var a, b;
item("mie aceh", "ingredients");