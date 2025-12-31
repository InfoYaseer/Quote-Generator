const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiUrl = "https://api.quotable.io/random";

async function getquote(url) {
    const response = await fetch(url);
    const data = await response.json();

    quote.textContent = data.content;
    author.textContent = data.author;
}

getquote(apiUrl);

function tweet() {
    const text = `${quote.textContent} — ${author.textContent}`;
    window.open(
        `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`,
        "Tweet Window",
        "width=600,height=300"
    );
}
