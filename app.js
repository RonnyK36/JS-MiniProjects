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


//  Frequency Calculator
const letterFrequency = (phrase) => {

    // create a freq object
    let freq = {};

    for (const letter of phrase) {
        // does letter exist in freq?
        if (letter in freq) {
            freq[letter] += 1;

        } else {
            freq[letter] = 1
        }
        // increase value by 1
        // set value to 1 if not
        // console.log(letter);

    }
    return freq;

    // console.log(phrase);
}

console.log(letterFrequency('Why is there a New Guy in town banaaaaa, kwanini'));