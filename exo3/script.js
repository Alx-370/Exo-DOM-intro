const bearsPictures = [
    "https://placebear.com/500/279",
    "https://placebear.com/500/280",
    "https://placebear.com/500/300",
    "https://placebear.com/500/302",
    "https://placebear.com/500/305",
];

const allSource = document.querySelectorAll('img');

const newarray = Array.from(allSource);
newarray.forEach((element, i) => { element.src = bearsPictures[i]});
