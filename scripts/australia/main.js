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

