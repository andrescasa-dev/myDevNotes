//============================================================ using only one set of arguments============================================================//
// consiguiendo los atributes para las etiquetas HTML
const attributesToString = (obj = {}) => {
  const ENTRIES = Object.entries(obj);
  const ATTRS = [];
  for (let i = 0; i < ENTRIES.length; i += 1) {
      const AUX = ENTRIES[i];
      const ATTR = AUX[0];
      const VALUE = AUX[1];
      ATTRS.push(`${ATTR}="${VALUE}"`);
  }
  return ATTRS.join("");
};

// Creando etiquetas html con atributos
const createTagAttr = obj => (content = "") => {
  const { tag, attr } = obj;
  return `
    <${tag}${attr ? ` ${attributesToString(attr)}` : ""}>
      ${content}
    </${tag}>`;
};

// Generando tag de maner dinamica
const createTag = (tag) => {
  const TAG = (typeof tag === "string")
      ? createTagAttr({ tag })
      : createTagAttr(tag);
  return TAG;
};

let result = createTag({tag:"h1", attr:{"class": "Success"}})("Galletas mmmm");
console.log(result);

//============================================================ using only one set of arguments============================================================//
function createTagAttr(obj, content = ""){
  const { tag, attr } = obj;
  return `
    <${tag}${attr ? ` ${attributesToString(attr)}` : ""}>
      ${content}
    </${tag}>`;
}
function createTag(tag, content){
  const TAG_string = (typeof tag === "string")
      ? createTagAttr({ tag }, content) 
      : createTagAttr(tag, content);
  return TAG_string;
}

let result2 = createTag({tag:"h1", attr:{"class": "Success"}}, "Galletas mmmm");// <h1 class="success"> Galletas mmm</h1>
let result3 = createTag("h1", "Galletas mmmm"); // <h1> Galletas mmm</h1>
console.log(result2);
console.log(result3);

//============================================================ Example============================================================//


const toSlug__row = input => encodeURIComponent(
  input.split(' ')
    .map(str => str.toLowerCase())
    .join('-')
);

const toSlug__composed = pipe(
  split(' '),
  map(toLowerCase),
  join('-'),
  encodeURIComponent
);


