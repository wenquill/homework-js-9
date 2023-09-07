const arr = [
    [1, 'first'],
    [3, 'third'],
];

//1--------------------------------------------------
const map = new Map(arr);

console.log(map.size);

map.set(2, 'second');
console.log(map);

map.delete(3);
console.log(map);

console.log(map.get(1));

console.log(map.has(2));

console.log(map.keys());

console.log(map.values());

// *------------------------------------------------
map.set(3, 'third');

function getNumeral (text) {
    const words = text.split(' ');  //створюється масив зі слів
    const replacedNumbersArray = words.map(word => {
        // методом map змінюємо масив words, створюючи новий масив зі зміненими елементами
        const num = Number(word);
        //перетворюємо рядок в число
        if (map.has(num)) { //перевіряємо чи є отримане в num значення ключем карти map
            return map.get(num); //якщо так, повертаємо значення ключа num
        }
        return word;
    });
    return replacedNumbersArray.join (' '); 
    //отриманий масив із заміненими числами перетворюємо назад в єдиний рядок за допомоою методу join і повертаємо як результат функції
};

const text = 'This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.';
console.log(getNumeral(text));

