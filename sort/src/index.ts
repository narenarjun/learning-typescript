import { Sorter } from './Sorter';
// import { NumbersCollection } from './NumbersCollection';
// import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([-52, 52, 3, -5, 0]);
// const sorter1 = new Sorter(numbersCollection);
// sorter1.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('Xanthyabryes');
// const sorter2 = new Sorter(charactersCollection);
// sorter2.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(6);
linkedList.add(12);
linkedList.add(37);
linkedList.add(93);
linkedList.add(-13);

const sorter3 = new Sorter(linkedList);
sorter3.sort();

linkedList.print();
