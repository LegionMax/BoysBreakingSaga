let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
     menu.classList.toggle('bx-x');
     navlist.classList.toggle('open');
};

// scroll to the section
function scrollToGallery() {
    var gallery = document.getElementById("Gallery");
  
    gallery.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToStars() {
    var gallery = document.getElementById("Stars");
  
    gallery.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToQuotes() {
    var gallery = document.getElementById("Quotes");
  
    gallery.scrollIntoView({ behavior: "smooth" });
  }


const sr = ScrollReveal ({
     distance: '65px',
     duration: 2600,
     delay: 450,
     reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});

// quote generator

document.getElementById("generate-btn").addEventListener("click", generateQuote);

function generateQuote() {
    fetch("quotes.json")
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const quote = data[randomIndex];
            displayQuote(quote);
        })
        .catch(error => console.error("Error fetching quotes:", error));
}

function displayQuote(quote) {
    const quoteTextElement = document.getElementById("quote-text");
    quoteTextElement.textContent = `"${quote.quote}" - ${quote.character}`;
}

// Credit section

function toggleCredit() {
    var creditSection = document.getElementById("creditSection");
    creditSection.style.display = (creditSection.style.display === "block") ? "none" : "block";
}


