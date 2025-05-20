const image = document.querySelector("img");
image.addEventListener("click", () => {
 
  image.src = "https://img.freepik.com/photos-premium/petit-chaton-orange-yeux-bleus-couverture-brune_731790-64653.jpg?semt=ais_hybrid&w=740";
  image.alt = "Petit mimi";
});

const hoverTitle = document.querySelector(".title");
hoverTitle.addEventListener("mouseover", () => {

  hoverTitle.setAttribute("style", " color: lightblue;");
})

const leaveTitle = document.querySelector(".title");
hoverTitle.addEventListener("mouseleave", () => {

  hoverTitle.setAttribute("style", " color: black;");
})


