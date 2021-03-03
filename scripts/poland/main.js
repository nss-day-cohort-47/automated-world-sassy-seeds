import {grabCelebrities} from "./celebrities/celebritiesData.js"
import {celebrityHTML} from "./celebrities/CelebrityConstructor.js"


const celebritiesList = () => {
    const celebritiesContainer = document.querySelector(".celebrity-info")
    const celebritiesArray = grabCelebrities()
    let celebritiesAsHTML = ""
    for (const celebrityObject of celebritiesArray) {
        celebritiesAsHTML += celebrityHTML(celebrityObject)
    }
    celebritiesContainer.innerHTML = celebritiesAsHTML
;}

celebritiesList()



import {grabCities} from "./cities/CityData.js"
import {cityHTML} from "./cities/CityConstructor.js"


const cityList = () => {
    const cityContainer = document.querySelector(".city-info")
    const cityArray = grabCities()
    let citiesAsHTML = ""
    for (const cityObject of cityArray) {
        citiesAsHTML += cityHTML(cityObject)
    }
    cityContainer.innerHTML = citiesAsHTML
};

cityList()


import {grabLandmarks} from "./landmarks/LandmarkData.js"
import {landmarkHTML} from "./landmarks/LandmarkConstructor.js"


const landmarkList = () => {
    const landmarkContainer = document.querySelector(".landmark-info")
    const landmarkArray = grabLandmarks()
    let landmarksAsHTML = ""
    for (const landmarkObject of landmarkArray) {
        landmarksAsHTML += landmarkHTML(landmarkObject)
    }
    landmarkContainer.innerHTML = landmarksAsHTML
};

landmarkList();