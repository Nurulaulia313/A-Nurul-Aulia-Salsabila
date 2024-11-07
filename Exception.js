//  for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }

// function myfirst(){
//     myDisplayer("Good Bye");
// }

// function mySecond(callback){
//     myDisplayer("Hello");
//     callback();
// }

// function myDisplayer(message){
//     console.log(message);
// }

// mySecond(myfirst);

// console.log("Paragraf 1");
// setTimeout(() =>{
//     console.log("Paragraf 2");
// }, 4000);
// console.log("Paragraf 3");

// function Numbers(a, b) {
//     try {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             throw new Error("Input harus berupa angka.");
//         }
//         if (b === 0) {
//             throw new Error("Pembagian dengan nol tidak diperbolehkan.");
//         }
//         if (!a || !b ) {
//             throw new Error("harus mengisi angka");
//         }
//         return a / b;
//     } catch (error) {
        
//         console.error("Terjadi kesalahan: " + error.message);
//     }
// }
// console.log(Numbers(10, 2)); 
// console.log(Numbers(10, 5)); 
// console.log(Numbers(10, "a")); 
// console.log(Numbers(10, 0)); 
// console.log(Numbers(6, 2)); 
// console.log(Numbers(15, "b")); 
// console.log(Numbers("z", 5)); 



// function setTime() {
//     const header = document.getElementById("header");
//     header.textContent = new Date().toString();
//   }
//   setInterval(setTime, 1000);
//   console.log("Program Finish");