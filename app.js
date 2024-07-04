const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const period = document.querySelector('#period');
const day = document.querySelector('#day');
const date = document.querySelector('#date')
const month = document.querySelector('#month')
const year = document.querySelector('#year');

const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
const months = ['JAN','FEB','MARCH','APRIL','MAY','JUNE','JULY','AUG','JAN','SEP','OCT','NOV','DEC'];


function clock() {
    const time = new Date();

    let h = time.getHours();

    if (h >= 12) {
        hours.innerHTML = h === 12 ? 12 : h - 12;
        period.innerHTML = 'PM';
    } else {
        hours.innerHTML = h === 0 ? 12 : h;
        period.innerHTML = 'AM';
    }

    let m = time.getMinutes();
    minutes.innerHTML = m;

    let s = time.getSeconds()
    seconds.innerHTML = s;

    let d = time.getDay();
    days.forEach( (e, i,array) => {
        day.innerHTML = days[d];
    });

    let dt = time.getDate();
    date.innerHTML = dt;


    let mt = time.getMonth();
    months.forEach( (e, i,array) => {
        month.innerHTML = months[mt];
    });

    let y = time.getFullYear();
    year.innerHTML = y;
    
}

setInterval(clock, 1000);
