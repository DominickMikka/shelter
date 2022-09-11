const modal = () => {
  let body = document.querySelector('body');
  let pets = document.querySelector('.pets');

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
}

export default modal