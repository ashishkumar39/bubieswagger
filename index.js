const quotes = [
    "Go bubie go! π₯³",
    "Bubutummy thodi exercise krlia bethe bethe feli jari hai π€",
    "Your limitation - It's only your imagination! π",
    "I honestly think bubuji is the funniest person Iβve ever met. π€ͺ",
    "Always remember that bubie if you fall, I will pick you upβ¦ after I stop laughing xD π€",
    "Dream it. Wish it. Do it. π",
    "Thanks for being there for me, even when Iβm at my most annoying. π€",
    "Thank you for being the only person I talk to. π",
    "Bubutumtum pui",
    "The harder you work for something, the greater you will fell when you achieve it. π",
    "Areeyyy ohhhh Bubu Lakhania π Batiyati nahi ho aaj kal, bahot busy ho gyi ho kaa π",
    "I miss you bubulakhan. We are meeting next month, and no, you donβt have a choice. π",
    "Bubuji aapki bahut yaad aati ab khek :p",
    "One step at a time. π€"
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
