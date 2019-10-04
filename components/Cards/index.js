// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let topics2 = document.querySelector('.cards-container');

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(results => {
    return results.data.articles;
  })
  .then(results2 => {
    console.log(results2);
    results2.bootstrap.forEach(e => {
      topics2.appendChild(createCard(e));
    })
    results2.javascript.forEach(e => {
      topics2.appendChild(createCard(e));
    })
    results2.jquery.forEach(e => {
      topics2.appendChild(createCard(e));
    })
    results2.node.forEach(e => {
      topics2.appendChild(createCard(e));
    })
    results2.technology.forEach(e => {
      topics2.appendChild(createCard(e));
    })
  })


createCard = (obj => {
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const name = document.createElement('span');

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  
  headline.textContent = obj.headline;
  img.src = obj.authorPhoto;
  name.textContent = obj.authorName;


  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  imgContainer.appendChild(name);

  return card;

})