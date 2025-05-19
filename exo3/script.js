const bearsPictures = [
    "https://placebear.com/500/279",
    "https://placebear.com/500/280",
    "https://placebear.com/500/300",
    "https://placebear.com/500/302",
    "https://placebear.com/500/305",
  ];

    const allHeadings = document.querySelectorAll('img');

    const newarray = Array.from(allHeadings);
    

    const arraybears = newarray.forEach((element, i) => {
        return element.src = bearsPictures[i]
        
    });
    