const quotes = [
    "Go bubie go! 🥳",
    "Bubutummy thodi exercise krlia bethe bethe feli jari hai 🤓",
    "Your limitation - It's only your imagination! 😉",
    "I honestly think bubuji is the funniest person I’ve ever met. 🤪",
    "Always remember that bubie if you fall, I will pick you up… after I stop laughing xD 🤓",
    "Dream it. Wish it. Do it. 😎",
    "Thanks for being there for me, even when I’m at my most annoying. 🤗",
    "Thank you for being the only person I talk to. 😌",
    "Bubutumtum pui",
    "The harder you work for something, the greater you will fell when you achieve it. 🙌",
    "Areeyyy ohhhh Bubu Lakhania 😉 Batiyati nahi ho aaj kal, bahot busy ho gyi ho kaa 😆",
    "I miss you bubulakhan. We are meeting next month, and no, you don’t have a choice. 😏",
    "Bubuji aapki bahut yaad aati ab khek :p",
    "One step at a time. 🤞"
]

let isTouched = false;

const colors = [
    "#808000",
    "#C0C0C0",
    "#808080",
    "#00FF00",
    "#008080",
    "#FF00FF",
    "#000080"
]

function getRandomElement(elementList) {
    const randomElement = elementList[Math.floor(Math.random() * elementList.length)];
    return randomElement;
}

function changeDisplayColor() {
    quoteButton.style.backgroundColor = getRandomElement(colors);
}

function changeButtonText(text) {
    quoteButton.innerText = text;
}

function displayRandomQuote() {
    if(isTouched === false) {
        changeButtonText("You dirty dirty woman!");
    }
    isTouched = true;
    displayQuoteArea.innerText = getRandomElement(quotes);
    // changeDisplayColor();
}

const quoteButton = document.getElementById("quoteButton");
quoteButton.addEventListener("click", displayRandomQuote);
const displayQuoteArea = document.getElementById("quoteArea");
