//JS statements are ACTIONS we tell Javascript to perform
//change this content, update or add this, change the look of that

//using the console for testing
console.log("Wello Horld");

//STRINGS are pieces of text and must alway go WITHIN quotes

//conversely, NUMBERS do not go within quotes
console.log(134 / 2);
//Numbers allows you to do math stuff like seeing if something is less than something else

//simple variables
//variables are temporary holders of data - it can change depending on conditions that we set in the code
let animal;
//we give variables a VALUE when we want them to hold something
animal = "fish";
animal = "cougar";
//variables also don't have quotes when we want to use them - although their values can
console.log(animal);
//we can overwrite or set an NEW VALUE to a pre-existing variable
//when we do so, we don't use the keyword var again
animal = "penguin";
console.log(animal);
//as you can see what is printed out to the console the second time is different because we changed the value of the variable

//CONCATENATION - This is the fancy coding word for 'adding things together'. Not in a math sense but adding bit of text or values together
//for example, what is we want to pring to the console "My favourite animal is [and whatever is in the animal variable"
console.log("My favorite animal is a <(') " + animal);
//We aren't bound to just putting stuff in the console!!! This is a great way to test and debug and find errors

//Changing the DOM - Document Object Model
//We can change the content on ANY element on a page with it's ID
//we use the JavaScript METHOD getElementById() to select something
//We use the PROPERTY .innerHTML to state that we want to change the HTML that is inside of it
document.getElementById("column1").innerHTML = "i want to go home";
document.getElementById("column1").innerHTML += " go to want i";
document.getElementById("column1").innerHTML +=
  "<img class= 'img-fluid' src='images/code.jpg' alt= 'code note'>";
//We can change more than just the content! We can change the looks
//This time we will add the id 'column2' to the next column over and then change the css of it!
//we will select it by the id
//Then use the .style to say we want to change the css of it and then state which property we want to change
document.getElementById("column2").style.color = "#2600D1E7";
document.getElementById("column2").style.fontSize = "28pt";
document.getElementById("column2").style.backgroundColor = "#FFA600E7";
//LOGIC!
//THE MOST powerful aspect about any kind of coding is that we can use logic to create a custom interaction with the user
//This means we can give the browser instructions on what to do depending on something else
//For example, in a game, perhaps you can pick up a better weapon, which in turn causes more damage
//So the amount of damage points is BASED on which weapon is being used
animal = "walrus";
if (animal == "penguin") {
  console.log(" youve been penguined");
} else {
  console.log("you havent been penguined");
}
//we will create a variable that holds the 'weapon' that the user has
let weapon = "Hats";

if (weapon == "Fists") {
  document.getElementById("column3").innerHTML += "<p>You are Using Fists</p>";
} else if (weapon == "Hats") {
  document.getElementById("column3").innerHTML += "<p>You are Using Hats</p>";
} else {
  document.getElementById("column3").innerHTML += "<p>Invaild Weapon</p>";
}

let damage = 0;

if (weapon == "Fists") {
  damage = 5;
} else if (weapon == "Hats") {
  damage = 10;
} else {
  damage = 0;
}

console.log(damage);

//------------------------------------------------------------------------
document.getElementById("column3").innerHTML +=
  weapon + " have damage of: " + damage;

//Then we will print out content to the page depending on which weapon they have
//This is LOGIC
//we will use an 'IF STATEMENT' to change the message they receive based on the variable holding the weapon

//Let's take it a step further and say the opponent has a health of 100 points
let health = 100;

//Send a message to column3 with what the opponent's health is
document.getElementById("column3").innerHTML +=
  "<p>Opponent Health: " + health + "</p>";
//then we will define damage points for each type of weapon

//use the console to test is the damage variable is working correctly

//Let's change column3 and send the user a message
//CONCATENTATE the 'weapon' name and the STRING ' have this much damage: ' and then the 'damage' amount

//Now let's say the user has hit the opponent with their weapon
//We need to MINUS the 'damage' from the opponents 'health'
health = health - damage;

//then send the message with the new 'health' value
document.getElementById("column3").innerHTML +=
  "<p>Opponent Health: " + health + "</p>";
//Hit them AGAIN and send the new health message
health = health - damage;
//then send the message with the new 'health' value
document.getElementById("column3").innerHTML +=
  "<p>Opponent Health: " + health + "</p>";
//Hit them AGAIN and send the new health message
health = health - damage;
//then send the message with the new 'health' value
document.getElementById("column3").innerHTML +=
  "<p>Opponent Health: " + health + "</p>";
//Hit them AGAIN and send the new health message
health = health - damage;
//then send the message with the new 'health' value
document.getElementById("column3").innerHTML +=
  "<p>Opponent Health: " + health + "</p>";
//Hit them AGAIN and send the new health message
health = health - damage;
//then send the message with the new 'health' value
document.getElementById("column3").innerHTML +=
  "<p>Opponent Health: " + health + "</p>";
