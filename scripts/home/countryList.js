
import { getHomePage } from "./countriesData.js";
import { Country } from "./countries.js";
export const generateHomeData = () => {
    const homeCountries = getHomePage();
    const contentElement = document.querySelector(".home_country__container");
    // Generate all of the HTML for all of the fish
    let odd = false;
    let homeHTMLRepresentations = "";
    let i = 0;
    for (const country of homeCountries) {
        if(i % 2 === 1) {odd =true;}
        homeHTMLRepresentations += Country(country, odd);
        odd = false;
        i +=1;
    }
console.log(homeHTMLRepresentations);
    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += homeHTMLRepresentations;
    ;
}

