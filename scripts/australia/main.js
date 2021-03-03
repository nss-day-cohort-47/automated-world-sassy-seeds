import {getCelebrities} from "./celebrities/celebritiesData.js"
import {celebrityHTML} from "./celebrities/celebrityHTML.js"


const celebritiesList = () => {
    const celebritiesContainer = document.querySelector(".celebrity-info")
    const celebritiesArray = getCelebrities()
    let celebritiesAsHTML = ""
    for (const celebrityObject of celebritiesArray) {
    celebritiesAsHTML += celebrityHTML(celebrityObject)
    }
    celebritiesContainer.innerHTML = celebritiesAsHTML
};

celebritiesList()

// get celebrities data
// itterate celebrities data and represent each as html
// locate item on dom to render HTML appearance
// render HTML to dom


import {getCities} from "./cities/citiesData.js"
import {citiesHTML} from "./cities/citiesHTML.js"


const citiesList = () => {
    const citiesContainer = document.querySelector(".city-info")
    const citiesArray = getCities()
    let citiesAsHTML = ""
    for (const citiesObject of citiesArray) {
    citiesAsHTML += citiesHTML(citiesObject)
    }
    citiesContainer.innerHTML = citiesAsHTML
};

citiesList()




import {getLand} from "./landmarks/landData.js"
import {landHTML} from "./landmarks/landHTML.js"


const landList = () => {
    const landContainer = document.querySelector(".landmark-info")
    const landArray = getLand()
    let landAsHTML = ""
    for (const landObject of landArray) {
    landAsHTML += landHTML(landObject)
    }
    landContainer.innerHTML = landAsHTML
};

landList()