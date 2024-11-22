const MyQuotes = [
    { "name": "Marilyn Monroe", "quote": "I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best." },
    { "name": "Marcus Tullius Cicero", "quote": "A room without books is like a body without a soul." },
    { "name": "Bernard M. Baruch", "quote": "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind." },
    { "name": "William W. Purkey", "quote": "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth." },
    { "name": "Dr. Seuss", "quote": "You know you're in love when you can't fall asleep because reality is finally better than your dreams." },
    { "name": "Albert Einstein", "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." }

];

function generateQuote() {
    const boxQuotes = Math.floor(Math.random() * MyQuotes.length);
    document.querySelector('#name').textContent = `- ${MyQuotes[boxQuotes].name}`;
    document.querySelector('#quote').textContent = `"${MyQuotes[boxQuotes].quote}"`;
}
