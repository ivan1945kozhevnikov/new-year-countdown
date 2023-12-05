const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();
//Возвращает текущий год
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
//Возваращает дату Нового Года

const updateCountdown = () => {
  const currentTime = new Date();
  //Текущая дата
  const difference = newYearTime - currentTime;
  //Разница дат в миллисекундах

  const differenceDays = Math.floor(difference / 1000 / 60 / 60 / 24);
  //Разница дней
  const differenceHours = Math.floor(difference / 1000 / 60 / 60) % 24;
  //Разница часов
  const differenceMinutes = Math.floor(difference / 1000 / 60) % 60;
  //Разница мигут
  const differenceSeconds = Math.floor(difference / 1000) % 60;
  //Разница секунд

  days.innerHTML = differenceDays;
  //Отрисовать разницу дней
  hours.innerHTML =
    differenceHours < 10 ? '0' + differenceHours : differenceHours;
  //Отрисовать разницу часов
  //Если меньше 10, добавить 0 в начало
  minutes.innerHTML =
    differenceMinutes < 10 ? '0' + differenceMinutes : differenceMinutes;
  //Отрисовать разницу минут
  //Если меньше 10, добавить 0 в начало
  seconds.innerHTML =
    differenceSeconds < 10 ? '0' + differenceSeconds : differenceSeconds;
  //Отрисовать разницу секунд
  //Если меньше 10, добавить 0 в начало
};
//Обновление обратного отсчета

setInterval(updateCountdown, 1000);
//Обновлять каждые 1000 миллисекунд
