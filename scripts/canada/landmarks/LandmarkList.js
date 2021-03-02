import { theLandmarks } from './LandmarkData.js';
import { obj2HTMLlandmark } from './LandmarkConstructor.js';

export const landmark2theDOM = () => {
    const htmlSelector = document.querySelector('.landmark-info');
    const landmarks = theLandmarks();
    let landmarkHTML = '';

    for (const eachLandmark of landmarks) {
        landmarkHTML += obj2HTMLlandmark(eachLandmark);
    };

    htmlSelector.innerHTML = landmarkHTML;
}