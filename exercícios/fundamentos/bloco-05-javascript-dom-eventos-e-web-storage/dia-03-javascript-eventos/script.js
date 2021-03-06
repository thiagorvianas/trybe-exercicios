let holidaysButton = document.createElement('button');





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

// EXERCÍCIO - 01

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function addDays() {
    let dayList = document.getElementById('days');
    for (let dia of dezDaysList) {
        let dayItem = document.createElement('li');
        dayItem.innerText = dia;
        dayList.appendChild(dayItem).className += 'day ';
        if (dia === 24 || dia === 25 || dia === 31) {
            dayList.appendChild(dayItem).className += 'holiday';
        }
        if (dia === 4 || dia === 11 || dia === 18 || dia === 25) {
            dayList.appendChild(dayItem).className += ' friday';
        }
    }
}

addDays();

// EXERCÍCIO 02

function holidaysAlert(feriados) {
    holidaysButton.innerText = feriados;
    holidaysButton.id = 'btn-holiday';
    let buttonsContainer = document.querySelector('.buttons-container');
    buttonsContainer.appendChild(holidaysButton);
}

holidaysAlert('Feriados');


// EXERCÍCIO 03

function holidayClick() {
    const hldButton = document.getElementById('btn-holiday');
    hldButton.addEventListener('click', function() {
        let holidaysToChange = document.getElementsByClassName('holiday');
        for (let hlds of holidaysToChange) {
            hlds.style.backgroundColor = 'rgb(0, 255, 0)';
        }
    // holidaysToChange.addEventListener('click', rgb(238,238,238));
    });
}

holidayClick();