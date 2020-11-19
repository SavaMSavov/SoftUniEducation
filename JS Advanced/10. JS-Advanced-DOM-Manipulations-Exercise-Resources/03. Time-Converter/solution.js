function attachEventsListeners() {
  //обект със съотношение м/у единиците
  const ratios = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };
  //функция която конвертира

  function convert(value, from) {
    const inDays = value / ratios[from];
    return {
      days: inDays * ratios.days,
      hours: inDays * ratios.hours,
      minutes: inDays * ratios.minutes,
      seconds: inDays * ratios.seconds,
    };
  }
  //вземаме референции към всички полета и закачаме евентхендлър
  const days = document.querySelector(`#days`);
  const hours = document.querySelector(`#hours`);
  const minutes = document.querySelector(`#minutes`);
  const seconds = document.querySelector(`#seconds`);

  // определя контекста на бутона - стойност и м.единица
  document.querySelector(`#daysBtn`).addEventListener(`click`, convertDays);
  document.querySelector(`#hoursBtn`).addEventListener(`click`, convertHours);
  document
    .querySelector(`#minutesBtn`)
    .addEventListener(`click`, convertMinutes);
  document
    .querySelector(`#secondsBtn`)
    .addEventListener(`click`, convertSeconds);

  function convertDays(e) {
    const value = Number(days.value);
    //извиква конвертираща функция
    const convertedValues = convert(value, `days`);
    display(convertedValues);
  }
  function convertHours(e) {
    const value = Number(hours.value);
    //извиква конвертираща функция
    const convertedValues = convert(value, `hours`);
    display(convertedValues);
  }
  function convertMinutes(e) {
    const value = Number(minutes.value);
    //извиква конвертираща функция
    const convertedValues = convert(value, `minutes`);
    display(convertedValues);
  }
  function convertSeconds(e) {
    const value = Number(seconds.value);
    //извиква конвертираща функция
    const convertedValues = convert(value, `seconds`);
    display(convertedValues);
  }
  function display(values) {
    days.value = values.days;
    hours.value = values.hours;
    minutes.value = values.minutes;
    seconds.value = values.seconds;
  }
}
