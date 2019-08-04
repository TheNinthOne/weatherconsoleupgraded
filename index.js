const axios = require("axios");
const argv = require("yargs").argv;

const apiKey = "7d0326c823085ee71f5249d462f23b5b";
const city = argv.c || "Portland";

const getWeatherData = async () => {
  //koriscenje awaita - malo je glupo jer je console app ali htela sam da odradim oba
  let res;
  try {
    res = await axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    );
    const weather = res.data;
    const { name } = weather; //object destructuning
    const { temp } = weather.main;

    return { name, temp };
  } catch (e) {
    console.log(e);
  }
};

(async () => {
  const data = await getWeatherData();
  const { name, temp } = data;
  console.log(`Temperature in ${name} is ${temp} degrees Farenheit`);
})();
