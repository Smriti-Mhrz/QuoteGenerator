var icon= document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="images/sun.svg";
    }
    else{
        icon.src="images/half-moon.svg";
    }
}
const quotes=[
    {
        id:"1",
        author:"Aldo Cammarota",
        quote:"If you want to be sure that you never forget your wife's birthday, just try forgettig it once",
        category:"funny"
    },
    {
        id:"2",
        author:"Phyllis Diller",
        quote:"Never go to bed mad. Stay up and fight",
        category:"funny"
    },
    {
        id:"3",
        author:"Martin Luther King Jr",
        quote:"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that",
        category:"love"
    },
    {
        id:"4",
        author:"Andre Gide",
        quote:"It is better to be hated for what you are than to be loved for what you are not",
        category:"love"
    },
    {
        id:"5",
        author:"Audrey Hepburn",
        quote:"Nothing is impossible, the word itself says I am possible",
        category:"motivational"
    },
    {
        id:"6",
        author:"Vince Lombardi",
        quote:"Perfection is not attainable, but if we chase perfection we can catch excellence",
        category:"motivational"
    },
    {
        id:"7",
        author:"E.M.Forster",
        quote:"What is the good of your stars and trees, your sunrise and the wind, if they do not enter into our daily lives",
        category:"nature"
    },
    {
        id:"8",
        author:"Claude Monet",
        quote:"My wish is to stay always like this, living quietly in a corner of nature",
        category:"nature"
    },
]

// generating random quotes
const quoteContainer = document.getElementById("quote_container");
const quoteElement = document.getElementById("quote_list");
const authorElement = document.getElementById("quote_author");
const generateBtn = document.getElementById("generate_btn");
generateBtn.addEventListener("click", ()=>{
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = `"${randomQuote.quote}"`;
    authorElement.textContent = `- ${randomQuote.author}`;
});


// previous and next button quotes
let currentIndex = 0;
const prevBtn = document.getElementById("prev_btn");
const nextBtn = document.getElementById("next_btn");

function displayQuote(index){
    const currentQuote = quotes[index];
    quoteElement.textContent =`"${currentQuote.quote}"`;
    authorElement.textContent = `- ${currentQuote.author}`;
}

prevBtn.addEventListener("click", ()=>{
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;    
    displayQuote(currentIndex);
});

nextBtn.addEventListener("click",()=>{
    currentIndex = ((currentIndex + 1) % quotes.length);
    displayQuote(currentIndex);
});

displayQuote(currentIndex);

// Font-size increase and decrease
const incFontBtn = document.getElementById("increase_font");
const decFontBtn = document.getElementById("decrease_font");

incFontBtn.addEventListener("click", () => {
    const currentFontSize = parseInt(window.getComputedStyle(quoteElement).fontSize);
    quoteElement.style.fontSize = `${currentFontSize + 2}px`; 
    authorElement.style.fontSize = `${currentFontSize - 2}px`;
  });
decFontBtn.addEventListener("click", () => {
    const currentFontSize = parseInt(window.getComputedStyle(quoteElement).fontSize);
    quoteElement.style.fontSize = `${currentFontSize - 2}px`; 
    authorElement.style.fontSize = `${currentFontSize - 4}px`;
  });


//   categorywise quotes display
const categorySelect = document.getElementById("category_select");
function displayCategoryQuote(quote) {
  quoteElement.textContent = `"${quote.quote}"`;
  authorElement.textContent = `- ${quote.author}`;
}

categorySelect.addEventListener("change", () => {
  const selectedCategory = categorySelect.value;
  const filteredQuotes = quotes.filter(quote => quote.category === selectedCategory);
  if (filteredQuotes.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    const randomQuote = filteredQuotes[randomIndex];
    displayCategoryQuote(randomQuote);
  } else {
    quoteContainer.style.display = "none";
  }
});