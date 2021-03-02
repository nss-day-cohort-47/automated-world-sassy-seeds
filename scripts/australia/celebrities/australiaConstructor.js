import {ausCelebritySend} from "./celebritiesData.js"


export const celebrityHTML = (wow) => {
    return `
    <div class = "categoryList">
    <p class = "listItem">${wow.celebrity}</p>
    </div>

    `;
}


