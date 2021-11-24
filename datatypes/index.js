const string = 'apple, banana, kiwi';

// 1. Өгсөн string - ийн бүх үсгийг том болго: 'APPLE, BANANA, KIWI'
// -- Энд кодоо бичнэ үү!
console.log(sentence.toUpperCase());


// 2. Өгсөн string - ийг дараах хэлбэртэй болго: 'Apple; Banana; Kiwi'
// -- Энд кодоо бичнэ үү!

const array = ['d', 'e', 'c', 'a', 'b'];
// 3. Өгсөн array - ыг үсгийн дарааллаар эрэмблэ.
// -- Энд кодоо бичнэ үү!
const array = ['d', 'e', 'c', 'a', 'b'];
array.sort

// 4. Өгсөн array - ын голын 3н элемэнтийг салгаж аваад array1 - гэсэн хувьсагчид хийнэ.
//    array болон array1 ийг хэвлэ.
// -- Энд кодоо бичнэ үү!
const array = ['d', 'e', 'c', 'a', 'b'];
const array1 = array.slice(1,3);
array = array.splice(1,3);
console.log(array1);
console.log(array);

// 5. Өгсөн array - ын эхний элемэнтийг устага
// -- Энд кодоо бичнэ үү!
const array = ['d', 'e', 'c', 'a', 'b'];
array.shift();
console.log(array);

// 6. Өгсөн array - ын сүүлийн элемэнтийг устага
// -- Энд кодоо бичнэ үү!
const array = ['d', 'e', 'c', 'a', 'b'];
array.pop();
console.log(array);
// 7. Өгсөн array - ын урд 'z' үсэг нэм
// -- Энд кодоо бичнэ үү!
const array = ['d', 'e', 'c', 'a', 'b'];

const newFirstElement = 'z'

const newArray = [newFirstElement].concat(array)



// 8. Өгсөн array - ын ард 'j' үсэг нэм
// -- Энд кодоо бичнэ үү!
const array = ['d', 'e', 'c', 'a', 'b'];

array.push('j');

console.log(array);

// 9. Өгсөн array - ыг JSON string болго.
// -- Энд кодоо бичнэ үү!
