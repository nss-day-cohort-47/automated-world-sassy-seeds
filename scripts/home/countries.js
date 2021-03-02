export const Country = (country, odd) => {
    let retHTML = "";
    if (odd) {
        retHTML = `
      <div class="imageLeft">
      <img src="./images/${country.image}" alt="TravelCompany" class="home_country__img">
      <div class="home-country__detail">
          <h2>${country.name}</h2>
          <p>${country.phrase}</p>
          <a class="button" href="../${country.link}">Button</a>
      </div>
   </div>
          `
    } else {
        retHTML = `
        <div  class="imageRight">
        
        <div class="home-country__detail">
            <h2>${country.name}</h2>
            <p>${country.phrase}</p>
            <a class="button" href="../${country.link}">Button</a>
        </div>
        <img src="./images/${country.image}" alt="TravelCompany" class="home_country__img">
        </div>
     
            `
    }
    return retHTML;
}
