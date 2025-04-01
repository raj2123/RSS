const lazyRepeatList = document.createElement('ons-lazy-repeat');
lazyRepeatList.id = "recipeNameList";
lazyRepeatList.style.textTransform = "capitalize";

let mealName

// let addRecipe = document.querySelector('#addRecipeButton')

// if (addRecipe) {
//     console.log(addRecipe)
//     addRecipe.addEventListener('click', () => {
//         document.querySelector('#navigator').pushPage('recipeData').then(r => {
//         });
//     });
// }

function addRecipe() {
    document.querySelector('#navigator').pushPage('addNewRecipe').then(r => {
    });
}

function goToMain() {
    ons.notification.alert("Recipe Added")
    document.querySelector('#navigator').popPage()
    // loadMain()
}

function fillData(d, name) {
    document.querySelector('#recipeDataTitle').innerHTML = name;

    document.querySelector('#mealImage').src = d.strMealThumb;
    document.querySelector('#name').innerHTML = name;

    document.querySelector('#categoryType').innerHTML = d.strCategory;
    document.querySelector('#cuisineType').innerHTML = d.strArea;

    document.querySelector('#instructions').innerHTML = d.strInstructions;

    document.querySelector(`#ingredient1`).innerHTML = d.strIngredient1;
    document.querySelector(`#measure1`).innerHTML = d.strMeasure1;

    document.querySelector(`#ingredient2`).innerHTML = d.strIngredient2;
    document.querySelector(`#measure2`).innerHTML = d.strMeasure2;

    document.querySelector(`#ingredient3`).innerHTML = d.strIngredient3;
    document.querySelector(`#measure3`).innerHTML = d.strMeasure3;

    document.querySelector(`#ingredient4`).innerHTML = d.strIngredient4;
    document.querySelector(`#measure4`).innerHTML = d.strMeasure4;

    document.querySelector(`#ingredient5`).innerHTML = d.strIngredient5;
    document.querySelector(`#measure5`).innerHTML = d.strMeasure5;

    document.querySelector(`#ingredient6`).innerHTML = d.strIngredient6;
    document.querySelector(`#measure6`).innerHTML = d.strMeasure6;

    document.querySelector(`#ingredient7`).innerHTML = d.strIngredient7;
    document.querySelector(`#measure7`).innerHTML = d.strMeasure7;

    document.querySelector(`#ingredient8`).innerHTML = d.strIngredient8;
    document.querySelector(`#measure8`).innerHTML = d.strMeasure8;

    document.querySelector(`#ingredient9`).innerHTML = d.strIngredient9;
    document.querySelector(`#measure9`).innerHTML = d.strMeasure9;

    document.querySelector(`#ingredient10`).innerHTML = d.strIngredient10;
    document.querySelector(`#measure10`).innerHTML = d.strMeasure10;

    document.querySelector(`#ingredient11`).innerHTML = d.strIngredient11;
    document.querySelector(`#measure11`).innerHTML = d.strMeasure11;

    document.querySelector(`#ingredient12`).innerHTML = d.strIngredient12;
    document.querySelector(`#measure12`).innerHTML = d.strMeasure12;

    document.querySelector(`#ingredient13`).innerHTML = d.strIngredient13;
    document.querySelector(`#measure13`).innerHTML = d.strMeasure13;

    document.querySelector(`#ingredient14`).innerHTML = d.strIngredient14;
    document.querySelector(`#measure14`).innerHTML = d.strMeasure14;

    document.querySelector(`#ingredient15`).innerHTML = d.strIngredient15;
    document.querySelector(`#measure15`).innerHTML = d.strMeasure15;

    document.querySelector(`#yTLink`).href = d.strYoutube;
    document.querySelector(`#yTLink`).innerHTML = d.strYoutube;
    document.querySelector(`#sourceLink`).href = d.strSource;
    document.querySelector(`#sourceLink`).innerHTML = d.strSource;
}

async function getFirstApiData(url) {
    const response = await fetch(url);
    const data = await response.json();
    let dataUrl;

    for (let i = 0; i < data.meals.length; i++) {
        if (mealName === data.meals[i].strMeal) {
            dataUrl = data.meals[i].url;
            // console.log(i + ":::" + data.results[i].url);
            break;
        }
    }

    // console.log(dataUrl);
    // console.log(mealName);
    fillData(data.meals[0], mealName)
}

// let search = document.querySelector('#searchInput')
// let searchVal = search.value
// search.onchange(() => {
//     getSearchData(searchVal)
// })

