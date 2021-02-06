const mealsContainer = document.getElementById('meals-container');

function getFoods() {
    const searchQuery = document.getElementById('foodName').value;
    const query = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchQuery}`;
    // console.log(query);
    fetch(query)
        .then(res => res.json())
        .then(data => getFood(data))

}

function getFood(data) {
    let food = '';
    console.log(data.meals[0].strMeal);
    for (let i = 0; i < data.meals.length; i++) {
        food +=
            `<div class="col-sm-3">
             <div class="card">
                <img src="${data.meals[i].strMealThumb}" class="card-img-top">
                     <div class=" card-body">
                         <h5 class="card-title">${data.meals[i].strMeal}</h5>
                         <a href="#" class="btn btn-primary btn-sm">Details</a>
                      </div>
               </div> 
         </div>`;
    }

    mealsContainer.innerHTML = food;
    // for (let i = 0; i < foods.length; i++) {
    //     const food = foods[i];
    //     console.log(food);
    //     const foodInfo =
    //         `<div class="col-sm-3">
    //         <div class="card">
    //             <img src="${food[i].meals[0].strMealThumb}" class="card-img-top">
    //                 <div class=" card-body">
    //                     <h5 class="card-title">${food[i].meals[0].strMeal}</h5>
    //                     <a href="#" class="btn btn-primary btn-sm">Details</a>
    //                  </div>
    //           </div> 
    //     </div>`;
    //     mealsContainer.innerHTML = foodInfo;
    // }
    /*
    console.log(foods.meals[0].strMeal);
    console.log(foods.meals[0].idMeal);
    console.log(foods.meals[0].strMealThumb);
*/

}