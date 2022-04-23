const loadPets = async () => {

  const pets = document.querySelector('.pets');
  const firstPage = document.querySelector('.first-page');
  const previousPage = document.querySelector('.previous-page');
  const currentPage = document.querySelector('.current-page');
  const nextPage = document.querySelector('.next-page');
  const lastPage = document.querySelector('.last-page');

  const windowWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
  );

  console.log(windowWidth);

  let position = 0;
  let currentPageNumber = 1;
  let visibleElements = 8;

  let arr = [];

  if (windowWidth < 1280) {
    visibleElements = 6;
  }
  if (windowWidth < 768) {
    visibleElements = 3;
  }

  const getPets = async () => {
    let query = await fetch('./assets/js/pets.json');
    let data = await query.json();
    return data
  }

  let allPets = await getPets();

  const createPets = (data, newGenerator = true, position = 0) => {

  if (newGenerator) {
    for (let i = 0; i < 6; i++) {
      let randomNumber = new Set();

      while (randomNumber.size < 8) {
        randomNumber.add(Math.floor(Math.random() * 8));
      }

      randomNumber = [...randomNumber];
      for (let j = 0; j < 8; j++) {
        arr.push(data[randomNumber[j]]);
       }
    }
  }
  
    for (let i = position; i < position + visibleElements; i++) {
  
      let petDiv = document.createElement('div');
      petDiv.className = 'pet';
      petDiv.setAttribute('data-name', arr[i].name);
      petDiv.setAttribute('data-image', arr[i].img);
      petDiv.setAttribute('data-type', arr[i].type);
      petDiv.setAttribute('data-breed', arr[i].breed);
      petDiv.setAttribute('data-description', arr[i].description);
      petDiv.setAttribute('data-age', arr[i].age);
      petDiv.setAttribute('data-inoculations', arr[i].inoculations);
      petDiv.setAttribute('data-diseases', arr[i].diseases);
      petDiv.setAttribute('data-parasites', arr[i].parasites);
      let petImg = document.createElement('img');
      petImg.src = arr[i].img;
      petImg.alt = arr[i].name;
  
      let petSpan = document.createElement('span');
      petSpan.innerHTML = arr[i].name;
  
      let petButton = document.createElement('button');
      petButton.innerHTML = 'Learn more';
  
      petDiv.append(petImg);
      petDiv.append(petSpan);
      petDiv.append(petButton);
      pets.append(petDiv);
    }
  } 

  createPets(allPets);

  const deletePets = () => {
    let allPet = document.querySelectorAll('.pet');
    for (let i = 0; i < allPet.length; i++) {
      pets.removeChild(allPet[i]);
    }
  }

  nextPage.addEventListener('click', () => {
    deletePets();
    position += visibleElements;
    createPets(allPets, false, position);
    if (position === 48 - visibleElements) {
      nextPage.setAttribute('disabled', '');
      lastPage.setAttribute('disabled', '');
    } else {
      previousPage.removeAttribute('disabled');
      firstPage.removeAttribute('disabled');
    }
    currentPage.innerHTML = ++currentPageNumber;
  })

  previousPage.addEventListener('click', () => {
    deletePets();
    position -= visibleElements;
    createPets(allPets, false, position);
    if (position === 0) {
      previousPage.setAttribute('disabled', '');
      firstPage.setAttribute('disabled', '');
    } else {
      nextPage.removeAttribute('disabled');
      lastPage.removeAttribute('disabled');
    }
    currentPage.innerHTML = --currentPageNumber;
  })

  firstPage.addEventListener('click', () => {
    deletePets();
    position = 0;
    createPets(allPets, false, position);
    previousPage.setAttribute('disabled', '');
    firstPage.setAttribute('disabled', '');
    nextPage.removeAttribute('disabled');
    lastPage.removeAttribute('disabled');
    currentPageNumber = 1;
    currentPage.innerHTML = currentPageNumber;
  })

  lastPage.addEventListener('click', () => {
    deletePets();
    position = 48 - visibleElements;
    createPets(allPets, false, position);
    previousPage.removeAttribute('disabled');
    firstPage.removeAttribute('disabled');
    nextPage.setAttribute('disabled', '');
    lastPage.setAttribute('disabled', '');
    currentPageNumber = 48 / visibleElements;
    currentPage.innerHTML = currentPageNumber;
  })

}

export default loadPets