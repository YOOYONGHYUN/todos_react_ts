import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowWeather from "./ShowWeather";
import "./Weather.css";

export default function Weather(): JSX.Element {
  interface weatherType {
    id: number;
    main: string;
    description: string;
    icon: string;
  }

  const api = "bc8f3c4209b8ff16a996447832ab79f5";
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLogitude] = useState(0);
  const [weather, setWeather] = useState<weatherType>({
    id: 0,
    main: "",
    description: "",
    icon: "",
  });
  const [city, setCity] = useState<string>("");

  //내 위치 정보 가져오기
  // function success(pos: GeolocationPosition) {
  //   setLatitude(pos.coords.latitude);
  //   setLogitude(pos.coords.longitude);
  // }

  // function error(err: GeolocationPositionError) {
  //   console.log(err);
  // }

  // navigator.geolocation.getCurrentPosition(success, error);

  // 위치 정보에 기반하여 현재 날씨 가져오기
  useEffect(() => {
    //내 위치 정보 가져오기
    function success(pos: GeolocationPosition) {
      setLatitude(pos.coords.latitude);
      setLogitude(pos.coords.longitude);
    }

    function error(err: GeolocationPositionError) {
      console.log(err);
    }

    navigator.geolocation.getCurrentPosition(success, error);

    console.log(longitude, latitude);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api}&lang=kr`;

    async function getWeather() {
      try {
        const response = await axios.get(url);
        console.log(response);
        setWeather(response.data.weather[0]);
        setCity(response.data.name);
      } catch (err) {
        console.log(err);
      }
    }

    getWeather();
  }, [latitude]);

  let iconIdx = weather.icon.substr(0, 2);

  return (
    <div className="weather-container">
      <div className="weather-context">{city}'s weather</div>
      <div className="weather-icon-box">
        <div>{weather.main}</div>
        <ShowWeather iconIdx={iconIdx} />
      </div>
    </div>
  );
}
