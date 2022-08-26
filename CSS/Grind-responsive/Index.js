const URL = 'https://dog.ceo/api/breeds/image/random';
const mount = document.querySelector('#mount');

async function click(e){
  appendImg(await getImgURL());
}

function appendImg(url){
  const img = document.createElement('img');
  img.src = url;
  mount.appendChild(img);
}

async function getImgURL() {
  const response = await fetch(URL);
  const data = await response.json();
  return data.message;
}


document.addEventListener('click', click);