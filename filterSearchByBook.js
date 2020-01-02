"use strict";
const book1 = {
    description: "A tale with two different ideals filled with opposing symmetry",
    id: 1,
    name: "Tale of Two Cities",
    language: "en"
};
function filterSearchByBook(input, searchTerm) {
    if (!searchTerm)
        throw Error("searchTerm cannot be empty");
    if (!input.length)
        throw Error("input cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return input.filter(function (arrayElement) {
        return arrayElement.name.match(regex);
    });
}
const obj1 = { name: "Tales of Two Cities" };
const obj2 = { name: "The Hatchet" };
const obj3 = { name: "The Giver" };
const arrOfLinks = [obj1, obj2, obj3];
const term = "The Giver";
filterSearchByBook(arrOfLinks, term);
