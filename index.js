// Write your solution in this file!
// Declare a variable called customerName in global scope and set it to 'bob'
var customerName = 'bob';

// Define a function that accesses the customerName variable and uppercases it
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Define a function that declares and assigns a variable called bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Define a function that overwrites the value of the bestCustomer variable in global scope
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant called leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'someone';

// Define a function that attempts to change the value of the leastFavoriteCustomer constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will throw an error, because you cannot reassign a constant
}
