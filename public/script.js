let nume = document.querySelector(".nume");

const btn = document.getElementById("btn");
const container = document.querySelector(".imageContainer");

btn.addEventListener("click", () => {
  getData();
  getImage();
});

const getData = async () => {
  const data = await fetch("/dinoname");
  const response = await data.json();
  let numeDino = response.join(" ");
  console.log(numeDino);
  nume.innerHTML = numeDino;
};

const getImage = async () => {
  const data = await fetch("/dinoimage");
  const response = await data.json();

  let dinoImage =
    response.value[Math.floor(Math.random() * response.value.length)];
  let dinoImgUrl = dinoImage.thumbnailUrl;

  if(document.querySelector('#dino1')){
    document.querySelector('#dino1').remove()  
}

  let img = document.createElement("img");
  img.src = dinoImgUrl;
  img.id = 'dino1'
  container.appendChild(img);
};
