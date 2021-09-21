// Create an empty menu object and add courses property; create 3 properties inside _courses object and leave empty.
const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [], 
  },
  // Create getter and setter methods for apps, mains, desserts. Then inside menu object, create an empty getter method for the _course property. 
  get appetizers() {
    return this._courses.appetizers;

  },
  get mains() {
    return this._courses.mains;

  },
  get desserts() {
    return this._courses.desserts;

  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() { // Inside the courses getter method, return object the contains key/value pairs for app, mains, desserts.
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  
  // Inside menu object, create method called addDishToCourse() which will be used to add a new dish to the specified course on the menu. Three parameters:...
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = { // To the method, add dish object with name and price which it gets for the parameters:
      name: dishName,
      price: dishPrice,
    };
    // This method should then push this dish object into the appropriate array in your menu's _courses object based on what courseName was passed in:
    return this._courses[courseName].push(dish);
  },
  
  // Create a method in menu object; it will take one paramter 
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  // Create function that will generate 3-course meal; no parameters needed
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}`;
  }
};

// Create menu items with at least 3 choices:
menu.addDishToCourse("appetizers", "salad", 4.00);
menu.addDishToCourse("appetizers", "wings", 4.50);
menu.addDishToCourse("appetizers", "fries", 5.00);

menu.addDishToCourse("mains", "steak", 10.25);
menu.addDishToCourse("mains", "salmon", 7.75);
menu.addDishToCourse("mains", "tofu", 11.20);

menu.addDishToCourse("desserts", "ice cream", 3.00);
menu.addDishToCourse("desserts", "coffee", 2.50);
menu.addDishToCourse("desserts", "cake", 4.50);

// Generate a meal using the generateRandomMeal function and save it to a variable called meal; print out menu
const meal = menu.generateRandomMeal();
console.log(meal);

