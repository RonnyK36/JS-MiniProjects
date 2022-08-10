// console.log("hello");
// const selectBtn = document.querySelector('button').style.backgroundColor = "red";


// function calc(num1, num2) {
//     return num1 * num2
// }

// calc(12, 5);

// document.querySelector('.btn').addEventListener('click', function() {
//     document.querySelector('.change').innerHTML = "Hello";
//     document.querySelector('.change', ).setAttribute("backgroundColor", "red")
// });


// //  Frequency Calculator
// const letterFrequency = (phrase) => {

//     // create a freq object
//     let freq = {};

//     for (const letter of phrase) {
//         // does letter exist in freq?
//         if (letter in freq) {
//             freq[letter] += 1;

//         } else {
//             freq[letter] = 1
//         }
//         // increase value by 1
//         // set value to 1 if not
//         // console.log(letter);

//     }
//     return freq;

//     // console.log(phrase);
// }

// console.log(letterFrequency('Why is there a New Guy in town banaaaaa, kwanini'));

//  sum numbers in an array
// const sumArrayNumbers = (numbers) => {
//     let result = 0;
//     for (const number of numbers) {
//         result += number;

//     }
//     return { result }

// }
// const nums = [1, 3, 5, 2, 345, 56, 7];

// console.log(sumArrayNumbers(nums));


// Word Frequency in a Phrase

const wordFrequency = (phrase) => {
    wordArray = phrase.split(" ");
    console.log(wordArray);
    let frequency = {};

    for (const word of wordArray) {
        if (word in frequency) {
            frequency[word] += 1
        } else {
            frequency[word] = 1
        }
    }

    return frequency;
}
console.log(wordFrequency('Hii ni ya nini ni ya ninii ama ni ya nini'));