import 'regenerator-runtime';
import '../styles/styles.css';
import '../styles/responsive.css';
import data from '../DATA.json';


document.addEventListener('DOMContentLoaded', () => {
  const listrestElement = document.querySelector('.list-place');
  const cardElement = document.querySelector('.card-grid');
  const restaurants = data.restaurants;
  restaurants.forEach(cafetaria => {
    cardElement.innerHTML += `
        <article class="card-item">
        <img class="card-item__thumbnail"
             src="${cafetaria.pictureId}"
             alt="${cafetaria.name} restaurant" tabindex="0">
        <div class="card-item__content">
        <h1 class="card-item__title" tabindex="0">${cafetaria.name}</h1>  
        <p class="card-item_city" tabindex="0">
          located in ${cafetaria.city}<span class=txt-rating> with rating </span><span class=rating>&#9733;</span>${cafetaria.rating}
          </p>
          <p class="card-item__description" tabindex="0">${cafetaria.description}</p>
          <button class="card-item__btn_read"> Read More </button>
        </div>
      </article>
        `
    listrestElement.appendChild(cardElement);
  })

});

const menuRestaurant = document.querySelector('#menu');
const jumbotron = document.querySelector('.jumbotron');
const main = document.querySelector('main');
const menuBar = document.querySelector('.menubar');


menuRestaurant.addEventListener('click', function (event) {
  menuBar.classList.toggle('open');
  event.stopPropagation();
});

jumbotron.addEventListener('click', function () {
  menuBar.classList.remove('open');
});

main.addEventListener('click', function () {
  menuBar.classList.remove('open');
});
