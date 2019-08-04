#Updated weather console application <br>
Here is the modified version of a weather console application using async/await <br>
I know it's simpler than the web application but this was easier for me to do and understand as I studied <br>
With it you can check the current temperature in any city 

##Available Scripts

In the project directory, you can run:
### `node index.js`
Returns const value (currect temperature in Portland in the terminal) <br>
You can get the temperature for any other city by adding -c CityName <br>
##Example: <br>
###`node index.js -c Belgrade`

In case you don't want to check the whole thing here is the most important code: <br>
##code <br>
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
