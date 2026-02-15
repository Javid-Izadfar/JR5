type Ingredient =
  | "flour"
  | "tomato"
  | "cheese"
  | "olive oil"
  | "rice"
  | "onion"
  | "garlic"
  | "spices"
  | "chicken"
  | "fish";
type Country = "Italy" | "India" | "Mexico" | "Japan";
type Food = {
  name: string;
  ingredients: Ingredient[];
  isVegetarian: boolean;
  countryOfOrigin: Country;
  cookingTime: number;
};

const foods: Food[] = [
  {
    name: "Margherita Pizza",
    ingredients: ["flour", "tomato", "cheese", "olive oil"],
    isVegetarian: true,
    countryOfOrigin: "Italy",
    cookingTime: 15,
  },
  {
    name: "Pasta Pomodoro",
    ingredients: ["flour", "tomato", "olive oil"],
    isVegetarian: true,
    countryOfOrigin: "Italy",
    cookingTime: 20,
  },
  {
    name: "Vegetable Curry",
    ingredients: ["rice", "onion", "garlic", "spices"],
    isVegetarian: true,
    countryOfOrigin: "India",
    cookingTime: 30,
  },
  {
    name: "Chicken Curry",
    ingredients: ["chicken", "onion", "garlic", "spices"],
    isVegetarian: false,
    countryOfOrigin: "India",
    cookingTime: 40,
  },
  {
    name: "Sushi Roll",
    ingredients: ["rice", "fish"],
    isVegetarian: false,
    countryOfOrigin: "Japan",
    cookingTime: 25,
  },
  {
    name: "Vegetable Sushi",
    ingredients: ["rice", "onion"],
    isVegetarian: true,
    countryOfOrigin: "Japan",
    cookingTime: 20,
  },
  {
    name: "Taco",
    ingredients: ["flour", "chicken", "onion"],
    isVegetarian: false,
    countryOfOrigin: "Mexico",
    cookingTime: 15,
  },
  {
    name: "Veggie Taco",
    ingredients: ["flour", "onion", "tomato"],
    isVegetarian: true,
    countryOfOrigin: "Mexico",
    cookingTime: 12,
  },
  {
    name: "Fried Rice",
    ingredients: ["rice", "onion", "garlic"],
    isVegetarian: true,
    countryOfOrigin: "Japan",
    cookingTime: 18,
  },
  {
    name: "Chicken Pasta",
    ingredients: ["flour", "chicken", "olive oil"],
    isVegetarian: false,
    countryOfOrigin: "Italy",
    cookingTime: 25,
  },
];

// Q10
// Create an object where the keys are country names and the values are arrays of food names, like this:

// {
//     Italy: ["Margherita Pizza", "Pasta Pomodoro"],
//     Japan: ["Sushi Roll", "Vegetable Sushi"],
//     ...
// }

const obj1 = Object.fromEntries([["key", "value"]]);
console.log(obj1);

// const countries = foods.map(food => food.countryOfOrigin)
// console.log(countries)
// const countries2dArray = countries.map(country => {
//     return [country, []]
// })
// console.log(countries2dArray)

// const countriesObj = Object.fromEntries(countries2dArray)
// console.log(countriesObj)

const countriesObj: {
  [key: string]: string[];
} = Object.fromEntries(foods.map((food) => [food.countryOfOrigin, []]));
console.log(countriesObj);
foods.forEach((food) => {
  countriesObj[food.countryOfOrigin].push(food.name);
});
console.log(countriesObj);

// O(n) = n + n = 2n

const countriesObj2: {
  [key: string]: string[];
} = {};
foods.forEach((food) => {
  if (!countriesObj2[food.countryOfOrigin]) {
    countriesObj2[food.countryOfOrigin] = [];
  }
  countriesObj2[food.countryOfOrigin].push(food.name);
});
console.log(countriesObj2);
// O(n) = n

const countriesObj3: {
  [key: string]: string[];
} = {};
for (let index = 0; index < foods.length; index++) {
  const food = foods[index];
  if (!countriesObj3[food.countryOfOrigin]) {
    countriesObj3[food.countryOfOrigin] = [];
  }
  countriesObj3[food.countryOfOrigin].push(food.name);
}
console.log(countriesObj3);

// Benchmark

//                    Speed     Break     Create New Array     Callback       Memory        Usage
// for Loop          Fastest     Yes             No               No           Lowest       Everything (For more than a Million Items)
// forEach            Fast       No              No              Yes           Low          Apply Side Effect
// map                Fast       No             Yes              Yes           High         Transform Array
// filter             Mid        No             Yes              Yes           High         List All Matches (Get a Smaller List - SubList)
// find               Mid       Yes*            No*              Yes           Mid          Find First Match

console.log(foods.some((food: Food) => food.isVegetarian));
console.log(foods.every((food: Food) => food.isVegetarian));
console.log(foods[0].ingredients.includes("tomato"));
console.log(foods[0].ingredients.some((ing) => ing === "tomato"));
console.log(foods[0].ingredients.indexOf("tomato"));
console.log(foods[0].ingredients.findIndex((ing) => ing === "tomato"));
console.log(foods.findIndex((food) => food.isVegetarian));
console.log(foods.findLastIndex((food) => food.isVegetarian));
console.log(foods.findLast((food) => food.isVegetarian));
let lastVegetarianFood = null;
for (let index = 0; index < foods.length; index++) {
  if (foods[index].isVegetarian) {
    lastVegetarianFood = foods[index];
  }
}
console.log(lastVegetarianFood);
// O(n) = n | o(n) = n
let lastVegetarianFood2 = null;
for (let index = foods.length - 1; index >= 0; index--) {
  if (foods[index].isVegetarian) {
    lastVegetarianFood2 = foods[index];
    break;
  }
}
// O(n) = n | o(n) = 1
console.log(lastVegetarianFood2);

let totalCookingTime = 0;
foods.forEach((food) => {
  totalCookingTime += food.cookingTime;
});
console.log(totalCookingTime);

const totalCookingTime2 = foods.reduce((sum, food) => {
  return sum + food.cookingTime;
}, 0);
console.log(totalCookingTime2);
