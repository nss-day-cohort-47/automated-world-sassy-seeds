import { theCities } from './CityData.js';
import { obj2HTMLcity } from './CityConstructor.js';

export const city2theDOM = () => {
    const htmlSelector = document.querySelector('.city-info');
    const cities = theCities();
    let cityHTML = '';

    for (const eachCity of cities) {
        cityHTML += obj2HTMLcity(eachCity);
    };

    htmlSelector.innerHTML = cityHTML;
}