//URLS

//random cocktails
const randomCocktail= 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
//name of the cocktails
const cocktailName ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
//ingredients by name 
const ingredientName = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka'
// filter by alcoholic
const cocktailcategory ='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
//filter non alcoholic 
const Type='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
//search
const search = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin'

document.addEventListener('DOMContentLoaded', () => {
   

    //to get random cocktails
    function getRandomCocktail(){
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then((response)=>response.json())
        .then((data)=>{
            // console.log(data)
            displayRandomCocktail(data);
        })
    }
    getRandomCocktail();

function displayRandomCocktail(cocktail){
    console.log(cocktail.drinks[0])
    
    let drinks = document.querySelector('#drinks')

    let drinkName = document.createElement('h2')
    drinkName.innerHTML=cocktail.drinks[0].strDrink

    drinks.appendChild(drinkName);

    let img =document.createElement('img');
    img.src = cocktail.drinks[0].strDrinkThumb;

    drinks.appendChild(img);
     
    for (let i=1; i<16;i++){
       console.log();
       
       if(cocktail.drinks[0][`strIngredient${i}`]== null){
        break;
       }

       let ingredient = document.createElement('ons-list-item');
       ingredient.innerHTML = cocktail.drinks[0] [`strMeasure${i}`]+ ':' +[`strIngredient${i}`] +
       drinks.appendChild(ingredient);

    }
    let card = document.createElement('card')
    card.innerHTML = cocktail.drinks[0].strInstructions;
    drinks.appendChild(card);
 
}
// // Get the search button and checkbox elements
// const searchButton = document.getElementById("btn");
// const withAlcoholCheckbox = document.getElementById("with-alcohol");
// const withoutAlcoholCheckbox = document.getElementById("without-alcohol");

// // Attach a click event listener to the "with alcohol" checkbox
// //withAlcoholCheckbox.addEventListener("click", () => {
//   // If the "with alcohol" checkbox is selected, enable the search button
//   searchButton.disabled = false;
// });

// // Attach a click event listener to the "without alcohol" checkbox
// withoutAlcoholCheckbox.addEventListener("click", () => {
//   // If the "without alcohol" checkbox is selected, enable the search button
//   searchButton.disabled = false;
// });

// hide the sign-up form by default

document.getElementById("signup-form").style.display = "none";

 // show the sign-up form when the user clicks on the "Sign Up" button

 document.getElementById("signup-button").addEventListener("click", function() {
  
   document.getElementById("signup-form").style.display = "block";
 });

// // hide the sign-up form when the user clicks on the "Close" button
 //document.getElementById("close-button").addEventListener("click", function() {
 // document.getElementById("signup-form").style.display = "none";
//});
})
 