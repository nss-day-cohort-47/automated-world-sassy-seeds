import { theCelebrities } from './CelebritiesData.js';
import { obj2HTMLcelebrity } from './CelebrityConstructor.js';

export const celebrity2theDOM = () => {
    const htmlSelector = document.querySelector('.celebrity-info');
    const celebrities = theCelebrities();
    let celebrityHTML = '';

    for (const eachCelebrity of celebrities) {
        celebrityHTML += obj2HTMLcelebrity(eachCelebrity);
    };

    htmlSelector.innerHTML = celebrityHTML;
}