const countryList = [{
    image: "../../images/poland.jpeg",
    name: "Poland",
    phrase: "Did you know Poland is home to some of the worlds heaviest animals? You could be one too if you book your flight now!",
    link: "../poland/main.html"
},{
    image: "../../images/austrailia.jpeg",
    name: "Austrailia",
    phrase: "Join us on a journey where everything in sight wants to eat you.",
    link: "../austrailia/main.html"
},{
    image: "../../images/canada.jpeg",
    name: "Canada",
    phrase: "No wonder everyones so polite here, the cold is harsh enough!",
    link: "../canada/main.html"
},{
    image: "../../images/norway.jpeg",
    name: "Norway",
    phrase: "I'll bet you didn't know Norway had a volcano, did you? lets take a dip, Book your flight now!",
    link: "../norway/main.html"
}]
export const getHomePage = () => {
    return countryList;
}