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
                        <button href="#"  onclick="showMealDetails('${data.meals[i].idMeal}');" class="btn btn-primary btn-sm">Details</button>
                    </div>
                </div> 
            </div>`;
    }

    mealsContainer.innerHTML = food;
}

const showMealDetails = meal => {
    const mealUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`
    // console.log(mealUrl);
    fetch(mealUrl)
        .then(res => res.json())
        .then(mealData => console.log(mealData))
}