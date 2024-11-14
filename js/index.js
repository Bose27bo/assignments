var quotes = [
    {
        content: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
        author: '-- Maya Angelou'
    },
    {
        content:` “You only live once, but if you do it right, once is enough.”`,
        author: '-- Mae West'
    },
    {
        content: `“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”`,
        author: '-- Marilyn Monroe'
    },
    {
        content: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
        author: '-- Dr. Seuss'
    },
    {
        content: `“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”`,
        author: '-- William W. Purkey'
    },
    {
        content: `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,
        author: '-- Ralph Waldo Emerson'
    },
    {
        content: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
        author: '-- Marilyn Monroe'
    },
    {
        content: `“It is better to be hated for what you are than to be loved for what you are not.”`,
        author: '-- Andre Gide, Autumn Leaves'
    },
    {
        content: `“The greatest glory in living lies not in never falling, but in rising every time we fall.”`,
        author: '-- Nelson Mandel'
    },
    {
        content: `“If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.”`,
        author: '-- Oprah Winfrey'
    },
];


var lastQuote;

function quoteclick() {
    var quoteRandom;

    do{
    quoteRandom = Math.floor(Math.random() * quotes.length);
    
    document.getElementById("Quotes").innerHTML = `
        <p id="quote" class='text-success'>${quotes[quoteRandom].content}</p>

        <p id="author" class="text-danger">${quotes[quoteRandom].author}</p>`;

    }while (quoteRandom == lastQuote);

    lastQuote = quoteRandom;

    console.log(quotes[quoteRandom].content);
    console.log(quotes[quoteRandom].author);
};