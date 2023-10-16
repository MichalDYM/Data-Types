"use strict";
console.log('Hello World');
const fruit = [
    { id: 1, name: "Pomelo", kg: 20 },
    { id: 2, name: "Avocado", kg: 1 },
    { id: 3, name: "Watermelon", kg: 200 },
    { id: 4, name: "Strawberry", kg: 1 },
    { id: 5, name: "Vanilla", kg: 4 },
    { id: 6, name: "Cinnamon", kg: 60 },
    { id: 7, name: "Mango", kg: 39 },
    { id: 8, name: "Lichi", kg: 1 },
    { id: 9, name: "Apple", kg: 2 },
    { id: 10, name: "Banana", kg: 30 },
    { id: 11, name: "Nut", kg: 10 }
];
fruit.sort((a, b) => {
    // Compare by kg first
    if (a.kg !== b.kg) {
        return a.kg - b.kg;
    }
    // If kg is the same, compare by name
    return a.name.localeCompare(b.name);
});
for (const fruits of fruit) {
    console.log(`name: ${fruits.name}\nid: ${fruits.id}\nkg: ${fruits.kg}`);
}
