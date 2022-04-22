const loadSlider = () => {
  let pets = document.querySelector('.pets');

  const getData = () => {
    fetch('./assets/js/pets.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createSlider(data);
    });
  }

  getData();

  const createSlider = (data) => {

    let randomNumber = [];
  
    while (randomNumber.length !== 9) {
      let rand = Math.floor(Math.random() * 8);
      //if (!randomNumber.includes(rand)) {
        randomNumber.push(rand);
      //}
    }
    let buttonleft = document.createElement('button');
    buttonleft.className = 'slide-left';
    pets.append(buttonleft);

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

    let buttonRight = document.createElement('button');
    buttonRight.className = 'slide-right';
    pets.append(buttonRight);
  }
}

export default loadSlider