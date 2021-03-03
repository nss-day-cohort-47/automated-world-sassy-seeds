import {norCelebritySend} from "./celebrities/CelebritiesData.js";
import {norCitySend} from "./cities/CityData.js";
import {norLandSend} from "./landmarks/LandmarkData.js"
import { Landmark } from "./landmarks/landmark.js";
import {City} from "./cities/city.js"
import {Celeb} from "./celebrities/celeb.js"

export const generateNorData = () => {
    const norLandmarks = norLandSend();
    let contentElement = document.querySelector(".landmark-info");
    // Generate all of the HTML
    let HTMLRepresentations = "";
    for (const landmark of norLandmarks) {
        HTMLRepresentations += Landmark(landmark);

    }
    contentElement.innerHTML += HTMLRepresentations;
    HTMLRepresentations = "";
    contentElement = document.querySelector(".city-info");
    const norCities = norCitySend();
    for (const cities of norCities) {
        HTMLRepresentations += City(cities);

    }
    contentElement.innerHTML += HTMLRepresentations;
    HTMLRepresentations = "";
    contentElement = document.querySelector(".celebrity-info");
    const norCelebs = norCelebritySend();
    for (const celeb of norCelebs) {
        HTMLRepresentations += Celeb(celeb);

    }
    contentElement.innerHTML += HTMLRepresentations;
}
