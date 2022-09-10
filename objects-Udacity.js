var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
     close: function() {
    if (umbrella.isOpen === true) {
        umbrella.isOpen = false;
        return "Julia close the umbrella!";
    } else 
        return "The umbrella is already close!";

    }}


//********************************************************************* */
    var breakfast = {
        name: "The Lumberjack",
        price: 9.95,
        ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]}


//*************************************************************************** */

/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount` 
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */


var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function (){
      
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
    
   }
};
//console.log(savingsAccount.printAccountSummary());

/********************************************************************** */

var facebookProfile = {
    name: "Ivette",
    friends: 9,
    messages: ["Hi", "Hola", "Bonjour", "Hallo"],
    postMessage: function (newMessage){
        facebookProfile.messages.push(newMessage)
    },
    deleteMessage: function (index){
            
        facebookProfile.messages.splice(index, 1);

    },
    addFriend: function (){
        facebookProfile.friends++
    },
    removeFriend: function(){
        facebookProfile.friends--
    }
};

/************************************************************************** */
/*Use the forEach() method to loop over the array and print out the following donut summaries using console.log.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each*/

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(element => {
    console.log(element.type+ " donuts cost $"+ element.cost+ " each")
});
