1. Combine two objects
const obj1 = { kale: null, apple: 5, orange: null, garlic: 130, banana: 8, avocado: 44 }
const obj2 = { kale: null, apple: null, orange: 3, garlic: 4, banana: 2, pineapple: 1 }
=> { kale: 0, apple: 5, orange: 3, garlic: 134, banana: 10, avocado: 44, pineapple: 1 }

function combineObjs(obj1,obj2){
  var obj3 = Object.assign({}, obj1, obj2)
  return Object.keys(obj3).reduce((obj, food) => {
    if (!obj2[food]) obj2[food] = 0;
    if(!obj1[food]) obj1[food] = 0;
    return Object.assign(obj, {[food]: obj1[food] + obj2[food] })
  }, {})
}

2. Reduce two arrays into one object
const amount = [12, 5, 8, 130, 8, 44]
const foodNames = ['kale', 'apple', 'orange', 'garlic', 'banana', 'avocado']
=> { kale: 12, apple: 5, orange: 8, garlic: 130, banana: 8, avocado: 44 }

function foodCounter (foodNames, amount) {
  return foodNames.reduce((food, num, i)=> {
    food[num] = amount[i]
    return food
  }, {})
}

3. Add value to a particular object key
const obj = { kale: 12, apple: 5, orange: 8, garlic: 130, banana: 8, avocado: 44 };
arguments:  obj, 'apple', 4
=> { kale: 12, apple: 9, orange: 8, garlic: 130, banana: 8, avocado: 44 }

function addItems (obj, key, value) {
  obj[key] += value
  return obj
}

4. Count the number of occurances of values in an array, returns an object, using Reduce
const vehs = ['car', 'car', 'truck', 'bike', 'boat', 'truck', 'car']
=> { car: 3, truck: 2, bike: 1, boat: 1 }

 function countedNames(array) {
  return array.reduce(function(allNames, name) {
     if (allNames[name]) {
       allNames[name]++;
     } else {
       allNames[name] = 1;
     }
     return allNames;
   }, {});
 }

5. Use filter to return elements of an array that fit a provided argument.
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
findFruits('ap') => ['apple', 'grapes']
findFruits('o') => ['mango', 'orange']

function isIncluded(value, arr) {
 return arr.filter(function(stuff) {
   return stuff.toLowerCase().indexOf(value.toLowerCase()) >-1
 })
}

6. Use splice to return given elements in an array and/or add an additional element into the array (still using splice only). USE THE DOCS.
const countries = ['spain', 'china', 'mexico', 'ghana'];
Return both the final array, and the element (s) that were removed.
=> const final = ['spain', 'mexico', 'ghana']
=> const removed = ['china']
=> const final = ['spain', 'china', 'mexico', 'sweden', 'ghana']
=> const removed = []

spliceItUp = (a, string) => {
  let removed = []
  let add = []
  if(a.indexOf(string) > -1) {
    removed = a.splice(a.indexOf(string), 1)
  } else {
    a.splice(0, 0, string)
    add = [string]
  }
  return {a, removed, add}
}
