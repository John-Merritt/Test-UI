export async function getWeatherForecast() {
  const res = await fetch('/api/WeatherForecast')
  if (!res.ok) throw new Error('Failed to fetch weather data')
  return res.json()
}