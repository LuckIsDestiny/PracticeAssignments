const articles = Array.from({ length: 15 }, (_, i) => ({
  title: `Article ${i + 1}`,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
}));

let index = 0;
const batch = 5;
const container = document.getElementById('articles');

function loadArticles() {
  const slice = articles.slice(index, index + batch);
  slice.forEach(a => {
    const div = document.createElement('div');
    div.classList.add('article');
    div.innerHTML = `<h2>${a.title}</h2><p>${a.content}</p>`;
    container.appendChild(div);
  });
  index += batch;
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    if (index < articles.length) {
      loadArticles();
    }
  }
});

loadArticles();