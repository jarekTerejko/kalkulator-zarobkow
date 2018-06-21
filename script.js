const content = document.querySelector('.content');

const btn = document.querySelector('.btn');

const displayMsg = document.createElement('p');
content.appendChild(displayMsg);
displayMsg.style.display = 'none';

const loader = document.createElement('div');
loader.classList.add('loader');
content.appendChild(loader);
loader.style.display = 'none';

function showLoader() {
    loader.style.display = 'block';

    if (displayMsg.style.display === 'block') {
        displayMsg.style.display = 'none';
    }
}

function calculateSalary(hours, money) {

    return hours * money;

}

function delayMsgShow () {
    setTimeout(() => {
        loader.style.display = 'none';
        displayMsg.style.display = 'block';
    }, 2000);
}


btn.addEventListener('click', function (e) {
    e.preventDefault();

    const inputHours = document.querySelector('#hours').value;
    console.log(inputHours);

    const inputHourlyRate = document.querySelector('#money').value;
    console.log(inputHourlyRate);

    const salary = calculateSalary(inputHours, inputHourlyRate);
    console.log(salary);

    showLoader();

    if (inputHours === '' || inputHourlyRate === '') {
        displayMsg.className = 'text-danger';
        displayMsg.textContent = 'Uzupełnij oba pola, aby poznać kwotę.';

    } else if (salary >= 3000) {

        displayMsg.className = 'text-success';
        displayMsg.textContent = `Brawo! Zarobiłeś ${salary} zł. Możesz kupić żonie nową sukienke :)`;

    } else if (salary >= 2500) {

        displayMsg.className = 'text-primary';
        displayMsg.textContent = `Zarobiełeś ${salary} zł. Nie jest źle. Bez niespodziewanych wydatków spokojnie przeżyjesz ten miesiąc.`;

    } else if (salary < 2500 && salary > 0) {

        displayMsg.className = 'text-warnig';
        displayMsg.textContent = `Uuu... Twoja wypłata wynosi tylko ${salary} zł. W tym miesiącu nie poszalejesz.`;

    } else if (salary === 0) {

        displayMsg.className = 'text-info';
        displayMsg.textContent = `Prawdopodobnie rzuciłeś pracę i szukasz nowej, ponieważ twoja wypłata wynosi ${salary} zł.`;

    }

    delayMsgShow();

});

