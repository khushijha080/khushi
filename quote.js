const quotes = [{
    quote: `"You know you're in love when you can't fall asleep because reality is finally better than your dreams"`,
    writer: `– Dr. Seuss`,
    
   
}, {
    quote: `"You only live once, but if you do it right, once is enough."`,
    writer: `– Mae West`,
   
}, {
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    writer: `– Babe Ruth`
}, {
    quote: `"Your time is limited, so don’t waste it living someone else’s life."`,
    writer: `– Steve Jobs`
}, {
    quote: `"In order to write about life first you must live it."`,
    writer: `– Ernest Hemingway`
}, {
    quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
    writer: `– Soren Kierkegaard`
}, {
    quote: `"The unexamined life is not worth living."`,
    writer: `– Socrates`
}, {
    quote: `"Turn your wounds into wisdom."`,
    writer: `– Oprah Winfrey`
}, {
    quote: `"The purpose of our lives is to be happy."`,
    writer: `- Dalai Lama`
}, {
    quote: `"Live for each second without hesitation."`,
    writer: `- Elton John`
}, {
    quote: `" life is simply amazing we intend to make it complicated"`,
    writer: `- purnima mahto`
},{
    quote: `"Don’t walk in front of me… I may not follow
           Don’t walk behind me… I may not lead
           Walk beside me… just be my friend"`,
    writer: `– Albert Camus`

} ,{
    quote: `" If you tell the truth, you don't have to remember anything"`,
    writer: `- Mark Twain`

},{
     quote: `"A friend is someone who knows all about you and still loves you."`,
    writer: `- Elbert Hubbard`
},{
     quote: `"To live is the rarest thing in the world. Most people exist, that is all"`,
    writer: `- Oscar Wilde`
},{
    quote: `"Live as if you were to die tomorrow. Learn as if you were to live forever."`,
    writer: `-  Mahatma Gandhi` 
},{
    quote: `"It is better to be hated for what you are than to be loved for what you are not."`,
    writer: `-  Andre Gide, Autumn Leaves` 
},]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

    
    writer.innerHTML = quotes[random].writer;
})
