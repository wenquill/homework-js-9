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
    const words = text.split(' ');
    const replacedNumbersArray = words.map(word => {
        const num = Number(word);
        if (map.has(num)) {
            return map.get(num); 
        }
        return word;
    });
    return replacedNumbersArray.join (' '); 
};

const text = 'This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.';
console.log(getNumeral(text));

