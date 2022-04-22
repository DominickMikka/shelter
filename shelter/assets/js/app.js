let mobileMenuButtonOpen = document.querySelector('#mobile-menu-button-open');
let mobileMenuButtonClose = document.querySelector('#mobile-menu-button-close');

let topMenu = document.querySelector('#top-menu');
let pets = document.querySelector('.slider');
let body = document.querySelector('body');

let overflowDiv = document.createElement('div');
overflowDiv.className = 'overflow';
document.body.append(overflowDiv);

const buttonSlideLeft = document.querySelector('.slide-left');
const buttonSlideRight = document.querySelector('.slide-right');

const getData = (position) => {
  fetch('./assets/js/pets.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    createSlider(data, position);
  });
}

getData();

buttonSlideLeft.addEventListener('click', () => {

});

buttonSlideRight.addEventListener('click', () => {

});

pets.addEventListener('transitionend', () => {

});

body.addEventListener('click', (e) => {
  if (e.target.closest('#close-modal')) {
    body.removeChild(document.querySelector('.close-modal'));
    body.removeChild(document.querySelector('.modal'));
    body.classList.toggle('no-scroll');
  }

  if (e.target.closest('.close-modal')) {
    body.removeChild(document.querySelector('.close-modal'));
    body.removeChild(document.querySelector('.modal'));
    body.classList.toggle('no-scroll');
  }
});

pets.addEventListener('click', (event) => {

  let target = event.target.closest('div.pet');

  let modalClosePet = document.createElement('div');
  modalClosePet.className = 'close-modal';

  let modalPet = document.createElement('div');
  modalPet.className = 'modal';

  let modalPetLeft = document.createElement('div');

  let modalPetImg = document.createElement('img');
  modalPetImg.src = target.getAttribute('data-image');

  let modalPetRight = document.createElement('div');

  let modalPetH2 = document.createElement('h2');
  modalPetH2.innerHTML = target.getAttribute('data-name');

  let modalPetSubtitle = document.createElement('div');
  modalPetSubtitle.className = 'modal-subtitle';
  modalPetSubtitle.innerHTML = target.getAttribute('data-type') + ' - ' + target.getAttribute('data-breed');

  let modalPetText = document.createElement('p');
  modalPetText.innerHTML = target.getAttribute('data-description');

  let modalPetAge = document.createElement('div');
  modalPetAge.className = 'modal-age';
  modalPetAge.innerHTML = '<strong>Age:</strong> ' + target.getAttribute('data-age');

  let modalPetInoculations = document.createElement('div');
  modalPetInoculations.className = 'modal-inoculations';
  modalPetInoculations.innerHTML = '<strong>Inoculations:</strong> ' + target.getAttribute('data-inoculations');

  let modalPetDiseases = document.createElement('div');
  modalPetDiseases.className = 'modal-diseases';
  modalPetDiseases.innerHTML = '<strong>Diseases:</strong> ' + target.getAttribute('data-diseases');

  let modalPetParasites = document.createElement('div');
  modalPetParasites.className = 'modal-parasites';
  modalPetParasites.innerHTML = '<strong>Parasite:</strong> ' + target.getAttribute('data-parasites');

  modalPetLeft.append(modalPetImg);

  modalPetRight.append(modalPetH2);
  modalPetRight.append(modalPetSubtitle);
  modalPetRight.append(modalPetText);
  modalPetRight.append(modalPetAge);
  modalPetRight.append(modalPetInoculations);
  modalPetRight.append(modalPetDiseases);
  modalPetRight.append(modalPetParasites);

  let modalPetButton = document.createElement('button');
  modalPetButton.id = 'close-modal';

  modalPet.append(modalPetLeft);
  modalPet.append(modalPetRight);
  modalPet.append(modalPetButton);

  body.append(modalClosePet);
  body.append(modalPet);
  body.classList.toggle('no-scroll');
});

const createSlider = (data, position) => {

  let randomNumber = [];

  while (randomNumber.length !== 9) {
    let rand = Math.floor(Math.random() * 8);
    //if (!randomNumber.includes(rand)) {
      randomNumber.push(rand);
    //}
  }

  for (let i = 0; i < 3; i++) {

    let petDiv = document.createElement('div');
    petDiv.className = 'pet';
    petDiv.setAttribute('data-name', data[i].name);
    petDiv.setAttribute('data-image', data[i].img);
    petDiv.setAttribute('data-type', data[i].type);
    petDiv.setAttribute('data-breed', data[i].breed);
    petDiv.setAttribute('data-description', data[i].description);
    petDiv.setAttribute('data-age', data[i].age);
    petDiv.setAttribute('data-inoculations', data[i].inoculations);
    petDiv.setAttribute('data-diseases', data[i].diseases);
    petDiv.setAttribute('data-parasites', data[i].parasites);
    let petImg = document.createElement('img');
    petImg.src = data[i].img;
    petImg.alt = data[i].name;

    let petSpan = document.createElement('span');
    petSpan.innerHTML = data[i].name;

    let petButton = document.createElement('button');
    petButton.innerHTML = 'Learn more';

    petDiv.append(petImg);
    petDiv.append(petSpan);
    petDiv.append(petButton);
    pets.append(petDiv);
  }
}

mobileMenuButtonOpen.addEventListener('click', () => {
  topMenu.style.display = 'flex';
  mobileMenuButtonOpen.style.transform = 'rotate(90deg)';
  mobileMenuButtonClose.style.transform = 'rotate(90deg)';
  document.body.style.overflowY= 'hidden';
  overflowDiv.style.display = 'block';
  topMenu.style.right = '0px';
});

mobileMenuButtonClose.addEventListener('click', () => {
  mobileMenuButtonOpen.style.transform = 'rotate(0deg)';
  mobileMenuButtonClose.style.transform = 'rotate(0deg)';
  topMenu.style.right = '-320px';
  overflowDiv.style.display = 'none';
  document.body.style.overflowY= 'auto';
});

overflowDiv.addEventListener('click', () => {
  mobileMenuButtonOpen.style.transform = 'rotate(0deg)';
  mobileMenuButtonClose.style.transform = 'rotate(0deg)';
  topMenu.style.right = '-320px';
  overflowDiv.style.display = 'none';
  document.body.style.overflowY= 'auto';
});