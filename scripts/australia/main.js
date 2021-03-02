import {ausCelebritySend} from "./celebrities/celebritiesData.js"
import {celebrityHTML} from "./celebrities/australiaConstructor.js"


const ausLoopLog = () => {
    const ausSection = document.querySelector(".letsSee")
    let ausListHTML = ""
    const ausCelebrityChange = ausCelebritySend()
    for (const ausLoop of ausCelebrityChange) {
    ausListHTML += celebrityHTML(ausLoop)
    }
    ausSection.innerHTML = ausListHTML
};

ausLoopLog()
