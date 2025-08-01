import fs from "fs";
const getWeatherData = async (place) => {
  let placeurl = `https://geocoding-api.open-meteo.com/v1/search?name=${place}&count=1`;
  const placeresponse = await fetch(placeurl).then((res) => res.json());
  const parts = [placeresponse.results[0].name];

  // Collect and sort adminN keys in descending order (admin3 → admin2 → admin1)
  Object.keys(placeresponse.results[0])
    .filter((key) => /^admin\d+$/.test(key))
    .sort(
      (a, b) =>
        parseInt(b.replace("admin", "")) - parseInt(a.replace("admin", ""))
    )
    .forEach((key) => {
      if (placeresponse.results[0][key]) parts.push(placeresponse.results[0][key]);
    });

  // Add country
  if (placeresponse.results[0].country) parts.push(placeresponse.results[0].country);

  // Final string
  const locationString = parts.join(", ");
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${
    placeresponse.results[0].latitude
  }&longitude=${placeresponse.results[0].longitude}
&current=temperature_2m,relative_humidity_2m,pressure_msl,wind_speed_10m
&hourly=temperature_2m,relative_humidity_2m,pressure_msl,wind_speed_10m
&daily=sunrise,sunset
&timezone=auto
&start_date=${new Date().toISOString().split("T")[0]}
&end_date=${new Date().toISOString().split("T")[0]}
`;
  const weatherresponse = await fetch(url).then((res) => res.json());
  return {locationString: locationString, ...weatherresponse};
};
export default getWeatherData;
