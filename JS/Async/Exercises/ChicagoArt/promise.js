const mount = document.getElementById('mount')

//Art Institute of Chicago API
const AIC = 'https://api.artic.edu/api/v1/artworks'

//international image interoperability framework
const IIIF = (imageID) =>  `https://www.artic.edu/iiif/2/${imageID}/full/843,/0/default.jpg`

// 1. Get the image_id from AIC
// 2. Get the image link from IIIIF

const loadImg = (imageURL, fragment) =>{  
  const img = document.createElement('img')
  const div = document.createElement('div')
  img.src = imageURL
  div.appendChild(img);
  fragment.appendChild(div);
}

const displayImages = (json) => {
  const imgsFragment = json.data.reduce((fragment, artwork) => {
    if(artwork.image_id) loadImg(IIIF(artwork.image_id), fragment)
    return fragment;
  }, new DocumentFragment())
  mount.appendChild(imgsFragment)
}

fetch(`${AIC}?page=1&limit=100&fields=image_id`)
  .then( response =>{
    if(!response.ok) throw new Error(response.status)
    return response.json();
  })
  .then( json => {
    displayImages(json);
  })
  .catch( e => console.error(e))