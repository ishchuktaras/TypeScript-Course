const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number): number => {
  return a - b;
};

function divide (a: number, b: number): number {
  return a / b;
};

const multiplay = function (a: number, b: number): number {
  return a * b;
};

const todayWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log (date);
  console.log (weather);
}

logWeather (todayWeather);

