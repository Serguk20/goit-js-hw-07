import { galleryItems } from './gallery-items.js';
// Change code below this line




const gallery = document.querySelector(".gallery");
const galleryLi = galleryItems
  .map(({ preview, original, description }) => `<li class="gallery_item" id="preview">
    <a  href = "${original}" class ="gallery_link">
      <img src="${preview}" data-source="${original}" alt="${description}" class ="gallery_image"/>   
   </a>
 </li>`)

 .join("")

gallery.insertAdjacentHTML('beforeend', galleryLi);





const lightboxModal = Simplelightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});


console.log(galleryItems);




/*
const galleryItems = [
  { smallImage: "small-image1.jpg", largeImage: "large-image1.jpg", altText: "Image 1" },
  { smallImage: "small-image2.jpg", largeImage: "large-image2.jpg", altText: "Image 2" },
  // додаткові елементи галереї
];

function createGalleryItem(item) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");
  
  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.largeImage;
  
  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.smallImage;
  image.alt = item.altText;
  
  link.appendChild(image);
  galleryItem.appendChild(link);
  
  return galleryItem;
}

function renderGallery() {
  const gallery = document.querySelector("ul.gallery");
  
  for (const item of galleryItems) {
    const galleryItem = createGalleryItem(item);
    gallery.appendChild(galleryItem);
  }
}

renderGallery();



function initializeLightbox() {
  const gallery = document.querySelector("ul.gallery");
  const lightbox = new SimpleLightbox(gallery, { captions: true, captionPosition: "bottom", captionDelay: 250 });
}

renderGallery();
initializeLightbox();









console.log(galleryItems);






/*
document.addEventListener('DOMContentLoaded', function() {
   new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionsDelayTime: 250,
      captionsPosition: 'bottom'
   });
});






const instance = basicLightbox.create(`
   // <h1>Dynamic Content</h1>
   // <p>You can set the content of the lightbox with JS.</p>
`)

console.log(instance);
instance.show();
*/