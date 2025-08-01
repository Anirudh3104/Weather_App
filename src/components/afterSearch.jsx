import React from "react";
import { LuGauge } from "react-icons/lu";

import { CiTempHigh } from "react-icons/ci";
// <CiTempHigh />
import { WiHumidity } from "react-icons/wi";
// <WiHumidity />
import { LuWind } from "react-icons/lu";
// <LuWind />
import { WiSunrise } from "react-icons/wi";
// <WiSunrise />
import { BsSunset } from "react-icons/bs";
// <BsSunset />
const WeatherCard = ({ icon, title, value, bgColor }) => {
  return (
    <div className={`p-4 rounded-2xl shadow-md ${bgColor} text-gray-800`}>
      <div className="flex items-center gap-3 mb-2">
        <div className="text-3xl">{icon}</div>
        <div className="text-sm">{title}</div>
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
};
const HourlyCard = ({ time, temp, humidity, pressure, wind }) => (
  <div className="min-w-[180px] bg-white rounded-xl p-4 shadow space-y-2">
    <p className="text-center font-bold">{time}</p>

    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-1 text-gray-600">
        <CiTempHigh className="text-lg" /> Temp
      </div>
      <span>{temp}°C</span>
    </div>

    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-1 text-gray-600">
        <WiHumidity className="text-lg" /> Humidity
      </div>
      <span>{humidity}%</span>
    </div>

    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-1 text-gray-600">
        <LuGauge className="text-base" /> Pressure
      </div>
      <span>{pressure} hPa</span>
    </div>

    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-1 text-gray-600">
        <LuWind className="text-base" /> Wind
      </div>
      <span>{wind} m/s</span>
    </div>
  </div>
);

const HourlyScrollRow = ({hourlyData}) => {


  return (
    <>
    <div className="overflow-hidden">
      <h1 className="font-bold text-lg text-gray-800 mb-2 px-4">Hourly forecast</h1>
      <div className="overflow-x-auto snap-x snap-mandatory ">
        <div className="flex gap-4 pl-0 pr-4 py-2">
          {hourlyData.map((data, idx) => (
            <div key={idx} className="snap-start">
              <HourlyCard {...data} />
            </div>
          ))}
        </div>
      </div>

    </div>
    </>
  );
};

const AfterSearch = ({data} ) => {
const hourly = data.hourly;
const hourlyData = [];

for (let i = 0; i < hourly.time.length; i++) {
  const dateObj = new Date(hourly.time[i]);
  
  // Format time to hh:mm AM/PM
  const options = { hour: 'numeric', minute: '2-digit', hour12: true };
  const formattedTime = dateObj.toLocaleTimeString('en-US', options);

  hourlyData.push({
    time: formattedTime,
    temp: hourly.temperature_2m[i],
    humidity: hourly.relative_humidity_2m[i],
    pressure: hourly.pressure_msl[i],
    wind: hourly.wind_speed_10m[i]
  });
}




  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{data.locationString}</h1>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <WeatherCard
          icon={<CiTempHigh />}
          title="Temperature"
          value={data.current.temperature_2m}
          bgColor="bg-orange-100"
        />
        <WeatherCard
          icon={<WiHumidity />}
          title="Humidity"
          value={data.current.relative_humidity_2m}
          bgColor="bg-blue-100"
        />
        <WeatherCard
          icon={<LuWind />}
          title="Wind Speed"
          value={data.current.wind_speed_10m}
          bgColor="bg-green-100"
        />
        <WeatherCard
          icon={<LuGauge />}
          title="Pressure"
          value={data.current.pressure_msl}
          bgColor="bg-purple-100"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 p-4">
        <WeatherCard
          icon={<WiSunrise />}
          title="Sunrise"
          value={data.daily.sunrise[0].split('T')[1]}
          bgColor="bg-yellow-100"
        />
        <WeatherCard
          icon={<BsSunset />}
          title="Sunset"
          value={data.daily.sunset[0].split('T')[1]}
          bgColor="bg-red-100"
        />
      </div>
      <div className="p-4 rounded-xl bg-gray-200 p-2 m-6">
        <HourlyScrollRow hourlyData={hourlyData} />
      </div>
    </>
  );
};
export default AfterSearch;
