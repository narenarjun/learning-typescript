"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([-52, 52, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xanthyabryes');
charactersCollection.sort();
console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(6);
linkedList.add(12);
linkedList.add(37);
linkedList.add(93);
linkedList.add(-13);
linkedList.sort();
linkedList.print();
