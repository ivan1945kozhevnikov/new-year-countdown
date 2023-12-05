const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();
//Возвращает текущий год
console.log(currentYear);

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
//Возваращает дату Нового Года
console.log(newYearTime);
