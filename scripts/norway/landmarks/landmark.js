export const Landmark = (landmark) => {
    let retHTML = "";

        retHTML = `
        

        <div class = "categoryList">
        <p class = "listItem">${landmark.landmark}</p>
    </div>
     
            `
    return retHTML;
}
