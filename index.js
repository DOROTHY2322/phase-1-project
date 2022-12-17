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

   // set up event listeners on the checkboxes
document.getElementById("alcoholic-filter").addEventListener("change", function(event) {
    if (event.target.checked) {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then((response) => response.json())
        .then((data) => {
          displayCocktails(data);
        });
    }
  });
  
  document.getElementById("non-alcoholic-filter").addEventListener("change", function(event) {
    if (event.target.checked) {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
        .then((response) => response.json())
        .then((data) => {
          displayCocktails(data);
        });
    }
  });
  
  function displayCocktails(cocktails) {
    // display the cocktails 
  }
  
  
  
      // check the appropriate checkbox based on the isAlcoholic property of the drink object
      if (drinks.isAlcoholic) 
      {
        document.getElementById("alcoholic-filter").checked = true;

        document.getElementById("non-alcoholic-filter").checked = true;
      } 
      else 
      {
        document.getElementById("alcoholic-filter").checked = true;

        document.getElementById("non-alcoholic-filter").checked = false;
      }
      

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

       let ingredient = document.createElement('list-item');
       ingredient.innerHTML = cocktail.drinks[0] [`strMeasure${i}`] + ':' + cocktail.drinks[0] [`strIngredient${i}`]
       drinks.appendChild(ingredient);

    }
    let card = document.createElement('p')
    card.innerHTML = cocktail.drinks[0].strInstructions;
    drinks.appendChild(card);
 
}

  let search = document.getElementById("submit");
  let url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

  
document.getElementById("open-form-btn").onclick = function() {
    document.getElementById("signup-form").style.display = "block";
  }
  
  document.getElementById("signup-form").onclick = function(event) {
    if (event.target == this) {
      this.style.display = "none";
    }
  }
  
})
