export const Country = (country, odd) => {
    let retHTML = "";
    if (odd) {
        retHTML = `
    <div class="countrySectionAltRight">
      <div class="imageLeft">
      <img src="./images/${country.image}" alt="TravelCompany" class="home_country__img">
      </div>
      <div class="home-country_detail-right">
          <h2 class="h2Alt">${country.name}</h2>
          <p class="pAlt">${country.phrase}</p>
          <button onclick="document.location='${country.link}'" class="buttonAlt">See More</button>
   </div>
   </div>
          `
    } else {
        retHTML = `
        <div class="countrySectionAltLeft">
        <div class="home-country_detail-left">
            <h2 class="h2Alt">${country.name}</h2>
            <p class="pAlt">${country.phrase}</p>
            <button onclick="document.location='${country.link}'" class="buttonAlt">See More</button>
        </div>
        <div  class="imageRight">
        <img src="./images/${country.image}" alt="TravelCompany" class="home_country__img">
        </div>
        </div>
     
            `
    }
    return retHTML;
}
