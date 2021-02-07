const mealsContainer = document.getElementById('meals-container');

function getFoods() {
    const searchQuery = document.getElementById('foodName').value;
    const query = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchQuery}`;

    fetch(query)
        .then(res => res.json())
        .then(data => getFood(data))
}



const getFood = data => {
    let food = '';
    for (let i = 0; i < data.meals.length; i++) {
        food +=
            `<div class="col-sm-3 mb-3">
                <div class="card">
                <img src="${data.meals[i].strMealThumb}" class="card-img-top">
                    <div class=" card-body">
                        <h5 class="card-title">${data.meals[i].strMeal}</h5>
                        <button onclick="showMealDetails('${data.meals[i].idMeal}');" class="btn btn-primary btn-sm">Details</button>
                    </div>
                </div> 
            </div>`;
    }

    mealsContainer.innerHTML = food;
}

const showMealDetails = meal => {
    const mealUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`

    // console.log(detailBox);
    fetch(mealUrl)
        .then(res => res.json())
        .then(mealData => showMeal(mealData))
}



// show individual meal details 
const showMeal = m => {

    let detailBox = document.getElementById('details-container');
    detailBox.style.display = "block";
    let foodItemContainer = document.getElementById("food-details")
    const item = `<div class="card" >
            <img src="${m.meals[0].strMealThumb}" class="card-img-top" id="card-image" height="350px" width="auto">
            <div class=" card-body">
                <h3 class="card-title">${m.meals[0].strMeal}</h3>
                <h5>Ingredients</h5>
                <ul class="list-group">
                <li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" checked value="" aria-label="...">
                  ${m.meals[0].strIngredient1}
                </li>
                <li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" checked value="" aria-label="...">
                  ${m.meals[0].strIngredient2}
                </li>
                <li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" checked value="" aria-label="...">
                  ${m.meals[0].strIngredient4}
                </li>
                <li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" checked value="" aria-label="...">
                  ${m.meals[0].strIngredient4}
                </li>
                <li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" checked value="" aria-label="...">
                  ${m.meals[0].strIngredient5}
                </li>
                <li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" checked value="" aria-label="...">
                  ${m.meals[0].strIngredient6}
                </li>
                <li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" checked value="" aria-label="...">
                  ${m.meals[0].strIngredient7}
                </li>
                <li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" checked value="" aria-label="...">
                  ${m.meals[0].strIngredient8}
                </li>
                <li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" checked value="" aria-label="...">
                  ${m.meals[0].strIngredient9}
                </li>
				<li class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" checked value="" aria-label="...">
                  ${m.meals[0].strIngredient10}
                </li>
              </ul>
            </div>
        </div>`
    foodItemContainer.innerHTML = item;
}
