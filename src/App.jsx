import Search from "./Components/Search/Search";
import './app.scss'
import CurrWeather from "./Components/CurrWeather/CurrWeather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import { useEffect, useState } from "react";
import Forcast from "./Components/Forcast/Forcast";
import Loader from "./Components/Loader/Loader";
function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forcast, setForcast] = useState(null)
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forcastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forcastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forcastResponse = await response[1].json()

        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setForcast({ city: searchData.label, ...forcastResponse })
      }).catch((err) => console.log(err))
  }
  const [isLoader, setIsLoader] = useState(false)
  useEffect(() => {
    setIsLoader(true)
    setTimeout(() => {
      setIsLoader(false)
    }, 2000);
  }, [])
  return (
    <div className={isLoader?'':'Container'}>
      {isLoader ? (<Loader />) : (
        <>
          <div className="head">
            <img src="/icons/css-animated-weather-icons.gif" alt="" />
          </div>
          <Search onSearchChange={handleOnSearchChange} />
          {currentWeather && <CurrWeather data={currentWeather} />}
          {forcast && <Forcast data={forcast} />}
        </>
      )}
    </div>
  );
}

export default App;