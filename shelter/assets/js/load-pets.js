const loadPets = () => {
  let pets = document.querySelector('.pets');

  const getData = () => {
    fetch('./assets/js/pets.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createPets(data);
    });
  }

  getData();

  const createPets = (data) => {

    let randomNumber = [];
  
    while (randomNumber.length !== 9) {
      let rand = Math.floor(Math.random() * 8);
      //if (!randomNumber.includes(rand)) {
        randomNumber.push(rand);
      //}
    }
  
    for (let i = 0; i < 8; i++) {
  
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
}

export default loadPets