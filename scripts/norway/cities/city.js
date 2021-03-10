export const City = (city) => {
    let retHTML = "";

        retHTML = `
        

        <div class = "categoryList">
        <p class = "listItem">${city.city}</p>
    </div>
     
            `
    return retHTML;
}