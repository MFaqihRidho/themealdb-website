
export const searchMeals = (keyword) => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then(response => response.json())
    .then(results => Promise.resolve(results))
}

export const randomMeals = () => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(response => response.json())
    .then(results => Promise.resolve(results))
}

export const detailMeals = (id) => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .then(results => Promise.resolve(results))
}

export const mealListByCountry = (id) => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`)
    .then(response => response.json())
    .then(results => Promise.resolve(results))
}

export const mealListByCategory = (id) => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
    .then(response => response.json())
    .then(results => Promise.resolve(results))
}

export const mealListByAlphabet = (id) => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${id}`)
    .then(response => response.json())
    .then(results => Promise.resolve(results))
}

export const categoryList = () => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then(response => response.json())
    .then(results => Promise.resolve(results))
}

export const countryList = () => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    .then(response => response.json())
    .then(results => Promise.resolve(results))
}

