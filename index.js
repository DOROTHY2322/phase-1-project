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

    document.getElementById("alcoholic-filter").addEventListener("change", function(event) {
        // check if the checkbox is checked
        if (event.target.checked) {
          // make a request to the API to get a list of alcoholic cocktails
          fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
            .then((response) => response.json())
            .then((data) => {
              // display the cocktails on the page
              displayCocktails(data);
            });
        } else {
          // make a request to the API to get a list of non-alcoholic cocktails
          fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            .then((response) => response.json())
            .then((data) => {
              // display the cocktails on the page
              displayCocktails(data);
            });
        }
      });
      
      function displayCocktails(cocktails) {
        // code to display the cocktails on the page goes here
      }
      document.getElementById("alcoholic-filter").checked = true;

      

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
     
    for (let i=1; i<16; i++){
       console.log();
       
     if(cocktail.drinks[0][`strIngredient${i}`]== null){
        break;
       }

       let ingredient = document.createElement('ons-list-item');
       ingredient.innerHTML = cocktail.drinks[0] [`strMeasure${i}`] + ':' + cocktail.drinks[0] [`strIngredient${i}`]
       drinks.appendChild(ingredient);

    }
    let card = document.createElement('card')
    card.innerHTML = cocktail.drinks[0].strInstructions;
    drinks.appendChild(card);
 
}


// hide the sign-up form by default

document.getElementById("signup-form").style.display = "none";

 // show the sign-up form when the user clicks on the "Sign Up" button

 document.getElementById("signup-button").addEventListener("click", function() {
  
   document.getElementById("signup-form").style.display = "block";
 });

// // hide the sign-up form when the user clicks on the "Close" button
 document.getElementById("close-button").addEventListener("click", function() {
 document.getElementById("signup-form").style.display = "none";
});
})
 