const loadSlider = async () => {
  const pets = document.querySelector('.pets');
  const buttonRight = document.querySelector('.slide-right');
  const buttonLeft = document.querySelector('.slide-left');

  const windowWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
  );

  let visibleElements = 3;

  if (windowWidth < 1280) {
    visibleElements = 2;
  }
  if (windowWidth < 768) {
    visibleElements = 1;
  }

  const getPets = async () => {
    let query = await fetch('./assets/js/pets.json');
    let data = await query.json();
    return data
  }

  let allPets = await getPets();

  const createPet = (arr, i, insert = 'after') => {
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

    if (insert === 'after') {
      pets.append(petDiv);
    } else if (insert === 'before') {
      pets.prepend(petDiv);
    }
  }

  const createSlider = (data, insert = 'after', generator = 'new') => {

    if (generator === 'new') {
      let arr = [];

      for (let i = 0; i < visibleElements * 3; i++) {
        let randomNumber = new Set();

        while (randomNumber.size < 8) {
          randomNumber.add(Math.floor(Math.random() * 8));
        }

        randomNumber = [...randomNumber];
        for (let j = 0; j < 8; j++) {
          arr.push(data[randomNumber[j]]);
        }
      }

      for (let i = 0; i < visibleElements * 3; i++) {
        createPet(arr, i);
      }
    } else if (generator === 'add') {
      let arr = [];

      for (let i = 0; i < 3; i++) {
        let randomNumber = new Set();

        while (randomNumber.size < 8) {
          randomNumber.add(Math.floor(Math.random() * 8));
        }

        randomNumber = [...randomNumber];
        for (let j = 0; j < 8; j++) {
          arr.push(data[randomNumber[j]]);
        }
      }

      for (let i = 0; i < visibleElements; i++) {
        if (insert === 'after') {
          createPet(arr, i);
        } else if (insert === 'before') {
          createPet(arr, i, 'before');
        }
      }
    }
  }

  createSlider(allPets);

  const deleteSliderItemsStart = () => {
    pets.removeEventListener('transitionend', deleteSliderItemsStart);
    pets.classList.add('no-transition');
    pets.classList.remove('right');
    createSlider(allPets, 'after', 'add');
    for (let i = 0; i < visibleElements; i++) {
      pets.removeChild(pets.childNodes[i]);
    }
  }

  const deleteSliderItemsEnd = () => {
    pets.removeEventListener('transitionend', deleteSliderItemsEnd);
    pets.classList.add('no-transition');
    pets.classList.remove('left');
    createSlider(allPets, 'before', 'add');
    for (let i = visibleElements * 2; i < visibleElements * 3; i++) {
      pets.removeChild(pets.childNodes[i]);
    }
  }

  buttonRight.addEventListener('click', () => {
    pets.classList.add('right');
    pets.classList.remove('no-transition');
    pets.addEventListener('transitionend', deleteSliderItemsStart);
  })

  buttonLeft.addEventListener('click', () => {
    pets.classList.add('left');
    pets.classList.remove('no-transition');
    pets.addEventListener('transitionend', deleteSliderItemsEnd);
  })
}

export default loadSlider