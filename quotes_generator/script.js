const quote=['The purpose of our lives is to be happy.', 
            'Life is what happens when you’re busy making other plans.',
            'Get busy living or get busy dying.',
            'You only live once, but if you do it right, once is enough.',
            'Many of life’s failures are people who did not realize how close they were to success when they gave up.'];

const quote_author=['Dalai Lama', 'John Lennon', 'Stephen King', 'Mae West', 'Thomas A. Edison'];

const button= document.querySelector('.change_quote_button');
const insertQuote= document.querySelector('.quote');
const insetQuoteAuthor= document.querySelector('.quote_by');

insertQuote.textContent=quote[0];
insetQuoteAuthor.textContent='~ ' + quote_author[0];


button.addEventListener('click', changeQuote);

function changeQuote(){
    const randomIndex= parseInt(Math.random()*quote.length);
    insertQuote.textContent=quote[randomIndex];
    insetQuoteAuthor.textContent='~ ' + quote_author[randomIndex];
}
