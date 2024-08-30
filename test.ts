// let shoppingDone = true;
// let childAllowance;

// if (shoppingDone === true) {
//   childAllowance = 10;
//   console.log("shopping done Allowance:", childAllowance);
// } else {
//   childAllowance = 5;
//   console.log("shopping not done Allowance:", childAllowance);
// }

// let iceCreamVanOutside = true;
// let houseOnFire = false;

// if (iceCreamVanOutside || houseOnFire) {
//   console.log("go outside");
// } else {
//   console.log("stay Indoors");
// }

// function SelectWeather() {
//   const choice = document.getElementById("weather").value;

//   switch (choice) {
//     case "sunny":
//       console.log("a very sunny day innit");
//       break;

//     case "rainy":
//       console.log("better grab an umbrella");
//       break;

//     case "snowing":
//       console.log("time to get the snow boots on");
//       break;

//     case "overcast":
//       console.log("a bit gloomy today");
//       break;

//     default:
//       console.log("please select a weather");
//   }

//   return (
//     <div>
//       <label htmlFor="weather">Select the weather type today: </label>
//       <select id="weather">
//         <option value="">--Make a choice--</option>
//         <option value="sunny">Sunny</option>
//         <option value="rainy">Rainy</option>
//         <option value="snowing">Snowing</option>
//         <option value="overcast">Overcast</option>
//       </select>
//     </div>
//   );
// }

// export default SelectWeather;

// ternary operator
// let haveLickedMango = true;
// console.log(haveLickedMango ? "buy some more" : "finish mango first");

//understanding the loops

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
// for (const cat of cats) {
//   console.log(`one of the ${cats.length} cat is a: `, cat);
// }

// function toUpperCase(string) {
//   return string.toUpperCase();
// }

// function lCat(str) {
//   return str.startsWith("L");
// }

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const UpperCaseStr = cats.map(toUpperCase);
// const LCats = cats.filter(lCat);

// // console.log(UpperCaseStr, LCats);

// const lCats = cats.filter((cat) => cat.startsWith("L"));
// console.log(lCats);

// function may(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] * arr[i]);
//   }
//   return result;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
// console.log(may(numbers));

// const cats = ["Pete", "Biggles", "Jasmine"];

// let myFavoriteCats = "My cats are called ";

// for (let i = 0; i < cats.length; i++) {
//   if (i === cats.length - 1) {
//     myFavoriteCats += `and ${cats[i]}.`;
//   } else {
//     myFavoriteCats += `${cats[i]}, `;
//   }
// }

// console.log(myFavoriteCats);

// const contacts = [
//   "Chris:2232322",
//   "Sarah:3453456",
//   "Bill:7654322",
//   "Mary:9998769",
//   "Dianne:9384975",
// ];

// const search = () => {
//   const searchName = input.value.toLowerCase();
//   input.value = "";
//   let result = "";

//   for (const contact of contacts) {
//     const [name, number] = contact.split(":");
//     if (name.toLowerCase() === searchName) {
//       result = `${name}'s number is ${number}.`;
//       break;
//     }
//   }
//   if (result === "") {
//     result = "No such contact found";
//   }
//   result;
// };

// const cats = ["Pete", "Biggles", "Jasmine"];

// let myFavoriteCats = "my favorite cats";

// let i = 0;
// while (i < cats.length) {
//   if (i === cats.length - 1) {
//     myFavoriteCats += `${cats[i]}.`;
//   } else {
//     myFavoriteCats += `${cats[i]}, `;
//   }
//   i++;
// }
// console.log(myFavoriteCats);

// function random(number) {
//   return Math.floor(Math.random() * number);
// }
// console.log(random(40));

// form.addEventListener("submit", (e) => {
//   if (firstName === "" || lastName === "") {
//     e.preventDefault();
//     console.log("you must provide a first and last name");
//   }
// });
