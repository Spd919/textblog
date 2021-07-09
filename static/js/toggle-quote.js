function toggleDisplayQuote() {
  var quote_elem = document.getElementById("quote");
  if (quote_elem.style.display === "none") {
    quote_elem.style.setProperty("display", "flex", "important");
  } else {
    quote_elem.style.setProperty("display", "none", "important");
  }
}
function toggleDisplayArticle() {
    var articles_elem = document.getElementById("articles");
    if (articles_elem.style.display === "none") {
      articles_elem.style.setProperty("display", "flex", "important");
    } else {
      articles_elem.style.setProperty("display", "none", "important");
    }
}

function change() {
  const elements = document.querySelectorAll(".sci-quote");
  for (let element of elements) {
    element.classList.toggle("transformed-state");
  }
}

window.addEventListener('load', (event) => {
    window.setTimeout(function() {
        change();
      }, 2000);
});