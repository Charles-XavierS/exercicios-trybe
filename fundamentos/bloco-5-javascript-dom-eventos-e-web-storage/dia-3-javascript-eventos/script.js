function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


// exercicio 1

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function diasDoMes() {
  let listaDosDias = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let dia = dezDaysList[index];
    let liDeDias = document.createElement('li');

    if (dia === 24 | dia === 31) {
      liDeDias.className = 'day holiday';
      liDeDias.innerHTML = dia;
      listaDosDias.appendChild(liDeDias);
    } else if (dia === 4 | dia === 11 | dia === 18) {
      liDeDias.className = 'day friday';
      liDeDias.innerHTML = dia;
      listaDosDias.appendChild(liDeDias);
    } else if (dia === 25) {
      liDeDias.className = 'day holiday friday';
      liDeDias.innerHTML = dia;
      listaDosDias.appendChild(liDeDias);
    } else {
      liDeDias.innerHTML = dia;
      liDeDias.className = 'day';
      listaDosDias.appendChild(liDeDias);
    }
  };
};
diasDoMes();

// exercicio 2

function botao(buttonName) {
  let classeBotao = document.querySelector('.buttons-container');
  let elementoBotao = document.createElement('button');
  let idBotao = 'btn-holiday';

  elementoBotao.innerHTML = buttonName;
  elementoBotao.id = idBotao;
  classeBotao.appendChild(elementoBotao);
};

botao('Feriados');

// exercicio 3

function feriados() {
  let btnHoliday = document.querySelector('#btn-holiday');
  let holiday = document.querySelectorAll('.holiday')
  let corReversa = 'rgb(238,238,238)';
  let cor = 'green';

  btnHoliday.addEventListener('click', function() {
    for (let index = 0; index < holiday.length; index += 1) {
      if (holiday[index].style.backgroundColor === cor) {
        holiday[index].style.backgroundColor = corReversa;
      } else {
        holiday[index].style.backgroundColor = cor;
      }
    }
  })
};

feriados();

// exercicio 4

function botaoSexta(nomeBotao) {
  let buttonContainer = document.querySelector('.buttons-container');
  let novoBotao = document.createElement('button');
  let btnFriday = 'btn-friday';

  novoBotao.innerHTML = nomeBotao;
  novoBotao.id = btnFriday;
  buttonContainer.appendChild(novoBotao);
};

botaoSexta('Sexta-feira');

// exercicio 5

function sextasFeiras(arraySextas) {
  let botaoSexta = document.querySelector('#btn-friday');
  let friday = document.getElementsByClassName('friday');
  let fraseSextaFeira = 'TGIF';

  botaoSexta.addEventListener('click', function() {
  for (let index = 0; index < friday.length; index += 1) {
    if (friday[index].innerHTML !== fraseSextaFeira) {
        friday[index].innerHTML = fraseSextaFeira;
    } else {
        friday[index].innerHTML = arraySextas[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
sextasFeiras(dezFridays);

// exercicio 6

function mouseOver() {
  let mouseDias = document.querySelector('#days');

  mouseDias.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '1000';
  })
};

function mouseOut() {
  let mouseDias = document.querySelector('#days');

  mouseDias.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

mouseOver();
mouseOut();