async function getSearchData(keyword) {
    document.querySelector('#navigator').pushPage('recipeData').then(r => {
    });

    const response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${keyword}`);

    const data = await response.json();

    document.querySelector('#recipeDataTitle').innerHTML = mealName;

    document.querySelector('#mealImage').src = data.meals[0].strMealThumb;
    document.querySelector('#name').innerHTML = mealName;

    document.querySelector('#categoryType').innerHTML = data.meals[0].strCategory;
    document.querySelector('#cuisineType').innerHTML = data.meals[0].strArea;

    document.querySelector('#instructions').innerHTML = data.meals[0].strInstructions;

    document.querySelector(`#ingredient1`).innerHTML = data.meals[0].strIngredient1;
    document.querySelector(`#measure1`).innerHTML = data.meals[0].strMeasure1;

    document.querySelector(`#ingredient2`).innerHTML = data.meals[0].strIngredient2;
    document.querySelector(`#measure2`).innerHTML = data.meals[0].strMeasure2;

    document.querySelector(`#ingredient3`).innerHTML = data.meals[0].strIngredient3;
    document.querySelector(`#measure3`).innerHTML = data.meals[0].strMeasure3;

    document.querySelector(`#ingredient4`).innerHTML = data.meals[0].strIngredient4;
    document.querySelector(`#measure4`).innerHTML = data.meals[0].strMeasure4;

    document.querySelector(`#ingredient5`).innerHTML = data.meals[0].strIngredient5;
    document.querySelector(`#measure5`).innerHTML = data.meals[0].strMeasure5;

    document.querySelector(`#ingredient6`).innerHTML = data.meals[0].strIngredient6;
    document.querySelector(`#measure6`).innerHTML = data.meals[0].strMeasure6;

    document.querySelector(`#ingredient7`).innerHTML = data.meals[0].strIngredient7;
    document.querySelector(`#measure7`).innerHTML = data.meals[0].strMeasure7;

    document.querySelector(`#ingredient8`).innerHTML = data.meals[0].strIngredient8;
    document.querySelector(`#measure8`).innerHTML = data.meals[0].strMeasure8;

    document.querySelector(`#ingredient9`).innerHTML = data.meals[0].strIngredient9;
    document.querySelector(`#measure9`).innerHTML = data.meals[0].strMeasure9;

    document.querySelector(`#ingredient10`).innerHTML = d.strIngredient10;
    document.querySelector(`#measure10`).innerHTML = d.strMeasure10;

    document.querySelector(`#ingredient11`).innerHTML = d.strIngredient11;
    document.querySelector(`#measure11`).innerHTML = d.strMeasure11;

    document.querySelector(`#ingredient12`).innerHTML = d.strIngredient12;
    document.querySelector(`#measure12`).innerHTML = d.strMeasure12;

    document.querySelector(`#ingredient13`).innerHTML = d.strIngredient13;
    document.querySelector(`#measure13`).innerHTML = d.strMeasure13;

    document.querySelector(`#ingredient14`).innerHTML = d.strIngredient14;
    document.querySelector(`#measure14`).innerHTML = d.strMeasure14;

    document.querySelector(`#ingredient15`).innerHTML = data.meals[0].strIngredient15;
    document.querySelector(`#measure15`).innerHTML = data.meals[0].strMeasure15;

    document.querySelector(`#yTLink`).href = data.meals[0].strYoutube;
    document.querySelector(`#yTLink`).innerHTML = data.meals[0].strYoutube;
    document.querySelector(`#sourceLink`).href = data.meals[0].strSource;
    document.querySelector(`#sourceLink`).innerHTML = data.meals[0].strSource;

    loadMain()
}

function loadMain() {
    const list = document.getElementById('recipeNameList');
    const apiURL = "https://themealdb.com/api/json/v1/1/random.php";

    function show(data) {
        let dataList = [];

        // console.log(data);

        // Loop to access all rows
        for (let i = 0; i < data.meals.length; i++) {
            dataList += `<ons-list-item modifier="chevron"  tappable>` + data.meals[i].strMeal + `</ons-list-item>`
        }

        lazyRepeatList.innerHTML += dataList;

        // document.getElementById("recipeNameList").innerHTML = dataList;
    }

    async function getApi(url) {

        // Storing response
        const response = await fetch(url);

        // Storing data in form of JSON
        const data = await response.json();
        // console.log(data.meals.length);

        // for (let i = 0; i < data.meals.length; i++) {
        show(data);
        // console.log(data.results[i])
        // }
    }

    for (let i = 0; i < 100; i++) {
        getApi(apiURL).then(r => {
        });
    }

    if (lazyRepeatList.innerHTML != null) {
        document.addEventListener('init', async (e) => {

            const onsList = document.getElementById('recipeList');
            onsList.appendChild(lazyRepeatList);

            if (e.target.id === 'index') {
                let check = e.target.querySelector('#recipeNameList')
                if (check) {
                    check.onclick = () => {
                        document.querySelector('#navigator').pushPage('recipeData').then(r => {
                        });
                    }
                }

                if (check) {
                    check.onclick = function (event) {
                        console.log(event.target.id);
                        document.querySelector('#navigator').pushPage('recipeData', {data: {title: event.target.innerHTML}}).then(r => {
                        });
                        //console.log(event.target.data.title)
                        // document.querySelector('#pID').innerHTML =event.target.data.title;
                    }
                }
            }

            if (e.target.id === 'recipeData') {

                const requestWakeLock = async () => {
                    let wakeLock;
                    try {
                        wakeLock = await navigator.wakeLock.request();
                        wakeLock.addEventListener(' release', () => {
                        })
                    } catch (err) {
                        console.error(err)
                    }
                }
                await requestWakeLock();

                setTimeout(() => {
                    wakeLock.release();
                    wakeLock = null;
                }, 5000);

                // async function getApiData(url) {
                //     const response = await fetch(url);
                //
                //     return await response.json()
                // }

                // console.log(e.target.data.title)
                mealName = e.target.data.title;

                const apiURL = `https://themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
                // console.log(apiURL)

                setTimeout(() => {
                    document.querySelector('#loader').style.display = 'none';
                    document.querySelector('#data').removeAttribute("hidden");
                    getFirstApiData(apiURL).then(r => {
                    });
                }, 1000);
            }
        });
    }
}

loadMain()

const navigator = document.querySelector('#navigator');

const popPage = () => navigator.popPage();

// Pad the history with an extra page so that we don't exit right away
window.addEventListener('load', () => window.history.pushState({}, ''));

// When the browser goes back a page, if our navigator has more than one page we pop the page and prevent the back event by adding a new page
// Otherwise we trigger a second back event, because we padded the history we need to go back twice to exit the app.
window.addEventListener('popstate', () => {
    const {pages} = navigator;
    if (pages && pages.length > 1) {
        popPage();
        window.history.pushState({}, '');
    } else {
        window.history.back();
    }
});
