import { galleryItems } from './gallery-items.js';
// Change code below this line



const container = document.querySelector("ul");
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markup);
container.addEventListener("click", handlePhoto);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => {
            return `<li class="gallery_item" id="preview">
        <a href="${original}" class="gallery_link">
        <img src="${preview}" data-source="${original}" alt="${description}" class="gallery_image"/>
        </a>
        </li>`;
        })
        .join("");
}

function handlePhoto(event) {
    if (event.target === event.currentTarget) {
        return;
    }

    event.preventDefault();

    const modal = basicLightbox.create(
        `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`
    );
    modal.show();
}

console.log(galleryItems);



/*
//  посилання на всі елементи галереї
const galleryItems = document.querySelectorAll('.gallery__item');

//  обробник події на кожен елемент галереї
galleryItems.forEach((item) => {
  const image = item.querySelector('.gallery__image');
  image.addEventListener('click', openModal);
});

// Відкриття модального вікна
function openModal(event) {
  event.preventDefault(); // Заборона  посилання

  const largeImageSrc = event.target.dataset.source;

  const modal = basicLightbox.create(`
    <img src="${largeImageSrc}" alt="Large image">
  `);

  modal.show();
}


console.log(galleryItems);





//const instance = basicLightbox.create(`
    //<h1>Dynamic Content</h1>
   // <p>You can set the content of the lightbox with JS.</p>
//`)

console.log(instance);
//instance.show();
*/
