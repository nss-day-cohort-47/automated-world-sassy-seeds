export const Celeb = (celebrity) => {
    let retHTML =`
        <div class = "categoryList">
        <p class = "listItem">${celebrity.celebrity}</p>
    </div>
            `
    return retHTML;
}